import Eyebrow from '../../components/Eyebrow';

export default function Roadmap() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px", maxWidth: "720px" }}>
          <Eyebrow>How we grow</Eyebrow>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>Every system we build lays the ground for the next.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "20px" }}>
          <div style={{ background: "#ffcd00", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "56px" }}>
            <span style={{ fontSize: "56px", fontWeight: "600", letterSpacing: "-0.025em", lineHeight: "1" }}>1</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h4 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>Products &amp; systems</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>Reliable power for homes and businesses.</p>
            </div>
          </div>
          <div style={{ background: "#17bc2e", color: "#ffffff", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "56px" }}>
            <span style={{ fontSize: "56px", fontWeight: "600", letterSpacing: "-0.025em", lineHeight: "1" }}>2</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h4 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>Energy hubs</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>Charging, clean fuels and services in one place.</p>
            </div>
          </div>
          <div style={{ background: "#13322c", color: "#ffffff", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", gap: "56px" }}>
            <span style={{ fontSize: "56px", fontWeight: "600", letterSpacing: "-0.025em", lineHeight: "1", color: "#ffcd00" }}>3</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h4 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>A connected network</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "rgba(255,255,255,0.82)" }}>Renewables, gas, hydrogen and, in time, nuclear, connected across Africa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
