/**
 * Turn a user's image file into a data URL for embedding in site.json,
 * resizing down large photos so uploads stay usable on static hosting.
 */

function readRawDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(typeof r.result === "string" ? r.result : "");
    r.onerror = () => reject(r.error ?? new Error("Could not read file"));
    r.readAsDataURL(file);
  });
}

/** Max longest side — plenty for masonry cards, lighter JSON uploads. */
const MAX_SIDE_PX = 1600;

/**
 * Raster images are resized (if needed); SVG / odd types fall back to raw data URLs.
 */
export async function encodeImageFileForPortfolio(file: File): Promise<string> {
  if (
    typeof createImageBitmap === "undefined" ||
    typeof document === "undefined"
  ) {
    return readRawDataUrl(file);
  }

  if (file.type === "image/svg+xml") {
    return readRawDataUrl(file);
  }

  if (!file.type.startsWith("image/")) {
    return readRawDataUrl(file);
  }

  try {
    const bitmap = await createImageBitmap(file);
    try {
      const iw = bitmap.width;
      const ih = bitmap.height;
      const longest = Math.max(iw, ih);
      const scale = longest <= MAX_SIDE_PX ? 1 : MAX_SIDE_PX / longest;
      const w = Math.max(1, Math.round(iw * scale));
      const h = Math.max(1, Math.round(ih * scale));

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return readRawDataUrl(file);

      ctx.drawImage(bitmap, 0, 0, w, h);

      const usePng = file.type === "image/png";
      return usePng
        ? canvas.toDataURL("image/png")
        : canvas.toDataURL("image/jpeg", 0.82);
    } finally {
      bitmap.close?.();
    }
  } catch {
    return readRawDataUrl(file);
  }
}
