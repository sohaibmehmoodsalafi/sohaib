"use client";

const clients = ["Learn Quran Institute", "Peace Institute", "Virtual Islamic University", "Hijra Online"];

export default function MarqueeBar() {
  const doubled = [...clients, ...clients];
  return (
    <div style={{
      borderTop: "1px solid rgba(255,255,255,.07)",
      borderBottom: "1px solid rgba(255,255,255,.07)",
      padding: "20px 0", overflow: "hidden", position: "relative",
    }}>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 80, background: "linear-gradient(90deg,#080808,transparent)", zIndex: 2 }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 80, background: "linear-gradient(-90deg,#080808,transparent)", zIndex: 2 }} />
      <div style={{ display: "flex", gap: 0, animation: "marqueeRoll 28s linear infinite", width: "max-content" }}>
        {doubled.map((c, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "0 36px", fontSize: 13, fontWeight: 600, color: "#6b6b6b",
            letterSpacing: ".06em", textTransform: "uppercase",
            borderRight: "1px solid rgba(255,255,255,.07)", whiteSpace: "nowrap",
          }}>
            <span style={{ width: 5, height: 5, background: "#d4a017", borderRadius: "50%", flexShrink: 0 }} />
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
