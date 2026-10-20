export default function Eyebrow({ children }) {
  return (
    <span
      style={{
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#0c6417',
      }}
    >
      {children}
    </span>
  );
}
