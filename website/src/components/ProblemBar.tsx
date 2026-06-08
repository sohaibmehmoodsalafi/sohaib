export default function ProblemBar() {
  return (
    <section className="py-8 px-6 md:px-8" data-animate>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-4">THE REAL PROBLEM</p>

        <h2 className="font-bebas text-[24px] md:text-[30px] leading-snug text-[#f0ede6] mb-4">
          You are hiring 3 different people.
          <br />
          And none of them talk to each other.
        </h2>

        <p className="text-[14px] text-[#777] mb-8 max-w-xl mx-auto leading-[1.7]">
          Your designer makes a logo. Your developer builds a website that does not match. Your ads guy runs campaigns with random creatives. Result? Wasted money, zero brand consistency, no real leads.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {[
            { icon: "😩", problem: "Designer, developer, and marketer — all different people", result: "Your brand looks different everywhere" },
            { icon: "💸", problem: "Ads running but landing page does not convert", result: "Money spent, leads lost" },
            { icon: "📉", problem: "No one tracking what is actually working", result: "You are guessing, not growing" },
          ].map((item) => (
            <div key={item.problem} className="bg-[#111] rounded-xl p-5 text-left" style={{ border: "0.5px solid #1e1e1e" }}>
              <span className="text-[20px] mb-3 block">{item.icon}</span>
              <p className="text-[13px] text-[#f0ede6] font-medium mb-1">{item.problem}</p>
              <p className="text-[12px] text-[#c8a96e]">{item.result}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#111] rounded-xl p-5 text-left max-w-xl mx-auto" style={{ border: "0.5px solid #c8a96e33" }}>
          <p className="text-[13px] text-[#f0ede6] font-medium mb-1">✦ My approach is different.</p>
          <p className="text-[13px] text-[#888] leading-[1.7]">
            I handle your ads, design your creatives, and build your landing pages — all as one person. Your brand stays consistent, your funnel stays connected, and your money actually brings results.
          </p>
        </div>
      </div>
    </section>
  );
}
