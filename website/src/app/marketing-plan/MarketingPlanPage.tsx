"use client";

import { useState } from "react";

/* ─── data ─── */

const differentiators = [
  "One person handles everything (no handoff gaps)",
  "Full-stack: Design + Development + Ads + Analytics",
  "Proven metrics: 120+ clients, 5.6x ROAS, 12%+ CTR, 48hr turnaround",
  "Affordable pricing: PKR 15,000–65,000/month (vs agency PKR 100,000+)",
  "No long-term contracts — cancel anytime",
];

const avatars = [
  {
    tag: "Primary",
    title: "The Struggling E-Commerce Owner",
    details: [
      { label: "Age", value: "25-40" },
      { label: "Location", value: "Pakistan (Lahore, Karachi, Islamabad)" },
      { label: "Revenue", value: "PKR 100K-500K/month" },
      { label: "Business", value: "Shopify / WooCommerce / Daraz store, 6-18 months old" },
    ],
    situation: "Running ads themselves or hired a cheap freelancer, getting 1-2x ROAS, burning money, can’t figure out why ads aren’t converting.",
    hangout: "Facebook groups, YouTube (Urdu tutorials), Instagram",
  },
  {
    tag: "Secondary",
    title: "The Local Business Owner",
    details: [
      { label: "Age", value: "30-50" },
      { label: "Location", value: "Punjab, Pakistan" },
      { label: "Business", value: "Tuition center, clinic, real estate, restaurant, Quran academy" },
    ],
    situation: "Relies on word-of-mouth, tried boosting posts on Facebook with no results. “I spent PKR 5,000 boosting a post and got zero calls.”",
    hangout: "WhatsApp groups, local Facebook groups, YouTube",
  },
  {
    tag: "Tertiary",
    title: "The Aspiring Digital Marketer",
    details: [
      { label: "Age", value: "18-28" },
      { label: "Location", value: "Pakistan-wide" },
      { label: "Goal", value: "Learn digital marketing as a career skill" },
    ],
    situation: "Student or fresh graduate, wants to break into digital marketing but doesn’t know where to start.",
    hangout: "YouTube, LinkedIn, Instagram reels",
  },
];

const painPointsEcom = [
  "“I’m spending money on ads but not getting sales”",
  "“My ROAS is below 2x — I’m barely breaking even”",
  "“I hired a freelancer and they just boosted posts”",
  "“My ads look unprofessional compared to competitors”",
  "“I don’t know if my Pixel is even working”",
  "“I have a website but no one buys from it”",
  "“I don’t understand the difference between engagement ads and conversion ads”",
];

const painPointsLocal = [
  "“I boosted a post and got likes but no phone calls”",
  "“I don’t know how to get leads from Facebook”",
  "“My competitor is getting students/patients from social media and I’m not”",
  "“I tried hiring someone but they just posted random content”",
  "“I don’t have time to manage social media myself”",
];

const desires = [
  "Consistent, predictable lead flow every month",
  "A professional online presence that builds trust",
  "Someone who actually understands their business and market",
  "Clear ROI — “I spent X and got Y leads/sales”",
  "Not having to manage or understand the technical side",
  "A partner, not just a vendor",
];

const competitors = [
  {
    type: "Cheap Freelancers",
    price: "PKR 5,000–10,000/mo",
    whatTheyDo: "Boost posts, create basic graphics in Canva, no strategy",
    weakness: "No funnel thinking, no tracking, no landing pages, inconsistent results",
    howWeWin: "Full-stack approach, actual conversion tracking, landing page development, proven ROAS numbers",
  },
  {
    type: "Mid-Tier Agencies",
    price: "PKR 50,000–150,000/mo",
    whatTheyDo: "Run ads professionally, have teams, monthly reports",
    weakness: "Account assigned to a junior, communication gaps, slow turnaround, expensive",
    howWeWin: "Price advantage (3-10x cheaper), personal attention, faster turnaround (48hrs), one-person consistency",
  },
  {
    type: "DIY Marketers",
    price: "Free (but costs time)",
    whatTheyDo: "Business owners trying to run ads after watching YouTube tutorials",
    weakness: "Waste months and money learning by trial-and-error",
    howWeWin: "Save them time and money — let them focus on their business while a professional handles growth",
  },
];

const funnelStages = [
  {
    stage: "01",
    name: "Awareness",
    label: "Top of Funnel",
    goal: "Get in front of ideal customers who don’t know you exist yet",
    tactics: [
      { title: "Instagram Reels (3-5/week)", desc: "Short, punchy tips about Meta Ads, e-commerce mistakes, “why your ads aren’t working” content" },
      { title: "Facebook Content (daily)", desc: "Case studies, before/after results, client wins, educational carousels" },
      { title: "YouTube Shorts (2-3/week)", desc: "Repurpose Instagram Reels for YouTube’s algorithm" },
      { title: "LinkedIn Posts (3/week)", desc: "Professional positioning, client stories, marketing insights" },
      { title: "SEO Content", desc: "Blog posts targeting “best Facebook ads expert in Pakistan”, “how to run Meta ads”" },
    ],
    hooks: [
      "Your Facebook Ads aren’t failing — your landing page is",
      "Stop boosting posts. Here’s what to do instead",
      "I spent PKR 1,000 on ads and made PKR 56,000 — here’s how",
    ],
  },
  {
    stage: "02",
    name: "Consideration",
    label: "Middle of Funnel",
    goal: "Build trust and position yourself as the clear choice",
    tactics: [
      { title: "Lead Magnet", desc: "Free “E-Commerce Ad Audit Checklist” or “7 Mistakes Killing Your Facebook Ads” PDF" },
      { title: "Case Study Posts", desc: "Detailed breakdowns: “Client X went from 1.2x ROAS → 5.6x ROAS in 60 days”" },
      { title: "Video Testimonials", desc: "Short clips from real clients (voice-only or WhatsApp screenshots work in Pakistan)" },
      { title: "Free Growth Audit", desc: "15-minute audit of their current ads/website via WhatsApp video call" },
      { title: "Retargeting Ads", desc: "Show testimonials and case studies to website visitors who didn’t contact" },
    ],
  },
  {
    stage: "03",
    name: "Conversion",
    label: "Bottom of Funnel",
    goal: "Turn interested prospects into paying clients",
    tactics: [
      { title: "WhatsApp CTA Everywhere", desc: "Direct line to conversation — already implemented across all pages" },
      { title: "Clear Pricing", desc: "Landing page with transparent pricing: PKR 15,000 / 35,000 / 65,000 tiers" },
      { title: "Urgency Triggers", desc: "“Only taking 3 new clients this month” — genuine capacity limit as solo operator" },
      { title: "Offer Stack", desc: "Free audit → Starter package → Growth package → Full Brand package" },
      { title: "Risk Reversal", desc: "“No long-term contracts. Cancel anytime.” — eliminates objections" },
    ],
  },
  {
    stage: "04",
    name: "Retention",
    label: "Upsell & Loyalty",
    goal: "Keep clients longer and increase lifetime value",
    tactics: [
      { title: "Monthly Reports", desc: "Performance reports included in Growth+ plans — show clear ROI" },
      { title: "WhatsApp Check-ins", desc: "Weekly check-ins with active clients to maintain relationship" },
      { title: "Quarterly Reviews", desc: "Strategy reviews — show ROI and pitch upgrades" },
      { title: "Upsell Path", desc: "Starter → Growth → Full Brand — natural progression as they see results" },
      { title: "Referral Program", desc: "“Refer a business owner, get 1 month 20% off”" },
    ],
  },
];

const platforms = [
  {
    tier: "Primary",
    tierLabel: "Must Use",
    items: [
      { name: "Meta Ads", icon: "📢", why: "#1 platform for lead generation in Pakistan. Your audience lives here.", useFor: "Client acquisition ads, retargeting, lead magnets", time: "40% of ad spend" },
      { name: "Instagram (Organic)", icon: "📸", why: "Best platform for personal brand building in Pakistan’s digital marketing space.", useFor: "Reels, stories, carousels, DM conversations", time: "1 hour/day" },
      { name: "WhatsApp Business", icon: "💬", why: "Pakistan’s #1 communication app. This is where deals close.", useFor: "Lead conversations, client management, follow-ups", time: "Throughout day" },
    ],
  },
  {
    tier: "Secondary",
    tierLabel: "High Impact",
    items: [
      { name: "Facebook (Organic)", icon: "👥", why: "Facebook groups are where Pakistani business owners ask for help.", useFor: "Value posts in groups, page content, community building", time: "30 min/day" },
      { name: "YouTube", icon: "🎬", why: "Long-form authority building + SEO.", useFor: "Tutorials, case studies, educational content", time: "1 video/week" },
    ],
  },
  {
    tier: "Tertiary",
    tierLabel: "Build Over Time",
    items: [
      { name: "LinkedIn", icon: "💼", why: "Professional positioning, higher-ticket client acquisition.", useFor: "Thought leadership, connecting with business owners", time: "15 min/day" },
      { name: "Google SEO", icon: "🔍", why: "Capture intent-based searches (“Facebook ads expert near me”).", useFor: "Blog content, local SEO", time: "1 blog/week" },
    ],
  },
];

const budget = [
  { category: "Meta Ads (Self-Promotion)", amount: "50,000", pct: 36, purpose: "Lead generation ads targeting business owners in Pakistan" },
  { category: "Content Creation Tools", amount: "15,000", pct: 11, purpose: "Canva Pro, stock assets, video editing tools" },
  { category: "Website & Hosting", amount: "5,000", pct: 3, purpose: "Domain, hosting, landing page tools" },
  { category: "WhatsApp Business API", amount: "5,000", pct: 3, purpose: "Broadcast messages, automated responses" },
  { category: "Learning & Upskilling", amount: "10,000", pct: 7, purpose: "Courses, certifications, staying sharp" },
  { category: "Contingency / Testing", amount: "15,000", pct: 11, purpose: "New ad creative tests, platform experiments" },
  { category: "Organic Content (Time)", amount: "40,000", pct: 29, purpose: "Value of 2-3 hours/day creating content" },
];

const sprint = [
  {
    week: "Week 1",
    title: "Foundation",
    days: "Days 1-7",
    tasks: [
      "Audit current website, fix conversion leaks on landing page",
      "Set up Meta Business Suite — Pixel verification, custom events, Conversion API",
      "Create lead magnet PDF (“7 Mistakes Killing Your Facebook Ads”)",
      "Build lead magnet landing page with email capture",
      "Record 5 Instagram Reels (batch content creation)",
      "Set up content calendar for the month",
    ],
  },
  {
    week: "Week 2",
    title: "Content Machine",
    days: "Days 8-14",
    tasks: [
      "Post 1 Reel/day on Instagram (from batch)",
      "Cross-post to Facebook and YouTube Shorts",
      "Write 2 LinkedIn posts (case study format)",
      "Create 3 carousel posts for Instagram/Facebook",
      "Join 5 active Pakistani business/e-commerce Facebook groups",
      "Launch lead magnet ad (PKR 500/day budget)",
      "Engage in Facebook groups (answer questions, add value — NO pitching)",
    ],
  },
  {
    week: "Week 3",
    title: "Paid Amplification",
    days: "Days 15-21",
    tasks: [
      "Launch Client Acquisition Campaign on Meta (2 campaigns)",
      "Campaign 1: Lead magnet download (cold audience — business owners, 25-45)",
      "Campaign 2: Retargeting website visitors with testimonial ad",
      "Budget: PKR 1,500/day across both campaigns",
      "Record 5 more Reels (batch for next week)",
      "Post first YouTube video (“How to set up Facebook Ads in Pakistan”)",
      "Create 2 detailed case study posts",
    ],
  },
  {
    week: "Week 4",
    title: "Optimize & Scale",
    days: "Days 22-30",
    tasks: [
      "Analyze ad performance — kill underperformers, scale winners",
      "Review content engagement — double down on winning formats",
      "Follow up with every lead via WhatsApp (24hr response time)",
      "Close at least 2-3 new clients from the funnel",
      "Create “Month 1 Results” content from campaign data",
      "Plan Month 2 strategy based on what worked",
    ],
  },
];

const targets = [
  { metric: "Qualified Leads from Meta Ads", target: "15-20" },
  { metric: "New Instagram Followers", target: "500+" },
  { metric: "New Paying Clients", target: "2-3" },
  { metric: "Content Impressions", target: "50,000+" },
  { metric: "Viral Reel (10K+ views)", target: "At least 1" },
];

/* ─── helpers ─── */

function SectionLabel({ children }: { children: string }) {
  return <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">{children}</p>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-playfair text-[28px] md:text-[38px] leading-[1.12] text-[#f0ede6] mb-3">{children}</h2>;
}

function Card({ children, gold }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <div className="bg-[#111] rounded-xl p-6" style={{ border: gold ? "0.5px solid #c8a96e33" : "0.5px solid #1e1e1e" }}>
      {children}
    </div>
  );
}

function Badge({ children, color }: { children: string; color?: "gold" | "green" | "red" }) {
  const c = color === "green" ? { text: "#6db88a", bg: "#6db88a", border: "#6db88a" }
    : color === "red" ? { text: "#e85d5d", bg: "#e85d5d", border: "#e85d5d" }
    : { text: "#c8a96e", bg: "#c8a96e", border: "#c8a96e" };
  return (
    <span className="inline-block text-[10px] px-2.5 py-0.5 rounded font-medium"
      style={{ color: c.text, background: `${c.bg}12`, border: `1px solid ${c.border}22` }}>
      {children}
    </span>
  );
}

/* ─── main component ─── */

export default function MarketingPlanPage() {
  const [activeNav, setActiveNav] = useState(0);

  const navItems = [
    "Positioning", "Avatars", "Pain Points", "Competitors",
    "Funnel", "Platforms", "Budget", "30-Day Sprint",
  ];

  const sectionIds = [
    "positioning", "avatars", "pain-points", "competitors",
    "funnel", "platforms", "budget", "sprint",
  ];

  return (
    <main className="bg-[#0a0a0a] text-[#f0ede6] min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm" style={{ borderBottom: "0.5px solid #1e1e1e" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-[14px] text-[#f0ede6] font-medium">Sohaib Mehmood</a>
          <a href="https://wa.me/923363710499" target="_blank" rel="noopener noreferrer"
            className="text-[13px] px-5 py-2 bg-[#c8a96e] text-[#0a0a0a] rounded-md font-medium hover:bg-[#b8974e] transition-colors">
            Get Free Audit
          </a>
        </div>
        {/* Section nav */}
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto scrollbar-hide" style={{ borderTop: "0.5px solid #1a1a1a" }}>
          <div className="flex gap-0 min-w-max">
            {navItems.map((item, i) => (
              <a key={item} href={`#${sectionIds[i]}`}
                onClick={() => setActiveNav(i)}
                className={`px-4 py-3 text-[11px] uppercase tracking-wider transition-colors whitespace-nowrap ${activeNav === i ? "text-[#c8a96e] border-b-2 border-[#c8a96e]" : "text-[#555] hover:text-[#888]"}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
            <span className="text-[11px] text-[#888]">Full Marketing Strategy 2026</span>
          </div>
          <h1 className="font-playfair text-[32px] md:text-[52px] leading-[1.1] mb-5">
            Complete Growth Blueprint for{" "}
            <span className="text-[#c8a96e]">Meet Sohaib</span>
          </h1>
          <p className="text-[15px] text-[#888] leading-[1.8] mb-8 max-w-2xl mx-auto">
            Digital Marketing Agency &bull; Performance Marketing & Growth Systems<br />
            Budget: Under $500/month &bull; Goals: Leads + Sales + Brand Awareness
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { val: "8", label: "Strategy Sections" },
              { val: "4", label: "Funnel Stages" },
              { val: "7", label: "Platforms" },
              { val: "30", label: "Day Sprint" },
            ].map(s => (
              <div key={s.label} className="bg-[#111] rounded-xl p-4 text-center" style={{ border: "0.5px solid #1e1e1e" }}>
                <span className="font-playfair text-[28px] text-[#c8a96e]">{s.val}</span>
                <p className="text-[10px] text-[#666] mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Business Positioning */}
      <section id="positioning" className="py-16 px-6" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Section 01</SectionLabel>
          <SectionTitle>Business Positioning</SectionTitle>
          <p className="text-[14px] text-[#777] leading-[1.8] mb-8 max-w-3xl">
            Sohaib Mehmood operates as a solo full-stack digital marketer &mdash; a one-person growth system that handles Meta Ads, creative design, landing page development, and funnel optimization under one roof.
          </p>

          {/* USP */}
          <Card gold>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#c8a96e] mb-3">Core USP</p>
            <p className="font-playfair text-[22px] md:text-[28px] text-[#f0ede6] leading-snug">
              &ldquo;Your Ads, Creatives & Landing Pages &mdash; One Expert. One System. Real Growth.&rdquo;
            </p>
          </Card>

          <div className="mt-6">
            <Card>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#666] mb-3">Positioning Statement</p>
              <p className="text-[14px] text-[#bbb] leading-[1.8] italic">
                &ldquo;I am the anti-agency. While agencies charge you PKR 100,000+ and hand your account to a junior, I personally handle every pixel of your campaign &mdash; from the creative design to the landing page code to the ad optimization. That&apos;s why my clients average 5.6x ROAS.&rdquo;
              </p>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-[16px] font-medium text-[#f0ede6] mb-4">Key Differentiators</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {differentiators.map((d, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#111] rounded-xl p-4" style={{ border: "0.5px solid #1e1e1e" }}>
                  <span className="text-[#c8a96e] text-[12px] mt-0.5 shrink-0">&#10003;</span>
                  <span className="text-[13px] text-[#999] leading-[1.6]">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ideal Customer Avatars */}
      <section id="avatars" className="py-16 px-6 bg-[#0e0e0e]" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Section 02</SectionLabel>
          <SectionTitle>Ideal Customer Avatar (ICA)</SectionTitle>
          <p className="text-[14px] text-[#777] leading-[1.8] mb-8 max-w-3xl">
            Three distinct customer profiles, each with unique pain points, behaviors, and channels.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {avatars.map((a) => (
              <div key={a.title} className="bg-[#111] rounded-xl p-6 flex flex-col" style={{ border: a.tag === "Primary" ? "1px solid #c8a96e44" : "0.5px solid #1e1e1e" }}>
                {a.tag === "Primary" && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] bg-[#c8a96e] text-[#0a0a0a] px-3 py-0.5 rounded font-semibold uppercase tracking-wider">Primary</span>
                )}
                <Badge color={a.tag === "Primary" ? "gold" : a.tag === "Secondary" ? "green" : undefined}>{a.tag}</Badge>
                <h3 className="text-[16px] font-playfair text-[#f0ede6] mt-3 mb-4">{a.title}</h3>
                <div className="space-y-2 mb-4 flex-1">
                  {a.details.map(d => (
                    <div key={d.label} className="flex gap-2">
                      <span className="text-[11px] text-[#c8a96e] font-medium w-16 shrink-0">{d.label}</span>
                      <span className="text-[12px] text-[#888]">{d.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-3 mb-3" style={{ border: "0.5px solid #1a1a1a" }}>
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">Situation</p>
                  <p className="text-[12px] text-[#999] leading-[1.6]">{a.situation}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#555]">Found on:</span>
                  <span className="text-[11px] text-[#c8a96e]">{a.hangout}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pain Points & Desires */}
      <section id="pain-points" className="py-16 px-6" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Section 03</SectionLabel>
          <SectionTitle>Pain Points & Desires</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-[14px] font-medium text-[#f0ede6] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e85d5d]" />
                E-Commerce Owners
              </h3>
              <div className="space-y-2">
                {painPointsEcom.map((p, i) => (
                  <div key={i} className="bg-[#111] rounded-lg p-3 flex items-start gap-3" style={{ border: "0.5px solid #1e1e1e" }}>
                    <span className="text-[#e85d5d] text-[11px] mt-0.5 shrink-0">{i + 1}</span>
                    <span className="text-[13px] text-[#999] leading-[1.5]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[14px] font-medium text-[#f0ede6] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e85d5d]" />
                Local Business Owners
              </h3>
              <div className="space-y-2">
                {painPointsLocal.map((p, i) => (
                  <div key={i} className="bg-[#111] rounded-lg p-3 flex items-start gap-3" style={{ border: "0.5px solid #1e1e1e" }}>
                    <span className="text-[#e85d5d] text-[11px] mt-0.5 shrink-0">{i + 1}</span>
                    <span className="text-[13px] text-[#999] leading-[1.5]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-[14px] font-medium text-[#f0ede6] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6db88a]" />
            Core Desires
          </h3>
          <div className="grid md:grid-cols-3 gap-3">
            {desires.map((d, i) => (
              <div key={i} className="bg-[#111] rounded-xl p-4 flex items-start gap-3" style={{ border: "0.5px solid #1e1e1e" }}>
                <span className="text-[#6db88a] text-[12px] mt-0.5 shrink-0">&#10003;</span>
                <span className="text-[13px] text-[#999] leading-[1.5]">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Competitor Analysis */}
      <section id="competitors" className="py-16 px-6 bg-[#0e0e0e]" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Section 04</SectionLabel>
          <SectionTitle>Competitor Strategy Analysis</SectionTitle>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {competitors.map(c => (
              <Card key={c.type}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[15px] font-medium text-[#f0ede6]">{c.type}</h3>
                  <span className="text-[11px] text-[#555]">{c.price}</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">What they do</p>
                    <p className="text-[12px] text-[#888] leading-[1.6]">{c.whatTheyDo}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#e85d5d] uppercase tracking-wider mb-1">Weakness</p>
                    <p className="text-[12px] text-[#888] leading-[1.6]">{c.weakness}</p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-lg p-3" style={{ border: "0.5px solid #c8a96e22" }}>
                    <p className="text-[10px] text-[#c8a96e] uppercase tracking-wider mb-1">How we win</p>
                    <p className="text-[12px] text-[#ccc] leading-[1.6]">{c.howWeWin}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card gold>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#c8a96e] mb-3">Counter-Positioning Message</p>
            <p className="text-[15px] text-[#ccc] leading-[1.8] italic">
              &ldquo;Agencies charge you PKR 100,000+ and assign a junior to your account. Freelancers charge PKR 5,000 and just boost your posts. I&apos;m neither. I&apos;m a full-stack growth partner who handles everything &mdash; and I have 120+ clients to prove it works.&rdquo;
            </p>
          </Card>
        </div>
      </section>

      {/* 5. Full Marketing Funnel */}
      <section id="funnel" className="py-16 px-6" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Section 05</SectionLabel>
          <SectionTitle>Full Marketing Funnel</SectionTitle>
          <p className="text-[14px] text-[#777] leading-[1.8] mb-10 max-w-3xl">
            A complete 4-stage funnel from first impression to long-term retention.
          </p>

          <div className="space-y-6">
            {funnelStages.map((stage, si) => (
              <div key={stage.stage} className="relative">
                {si < funnelStages.length - 1 && (
                  <div className="hidden md:block absolute left-[19px] top-[60px] bottom-[-24px] w-[1px] bg-gradient-to-b from-[#c8a96e33] to-transparent" />
                )}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[12px] text-[#c8a96e] font-semibold" style={{ border: "1px solid #c8a96e44", background: "#0a0a0a" }}>
                    {stage.stage}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-[18px] font-playfair text-[#f0ede6]">{stage.name}</h3>
                      <Badge>{stage.label}</Badge>
                    </div>
                    <p className="text-[13px] text-[#777] mb-4">{stage.goal}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                      {stage.tactics.map(t => (
                        <div key={t.title} className="bg-[#111] rounded-lg p-4" style={{ border: "0.5px solid #1e1e1e" }}>
                          <h4 className="text-[13px] font-medium text-[#f0ede6] mb-1">{t.title}</h4>
                          <p className="text-[12px] text-[#777] leading-[1.6]">{t.desc}</p>
                        </div>
                      ))}
                    </div>

                    {stage.hooks && (
                      <div className="bg-[#111] rounded-lg p-4" style={{ border: "0.5px solid #c8a96e22" }}>
                        <p className="text-[10px] text-[#c8a96e] uppercase tracking-wider mb-2">Content Hook Examples</p>
                        <div className="space-y-1.5">
                          {stage.hooks.map(h => (
                            <p key={h} className="text-[12px] text-[#999] flex items-start gap-2">
                              <span className="text-[#c8a96e] shrink-0">&rarr;</span> {h}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Recommended Platforms */}
      <section id="platforms" className="py-16 px-6 bg-[#0e0e0e]" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Section 06</SectionLabel>
          <SectionTitle>Recommended Platforms</SectionTitle>

          <div className="space-y-8">
            {platforms.map(tier => (
              <div key={tier.tier}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-[15px] font-medium text-[#f0ede6]">Tier: {tier.tier}</h3>
                  <Badge color={tier.tier === "Primary" ? "gold" : tier.tier === "Secondary" ? "green" : undefined}>
                    {tier.tierLabel}
                  </Badge>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {tier.items.map(p => (
                    <div key={p.name} className="bg-[#111] rounded-xl p-5" style={{ border: tier.tier === "Primary" ? "0.5px solid #c8a96e33" : "0.5px solid #1e1e1e" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[24px]">{p.icon}</span>
                        <h4 className="text-[15px] font-medium text-[#f0ede6]">{p.name}</h4>
                      </div>
                      <p className="text-[12px] text-[#888] leading-[1.6] mb-3">{p.why}</p>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <span className="text-[10px] text-[#555] w-12 shrink-0 uppercase">Use for</span>
                          <span className="text-[11px] text-[#999]">{p.useFor}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-[10px] text-[#c8a96e] w-12 shrink-0 uppercase">Time</span>
                          <span className="text-[11px] text-[#c8a96e]">{p.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Budget Allocation */}
      <section id="budget" className="py-16 px-6" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Section 07</SectionLabel>
          <SectionTitle>Budget Allocation Plan</SectionTitle>
          <p className="text-[14px] text-[#777] leading-[1.8] mb-8">
            Total Monthly Budget: <span className="text-[#c8a96e] font-medium">Under $500 (≈ PKR 140,000)</span>
          </p>

          {/* Budget bars */}
          <div className="space-y-3 mb-8">
            {budget.map(b => (
              <div key={b.category} className="bg-[#111] rounded-xl p-4" style={{ border: "0.5px solid #1e1e1e" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] text-[#f0ede6] font-medium">{b.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] text-[#c8a96e] font-medium">PKR {b.amount}</span>
                    <span className="text-[11px] text-[#555] w-8 text-right">{b.pct}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden mb-2">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#c8a96e] to-[#e8c84b]" style={{ width: `${b.pct}%` }} />
                </div>
                <p className="text-[11px] text-[#666]">{b.purpose}</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-[#111] rounded-xl p-5 flex items-center justify-between" style={{ border: "1px solid #c8a96e44" }}>
            <span className="text-[16px] font-medium text-[#f0ede6]">Total</span>
            <span className="font-playfair text-[24px] text-[#c8a96e]">PKR 140,000</span>
          </div>

          <div className="mt-6">
            <Card gold>
              <p className="text-[13px] text-[#ccc] leading-[1.8] italic">
                Key Principle: At under $500/month, organic content is your biggest lever. Spend 70% of your TIME on content creation and 30% on paid amplification of what works.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. 30-Day Growth Sprint */}
      <section id="sprint" className="py-16 px-6 bg-[#0e0e0e]" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Section 08</SectionLabel>
          <SectionTitle>30-Day Growth Sprint</SectionTitle>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {sprint.map(w => (
              <div key={w.week} className="bg-[#111] rounded-xl p-6" style={{ border: "0.5px solid #1e1e1e" }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-[16px] font-playfair text-[#f0ede6]">{w.week}</h3>
                    <p className="text-[12px] text-[#c8a96e]">{w.title}</p>
                  </div>
                  <span className="text-[11px] text-[#555] bg-[#0a0a0a] px-3 py-1 rounded" style={{ border: "0.5px solid #1a1a1a" }}>
                    {w.days}
                  </span>
                </div>
                <div className="space-y-2">
                  {w.tasks.map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded border border-[#333] shrink-0 flex items-center justify-center text-[8px] text-[#555]" />
                      <span className="text-[13px] text-[#999] leading-[1.5]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Targets */}
          <h3 className="text-[16px] font-medium text-[#f0ede6] mb-4">30-Day Targets</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
            {targets.map(t => (
              <div key={t.metric} className="bg-[#111] rounded-xl p-4 text-center" style={{ border: "0.5px solid #1e1e1e" }}>
                <span className="font-playfair text-[24px] text-[#c8a96e] block mb-1">{t.target}</span>
                <p className="text-[10px] text-[#666] uppercase tracking-wider">{t.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Card gold>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#c8a96e] mb-4">The Bottom Line</p>
            <p className="font-playfair text-[20px] md:text-[26px] text-[#f0ede6] leading-snug mb-4">
              The #1 priority for Month 1 is <span className="text-[#c8a96e]">PROOF</span>.
            </p>
            <p className="text-[14px] text-[#888] leading-[1.8] mb-6">
              Every client you serve, document the results. Every campaign you run, screenshot the numbers. Every testimonial you get, post it. At your budget level, social proof IS your marketing budget.
            </p>
            <div className="bg-[#0a0a0a] rounded-lg p-4 mb-6" style={{ border: "0.5px solid #c8a96e33" }}>
              <p className="text-[14px] text-[#c8a96e] italic leading-[1.7]">
                &ldquo;A single case study showing PKR 1,000 ad spend &rarr; PKR 56,000 in sales is worth more than PKR 100,000 in ads.&rdquo;
              </p>
            </div>
            <p className="font-playfair text-[18px] text-[#f0ede6] italic">
              Your competitive advantage is that you ARE the product.<br />
              <span className="text-[#c8a96e]">Agencies can&apos;t replicate one-person consistency. Lean into that.</span>
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6" style={{ borderTop: "0.5px solid #1a1a1a" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#444]">Sohaib Mehmood &mdash; Full Marketing Strategy 2026</span>
          <a href="/" className="text-[11px] text-[#444] hover:text-[#f0ede6] transition-colors">Back to Main Site</a>
        </div>
      </footer>
    </main>
  );
}
