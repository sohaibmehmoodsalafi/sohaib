"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["All", "Websites", "Marketing", "Social Media"] as const;
type Tab = typeof tabs[number];

const websiteProjects = [
  {
    image: "https://meetsohaib.com/portfolio/learn-quran-institute.jpg",
    tag: "Institute · Web Design",
    title: "Learn Quran Institute",
    link: "https://learnquraninstitute.org/",
    category: "Websites" as Tab,
    result: "Admissions increased 3x after launch",
  },
  {
    image: "https://meetsohaib.com/portfolio/veetrends.jpg",
    tag: "E-commerce · Branding",
    title: "VeeTrends Fashion",
    link: "https://veetrends.com/",
    category: "Websites" as Tab,
    result: "Full e-commerce store with 500+ products",
  },
  {
    image: "https://meetsohaib.com/portfolio/skycon-travel.jpg",
    tag: "Travel · Marketing",
    title: "Skycon Travel",
    link: "https://skycontravel.com/",
    category: "Websites" as Tab,
    result: "Online bookings started within first week",
  },
  {
    image: "https://meetsohaib.com/portfolio/luxurious-pk.jpg",
    tag: "Retail · E-commerce",
    title: "Luxurious.pk",
    link: "https://luxurious.pk/",
    category: "Websites" as Tab,
    result: "Brand went from zero to 1000+ orders",
  },
  {
    image: "https://meetsohaib.com/portfolio/hijra-online.jpg",
    tag: "Digital Platform · Design",
    title: "Hijra Online",
    link: "https://hijraonline.com/",
    category: "Websites" as Tab,
    result: "Complete platform design and development",
  },
];

const marketingProjects = [
  {
    category: "Marketing" as Tab,
    client: "E-commerce Brand",
    title: "Facebook Ads — Lead Generation Campaign",
    metrics: [
      { label: "Ad Spend", value: "PKR 50K/mo" },
      { label: "Leads Generated", value: "320+" },
      { label: "Cost Per Lead", value: "PKR 156" },
      { label: "Conversion Rate", value: "8.4%" },
    ],
    desc: "Complete Facebook & Instagram ad campaign — audience research, creative design, A/B testing, and weekly optimization. Leads started coming within 48 hours of launch.",
  },
  {
    category: "Marketing" as Tab,
    client: "Quran Academy",
    title: "Google Ads + Landing Page — Admissions",
    metrics: [
      { label: "Monthly Budget", value: "PKR 30K" },
      { label: "New Students", value: "85+" },
      { label: "Cost Per Student", value: "PKR 352" },
      { label: "Page Conversion", value: "12.6%" },
    ],
    desc: "Landing page designed + Google Ads setup targeting parents looking for online Quran classes. Built trust with testimonials and free trial class offer.",
  },
  {
    category: "Marketing" as Tab,
    client: "Travel Agency",
    title: "Instagram Ads — Tour Bookings",
    metrics: [
      { label: "Campaign Duration", value: "3 Months" },
      { label: "Bookings", value: "140+" },
      { label: "Revenue Generated", value: "PKR 2.8M" },
      { label: "ROAS", value: "5.6x" },
    ],
    desc: "Instagram story ads + carousel ads targeting travel enthusiasts. Creative design, audience targeting, and retargeting funnel brought consistent bookings.",
  },
];

const smmProjects = [
  {
    category: "Social Media" as Tab,
    client: "Restaurant Brand",
    title: "Social Media Management — Complete Package",
    stats: [
      { label: "Posts/Month", value: "30" },
      { label: "Followers Growth", value: "+2.4K/mo" },
      { label: "Engagement Rate", value: "6.8%" },
      { label: "Reach Increase", value: "340%" },
    ],
    services: ["Daily posts & stories", "Urdu + English captions", "Reel editing & trends", "Community management", "Monthly analytics report"],
  },
  {
    category: "Social Media" as Tab,
    client: "Fashion Brand",
    title: "Instagram & Facebook — Growth Strategy",
    stats: [
      { label: "Posts/Month", value: "24" },
      { label: "Followers Growth", value: "+3.1K/mo" },
      { label: "Engagement Rate", value: "7.2%" },
      { label: "Sales from Social", value: "45%" },
    ],
    services: ["Product shoot styling", "Story highlights design", "Influencer coordination", "Hashtag strategy", "Weekly content calendar"],
  },
  {
    category: "Social Media" as Tab,
    client: "Education Institute",
    title: "Social Media — Brand Awareness & Admissions",
    stats: [
      { label: "Posts/Month", value: "20" },
      { label: "Followers Growth", value: "+1.8K/mo" },
      { label: "Parent Inquiries", value: "60+/mo" },
      { label: "Page Reach", value: "50K/mo" },
    ],
    services: ["Student success stories", "Teacher spotlights", "Event coverage", "Parent testimonials", "Admission campaign posts"],
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const showWebsites = activeTab === "All" || activeTab === "Websites";
  const showMarketing = activeTab === "All" || activeTab === "Marketing";
  const showSMM = activeTab === "All" || activeTab === "Social Media";

  return (
    <section id="work" className="py-12 px-6 md:px-8" data-animate>
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">SELECTED WORK</p>
        <h2 className="font-playfair text-[28px] md:text-[32px] leading-snug mb-3">
          Brands I have built and grown.
        </h2>
        <p className="text-[14px] text-[#777] mb-8">
          Real work, real results — not mockups.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-[13px] font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#c8a96e] text-[#0a0a0a]"
                  : "bg-[#111] text-[#777] border border-[#1e1e1e] hover:text-[#f0ede6]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Website Projects */}
        {showWebsites && (
          <div className="mb-8">
            {activeTab !== "All" && (
              <h3 className="text-[12px] uppercase tracking-wider text-[#555] mb-4">Website & Branding Projects</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {websiteProjects.map((p) => (
                <div
                  key={p.title}
                  className="group bg-[#111] rounded-xl overflow-hidden hover:bg-[#141414] transition-colors"
                  style={{ border: "0.5px solid #1e1e1e" }}
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 576px"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block text-[11px] text-[#666] border border-[#2a2a2a] rounded-full px-2.5 py-0.5 mb-2">
                      {p.tag}
                    </span>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[14px] font-medium text-[#e8e6e0]">{p.title}</h3>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#c8a96e] hover:underline shrink-0">
                        Visit →
                      </a>
                    </div>
                    <p className="text-[11px] text-[#6db88a] flex items-center gap-1.5">
                      <span>✓</span> {p.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Marketing Projects */}
        {showMarketing && (
          <div className="mb-8">
            {activeTab !== "All" && (
              <h3 className="text-[12px] uppercase tracking-wider text-[#555] mb-4">Marketing & Ad Campaigns</h3>
            )}
            {activeTab === "All" && (
              <div className="my-6 flex items-center gap-3">
                <div className="flex-1 border-t border-[#1a1a1a]" />
                <span className="text-[10px] uppercase tracking-wider text-[#555]">Marketing Results</span>
                <div className="flex-1 border-t border-[#1a1a1a]" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {marketingProjects.map((p) => (
                <div key={p.title} className="bg-[#111] rounded-xl p-5" style={{ border: "0.5px solid #1e1e1e" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-[#c8a96e] bg-[#c8a96e]/8 border border-[#c8a96e]/15 rounded px-2 py-0.5">📢 Paid Ads</span>
                    <span className="text-[11px] text-[#555]">{p.client}</span>
                  </div>
                  <h3 className="text-[14px] font-medium text-[#f0ede6] mb-3">{p.title}</h3>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="bg-[#0a0a0a] rounded-lg p-2.5" style={{ border: "0.5px solid #1a1a1a" }}>
                        <span className="text-[16px] font-playfair text-[#c8a96e] block">{m.value}</span>
                        <span className="text-[10px] text-[#555]">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[12px] text-[#777] leading-[1.7]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SMM Projects */}
        {showSMM && (
          <div className="mb-4">
            {activeTab !== "All" && (
              <h3 className="text-[12px] uppercase tracking-wider text-[#555] mb-4">Social Media Management</h3>
            )}
            {activeTab === "All" && (
              <div className="my-6 flex items-center gap-3">
                <div className="flex-1 border-t border-[#1a1a1a]" />
                <span className="text-[10px] uppercase tracking-wider text-[#555]">Social Media Management</span>
                <div className="flex-1 border-t border-[#1a1a1a]" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {smmProjects.map((p) => (
                <div key={p.title} className="bg-[#111] rounded-xl p-5" style={{ border: "0.5px solid #1e1e1e" }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-[#6db88a] bg-[#6db88a]/8 border border-[#6db88a]/15 rounded px-2 py-0.5">📱 SMM</span>
                    <span className="text-[11px] text-[#555]">{p.client}</span>
                  </div>
                  <h3 className="text-[14px] font-medium text-[#f0ede6] mb-3">{p.title}</h3>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {p.stats.map((s) => (
                      <div key={s.label} className="bg-[#0a0a0a] rounded-lg p-2.5" style={{ border: "0.5px solid #1a1a1a" }}>
                        <span className="text-[14px] font-medium text-[#f0ede6] block">{s.value}</span>
                        <span className="text-[10px] text-[#555]">{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3" style={{ borderTop: "0.5px solid #1a1a1a" }}>
                    <p className="text-[10px] text-[#555] uppercase tracking-wider mb-2">What was included</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.services.map((s) => (
                        <span key={s} className="text-[10px] text-[#777] bg-[#0a0a0a] border border-[#1a1a1a] rounded px-2 py-0.5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-8 bg-[#111] rounded-xl p-6" style={{ border: "0.5px solid #1e1e1e" }}>
          <p className="text-[14px] text-[#f0ede6] mb-1">Want similar results for your business?</p>
          <p className="text-[13px] text-[#777] mb-4">Let&apos;s discuss your project — free consultation, no commitment.</p>
          <a
            href="https://wa.me/923363710499"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c8a96e] text-[#0a0a0a] text-[14px] font-semibold rounded-md hover:bg-[#b8974e] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.768-6.258-2.066l-.438-.34-2.65.887.887-2.648-.34-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            Discuss My Project →
          </a>
        </div>
      </div>
    </section>
  );
}
