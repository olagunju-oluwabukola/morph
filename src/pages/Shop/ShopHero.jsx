import { Link } from 'react-router-dom';
import Img from '../../components/Img';

export default function ShopHero() {
  return (
    <section style={{ position: "relative", background: "#13322c", color: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-240px", top: "-300px", width: "860px", height: "860px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,205,0,0.18),rgba(255,205,0,0) 62%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(40px,5vw,72px)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ display: "inline-flex", alignSelf: "flex-start", background: "#ffcd00", color: "#13322c", borderRadius: "999px", padding: "8px 16px", fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase" }}>Morph Energy Shop</span>
          <h1 style={{ margin: "0", fontSize: "clamp(40px,5.6vw,76px)", lineHeight: "1", fontWeight: "600", letterSpacing: "-0.025em", textWrap: "balance" }}>Power for How You <span style={{ color: "#ffcd00" }}>Live and Work.</span></h1>
          <p style={{ margin: "0", maxWidth: "540px", fontSize: "clamp(17px,1.4vw,20px)", lineHeight: "1.55", color: "rgba(255,255,255,0.82)", textWrap: "pretty" }}>Clean-energy products for homes and businesses, chosen and supported by people who understand energy.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <Link className="mh-btn hv-65f7c9" to="/shop" style={{ background: "#ffcd00", color: "#13322c", fontSize: "16px", fontWeight: "600", padding: "16px 26px", borderRadius: "999px" }}>Browse the range</Link>
            <Link className="mh-btn hv-c0c6f5" to="/contact" style={{ color: "#ffffff", fontSize: "16px", fontWeight: "500", padding: "16px 26px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)" }}>Talk to a specialist →</Link>
          </div>
        </div>
        <div style={{ position: "relative", aspectRatio: "1/1", maxHeight: "560px" }}>
          <div style={{ position: "absolute", inset: "0 16% 16% 0", borderRadius: "28px", overflow: "hidden" }}>
            <Img name="shop-main" alt="Technician commissioning a residential ESS, Lagos" />
          </div>
          <div style={{ position: "absolute", right: "0", bottom: "0", width: "50%", aspectRatio: "1/1", borderRadius: "24px", overflow: "hidden", background: "#0e2621", border: "6px solid #13322c" }}>
            <Img name="shop-product" alt="Product cut-out: portable power station" fit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
