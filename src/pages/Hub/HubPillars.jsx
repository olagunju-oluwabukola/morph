import Img from '../../components/Img';
import Eyebrow from '../../components/Eyebrow';

export default function HubPillars() {
  return (
    <section style={{ background: "#f4f7f3" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)", display: "flex", flexDirection: "column", gap: "clamp(56px,7vw,96px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "24px", overflow: "hidden" }}>
            <Img name="hub-experience" alt="Driver charging an EV while browsing the on-site shop" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Eyebrow>Customer experience</Eyebrow>
            <h3 style={{ margin: "0", fontSize: "clamp(28px,3vw,40px)", lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.018em", textWrap: "balance" }}>Drive in for one service. Leave having solved three.</h3>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3d5a53", textWrap: "pretty" }}>Charge your car, pick up home backup and service your fleet in one visit.</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Eyebrow>Technology</Eyebrow>
            <h3 style={{ margin: "0", fontSize: "clamp(28px,3vw,40px)", lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.018em", textWrap: "balance" }}>Engineered, not assembled.</h3>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3d5a53", textWrap: "pretty" }}>Charging, fuel, storage and site power designed as one system, built for local grid conditions and ready for new fuels.</p>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "24px", overflow: "hidden" }}>
            <Img name="hub-tech" alt="Charging bays, storage and site-power equipment" />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "20px" }}>
          <div style={{ background: "#13322c", color: "#ffffff", borderRadius: "24px", padding: "36px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00" }}>Business model</span>
            <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "1.12", fontWeight: "600", letterSpacing: "-0.025em" }}>Retail, refuelling and services, under one roof.</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)" }}>Everyday refuelling and servicing, supported by retail and fleet contracts.</p>
          </div>
          <div style={{ background: "#13322c", color: "#ffffff", borderRadius: "24px", padding: "36px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00" }}>Expansion</span>
            <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "1.12", fontWeight: "600", letterSpacing: "-0.025em" }}>A model built to replicate.</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)" }}>Each hub is designed to be repeated across Africa's cities and transport routes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
