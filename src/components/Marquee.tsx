const items = [
  "Logo & Branding",
  "Website Design",
  "Facebook Ads",
  "Social Media",
  "Graphic Design",
  "Landing Pages",
  "Instagram Ads",
  "Brand Strategy",
];

export default function Marquee() {
  return (
    <div className="py-4 overflow-hidden" style={{ borderTop: "0.5px solid #1e1e1e", borderBottom: "0.5px solid #1e1e1e" }}>
      <div className="flex marquee-track w-max">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-4 whitespace-nowrap">
            <span className="text-[13px] text-[#555] uppercase tracking-wider">{item}</span>
            <span className="text-[#c8a96e] text-[8px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
