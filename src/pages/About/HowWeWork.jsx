import Eyebrow from '../../components/Eyebrow';

export default function HowWeWork() {
  return (
    <section style={{ background: "#f4f7f3" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "start", marginBottom: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Eyebrow>How we work</Eyebrow>
            <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>We start with the problem, not the product.</h2>
          </div>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3d5a53", textWrap: "pretty" }}>We study how you use power, then design a system that fits and keeps performing.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "16px" }}>
          <div style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "40px", minHeight: "200px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>01</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Assess</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3d5a53" }}>Understand demand and load profile.</span>
            </div>
          </div>
          <div style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "40px", minHeight: "200px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>02</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Design</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3d5a53" }}>Engineer the right system.</span>
            </div>
          </div>
          <div style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "40px", minHeight: "200px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>03</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Deploy</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3d5a53" }}>Install with precision.</span>
            </div>
          </div>
          <div style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "40px", minHeight: "200px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>04</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Optimise</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3d5a53" }}>Tune for peak performance.</span>
            </div>
          </div>
          <div style={{ background: "#ffcd00", borderRadius: "20px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "40px", minHeight: "200px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>05</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Maintain</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5" }}>Keep it performing, long term.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
