export default function Vision() {
  return (
    <section style={{ background: "#ffcd00" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 72px", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#13322c" }}>The idea</span>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", color: "#13322c", textWrap: "balance" }}>One destination. Multiple pathways to cleaner energy.</h2>
        </div>
        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#13322c", textWrap: "pretty" }}>Most stations add clean energy to petrol. Ours starts with clean energy, from EV and CNG to hydrogen as it scales.</p>
      </div>
    </section>
  );
}
