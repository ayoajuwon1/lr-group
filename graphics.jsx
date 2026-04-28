/* global React, LRMark, Reveal, Scramble */

// Generative architectural blueprint for hero
function HeroBlueprint() {
  return (
    <svg className="hero-blueprint" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--line-2)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="600" fill="url(#bp-grid)" />
      {/* Isometric building scaffold */}
      <g stroke="var(--fg)" strokeWidth="1" fill="none">
        {/* base plate */}
        <path d="M 80 480 L 200 540 L 320 480 L 200 420 Z" />
        {/* tower 1 */}
        <path d="M 100 460 L 100 320 L 180 360 L 180 500" />
        <path d="M 100 320 L 180 280 L 180 360" />
        <path d="M 100 460 L 180 500" strokeDasharray="2,2" />
        {/* tower 2 - taller */}
        <path d="M 220 380 L 220 180 L 300 220 L 300 420" />
        <path d="M 220 180 L 300 140 L 300 220" />
        {/* floor lines */}
        <path d="M 220 240 L 300 280" opacity=".5" />
        <path d="M 220 280 L 300 320" opacity=".5" />
        <path d="M 220 320 L 300 360" opacity=".5" />
        <path d="M 100 380 L 180 420" opacity=".5" />
        {/* dimension lines */}
        <path d="M 60 320 L 60 460" />
        <path d="M 56 320 L 64 320" />
        <path d="M 56 460 L 64 460" />
        <path d="M 200 100 L 320 100" />
        <path d="M 200 96 L 200 104" />
        <path d="M 320 96 L 320 104" />
      </g>
      <g fontFamily="var(--mono)" fontSize="9" fill="var(--accent)" letterSpacing="0.04em">
        <text x="44" y="395" textAnchor="end">14M</text>
        <text x="260" y="92" textAnchor="middle">120M</text>
        <text x="200" y="565" textAnchor="middle">PARCEL , 1,000 UNITS</text>
        <text x="100" y="312" fill="var(--fg-dim)">A.01</text>
        <text x="220" y="172" fill="var(--fg-dim)">A.02</text>
      </g>
    </svg>
  );
}

// Subsidiary blueprint graphic , different per sub
function SubGraphic({ kind }) {
  if (kind === 'land-republic') {
    return (
      <div className="sub-graphic">
        <div className="sub-graphic-label">FIG. 01 , DEVELOPMENT FOOTPRINT</div>
        <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          <g stroke="var(--fg)" strokeWidth="1" fill="none">
            {/* parcel grid */}
            {Array.from({ length: 6 }).map((_, r) =>
              Array.from({ length: 10 }).map((_, c) => {
                const filled = (r + c) % 3 === 0;
                return (
                  <rect key={`${r}-${c}`} x={20 + c * 36} y={40 + r * 32} width="34" height="30"
                    fill={filled ? 'var(--accent)' : 'transparent'}
                    fillOpacity={filled ? '0.15' : '0'}
                    stroke="var(--fg-dim)" strokeWidth="0.6" />
                );
              })
            )}
            {/* main road */}
            <path d="M 0 140 L 400 140" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M 0 142 L 400 142" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="6,4" opacity="0.5" />
            {/* compass */}
            <g transform="translate(370,30)">
              <circle r="14" stroke="var(--fg)" fill="none" />
              <path d="M 0 -12 L 0 12 M -10 0 L 10 0" stroke="var(--fg)" />
              <text y="-18" textAnchor="middle" fontFamily="var(--mono)" fontSize="8" fill="var(--accent)">N</text>
            </g>
          </g>
          <text x="20" y="32" fontFamily="var(--mono)" fontSize="8" fill="var(--fg-dim)" letterSpacing="0.08em">SCALE 1:2000 , OYO/LAGOS COMPOSITE</text>
          <text x="20" y="260" fontFamily="var(--mono)" fontSize="8" fill="var(--fg-dim)" letterSpacing="0.08em">SHEET A.01 , PHASE I+II</text>
        </svg>
      </div>
    );
  }
  // LR Capital , abstract supply chain
  return (
    <div className="sub-graphic">
      <div className="sub-graphic-label">FIG. 02 , DEPLOYMENT MAP</div>
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
        <g stroke="var(--fg-dim)" strokeWidth="0.6" fill="none">
          {/* network nodes */}
          {[
            [60, 80], [140, 60], [220, 100], [300, 70], [350, 130],
            [80, 180], [180, 200], [260, 180], [320, 220], [120, 240]
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="3" fill="var(--fg)" stroke="none" />
              <circle cx={x} cy={y} r="10" stroke="var(--fg-dim)" strokeDasharray="2,2" />
            </g>
          ))}
          {/* connections */}
          <path d="M 60 80 L 140 60 L 220 100 L 300 70 L 350 130 L 320 220 L 260 180 L 180 200 L 120 240 L 80 180 L 60 80" stroke="var(--accent)" strokeWidth="1" opacity="0.7" />
          <path d="M 140 60 L 180 200 M 220 100 L 260 180 M 80 180 L 220 100" strokeDasharray="3,3" />
        </g>
        {/* labels */}
        <g fontFamily="var(--mono)" fontSize="8" fill="var(--accent)" letterSpacing="0.06em">
          <text x="60" y="68">COLD</text>
          <text x="140" y="48">PROCESSING</text>
          <text x="220" y="88">LOGISTICS</text>
          <text x="300" y="58">PORT</text>
          <text x="350" y="118">EXPORT</text>
          <text x="80" y="168" fill="var(--fg-dim)">FARM</text>
          <text x="180" y="216" fill="var(--fg-dim)">STORE</text>
          <text x="260" y="168" fill="var(--fg-dim)">DIST.</text>
          <text x="320" y="208" fill="var(--fg-dim)">RETAIL</text>
          <text x="120" y="252" fill="var(--fg-dim)">LAB</text>
        </g>
        <text x="20" y="32" fontFamily="var(--mono)" fontSize="8" fill="var(--fg-dim)" letterSpacing="0.08em">CRITICAL INFRASTRUCTURE , THESIS MAP</text>
      </svg>
    </div>
  );
}

window.HeroBlueprint = HeroBlueprint;
window.SubGraphic = SubGraphic;
