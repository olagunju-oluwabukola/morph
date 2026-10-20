import { Link } from 'react-router-dom';
import Eyebrow from '../../components/Eyebrow';

export default function PartnerTypes() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px", maxWidth: "720px" }}>
          <Eyebrow>Who we partner with</Eyebrow>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>Eight ways to build with Morph.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "20px" }}>
          <Link className="hv-64ae3d" to="/contact" style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "220px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#17bc2e" }}>01</span>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Technology Partners</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Bring storage, hydrogen and next-generation energy technology to African markets.</p>
          </Link>
          <Link className="hv-64ae3d" to="/contact" style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "220px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#17bc2e" }}>02</span>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Infrastructure Partners</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Build energy sites and hubs with us.</p>
          </Link>
          <Link className="hv-64ae3d" to="/contact" style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "220px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#17bc2e" }}>03</span>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Fleet Operators</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Convert and service EV or CNG fleets.</p>
          </Link>
          <Link className="hv-64ae3d" to="/contact" style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "220px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#17bc2e" }}>04</span>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Property Developers</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Build clean energy in from day one.</p>
          </Link>
          <Link className="hv-64ae3d" to="/contact" style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "220px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#17bc2e" }}>05</span>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Corporates</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Cut energy costs and emissions.</p>
          </Link>
          <Link className="hv-64ae3d" to="/contact" style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "220px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#17bc2e" }}>06</span>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Capital Partners</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Invest in renewable, gas and hydrogen assets that scale.</p>
          </Link>
          <Link className="hv-64ae3d" to="/contact" style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "220px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#17bc2e" }}>07</span>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Energy &amp; Fuel Suppliers</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Supply CNG, LPG, hydrogen and other clean fuels through Morph hubs.</p>
          </Link>
          <Link className="hv-485344" to="/contact" style={{ background: "#13322c", color: "#ffffff", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "220px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#ffcd00" }}>08</span>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Government &amp; Institutional Partners</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "rgba(255,255,255,0.82)" }}>Deliver clean energy at public scale, from renewables to nuclear, in line with national goals.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
