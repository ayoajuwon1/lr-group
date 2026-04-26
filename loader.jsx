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
        <div className="loader-mark">
          <svg viewBox="0 0 200 200">
            <rect className="stroke" x="20" y="20" width="160" height="160" />
            <path className="stroke stroke-2" d="M 50 50 L 50 130 L 110 130" />
            <path className="stroke stroke-3" d="M 110 50 L 110 150 M 110 50 L 165 50 L 165 95 L 110 95 M 145 95 L 165 150" />
            <rect className="fill-rect" x="74" y="74" width="18" height="18" />
          </svg>
        </div>
        <div className="loader-tag">
          THE <b>LR</b> GROUP — <b>HOLDING CO.</b>
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
