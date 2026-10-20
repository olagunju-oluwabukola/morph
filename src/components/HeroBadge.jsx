export default function HeroBadge({ children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignSelf: 'flex-start',
        alignItems: 'center',
        gap: 10,
        background: 'rgba(23,188,46,0.16)',
        border: '1px solid rgba(23,188,46,0.5)',
        borderRadius: 999,
        padding: '8px 16px',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#7ef29a',
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#17bc2e' }} />
      {children}
    </span>
  );
}
