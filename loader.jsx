/* global React, LRMark */

function Loader() {
  const [phase, setPhase] = React.useState('loading'); // loading -> parting -> done
  const [pct, setPct] = React.useState(0);
  const [status, setStatus] = React.useState('INITIALIZING SURVEY');

  React.useEffect(() => {
    const t1 = setInterval(() => setPct((p) => Math.min(100, p + 1.6)), 30);
    const stages = [
      [400, 'SURVEYING SITE'],
      [900, 'PLOTTING COORDINATES'],
      [1400, 'STRUCTURAL ASSEMBLY'],
      [1900, 'INTEGRITY CHECK'],
      [2300, 'READY']
    ];
    const timers = stages.map(([t, s]) => setTimeout(() => setStatus(s), t));
    const t2 = setTimeout(() => setPhase('parting'), 2700);
    const t3 = setTimeout(() => setPhase('done'), 3800);
    return () => {
      clearInterval(t1); clearTimeout(t2); clearTimeout(t3);
      timers.forEach(clearTimeout);
    };
  }, []);

  const cls = `loader${phase === 'parting' ? ' parting' : ''}${phase === 'done' ? ' done' : ''}`;

  return (
    <div className={cls}>
      <div className="loader-grid" />
      <div className="loader-corners"><i /><b /></div>

      <div className="loader-readout">
        <span>LAT</span><span>06°27′17″ N</span>
        <span>LNG</span><span>03°25′40″ E</span>
        <span>NODE</span><span>LAGOS / NG</span>
        <span>REV</span><span>2026.04</span>
      </div>
      <div className="loader-readout-r">
        THE LR GROUP<br />
        HOLDING / OPERATING CO.<br />
        <span style={{ color: 'var(--accent)' }}>● LIVE</span>
      </div>

      <div className="loader-stack">
        <div className="loader-mark loader-mark-seal">
          <svg viewBox="0 0 200 200">
            {/* outer ring */}
            <circle className="stroke seal-ring-out" cx="100" cy="100" r="94" />
            {/* inner ring */}
            <circle className="stroke stroke-2 seal-ring-in" cx="100" cy="100" r="80" />
            {/* tick marks around the ring */}
            <g className="seal-ticks">
              {Array.from({ length: 24 }).map((_, i) => {
                const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
                const r1 = 86, r2 = 90;
                const x1 = 100 + Math.cos(a) * r1;
                const y1 = 100 + Math.sin(a) * r1;
                const x2 = 100 + Math.cos(a) * r2;
                const y2 = 100 + Math.sin(a) * r2;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
              })}
            </g>
            {/* upper curved label path */}
            <defs>
              <path id="seal-top-arc" d="M 26 100 A 74 74 0 0 1 174 100" fill="none" />
              <path id="seal-bot-arc" d="M 30 100 A 70 70 0 0 0 170 100" fill="none" />
            </defs>
            <text className="seal-text" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="4" fill="currentColor">
              <textPath href="#seal-top-arc" startOffset="50%" textAnchor="middle">★ THE LR GROUP ★ EST 2024 ★</textPath>
            </text>
            <text className="seal-text seal-text-bot" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="3" fill="currentColor" opacity="0.6">
              <textPath href="#seal-bot-arc" startOffset="50%" textAnchor="middle">LAGOS · NIGERIA · HOLDING CO.</textPath>
            </text>
            {/* center LR */}
            <text className="seal-lr stroke-3" x="100" y="116" textAnchor="middle"
                  fontFamily="Fraunces, serif" fontSize="64" fontStyle="italic" fontWeight="300" fill="currentColor">LR</text>
            {/* center accent dot */}
            <circle className="fill-rect" cx="100" cy="100" r="3" fill="var(--accent)" />
          </svg>
        </div>
        <div className="loader-tag">
          THE <b>LR</b> GROUP , <b>HOLDING CO.</b>
        </div>
      </div>

      <div className="loader-progress">
        <span className="loader-progress-status">{status}</span>
        <div className="loader-progress-bar"></div>
        <span className="loader-progress-pct">{String(Math.floor(pct)).padStart(3, '0')}%</span>
      </div>

      <div className="loader-slab top" />
      <div className="loader-slab bot" />
    </div>
  );
}

window.Loader = Loader;
