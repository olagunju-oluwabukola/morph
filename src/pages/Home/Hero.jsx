import { Link } from 'react-router-dom';
import Img from '../../components/Img';
import HeroBadge from '../../components/HeroBadge';

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", background: "#13322c", color: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0" }}>
        <Img name="hero-main" alt="Full-bleed hero: solar array or energy hub at golden hour" />
      </div>
      <div className="mh-hero-overlay" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(19,50,44,0.95) 0%,rgba(19,50,44,0.82) 42%,rgba(19,50,44,0.2) 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "-220px", top: "-260px", width: "900px", height: "900px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,205,0,0.20),rgba(255,205,0,0) 62%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "-120px", top: "-160px", width: "760px", height: "760px", borderRadius: "50%", border: "1px solid rgba(255,205,0,0.18)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "-20px", top: "-60px", width: "560px", height: "560px", borderRadius: "50%", border: "1px solid rgba(255,205,0,0.12)", pointerEvents: "none" }} />
      <div className="mh-hero-in" style={{ position: "relative", pointerEvents: "none", maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,8vw,110px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "clamp(560px,78vh,820px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "760px" }}>
          <HeroBadge>Clean energy · Built for Africa</HeroBadge>
          <h1 style={{ margin: "0", fontSize: "clamp(44px,6.4vw,88px)", lineHeight: "0.98", fontWeight: "600", letterSpacing: "-0.025em", textWrap: "balance" }}>Building Africa's <span style={{ color: "#ffcd00" }}>Clean Energy</span> Future.</h1>
          <p style={{ margin: "0", maxWidth: "560px", fontSize: "clamp(17px,1.4vw,20px)", lineHeight: "1.55", color: "rgba(255,255,255,0.82)", textWrap: "pretty" }}>Solar, storage, clean fuels and energy hubs. Designed, installed and supported by Morph.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "4px" }}>
            <Link className="mh-btn hv-65f7c9" to="/solutions" style={{ pointerEvents: "auto", background: "#ffcd00", color: "#13322c", fontSize: "16px", fontWeight: "600", padding: "16px 26px", borderRadius: "999px" }}>Explore our solutions</Link>
            <Link className="mh-btn hv-c0c6f5" to="/partnerships" style={{ pointerEvents: "auto", color: "#ffffff", fontSize: "16px", fontWeight: "500", padding: "16px 26px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)" }}>Partner with Morph →</Link>
          </div>
        </div>
      </div>
      <div className="mh-stats" style={{ position: "relative", pointerEvents: "none", borderTop: "1px solid rgba(255,255,255,0.14)", background: "rgba(14,38,33,0.72)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "28px clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <span style={{ fontSize: "44px", fontWeight: "600", color: "#ffcd00", letterSpacing: "-0.018em" }}>3</span>
            <span style={{ fontSize: "15px", lineHeight: "1.4", color: "rgba(255,255,255,0.78)" }}>Connected divisions:<br />Power, Mobility, Infrastructure</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <span style={{ fontSize: "44px", fontWeight: "600", color: "#ffcd00", letterSpacing: "-0.018em" }}>6</span>
            <span style={{ fontSize: "15px", lineHeight: "1.4", color: "rgba(255,255,255,0.78)" }}>Clean-energy services<br />in one Energy Hub</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <span style={{ fontSize: "44px", fontWeight: "600", color: "#ffcd00", letterSpacing: "-0.018em" }}>0</span>
            <span style={{ fontSize: "15px", lineHeight: "1.4", color: "rgba(255,255,255,0.78)" }}>Petrol or diesel.<br />Clean energy only.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
