import { Link } from 'react-router-dom';
import Img from '../../components/Img';

export default function EnergyShop() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,128px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(40px,6vw,88px)", alignItems: "center" }}>
        <div style={{ position: "relative", aspectRatio: "1/1", maxHeight: "640px" }}>
          <div style={{ position: "absolute", inset: "0 18% 18% 0", borderRadius: "28px", overflow: "hidden" }}>
            <Img name="shop-main" alt="Technician commissioning a residential ESS, Lagos" />
          </div>
          <div style={{ position: "absolute", right: "0", bottom: "0", width: "52%", aspectRatio: "1/1", borderRadius: "24px", overflow: "hidden", background: "#13322c", border: "6px solid #ffffff" }}>
            <Img name="shop-product" alt="Product cut-out: portable power station" fit="contain" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ display: "inline-flex", alignSelf: "flex-start", background: "#ffcd00", color: "#13322c", borderRadius: "999px", padding: "7px 16px", fontSize: "13px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase" }}>Morph Energy Shop</span>
          <h2 style={{ margin: "0", fontSize: "clamp(34px,4.2vw,56px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>It starts with reliable power.</h2>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3d5a53", maxWidth: "520px", textWrap: "pretty" }}>Clean-energy products for homes and businesses, installed and supported by our team.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ border: "1px solid rgba(19,50,44,0.2)", borderRadius: "999px", padding: "10px 18px", fontSize: "15px", fontWeight: "500" }}>Portable Power</span>
            <span style={{ border: "1px solid rgba(19,50,44,0.2)", borderRadius: "999px", padding: "10px 18px", fontSize: "15px", fontWeight: "500" }}>Solar Systems</span>
            <span style={{ border: "1px solid rgba(19,50,44,0.2)", borderRadius: "999px", padding: "10px 18px", fontSize: "15px", fontWeight: "500" }}>Inverters</span>
            <span style={{ border: "1px solid rgba(19,50,44,0.2)", borderRadius: "999px", padding: "10px 18px", fontSize: "15px", fontWeight: "500" }}>Energy Storage (ESS)</span>
            <span style={{ border: "1px solid rgba(19,50,44,0.2)", borderRadius: "999px", padding: "10px 18px", fontSize: "15px", fontWeight: "500" }}>EV Charging Setup</span>
          </div>
          <Link className="mh-btn hv-b8cdcf" to="/shop" style={{ alignSelf: "flex-start", marginTop: "8px", background: "#17bc2e", color: "#ffffff", fontSize: "16px", fontWeight: "600", padding: "16px 26px", borderRadius: "999px" }}>Visit the Energy Shop →</Link>
        </div>
      </div>
    </section>
  );
}
