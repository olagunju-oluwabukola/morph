import { useState } from 'react';

const TOPICS = [
  'Energy Shop: products & systems',
  'Energy Hub: partnership or visit',
  'Solutions for my business / site',
  'Partnership or investment',
  'Something else',
];

function Field({ label, children }) {
  return (
    <label className="mh-label">
      {label}
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to your backend / form service here.
    // Collected values: new FormData(e.currentTarget) + TOPICS[topic]
    setSent(true);
  };

  return (
    <div
      style={{
        background: '#ffffff',
        color: '#13322c',
        borderRadius: 28,
        padding: 'clamp(28px,4vw,44px)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
      }}
    >
      {sent ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', padding: '40px 0' }}>
          <span
            style={{
              width: 56, height: 56, borderRadius: '50%', background: '#17bc2e', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 600,
            }}
          >
            ✓
          </span>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: '-0.018em' }}>Thanks, message received.</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: '#3d5a53' }}>
            The right person on our team will be in touch shortly.
          </p>
          <button type="button" className="mh-reset" onClick={() => setSent(false)}>
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ margin: '0 0 4px', fontSize: 28, fontWeight: 600, letterSpacing: '-0.025em' }}>Send us a message</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 16 }}>
            <Field label="Full name">
              <input className="mh-field" name="name" type="text" required placeholder="Your name" />
            </Field>
            <Field label="Organisation">
              <input className="mh-field" name="organisation" type="text" placeholder="Company or institution" />
            </Field>
          </div>

          <Field label="Email">
            <input className="mh-field" name="email" type="email" required placeholder="you@example.com" />
          </Field>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>I'm reaching out about</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {TOPICS.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  className={`mh-chip${i === topic ? ' mh-chip--active' : ''}`}
                  onClick={() => setTopic(i)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <Field label="Tell us a bit more">
            <textarea
              className="mh-field mh-field--area"
              name="message"
              rows={5}
              placeholder="Your site, load, timeline or partnership idea"
            />
          </Field>

          <button type="submit" className="mh-submit">Send message</button>
        </form>
      )}
    </div>
  );
}
