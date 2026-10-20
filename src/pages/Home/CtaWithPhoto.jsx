import { Link } from 'react-router-dom';
import Img from '../../components/Img';

export default function CtaWithPhoto() {
  return (
    <section style={{ padding: "0 clamp(20px,4vw,48px) clamp(72px,9vw,128px)", background: "#ffffff" }}>
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", background: "#ffcd00", borderRadius: "32px", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", alignItems: "stretch" }}>
        <div style={{ padding: "clamp(40px,6vw,80px)", display: "flex", flexDirection: "column", gap: "22px", justifyContent: "center" }}>
          <h2 style={{ margin: "0", fontSize: "clamp(34px,4.4vw,60px)", lineHeight: "1.02", fontWeight: "600", letterSpacing: "-0.022em", color: "#13322c", textWrap: "balance" }}>Let's build what's next, together.</h2>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#13322c", maxWidth: "460px" }}>From one home to a whole network, across every kind of clean energy, we're ready when you are.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "6px" }}>
            <Link className="mh-btn hv-485344" to="/contact" style={{ background: "#13322c", color: "#ffffff", fontSize: "16px", fontWeight: "600", padding: "16px 26px", borderRadius: "999px" }}>Talk to Morph</Link>
            <Link className="mh-btn hv-ce9c2c" to="/partnerships" style={{ color: "#13322c", fontSize: "16px", fontWeight: "600", padding: "16px 26px", borderRadius: "999px", border: "2px solid #13322c" }}>Partner with Morph</Link>
          </div>
        </div>
        <div style={{ position: "relative", minHeight: "340px" }}>
          <Img name="cta-photo" alt="Campaign image: Morph team or customer" />
        </div>
      </div>
    </section>
  );
}
