import { Link } from 'react-router-dom';
import Img from '../../components/Img';
import Eyebrow from '../../components/Eyebrow';

export default function WhoWeServe() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px", maxWidth: "720px" }}>
          <Eyebrow>Who we serve</Eyebrow>
          <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,52px)", lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.022em", textWrap: "balance" }}>Find the solution that fits where you are.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "24px" }}>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/10" }}>
              <Img name="sol-homes" alt="Family home with rooftop solar" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
              <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>For Homes</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>Backup, solar and storage sized to your home.</p>
              <Link to="/shop" style={{ fontSize: "16px", fontWeight: "600", color: "#0c6417" }}>See products →</Link>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/10" }}>
              <Img name="sol-business" alt="Office or retail space powered by Morph" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
              <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>For Businesses</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>Lower costs and power you can count on.</p>
              <Link to="/contact" style={{ fontSize: "16px", fontWeight: "600", color: "#0c6417" }}>Talk to us →</Link>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/10" }}>
              <Img name="sol-ci" alt="Factory or warehouse with ground-mount array" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
              <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>For Commercial &amp; Industrial</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>Large-scale solar, storage, gas and site power.</p>
              <Link to="/contact" style={{ fontSize: "16px", fontWeight: "600", color: "#0c6417" }}>Talk to us →</Link>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/10" }}>
              <Img name="sol-mobility" alt="Fleet vehicles at EV chargers" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
              <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>For Mobility</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>EV charging and CNG for fleets and operators.</p>
              <Link to="/hub" style={{ fontSize: "16px", fontWeight: "600", color: "#0c6417" }}>See the Hub →</Link>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/10" }}>
              <Img name="sol-developers" alt="New development or estate under construction" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
              <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>For Developers &amp; Owners</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>Clean energy built into new and existing sites.</p>
              <Link to="/contact" style={{ fontSize: "16px", fontWeight: "600", color: "#0c6417" }}>Talk to us →</Link>
            </div>
          </article>
          <article style={{ background: "#f4f7f3", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", aspectRatio: "16/10" }}>
              <Img name="sol-institutions" alt="School, hospital or public building" />
            </div>
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
              <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>For Institutions</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3d5a53", flex: "1" }}>Dependable power for schools, hospitals and public sites.</p>
              <Link to="/contact" style={{ fontSize: "16px", fontWeight: "600", color: "#0c6417" }}>Talk to us →</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
