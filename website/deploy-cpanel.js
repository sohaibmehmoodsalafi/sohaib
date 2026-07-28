/**
 * Deploy pipeline for cPanel shared hosting
 * 1. Copy out/ → build-out/
 * 2. Rename _next → assets & update all refs
 * 3. Fix tilde (~) in filenames → _t_
 * 4. Inline all CSS <link> into <style> tags (WAF blocks external CSS)
 * 5. Remove all <script> tags (no JS on cPanel)
 * 6. Copy standalone admin.html into build-out
 * 7. Zip everything with forward-slash paths (JSZip)
 */

const fs = require("fs");
const path = require("path");
const JSZip = require("jszip");

const OUT = path.join(__dirname, "out");
const BUILD = path.join(__dirname, "build-out");

// ─── Helpers ───
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const s = path.join(src, item);
    const d = path.join(dest, item);
    if (fs.statSync(s).isDirectory()) copyDirSync(s, d);
    else fs.copyFileSync(s, d);
  }
}

function walkFiles(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) results = results.concat(walkFiles(full));
    else results.push(full);
  }
  return results;
}

function renameRecursive(dir, find, replace) {
  // First rename files within directories, then rename directories bottom-up
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      renameRecursive(full, find, replace);
    }
  }
  // Now rename entries in this directory
  for (const entry of fs.readdirSync(dir)) {
    if (entry.includes(find)) {
      const full = path.join(dir, entry);
      const newName = entry.split(find).join(replace);
      const newFull = path.join(dir, newName);
      fs.renameSync(full, newFull);
      console.log(`  Renamed: ${entry} → ${newName}`);
    }
  }
}

// ─── Step 1: Copy out → build-out ───
console.log("\n[1/7] Copying out/ → build-out/");
if (fs.existsSync(BUILD)) fs.rmSync(BUILD, { recursive: true });
copyDirSync(OUT, BUILD);
console.log("  Done.");

// ─── Step 2: Rename _next → assets ───
console.log("\n[2/7] Renaming _next → assets");
const nextDir = path.join(BUILD, "_next");
const assetsDir = path.join(BUILD, "assets");
if (fs.existsSync(nextDir)) {
  fs.renameSync(nextDir, assetsDir);
  console.log("  _next → assets");
}

// Update all refs in HTML files
const htmlFiles = walkFiles(BUILD).filter(f => f.endsWith(".html"));
for (const f of htmlFiles) {
  let content = fs.readFileSync(f, "utf-8");
  const before = content;
  content = content.replace(/\/_next\//g, "/assets/");
  content = content.replace(/"_next\//g, '"assets/');
  if (content !== before) {
    fs.writeFileSync(f, content, "utf-8");
    console.log(`  Updated refs in: ${path.basename(f)}`);
  }
}

// ─── Step 3: Tilde fix (~) → _t_ ───
console.log("\n[3/7] Fixing tildes in filenames");
// First update refs in HTML/CSS files
const allFiles = walkFiles(BUILD);
for (const f of allFiles) {
  if (f.endsWith(".html") || f.endsWith(".css")) {
    let content = fs.readFileSync(f, "utf-8");
    const before = content;
    // Only fix tildes inside asset filenames (alphanumeric~alphanumeric, e.g. 03~yq9q).
    // Do NOT touch CSS sibling combinators like ".nav-toggle:checked ~ .mobile-menu"
    // (there ~ is followed by a space or selector char like '.', never a word char).
    content = content.replace(/(\w)~(\w)/g, "$1_t_$2");
    if (content !== before) {
      fs.writeFileSync(f, content, "utf-8");
      console.log(`  Fixed ~ refs in: ${path.relative(BUILD, f)}`);
    }
  }
}
// Then rename actual files
renameRecursive(BUILD, "~", "_t_");
console.log("  Done.");

// ─── Step 4: Inline CSS ───
console.log("\n[4/7] Inlining CSS into HTML files");
for (const htmlFile of walkFiles(BUILD).filter(f => f.endsWith(".html"))) {
  let html = fs.readFileSync(htmlFile, "utf-8");
  const linkRegex = /<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*\/?>/gi;
  let match;
  let modified = false;

  while ((match = linkRegex.exec(html)) !== null) {
    let cssPath = match[1];
    // Remove leading slash and resolve
    cssPath = cssPath.replace(/^\//, "");
    const fullCssPath = path.join(BUILD, cssPath);

    if (fs.existsSync(fullCssPath)) {
      const cssContent = fs.readFileSync(fullCssPath, "utf-8");
      const styleTag = `<style>${cssContent}</style>`;
      html = html.replace(match[0], styleTag);
      modified = true;
      console.log(`  Inlined: ${cssPath} into ${path.basename(htmlFile)}`);
    } else {
      console.log(`  WARNING: CSS not found: ${fullCssPath}`);
    }
  }

  // Also handle <link rel="stylesheet" with href before rel
  const linkRegex2 = /<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']stylesheet["'][^>]*\/?>/gi;
  while ((match = linkRegex2.exec(html)) !== null) {
    let cssPath = match[1];
    cssPath = cssPath.replace(/^\//, "");
    const fullCssPath = path.join(BUILD, cssPath);

    if (fs.existsSync(fullCssPath)) {
      const cssContent = fs.readFileSync(fullCssPath, "utf-8");
      const styleTag = `<style>${cssContent}</style>`;
      html = html.replace(match[0], styleTag);
      modified = true;
      console.log(`  Inlined: ${cssPath} into ${path.basename(htmlFile)}`);
    }
  }

  if (modified) {
    fs.writeFileSync(htmlFile, html, "utf-8");
  }
}

// ─── Step 5: Remove all <script> tags (but PRESERVE JSON-LD structured data for SEO) ───
console.log("\n[5/7] Removing <script> tags (keeping JSON-LD schema)");
for (const htmlFile of walkFiles(BUILD).filter(f => f.endsWith(".html"))) {
  let html = fs.readFileSync(htmlFile, "utf-8");
  const before = html;
  // JSON-LD is data, not executable JS — keep it so Google can read structured data / rich results
  const ldBlocks = html.match(/<script[^>]*type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi) || [];
  // Remove all script tags
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<script[^>]*\/>/gi, "");
  // Re-inject the JSON-LD blocks before </head>
  if (ldBlocks.length && html.includes("</head>")) {
    html = html.replace("</head>", ldBlocks.join("") + "</head>");
  }
  if (html !== before) {
    fs.writeFileSync(htmlFile, html, "utf-8");
    console.log(`  Cleaned: ${path.basename(htmlFile)} (kept ${ldBlocks.length} JSON-LD block(s))`);
  }
}

// ─── Step 5.5: Inject Google tag (GA4 + Google Tag ID) AFTER script-stripping so it survives ───
const GA_ID = "G-GCPERZFX6P";   // GA4 Measurement ID
const GT_ID = "GT-W6J5FSQD";    // Google Tag ID (linked to the same tag)
console.log(`\n[5.5] Injecting Google tag (${GA_ID} + ${GT_ID})`);
const gaSnippet =
  `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>` +
  `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
  `gtag('js',new Date());gtag('config','${GA_ID}');gtag('config','${GT_ID}');</script>`;
for (const htmlFile of walkFiles(BUILD).filter(f => f.endsWith(".html"))) {
  // Skip the private admin panel — no need to track its usage
  if (path.basename(htmlFile) === "admin.html") continue;
  let html = fs.readFileSync(htmlFile, "utf-8");
  if (html.includes(GA_ID)) continue; // already injected
  if (html.includes("</head>")) {
    html = html.replace("</head>", gaSnippet + "</head>");
  } else {
    html = gaSnippet + html;
  }
  fs.writeFileSync(htmlFile, html, "utf-8");
  console.log(`  GA injected: ${path.basename(htmlFile)}`);
}

// ─── Step 6: Copy admin.html ───
console.log("\n[6/7] Copying admin.html");
const adminSrc = path.join(BUILD, "admin.html");
if (fs.existsSync(adminSrc)) {
  console.log("  admin.html already in build-out (from Next.js export)");
  // Check if the standalone admin exists and should override
  const standaloneAdmin = path.join(__dirname, "admin-standalone.html");
  if (fs.existsSync(standaloneAdmin)) {
    fs.copyFileSync(standaloneAdmin, adminSrc);
    console.log("  Overridden with standalone admin.html");
  }
} else {
  console.log("  No admin.html found");
}

// ─── Step 7: Create ZIP ───
console.log("\n[7/7] Creating deploy ZIP");
const zip = new JSZip();

function addToZip(dirPath, zipFolder) {
  for (const item of fs.readdirSync(dirPath)) {
    const fullPath = path.join(dirPath, item);
    if (fs.statSync(fullPath).isDirectory()) {
      addToZip(fullPath, zipFolder + item + "/");
    } else {
      const content = fs.readFileSync(fullPath);
      zip.file(zipFolder + item, content);
    }
  }
}

addToZip(BUILD, "");

zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE", compressionOptions: { level: 9 } })
  .then((buf) => {
    const zipPath = path.join(__dirname, "deploy.zip");
    fs.writeFileSync(zipPath, buf);
    const sizeMB = (buf.length / 1024 / 1024).toFixed(2);
    console.log(`\n✅ Deploy ZIP created: deploy.zip (${sizeMB} MB)`);
    console.log(`   Files in ZIP: ${Object.keys(zip.files).length}`);
    console.log("\n   Upload this to cPanel File Manager → public_html → Extract");
  });
