import Img from '../../components/Img';
import Eyebrow from '../../components/Eyebrow';

export default function Values() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(40px,6vw,88px)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Eyebrow>What we hold to</Eyebrow>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>Principles that shape every project.</h2>
          <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "24px", overflow: "hidden" }}>
            <Img name="about-values" alt="Engineer reviewing a system design" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)", display: "flex", flexDirection: "column", gap: "8px" }}>
            <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>Engineering discipline</h4>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>We size, design and build to the system, not the sale.</p>
          </div>
          <div style={{ padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)", display: "flex", flexDirection: "column", gap: "8px" }}>
            <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>Customer obsession</h4>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>Every solution starts with the customer's actual problem.</p>
          </div>
          <div style={{ padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)", display: "flex", flexDirection: "column", gap: "8px" }}>
            <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>Commercial pragmatism</h4>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>Big ambition, grounded in what works.</p>
          </div>
          <div style={{ padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)", borderBottom: "1px solid rgba(19,50,44,0.14)", display: "flex", flexDirection: "column", gap: "8px" }}>
            <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>Long-term thinking</h4>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>Built as infrastructure, not a product cycle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
