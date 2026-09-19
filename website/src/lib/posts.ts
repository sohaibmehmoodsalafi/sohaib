// ─────────────────────────────────────────────────────────────────────────
//  BLOG CONTENT
//  To publish a new post: copy one object in POSTS, change the fields, done.
//  Body blocks: { p }, { h2 }, { h3 }, { ul }. Inside p/ul text you can use
//  **bold** and [link text](/services) for internal links.
// ─────────────────────────────────────────────────────────────────────────

export type FAQ = { q: string; a: string };

export type Block =
  | { p: string }
  | { h2: string }
  | { h3: string }
  | { ul: string[] };

export type Post = {
  slug: string;          // URL: /blog/<slug>
  title: string;         // <title> + the article H1
  description: string;   // meta description (~150–160 chars)
  date: string;          // "YYYY-MM-DD"
  readMins: number;      // shown on the card
  excerpt: string;       // listing-card summary
  tags: string[];
  body: Block[];
  faqs: FAQ[];
};

export const POSTS: Post[] = [
  {
    slug: "get-more-students-online-quran-academy",
    title: "How to Get More Students for Your Online Quran Academy (Without Wasting Ad Budget)",
    description:
      "A practical guide for Quran academy owners: build a simple system of ads, landing pages, and follow-up that brings a steady flow of new students every month.",
    date: "2026-09-15",
    readMins: 6,
    excerpt:
      "Great teaching isn't enough if the seats stay empty. Here's the simple, repeatable system that fills an online Quran academy with students month after month.",
    tags: ["Quran Academy", "Meta Ads", "Student Enrollment"],
    body: [
      { p: "Most Quran academies don't have a teaching problem — they have a **visibility problem**. The parents who want exactly what you offer never find you, and the few who do land on a page that doesn't convince them to book. This guide walks through the system I use to fix that." },
      { h2: "1. Start with one clear goal, not 'more awareness'" },
      { p: "Before spending a single rupee, decide on **one measurable action**: a booked free trial class. Everything — your ad, your page, your follow-up — should push toward that single step. Vague goals like 'more followers' waste budget and can't be optimized." },
      { h2: "2. Send traffic to a dedicated landing page" },
      { p: "Never point ads at your homepage or a raw WhatsApp link. Build a focused page that does four things:" },
      { ul: [
        "Names the outcome in the headline (e.g. \"Get your child reading Quran fluently\")",
        "Offers a free trial class with a short form (name + WhatsApp)",
        "Shows real parent testimonials and teacher credentials",
        "Loads fast on mobile — most parents are on phones",
      ] },
      { p: "This is the single biggest lever. A good page can lift bookings several times over on the same ad spend. (This is part of what I set up in my [done-for-you services](/services).)" },
      { h2: "3. Run precise, respectful ads" },
      { p: "Target Muslim parents by country, language, and interest — not everyone. Use a short video or a real photo of a teacher and student, never stock imagery. Speak to the parent's hope: raising a faith-rooted, confident child. Keep the message honest; trust is everything with this audience." },
      { h3: "Which platform first?" },
      { p: "For most academies, **Meta (Facebook & Instagram)** is where parents scroll and decide. **Google Ads** captures parents already searching for \"online Quran classes\". Start with Meta, add Google once bookings are steady." },
      { h2: "4. Follow up within the hour" },
      { p: "A booking is not an enrollment. Reply to every inquiry on WhatsApp **within an hour**, confirm the trial time, and send a friendly reminder. Speed of follow-up often matters more than the ad itself." },
      { h2: "5. Measure, then scale what works" },
      { p: "Track your **cost per trial booking**. Each week, turn off the ads that aren't converting and put more budget into the ones that are. Predictable growth comes from this steady loop — not from one 'viral' post." },
      { p: "That's the whole system: one goal, a strong page, precise ads, fast follow-up, and weekly optimization. If you'd rather have it built and run for you, [grab a free growth audit](/free-audit) and I'll show you exactly what to fix first." },
    ],
    faqs: [
      { q: "How much should a Quran academy spend on ads to start?", a: "You can start small and scale. What matters more than the number is having a dedicated landing page and fast WhatsApp follow-up — without those, even a big budget leaks. Begin with a modest daily budget, measure cost per trial booking, then increase spend on what works." },
      { q: "How long until I see new students?", a: "Most academies get their first qualified trial bookings within the first few days of launching. Real, predictable monthly flow usually settles in around day 30–60 as the ads, page, and targeting are optimized on real data." },
      { q: "Do I need a website first?", a: "You don't need a full website — you need one focused landing page built to get trial-class bookings. That single page, paired with the right ads and follow-up, is enough to start enrolling students." },
    ],
  },
  {
    slug: "meta-ads-mistakes-quran-academies",
    title: "5 Meta Ads Mistakes Quran Academies Make (and How to Fix Them)",
    description:
      "Boosting posts, no landing page, weak follow-up — the five most common Meta Ads mistakes Quran academies make, and the simple fixes that turn ad spend into enrollments.",
    date: "2026-09-18",
    readMins: 5,
    excerpt:
      "If your Facebook and Instagram ads aren't bringing students, it's usually one of these five fixable mistakes. Here's how to spot and fix each one.",
    tags: ["Meta Ads", "Quran Academy", "Facebook Ads"],
    body: [
      { p: "Meta Ads work extremely well for online Quran academies — when they're set up right. Here are the five mistakes I see most often, and the fix for each." },
      { h2: "Mistake 1: Boosting posts instead of running real campaigns" },
      { p: "The blue \"Boost\" button optimizes for likes, not enrollments. Use the proper Ads Manager with a **conversion or lead objective** so Meta finds parents likely to book — not just scroll and tap 'like'." },
      { h2: "Mistake 2: Sending ads to your homepage" },
      { p: "A homepage has too many distractions. Ads should go to **one focused landing page** with a single goal: book a free trial class. This alone often multiplies bookings." },
      { h2: "Mistake 3: Using stock photos" },
      { p: "Parents can tell. A real photo or short video of an actual teacher and student builds instant trust and consistently outperforms polished stock imagery." },
      { h2: "Mistake 4: Talking about features, not the child" },
      { p: "\"Qualified teachers, flexible timing\" is forgettable. Speak to the parent's hope — a child who reads Quran fluently and grows up faith-rooted. Emotion, kept honest, is what makes a parent stop and act." },
      { h2: "Mistake 5: No follow-up system" },
      { p: "Most bookings are lost in the gap between the form and the first message. Reply on WhatsApp **within an hour**, confirm the trial, and remind them the day before. Fast, warm follow-up turns clicks into students." },
      { h3: "Fixing all five at once" },
      { p: "These fixes compound — a real creative sending traffic to a strong page with fast follow-up can transform your results on the same budget. I handle all of this end to end in my [marketing services](/services), or you can [get a free audit](/free-audit) and I'll point out which mistake is costing you the most." },
    ],
    faqs: [
      { q: "Is boosting posts ever okay?", a: "For occasional visibility, sure — but not for getting students. Boosting optimizes for engagement, not enrollments. For actual bookings, run campaigns in Ads Manager with a lead or conversion objective and send traffic to a dedicated landing page." },
      { q: "What kind of ad creative works best for Quran academies?", a: "Authentic, human creative: a short video or real photo of a teacher and a student, with copy that speaks to the parent's hope for their child. Avoid stock photos and generic feature lists." },
      { q: "How do I know if my ads are actually working?", a: "Track cost per trial booking, not likes or reach. If you know how much a booked (and then enrolled) student costs you, you can confidently scale the ads that work and cut the ones that don't." },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const allSlugs = () => POSTS.map((p) => p.slug);
