import { Link } from 'react-router-dom';

export default function BeyondTheProduct() {
  return (
    <section style={{ position: "relative", background: "#13322c", color: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "-240px", bottom: "-280px", width: "760px", height: "760px", borderRadius: "50%", background: "radial-gradient(circle,rgba(23,188,46,0.22),rgba(23,188,46,0) 64%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(40px,6vw,88px)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00" }}>Need more than a product?</span>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>Let our specialists design the right solution.</h2>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)", textWrap: "pretty" }}>We assess, design, install and maintain. One product or a complete system.</p>
          <Link className="mh-btn hv-65f7c9" to="/contact" style={{ alignSelf: "flex-start", marginTop: "6px", background: "#ffcd00", color: "#13322c", fontSize: "16px", fontWeight: "600", padding: "16px 26px", borderRadius: "999px" }}>Talk to an energy specialist</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "1px", background: "rgba(255,255,255,0.12)", borderRadius: "22px", overflow: "hidden" }}>
          <div style={{ background: "#13322c", padding: "30px 26px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>01</span>
            <span style={{ fontSize: "21px", fontWeight: "600", lineHeight: "1.25" }}>Energy audit &amp; assessment</span>
          </div>
          <div style={{ background: "#13322c", padding: "30px 26px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>02</span>
            <span style={{ fontSize: "21px", fontWeight: "600", lineHeight: "1.25" }}>System design &amp; sizing</span>
          </div>
          <div style={{ background: "#13322c", padding: "30px 26px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>03</span>
            <span style={{ fontSize: "21px", fontWeight: "600", lineHeight: "1.25" }}>Installation</span>
          </div>
          <div style={{ background: "#13322c", padding: "30px 26px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>04</span>
            <span style={{ fontSize: "21px", fontWeight: "600", lineHeight: "1.25" }}>Ongoing maintenance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
