import Img from '../../components/Img';
import Eyebrow from '../../components/Eyebrow';

export default function WhatWeDo() {
  return (
    <section style={{ background: "#f4f7f3" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(40px,6vw,88px)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <Eyebrow>What we do</Eyebrow>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>From first audit to long-term care.</h2>
          <div style={{ position: "relative", aspectRatio: "5/4", borderRadius: "24px", overflow: "hidden" }}>
            <Img name="solutions-feature" alt="Morph engineer installing an inverter" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="mh-num-row" style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "20px", padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)" }}>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#17bc2e" }}>01</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>Energy Products</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>Solar and other renewables, inverters, battery storage and portable power.</p>
            </div>
          </div>
          <div className="mh-num-row" style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "20px", padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)" }}>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#17bc2e" }}>02</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>Energy Systems</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>System design, installation and integration.</p>
            </div>
          </div>
          <div className="mh-num-row" style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "20px", padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)" }}>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#17bc2e" }}>03</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>Energy Advisory</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>Audits and advice across renewables, gas, hydrogen and emerging clean energy.</p>
            </div>
          </div>
          <div className="mh-num-row" style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "20px", padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)" }}>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#17bc2e" }}>04</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>EV Infrastructure</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>Design, deployment and maintenance of EV charging stations.</p>
            </div>
          </div>
          <div className="mh-num-row" style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "20px", padding: "28px 0", borderTop: "1px solid rgba(19,50,44,0.14)", borderBottom: "1px solid rgba(19,50,44,0.14)" }}>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#17bc2e" }}>05</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.015em" }}>Operations &amp; Maintenance</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3d5a53" }}>Support that keeps systems performing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
