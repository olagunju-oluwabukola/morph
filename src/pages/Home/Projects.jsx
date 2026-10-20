import { Link } from 'react-router-dom';
import Img from '../../components/Img';
import Eyebrow from '../../components/Eyebrow';

export default function Projects() {
  return (
    <section style={{ background: "#f4f7f3" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,128px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "24px", marginBottom: "48px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Eyebrow>In the field</Eyebrow>
            <h2 style={{ margin: "0", fontSize: "clamp(34px,4.2vw,56px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em" }}>Energy in action.</h2>
          </div>
          <Link className="hv-4d4a93" to="/projects" style={{ fontSize: "16px", fontWeight: "600", padding: "14px 22px", borderRadius: "999px", border: "1px solid rgba(19,50,44,0.25)" }}>View all projects →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "24px" }}>
          <article style={{ background: "#ffffff", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/11" }}>
              <Img name="proj-commercial" alt="Commercial energy system: site photo" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "14px", flex: "1" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#17bc2e" }}>Commercial</span>
              <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Commercial Energy System</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>Reliable power with less reliance on generators. Designed, installed and supported by Morph.</p>
              <div style={{ borderTop: "1px solid rgba(19,50,44,0.12)", paddingTop: "16px", display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span style={{ fontSize: "28px", fontWeight: "600", color: "#13322c", letterSpacing: "-0.02em" }}>[20]%</span>
                <span style={{ fontSize: "15px", color: "#3d5a53" }}>reduction in energy costs</span>
              </div>
            </div>
          </article>
          <article style={{ background: "#ffffff", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/11" }}>
              <Img name="proj-residential" alt="Residential backup: home with solar array" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "14px", flex: "1" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#17bc2e" }}>Residential</span>
              <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Residential Backup &amp; Storage</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>Solar, inverter and battery storage sized to how the household really uses power.</p>
              <div style={{ borderTop: "1px solid rgba(19,50,44,0.12)", paddingTop: "16px", display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span style={{ fontSize: "28px", fontWeight: "600", color: "#13322c", letterSpacing: "-0.02em" }}>[140] hrs</span>
                <span style={{ fontSize: "15px", color: "#3d5a53" }}>of backup power</span>
              </div>
            </div>
          </article>
          <article style={{ background: "#ffffff", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/11" }}>
              <Img name="proj-ev" alt="EV charging deployment: fleet chargers" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "14px", flex: "1" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#17bc2e" }}>Mobility</span>
              <h4 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>EV Charging Deployment</h4>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>On-site fleet charging, from site survey to installation and ongoing care.</p>
              <div style={{ borderTop: "1px solid rgba(19,50,44,0.12)", paddingTop: "16px", display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span style={{ fontSize: "28px", fontWeight: "600", color: "#13322c", letterSpacing: "-0.02em" }}>[2400] kWh</span>
                <span style={{ fontSize: "15px", color: "#3d5a53" }}>delivered monthly</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
