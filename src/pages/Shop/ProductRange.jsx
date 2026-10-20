import { Link } from 'react-router-dom';
import Img from '../../components/Img';
import Eyebrow from '../../components/Eyebrow';

export default function ProductRange() {
  return (
    <section id="range" style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px", maxWidth: "720px" }}>
          <Eyebrow>The range</Eyebrow>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>The right products, matched to your needs.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "24px" }}>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", background: "#13322c" }}>
              <Img name="shop-portable" alt="Portable power station" fit="contain" />
            </div>
            <div style={{ padding: "26px 28px 30px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Portable Power</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Backup for home, travel and small business.</p>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "4/3" }}>
              <Img name="shop-solar" alt="Solar panels on a roof" />
            </div>
            <div style={{ padding: "26px 28px 30px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Solar</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Panels and systems sized to your space.</p>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", background: "#13322c" }}>
              <Img name="shop-inverters" alt="Hybrid inverter" fit="contain" />
            </div>
            <div style={{ padding: "26px 28px 30px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Inverters</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>For homes and businesses, matched to your system.</p>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", background: "#13322c" }}>
              <Img name="shop-storage" alt="Battery / ESS unit" fit="contain" />
            </div>
            <div style={{ padding: "26px 28px 30px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Energy Storage</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Batteries and ESS for homes and businesses.</p>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "4/3" }}>
              <Img name="shop-ev" alt="EV charger installation" />
            </div>
            <div style={{ padding: "26px 28px 30px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>EV Charging</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Chargers and setup for homes, sites and fleets.</p>
            </div>
          </article>
          <article style={{ background: "#ffcd00", borderRadius: "24px", padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "320px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ margin: "0", fontSize: "30px", fontWeight: "600", letterSpacing: "-0.025em", lineHeight: "1.1" }}>Not sure what you need?</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55" }}>Our specialists can assess your site and recommend the right system.</p>
            </div>
            <Link className="hv-485344" to="/contact" style={{ alignSelf: "flex-start", background: "#13322c", color: "#ffffff", fontSize: "16px", fontWeight: "600", padding: "15px 24px", borderRadius: "999px" }}>Talk to a specialist →</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
