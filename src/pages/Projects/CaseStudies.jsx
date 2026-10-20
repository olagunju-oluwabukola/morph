import Img from '../../components/Img';

export default function CaseStudies() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)", display: "flex", flexDirection: "column", gap: "clamp(48px,6vw,80px)" }}>
        <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "26px", overflow: "hidden" }}>
            <Img name="proj-commercial" alt="Commercial energy system: site photo" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#17bc2e" }}>01 · Commercial</span>
              <h2 style={{ margin: "0", fontSize: "clamp(28px,3.2vw,42px)", lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.018em" }}>Commercial Energy System</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "1px", background: "rgba(19,50,44,0.12)", borderRadius: "18px", overflow: "hidden" }}>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Challenge</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Reliable power with less dependence on generators.</span>
              </div>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Approach</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Load audit, system design, phased rollout.</span>
              </div>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Solution</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Solar + storage system with monitoring.</span>
              </div>
              <div style={{ background: "#ffcd00", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase" }}>Outcome</span>
                <span style={{ fontSize: "22px", fontWeight: "600", lineHeight: "1.2" }}>[45]% lower energy costs</span>
              </div>
            </div>
          </div>
        </article>
        <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#17bc2e" }}>02 · Residential</span>
              <h2 style={{ margin: "0", fontSize: "clamp(28px,3.2vw,42px)", lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.018em" }}>Residential Backup &amp; Storage</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "1px", background: "rgba(19,50,44,0.12)", borderRadius: "18px", overflow: "hidden" }}>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Challenge</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Frequent outages disrupting a home office.</span>
              </div>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Approach</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Household load profile, right-sized ESS.</span>
              </div>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Solution</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Solar array + inverter + battery storage.</span>
              </div>
              <div style={{ background: "#ffcd00", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase" }}>Outcome</span>
                <span style={{ fontSize: "22px", fontWeight: "600", lineHeight: "1.2" }}>[20] hours of backup power</span>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "26px", overflow: "hidden" }}>
            <Img name="proj-residential" alt="Residential backup: home with solar array" />
          </div>
        </article>
        <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "26px", overflow: "hidden" }}>
            <Img name="proj-ev" alt="EV charging deployment: fleet chargers" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#17bc2e" }}>03 · Mobility</span>
              <h2 style={{ margin: "0", fontSize: "clamp(28px,3.2vw,42px)", lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.018em" }}>EV Charging Deployment</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "1px", background: "rgba(19,50,44,0.12)", borderRadius: "18px", overflow: "hidden" }}>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Challenge</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>A fleet operator needed on-site EV charging.</span>
              </div>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Approach</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Site assessment, electrical design, permitting.</span>
              </div>
              <div style={{ background: "#f4f7f3", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0c6417" }}>Solution</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Multi-bay charging install, with maintenance.</span>
              </div>
              <div style={{ background: "#ffcd00", padding: "20px 22px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.18em", textTransform: "uppercase" }}>Outcome</span>
                <span style={{ fontSize: "22px", fontWeight: "600", lineHeight: "1.2" }}>[3000] kWh delivered monthly</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
