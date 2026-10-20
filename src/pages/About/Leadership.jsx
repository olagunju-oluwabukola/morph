import Img from '../../components/Img';
import Eyebrow from '../../components/Eyebrow';

export default function Leadership() {
  return (
    <section style={{ background: "#f4f7f3" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px", maxWidth: "760px" }}>
          <Eyebrow>Leadership</Eyebrow>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>Built by people who understand energy and Africa.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "24px", overflow: "hidden" }}>
              <Img name="lead-ceo" alt={"Portrait: Founder & CEO"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <h4 style={{ margin: "0", fontSize: "22px", fontWeight: "600" }}>Taiwo Oyewole</h4>
              <span style={{ fontSize: "15px", color: "#3d5a53" }}>Founder &amp; CEO</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "24px", overflow: "hidden" }}>
              <Img name="lead-eng" alt="Portrait: Head of Engineering" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <h4 style={{ margin: "0", fontSize: "22px", fontWeight: "600" }}>Taiwo Oyewole</h4>
              <span style={{ fontSize: "15px", color: "#3d5a53" }}>Head of Engineering</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: "24px", overflow: "hidden" }}>
              <Img name="lead-com" alt="Portrait: Head of Commercial" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <h4 style={{ margin: "0", fontSize: "22px", fontWeight: "600" }}>Taiwo Oyewole</h4>
              <span style={{ fontSize: "15px", color: "#3d5a53" }}>Head of Commercial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
