/* global React */

// ───────── AH Architectural Monogram ─────────
// A and H formed as load-bearing structural strokes inside a square.
function LRMark({ size = 64, variant = 'mono', accent = false }) {
  // variants: 'mono' (architectural plan), 'stack' (stacked block), 'seal'
  if (variant === 'stack') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: 'block' }}>
        <rect x="2" y="2" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="2" width="60" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* A */}
        <path d="M 10 26 L 18 8 L 26 26 M 13 20 L 23 20" fill="none" stroke="currentColor" strokeWidth="3" />
        {/* H */}
        <path d="M 38 38 L 38 56 M 54 38 L 54 56 M 38 47 L 54 47" fill="none" stroke="currentColor" strokeWidth="3" />
        {accent && <rect x="28" y="28" width="8" height="8" fill="var(--accent)" />}
      </svg>
    );
  }
  if (variant === 'seal') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: 'block' }}>
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="32" y="38" textAnchor="middle" fontFamily="var(--serif)" fontSize="22" fontStyle="italic" fontWeight="300" fill="currentColor">AH</text>
        <text x="32" y="14" textAnchor="middle" fontFamily="var(--mono)" fontSize="5" letterSpacing="2" fill="currentColor" opacity="0.6">★ EST 2026 ★</text>
        <text x="32" y="56" textAnchor="middle" fontFamily="var(--mono)" fontSize="5" letterSpacing="2" fill="currentColor" opacity="0.6">AUXURE HOLDING</text>
        {accent && <circle cx="32" cy="32" r="2" fill="var(--accent)" />}
      </svg>
    );
  }
  // default 'mono' , architectural plan
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: 'block' }}>
      {/* outer frame */}
      <rect x="4" y="4" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* A , two diagonals and crossbar */}
      <rect x="10" y="10" width="6" height="44" fill="currentColor" />
      <rect x="10" y="10" width="20" height="6" fill="currentColor" />
      <rect x="24" y="10" width="6" height="44" fill="currentColor" />
      <rect x="10" y="28" width="20" height="6" fill="currentColor" />
      {/* H , two verticals and crossbar */}
      <rect x="34" y="10" width="6" height="44" fill="currentColor" />
      <rect x="48" y="10" width="6" height="44" fill="currentColor" />
      <rect x="34" y="24" width="20" height="6" fill="currentColor" />
      {accent && <rect x="22" y="22" width="6" height="6" fill="var(--accent)" />}
    </svg>
  );
}

// Wordmark
function LRWordmark({ size = 22 }) {
  return (
    <span style={{
      fontFamily: 'var(--mono)',
      fontSize: size * 0.55,
      letterSpacing: '0.16em',
      fontWeight: 500,
      color: 'var(--fg)',
      textTransform: 'uppercase',
      display: 'inline-flex', alignItems: 'center', gap: 10
    }}>
      <span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--accent)' }} />
      Auxure Holding
    </span>
  );
}

window.LRMark = LRMark;
window.LRWordmark = LRWordmark;
