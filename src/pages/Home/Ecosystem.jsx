import Img from '../../components/Img';
import Eyebrow from '../../components/Eyebrow';

export default function Ecosystem() {
  return (
    <section id="ecosystem" style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,128px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "end", marginBottom: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Eyebrow>How Morph works</Eyebrow>
            <h2 style={{ margin: "0", fontSize: "clamp(34px,4.2vw,56px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>One connected energy system.</h2>
          </div>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3d5a53", maxWidth: "480px", textWrap: "pretty" }}>Three divisions that work together, so every product, charger and hub makes the whole system stronger.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "24px" }}>
          <article style={{ display: "flex", flexDirection: "column", background: "#f4f7f3", borderRadius: "24px", overflow: "hidden" }}>
            <div style={{ position: "relative", aspectRatio: "4/3" }}>
              <Img name="div-power" alt={"Power: rooftop solar & battery storage"} />
              <span style={{ position: "absolute", left: "18px", top: "18px", background: "#ffcd00", color: "#13322c", borderRadius: "999px", padding: "6px 14px", fontSize: "13px", fontWeight: "600", pointerEvents: "none" }}>01</span>
            </div>
            <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ margin: "0", fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em" }}>Power</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Solar, storage and other renewables for homes and businesses.</p>
            </div>
          </article>
          <article style={{ display: "flex", flexDirection: "column", background: "#f4f7f3", borderRadius: "24px", overflow: "hidden" }}>
            <div style={{ position: "relative", aspectRatio: "4/3" }}>
              <Img name="div-mobility" alt="Mobility: EV charging or CNG refuelling" />
              <span style={{ position: "absolute", left: "18px", top: "18px", background: "#ffcd00", color: "#13322c", borderRadius: "999px", padding: "6px 14px", fontSize: "13px", fontWeight: "600", pointerEvents: "none" }}>02</span>
            </div>
            <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ margin: "0", fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em" }}>Mobility</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>EV charging, CNG and servicing for cleaner vehicles.</p>
            </div>
          </article>
          <article style={{ display: "flex", flexDirection: "column", background: "#f4f7f3", borderRadius: "24px", overflow: "hidden" }}>
            <div style={{ position: "relative", aspectRatio: "4/3" }}>
              <Img name="div-infra" alt="Infrastructure: energy hub or engineers on site" />
              <span style={{ position: "absolute", left: "18px", top: "18px", background: "#ffcd00", color: "#13322c", borderRadius: "999px", padding: "6px 14px", fontSize: "13px", fontWeight: "600", pointerEvents: "none" }}>03</span>
            </div>
            <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ margin: "0", fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em" }}>Infrastructure</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Energy hubs and systems, ready for hydrogen and what comes next.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
