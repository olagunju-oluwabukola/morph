import { Link } from 'react-router-dom';

/**
 * Full-width call-to-action card used at the bottom of most pages.
 *  tone="yellow" (default) | "dark"
 *  flush: no top padding (used when the previous section already has bottom spacing)
 */
export default function CtaBanner({ title, text, to, label, tone = 'yellow', flush = false, maxWidth = 640 }) {
  const dark = tone === 'dark';
  return (
    <section
      style={{
        padding: flush
          ? '0 clamp(20px,4vw,48px) clamp(72px,9vw,120px)'
          : 'clamp(72px,9vw,120px) clamp(20px,4vw,48px)',
        background: '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          background: dark ? '#13322c' : '#ffcd00',
          color: dark ? '#ffffff' : '#13322c',
          borderRadius: 32,
          padding: 'clamp(40px,6vw,72px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth }}>
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(32px,4vw,52px)',
              lineHeight: 1.04,
              fontWeight: 600,
              letterSpacing: '-0.022em',
              textWrap: 'balance',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.55,
              color: dark ? 'rgba(255,255,255,0.8)' : '#13322c',
            }}
          >
            {text}
          </p>
        </div>
        <Link to={to} className={`cta-btn cta-btn--${tone}`}>
          {label}
        </Link>
      </div>
    </section>
  );
}
