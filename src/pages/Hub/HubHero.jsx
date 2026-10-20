import { Link } from 'react-router-dom';
import Img from '../../components/Img';
import HeroBadge from '../../components/HeroBadge';

export default function HubHero() {
  return (
    <section style={{ position: "relative", background: "#13322c", color: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-240px", top: "-300px", width: "860px", height: "860px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,205,0,0.18),rgba(255,205,0,0) 62%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(20px,4vw,48px) 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "32px 72px", alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <HeroBadge>Morph Energy Hub</HeroBadge>
            <h1 style={{ margin: "0", fontSize: "clamp(40px,5.6vw,76px)", lineHeight: "1", fontWeight: "600", letterSpacing: "-0.025em", textWrap: "balance" }}>The Future of Energy Infrastructure Is <span style={{ color: "#ffcd00" }}>Integrated.</span></h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <p style={{ margin: "0", fontSize: "clamp(17px,1.4vw,20px)", lineHeight: "1.55", color: "rgba(255,255,255,0.82)", textWrap: "pretty" }}>Charging, clean fuels, servicing and retail in one place. No petrol, no diesel.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link className="mh-btn hv-65f7c9" to="/partnerships" style={{ background: "#ffcd00", color: "#13322c", fontSize: "16px", fontWeight: "600", padding: "16px 26px", borderRadius: "999px" }}>Partner on the Hub</Link>
              <Link className="mh-btn hv-c0c6f5" to="/hub" style={{ color: "#ffffff", fontSize: "16px", fontWeight: "500", padding: "16px 26px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)" }}>See how it works ↓</Link>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", marginTop: "56px", aspectRatio: "21/9", minHeight: "280px", borderRadius: "28px 28px 0 0", overflow: "hidden" }}>
          <Img name="hub-render" alt="Architectural render: Morph Energy Hub, Lagos" />
        </div>
      </div>
    </section>
  );
}
