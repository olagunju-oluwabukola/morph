import HeroBadge from '../../components/HeroBadge';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <section style={{ position: "relative", background: "#13322c", color: "#ffffff", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "-260px", top: "-300px", width: "860px", height: "860px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,205,0,0.16),rgba(255,205,0,0) 62%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(20px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "clamp(40px,6vw,88px)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <HeroBadge>Contact</HeroBadge>
          <h1 style={{ margin: "0", fontSize: "clamp(40px,5.2vw,72px)", lineHeight: "1", fontWeight: "600", letterSpacing: "-0.025em", textWrap: "balance" }}>Let's Talk About Your <span style={{ color: "#ffcd00" }}>Energy Needs.</span></h1>
          <p style={{ margin: "0", maxWidth: "520px", fontSize: "clamp(17px,1.4vw,20px)", lineHeight: "1.55", color: "rgba(255,255,255,0.82)", textWrap: "pretty" }}>Tell us what you need and the right person will be in touch.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.12)", borderRadius: "20px", overflow: "hidden", marginTop: "8px" }}>
            <div style={{ background: "#13322c", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00" }}>Office</span>
              <span style={{ fontSize: "19px", fontWeight: "500" }}>41, Industrial Avenue, Yaba, Lagos</span>
            </div>
            <a className="hv-ca3f51" href="mailto:hello@morphenergies.com" style={{ background: "#13322c", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "4px", color: "#ffffff" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00" }}>Email</span>
              <span style={{ fontSize: "19px", fontWeight: "500" }}>hello@morphenergies.com</span>
            </a>
            <a className="hv-ca3f51" href="tel:+2348104950407" style={{ background: "#13322c", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "4px", color: "#ffffff" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffcd00" }}>Phone / WhatsApp</span>
              <span style={{ fontSize: "19px", fontWeight: "500" }}>+234 810 495 0407</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
