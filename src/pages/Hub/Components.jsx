import Eyebrow from '../../components/Eyebrow';

export default function Components() {
  return (
    <section id="components" style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px", maxWidth: "760px" }}>
          <Eyebrow>What's inside</Eyebrow>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>Everything you need, in one stop.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "20px" }}>
          <div style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>01</span>
            <h3 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>EV Charging</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>For personal cars and fleets.</p>
          </div>
          <div style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>02</span>
            <h3 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>CNG Refuelling</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Fast refills for converted vehicles.</p>
          </div>
          <div style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>03</span>
            <h3 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>CNG Conversion</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>By certified technicians, on site.</p>
          </div>
          <div style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>04</span>
            <h3 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>LPG</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Refills and cylinder exchange.</p>
          </div>
          <div style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>05</span>
            <h3 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Vehicle Service &amp; Maintenance</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>Servicing built for EV and CNG.</p>
          </div>
          <div style={{ background: "#f4f7f3", borderRadius: "22px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#13322c", color: "#ffcd00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "600" }}>06</span>
            <h3 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "600", letterSpacing: "-0.02em" }}>Clean Energy Shop</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53" }}>The full Energy Shop range.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
