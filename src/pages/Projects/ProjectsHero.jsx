import HeroBadge from '../../components/HeroBadge';

export default function ProjectsHero() {
  return (
    <section style={{ position: "relative", background: "#13322c", color: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-240px", top: "-300px", width: "860px", height: "860px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,205,0,0.18),rgba(255,205,0,0) 62%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "32px 72px", alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <HeroBadge>Projects</HeroBadge>
          <h1 style={{ margin: "0", fontSize: "clamp(44px,6vw,84px)", lineHeight: "0.98", fontWeight: "600", letterSpacing: "-0.025em" }}>Energy <span style={{ color: "#ffcd00" }}>in Action.</span></h1>
        </div>
        <p style={{ margin: "0", fontSize: "clamp(17px,1.4vw,20px)", lineHeight: "1.55", color: "rgba(255,255,255,0.82)", textWrap: "pretty" }}>Real systems for homes, businesses and fleets, designed and supported by Morph.</p>
      </div>
    </section>
  );
}
