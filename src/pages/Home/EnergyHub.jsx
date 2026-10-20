import { Link } from 'react-router-dom';
import Img from '../../components/Img';

export default function EnergyHub() {
  return (
    <section style={{ position: "relative", background: "#13322c", color: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "-240px", bottom: "-280px", width: "760px", height: "760px", borderRadius: "50%", background: "radial-gradient(circle,rgba(23,188,46,0.22),rgba(23,188,46,0) 64%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,128px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "end", marginBottom: "48px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ display: "inline-flex", alignSelf: "flex-start", background: "rgba(23,188,46,0.18)", border: "1px solid rgba(23,188,46,0.5)", color: "#7ef29a", borderRadius: "999px", padding: "7px 16px", fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase" }}>Morph Energy Hub</span>
            <h2 style={{ margin: "0", fontSize: "clamp(34px,4.2vw,56px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>And grows into <span style={{ color: "#ffcd00" }}>connected infrastructure.</span></h2>
          </div>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)", maxWidth: "500px", textWrap: "pretty" }}>EV charging, CNG, servicing and retail in one place, with room for hydrogen as it grows. A new kind of energy destination for African cities.</p>
        </div>
        <div style={{ position: "relative", aspectRatio: "21/9", minHeight: "280px", borderRadius: "28px", overflow: "hidden", marginBottom: "40px" }}>
          <Img name="hub-render" alt="Energy Hub render or aerial photo: wide format" />
          <div className="mh-hub-label" style={{ position: "absolute", left: "24px", bottom: "24px", background: "#ffcd00", color: "#13322c", borderRadius: "14px", padding: "14px 20px", fontSize: "17px", fontWeight: "600", pointerEvents: "none" }}>One destination. Many ways to cleaner energy.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))", gap: "1px", background: "rgba(255,255,255,0.12)", borderRadius: "20px", overflow: "hidden" }}>
          <div style={{ background: "#13322c", padding: "26px 22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>01</span>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>EV Charging</span>
          </div>
          <div style={{ background: "#13322c", padding: "26px 22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>02</span>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>CNG Refuelling</span>
          </div>
          <div style={{ background: "#13322c", padding: "26px 22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>03</span>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>CNG Conversion</span>
          </div>
          <div style={{ background: "#13322c", padding: "26px 22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>04</span>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>LPG</span>
          </div>
          <div style={{ background: "#13322c", padding: "26px 22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>05</span>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>Vehicle Service &amp; Maintenance</span>
          </div>
          <div style={{ background: "#13322c", padding: "26px 22px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>06</span>
            <span style={{ fontSize: "19px", fontWeight: "600", lineHeight: "1.25" }}>Clean Energy Shop</span>
          </div>
        </div>
        <Link className="mh-btn hv-65f7c9" to="/hub" style={{ display: "inline-flex", marginTop: "36px", background: "#ffcd00", color: "#13322c", fontSize: "16px", fontWeight: "600", padding: "16px 26px", borderRadius: "999px" }}>Explore the Morph Energy Hub →</Link>
      </div>
    </section>
  );
}
