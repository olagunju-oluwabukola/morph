import Img from '../../components/Img';
import HeroBadge from '../../components/HeroBadge';

export default function AboutHero() {
  return (
    <section style={{ position: "relative", background: "#13322c", color: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-240px", top: "-300px", width: "860px", height: "860px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,205,0,0.18),rgba(255,205,0,0) 62%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(40px,5vw,72px)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <HeroBadge>About Morph</HeroBadge>
          <h1 style={{ margin: "0", fontSize: "clamp(40px,5.6vw,76px)", lineHeight: "1", fontWeight: "600", letterSpacing: "-0.025em", textWrap: "balance" }}>Africa's Energy Future Will Be <span style={{ color: "#ffcd00" }}>Built,</span> Not Predicted.</h1>
          <p style={{ margin: "0", maxWidth: "560px", fontSize: "clamp(17px,1.4vw,20px)", lineHeight: "1.55", color: "rgba(255,255,255,0.82)", textWrap: "pretty" }}>Africa's energy transition needs more than one technology. It needs renewables, clean fuels and storage working together, and people who can build it.</p>
        </div>
        <div style={{ position: "relative", aspectRatio: "5/4", borderRadius: "28px", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.35)" }}>
          <Img name="about-hero" alt="Morph team on site: group photo" />
        </div>
      </div>
    </section>
  );
}
