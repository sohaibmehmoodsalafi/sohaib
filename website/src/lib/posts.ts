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
  {
    slug: "google-ads-islamic-ngo-donations",
    title: "Google Ads for Islamic NGOs: How to Turn Searches into Donations",
    description:
      "How Islamic charities and NGOs can use Google Ads — including the Google Ad Grant — to reach donors, drive Zakat and Sadaqah giving, and lower cost per donation.",
    date: "2026-08-22",
    readMins: 6,
    excerpt:
      "People are already searching to give Zakat and Sadaqah online. Here's how Islamic NGOs use Google Ads to be there at that exact moment — and turn intent into donations.",
    tags: ["Islamic NGO", "Google Ads", "Fundraising"],
    body: [
      { p: "Every day, thousands of Muslims search Google for ways to give — \"pay Zakat online\", \"Sadaqah for orphans\", \"donate to Gaza\". If your NGO isn't showing up for those searches, someone else's is. Google Ads puts your cause in front of people at the exact moment they've decided to give." },
      { h2: "Start with the Google Ad Grant (up to $10,000/month free)" },
      { p: "Registered non-profits can apply for the **Google Ad Grant** — up to $10,000 per month in free search ads. It has rules (a 5% minimum click-through rate, real conversion tracking, no single-word keywords), but for many Islamic NGOs it's the single biggest free growth lever available." },
      { h2: "Target donor intent, not just awareness" },
      { p: "Focus your keywords on people ready to act:" },
      { ul: [
        "\"donate zakat online\", \"give sadaqah\", \"orphan sponsorship\"",
        "Cause-specific terms: \"water well charity\", \"masjid donation\", \"Ramadan appeal\"",
        "Your organisation's name (cheap, high-converting brand searches)",
      ] },
      { p: "Send every click to a **dedicated donation page** — never the homepage. One cause, one story, one donate button." },
      { h2: "Make the donation page convert" },
      { ul: [
        "A clear impact statement (\"£30 feeds a family for a month\")",
        "Preset donation amounts + one-off and monthly options",
        "Trust signals: registration number, Shariah compliance, real photos",
        "A fast, mobile-first checkout — most donors are on phones",
      ] },
      { h2: "Track cost per donation, then scale" },
      { p: "Set up conversion tracking so you know your **cost per donation** and average gift size. Then move budget toward the keywords and appeals that bring the most giving. This is the same optimization loop I run for clients — more detail on my [services page](/services)." },
      { p: "If you'd like a second pair of eyes on your setup, [get a free audit](/free-audit) and I'll show you where donations are leaking and what to fix first." },
    ],
    faqs: [
      { q: "Can any Islamic NGO get the Google Ad Grant?", a: "Most registered non-profits qualify, but you must hold valid charity status, agree to Google's policies, and set up conversion tracking. Once approved you get up to $10,000/month in free search ads — it's well worth the application." },
      { q: "Is Google Ads or Meta Ads better for donations?", a: "They do different jobs. Google captures people already searching to donate (high intent). Meta is better for storytelling and reaching new donors who weren't actively searching. Most NGOs benefit from both, but Google — especially via the Ad Grant — is the best place to start." },
      { q: "How do I lower my cost per donation?", a: "Send ads to a focused donation page (not the homepage), use clear impact-based amounts, add trust signals, and track conversions so you can cut weak keywords and scale the ones that actually bring gifts." },
    ],
  },
  {
    slug: "ramadan-fundraising-campaign-guide",
    title: "How to Run a Ramadan Fundraising Campaign That Actually Works",
    description:
      "A step-by-step Ramadan fundraising plan for Islamic organizations: when to start, how to structure Laylatul Qadr giving, ad strategy, and follow-up that maximizes donations.",
    date: "2026-08-30",
    readMins: 7,
    excerpt:
      "Most of the year's giving happens in Ramadan — and most of that in the last 10 nights. Here's how to plan a campaign that makes the most of it, without scrambling.",
    tags: ["Ramadan", "Fundraising", "Islamic NGO"],
    body: [
      { p: "For most Islamic organizations, Ramadan is the single most important month of the year — a huge share of annual donations comes in these 30 days, and a large part of that on the **last 10 nights**. A little planning turns that surge into real, trackable growth." },
      { h2: "Start before Ramadan, not during it" },
      { p: "The biggest mistake is launching on the first fast. Begin **2–3 weeks early**: warm up your audience, build your donor list, and get your pages and ads approved. When Ramadan starts, you want to be scaling — not setting up." },
      { h2: "Structure the month in three phases" },
      { h3: "Phase 1 — Pre-Ramadan warm-up" },
      { p: "Run awareness and email/WhatsApp sign-up campaigns. Tell the story of your cause. Retarget everyone who engages later in the month." },
      { h3: "Phase 2 — First 20 days" },
      { p: "Steady daily giving. Share updates, testimonials, and specific impact (\"today your donations fed 200 families\")." },
      { h3: "Phase 3 — Last 10 nights" },
      { p: "This is where most giving happens. Push **Laylatul Qadr** appeals hard, enable recurring 'give every night' options, and increase ad budget. Don't be shy here — people are actively looking to give." },
      { h2: "Make giving effortless" },
      { ul: [
        "One-tap preset amounts and a 'split across the last 10 nights' option",
        "Clear impact per amount, with Shariah-compliance and Zakat-eligibility noted",
        "Mobile-first checkout and Apple/Google Pay",
        "WhatsApp receipts and thank-you messages",
      ] },
      { h2: "Follow up — and keep donors after Eid" },
      { p: "Send impact reports after Ramadan. A donor who sees where their money went gives again next year. This turns a one-month spike into a year-round relationship." },
      { p: "Want a done-for-you Ramadan campaign — ads, pages, and follow-up handled end to end? See [how I help Islamic organizations](/services) or [book a free audit](/free-audit) before the season starts." },
    ],
    faqs: [
      { q: "When should we start our Ramadan campaign?", a: "Begin 2–3 weeks before Ramadan. Use that time to warm up your audience, grow your email/WhatsApp list, and get pages and ads approved — so you can scale from day one instead of scrambling." },
      { q: "How important are the last 10 nights?", a: "Very. A large share of Ramadan giving — often the majority — happens in the last 10 nights around Laylatul Qadr. Plan your biggest push, budget, and recurring-giving options for this window." },
      { q: "How do we keep donors after Ramadan?", a: "Send impact reports showing exactly where the money went, thank donors personally, and invite them into a monthly giving programme. Donors who feel the impact are far more likely to give again." },
    ],
  },
  {
    slug: "landing-page-checklist-quran-academy",
    title: "The Landing Page Checklist Every Online Quran Academy Needs",
    description:
      "Your ads can be perfect and still fail if the landing page is weak. This checklist covers every element an online Quran academy needs to turn clicks into trial bookings.",
    date: "2026-09-06",
    readMins: 5,
    excerpt:
      "Ads get the click — the landing page gets the student. Here's the exact checklist that turns paid traffic into booked trial classes for online Quran academies.",
    tags: ["Landing Pages", "Quran Academy", "Conversion"],
    body: [
      { p: "You can run brilliant ads and still get almost no students — if they land on a weak page. The landing page is where the decision happens. Here's what a high-converting page for an online Quran academy needs." },
      { h2: "One page, one goal" },
      { p: "The only job of this page is to get a **free trial class booked**. Remove your full navigation menu, other offers, and distractions. Every element should point to that single action." },
      { h2: "An outcome-focused headline" },
      { p: "Don't lead with \"Welcome to our academy\". Lead with what the parent wants: \"Help your child read the Quran fluently — with a qualified teacher, from home.\" Name the outcome and the transformation." },
      { h2: "The must-have sections" },
      { ul: [
        "A short form above the fold: **name + WhatsApp** only (fewer fields = more bookings)",
        "A clear free-trial offer with no risk",
        "2–3 real parent testimonials with names",
        "Teacher credentials, ijazah, and a real photo or short video",
        "How it works in 3 simple steps",
        "A short FAQ that removes hesitation (timings, fees, devices)",
      ] },
      { h2: "Speed and mobile come first" },
      { p: "Most parents open your page on a phone. If it loads slowly or looks broken on mobile, they leave. Aim for a load time under ~3 seconds and test on a real phone." },
      { h2: "Repeat the call to action" },
      { p: "Add the \"Book a free trial\" button after every major section. A visitor should never have to scroll to find the next step." },
      { p: "This page, paired with the right ads and fast follow-up, is what fills an academy. I build these as part of my [marketing services](/services) — or [get a free audit](/free-audit) and I'll review your current page for conversion leaks." },
    ],
    faqs: [
      { q: "Should I send ads to my homepage or a landing page?", a: "Always a dedicated landing page. Homepages have too many links and no single goal. A focused landing page built around booking a free trial class converts far more of your paid traffic into students." },
      { q: "How many form fields should the trial form have?", a: "As few as possible — ideally just name and WhatsApp number. Every extra field lowers your conversion rate. You can gather more details during the follow-up conversation." },
      { q: "Do I need testimonials if my academy is new?", a: "Even one or two genuine parent testimonials help enormously. If you're brand new, use a strong free-trial offer, clear teacher credentials, and a money-back or no-obligation promise to build trust." },
    ],
  },
  {
    slug: "get-quran-students-usa-uk-canada",
    title: "How to Get Quran Students from the USA, UK & Canada",
    description:
      "A practical guide to reaching Muslim parents in the USA, UK, and Canada for your online Quran academy — targeting, budget, messaging, and timezone-friendly follow-up.",
    date: "2026-09-13",
    readMins: 6,
    excerpt:
      "Western markets are where online Quran academies grow fastest — if you target them right. Here's how to reach parents in the USA, UK, and Canada without burning budget.",
    tags: ["Quran Academy", "International", "Meta Ads"],
    body: [
      { p: "Muslim parents in the USA, UK, and Canada actively look for online Quran teachers for their children — and they can pay a healthy monthly fee. But these markets are more competitive and expensive than local ones, so your approach has to be sharper." },
      { h2: "Expect higher ad costs — and plan for them" },
      { p: "Ad costs in Western countries are much higher than in Pakistan or India. That's normal — the student value is higher too. Set a realistic budget, and judge success by **cost per trial booking and enrolled student value**, not by cheap clicks." },
      { h2: "Target the right parents precisely" },
      { ul: [
        "Countries: USA, UK, Canada (and Australia) — run them separately so you can compare",
        "Language: English-speaking Muslim parents",
        "Interests and behaviours around Islam, parenting, and children's education",
        "Retarget everyone who visits your page but doesn't book",
      ] },
      { h2: "Speak to Western Muslim parents' real concerns" },
      { p: "Their worries are specific: keeping their child connected to the deen in a non-Muslim environment, screen time, safety, and finding a qualified, trustworthy teacher. Address these directly in your ads and page — it builds instant trust." },
      { h3: "Show, don't just tell" },
      { p: "A short video of a real teacher and a happy student does more than any list of features. Authenticity wins this audience." },
      { h2: "Respect the timezone in your follow-up" },
      { p: "A parent in New York or London who books a trial expects a reply — but at a reasonable hour for them. Set expectations (\"we'll message you within your daytime hours\") and follow up on WhatsApp promptly within their timezone. Fast, considerate follow-up closes the enrollment." },
      { p: "I help Quran academies reach and enroll international students end to end — see [my services](/services), or [get a free audit](/free-audit) and I'll show you how to break into the USA, UK, and Canada." },
    ],
    faqs: [
      { q: "How much does it cost to get a student from the USA or UK?", a: "It's higher than local markets because ad costs there are higher — but so is the monthly fee a student pays. Focus on your cost per enrolled student versus their lifetime value, not on cheap clicks. With a good page and follow-up, the numbers usually work out very well." },
      { q: "Do I need a separate campaign for each country?", a: "Yes — run the USA, UK, and Canada as separate campaigns or ad sets. Costs and messaging differ by country, and separating them lets you see what works where and put budget behind the best performers." },
      { q: "How do I handle the timezone difference for follow-up?", a: "Set expectations on your page (\"we'll reply within your daytime hours\") and follow up on WhatsApp promptly during the parent's local daytime. Considerate, timely follow-up is often what turns an international trial booking into an enrolled student." },
    ],
  },
  {
    slug: "whatsapp-follow-up-quran-academy-leads",
    title: "How to Follow Up Quran Academy Leads on WhatsApp (and Enroll More Students)",
    description:
      "Most Quran academies lose students in the gap between a booking and the first reply. Here's a simple WhatsApp follow-up system — with message templates — that turns trial bookings into enrolled students.",
    date: "2026-09-20",
    readMins: 6,
    excerpt:
      "A booking is not a student. The academies that win are the ones that follow up fast and kindly on WhatsApp. Here's the exact system — with ready-to-use message templates.",
    tags: ["WhatsApp", "Quran Academy", "Lead Follow-up"],
    body: [
      { p: "You can run perfect ads and get plenty of trial-class bookings — and still enroll almost no one. Why? Because a booking is not a student. The real work happens in the **follow-up**, and for Quran academies that follow-up lives on WhatsApp. Here's a simple system that consistently turns inquiries into enrolled students." },
      { h2: "Speed wins: reply within the first hour" },
      { p: "The single biggest factor is **how fast you reply**. A parent who fills your form is interested *right now*. Wait a day and that interest cools; a competitor may reach them first. Aim to send your first WhatsApp message **within 60 minutes** of every booking — even a short one." },
      { h2: "A simple 4-touch follow-up sequence" },
      { p: "Don't rely on a single message. Most enrollments happen after **2–4 gentle touches**. Here's a sequence that respects the parent without pestering them:" },
      { ul: [
        "**Touch 1 (within 1 hour):** Greet, confirm the trial, and offer a time",
        "**Touch 2 (next day, if no reply):** A friendly reminder + one benefit",
        "**Touch 3 (day 3):** Answer a likely concern (timings, fees, teacher)",
        "**Touch 4 (day 7):** A final soft check-in, then leave the door open",
      ] },
      { h3: "Message templates you can adapt" },
      { p: "Keep them warm, personal, and short. Examples:" },
      { ul: [
        "**Touch 1:** \"Assalamu alaikum [Name]! Thank you for booking a free trial class for your child. When suits you best — after Maghrib or on the weekend? I'll arrange a qualified teacher, in shaa Allah.\"",
        "**Touch 2:** \"Assalamu alaikum [Name], just following up on your child's free trial. Many parents start with 2 classes a week — shall I set up a time this week?\"",
        "**Touch 3:** \"[Name], a quick note — our teachers are qualified with ijazah, and timings are flexible around your child's school. Happy to answer any questions before the trial.\"",
      ] },
      { h2: "Keep it human — this audience values adab" },
      { p: "Always open with salaam, use the parent's name, and keep the tone sincere, not salesy. You're inviting them to something good for their child's deen — let that come through. A respectful, unhurried tone builds the trust that closes the enrollment." },
      { h2: "Use the free WhatsApp Business tools" },
      { p: "The **WhatsApp Business app** (free) makes follow-up far easier:" },
      { ul: [
        "**Labels** — tag each lead as New, Trial Booked, Follow-up, or Enrolled",
        "**Quick replies** — save your templates and send them in two taps",
        "**Greeting & away messages** — auto-reply instantly, even outside hours",
        "**Catalog** — show your programmes and fees cleanly",
      ] },
      { p: "For international parents (USA, UK, Canada), reply during **their** daytime and say so — considerate timing matters as much as speed." },
      { h2: "Track it, so it actually happens" },
      { p: "Follow-up fails when it's left to memory. Use the labels above so no lead is forgotten, and glance at your 'Follow-up' list daily. If you'd rather have this whole pipeline — ads, landing page, **and** the WhatsApp follow-up flow — built for you, that's exactly what I do in my [marketing services](/services)." },
      { p: "Want me to review how your academy currently handles leads? [Get a free audit](/free-audit) and I'll show you where students are slipping through the cracks." },
    ],
    faqs: [
      { q: "How fast should I reply to a new lead on WhatsApp?", a: "As fast as possible — ideally within an hour. Interest is highest right after a parent books, and fast replies dramatically increase the chance they enroll. Even a short 'Assalamu alaikum, thank you for booking — when suits you?' is enough to start." },
      { q: "Should I use WhatsApp automation or reply manually?", a: "Use a hybrid. Automate instant greeting and away messages so no one waits, and save templates as 'quick replies' — but send the actual conversation personally. This audience values a real, respectful human, so keep the personal touch." },
      { q: "What should I do if a parent doesn't reply?", a: "Follow up 2–4 times over about a week, spacing the messages out and adding value each time (answer a concern, mention flexible timings). If they still don't respond, send one warm final message and leave the door open — many come back later." },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const allSlugs = () => POSTS.map((p) => p.slug);
