import { Link } from 'react-router-dom';
import images from '../assets/images';

export default function Footer() {
  return (
    <footer style={{ background: "#0e2621", color: "rgba(255,255,255,0.78)", fontFamily: "'Figtree',system-ui,sans-serif" }}>
      <div className="mh-foot-in" style={{ maxWidth: "1320px", margin: "0 auto", padding: "72px clamp(20px,4vw,48px) 32px" }}>
        <div className="mh-foot-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", minWidth: "0" }}>
            <img src={images.logo} alt="Morph Energies" style={{ height: "30px", alignSelf: "flex-start" }} />
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", maxWidth: "280px" }}>Clean energy, built for Africa. Renewables, clean fuels, storage and the infrastructure that connects them.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00", marginBottom: "4px" }}>Company</span>
            <Link className="hv-3eb549" to="/about" style={{ color: "inherit", textDecoration: "none" }}>About Morph</Link>
            <Link className="hv-3eb549" to="/projects" style={{ color: "inherit", textDecoration: "none" }}>Projects</Link>
            <Link className="hv-3eb549" to="/partnerships" style={{ color: "inherit", textDecoration: "none" }}>Partnerships</Link>
            <Link className="hv-3eb549" to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00", marginBottom: "4px" }}>Solutions</span>
            <Link className="hv-3eb549" to="/solutions" style={{ color: "inherit", textDecoration: "none" }}>For Homes</Link>
            <Link className="hv-3eb549" to="/solutions" style={{ color: "inherit", textDecoration: "none" }}>For Businesses</Link>
            <Link className="hv-3eb549" to="/solutions" style={{ color: "inherit", textDecoration: "none" }}>For C&amp;I</Link>
            <Link className="hv-3eb549" to="/solutions" style={{ color: "inherit", textDecoration: "none" }}>For Institutions</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00", marginBottom: "4px" }}>Platform</span>
            <Link className="hv-3eb549" to="/shop" style={{ color: "inherit", textDecoration: "none" }}>Energy Shop</Link>
            <Link className="hv-3eb549" to="/hub" style={{ color: "inherit", textDecoration: "none" }}>Energy Hub</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00", marginBottom: "4px" }}>Contact</span>
            <span>41, Industrial Avenue, Yaba, Lagos</span>
            <a className="hv-3eb549" href="mailto:hello@morphenergies.com" style={{ color: "inherit", textDecoration: "none" }}>hello@morphenergies.com</a>
            <a className="hv-3eb549" href="tel:+2348104950407" style={{ color: "inherit", textDecoration: "none" }}>+234 810 495 0407</a>
          </div>
        </div>
        <div className="mh-foot-bar" style={{ marginTop: "56px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", fontSize: "14px" }}>
          <span>© 2026 Morph Energies. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a className="hv-241120" href="#" style={{ color: "inherit", textDecoration: "none" }}>LinkedIn</a>
            <a className="hv-241120" href="#" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a>
            <a className="hv-241120" href="#" style={{ color: "inherit", textDecoration: "none" }}>X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
