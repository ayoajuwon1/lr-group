/* global React */

// Custom cursor with crosshair + live coordinate readout
function Cursor() {
  const ref = React.useRef(null);
  const coordRef = React.useRef(null);
  const [hovering, setHovering] = React.useState(false);
  const lastPos = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const onMove = (e) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (coordRef.current) {
        const x = String(Math.round(e.clientX)).padStart(4, '0');
        const y = String(Math.round(e.clientY)).padStart(4, '0');
        coordRef.current.textContent = `X.${x} / Y.${y}`;
      }
      const target = e.target;
      const interactive = target?.closest && target.closest('a, button, .hoverable, [role="button"]');
      setHovering(!!interactive);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={ref} className={`cursor${hovering ? ' hover' : ''}`}>
      <div className="cursor-cross" />
      <div ref={coordRef} className="cursor-coord">X.0000 / Y.0000</div>
    </div>
  );
}

// Rotating tagline
function TaglineRotator({ taglines, speed = 3500 }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % taglines.length), speed);
    return () => clearInterval(t);
  }, [taglines.length, speed]);
  return (
    <div className="hero-tagline-rotator">
      <div className="label">CURRENT THESIS — ROTATING</div>
      <div className="lines">
        {taglines.map((t, idx) => (
          <div key={idx} className={`line${idx === i ? ' active' : ''}`}>{t}</div>
        ))}
      </div>
    </div>
  );
}

// Scrambling text — type that resolves from glyph noise
function Scramble({ text, trigger = true, duration = 1200, className }) {
  const [out, setOut] = React.useState(text);
  React.useEffect(() => {
    if (!trigger) { setOut(text); return; }
    const chars = '!<>-_\\/[]{}—=+*^?#01';
    const start = performance.now();
    let raf;
    const step = () => {
      const t = (performance.now() - start) / duration;
      if (t >= 1) { setOut(text); return; }
      const settled = Math.floor(text.length * t);
      let s = '';
      for (let i = 0; i < text.length; i++) {
        if (i < settled || text[i] === ' ') s += text[i];
        else s += chars[Math.floor(Math.random() * chars.length)];
      }
      setOut(s);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [text, trigger, duration]);
  return <span className={className}>{out}</span>;
}

// Reveal observer
function Reveal({ children, as: As = 'div', className = '', delay = 0 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in'), delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <As ref={ref} className={`reveal ${className}`}>{children}</As>;
}

// Live clock for top bar
function LiveClock() {
  const [t, setT] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  // Lagos = UTC+1, no DST
  const utc = t.getTime() + t.getTimezoneOffset() * 60000;
  const lagos = new Date(utc + 3600000);
  const hh = String(lagos.getHours()).padStart(2, '0');
  const mm = String(lagos.getMinutes()).padStart(2, '0');
  const ss = String(lagos.getSeconds()).padStart(2, '0');
  return <span style={{ color: 'var(--fg)', fontVariantNumeric: 'tabular-nums' }}>{hh}:{mm}:{ss} WAT</span>;
}

// Splits headline into animated words
function SplitWords({ text, baseDelay = 1 }) {
  const words = text.split(' ');
  return words.map((w, i) => (
    <React.Fragment key={i}>
      <span className={`word d${Math.min(7, baseDelay + i)}`}>
        <span dangerouslySetInnerHTML={{ __html: w }} />
      </span>
      {i < words.length - 1 ? ' ' : ''}
    </React.Fragment>
  ));
}

// Easter egg: type "LR"
function EasterEgg() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    let buffer = '';
    const onKey = (e) => {
      if (e.key && e.key.length === 1) {
        buffer = (buffer + e.key.toLowerCase()).slice(-2);
        if (buffer === 'lr') {
          setShow(true);
          setTimeout(() => setShow(false), 2400);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <div className={`egg${show ? ' show' : ''}`}>
      <b>◆ FOUND IT ◆</b>
      LOAD-BEARING / ROOTED<br />
      KEEP BUILDING.
    </div>
  );
}

window.Cursor = Cursor;
window.TaglineRotator = TaglineRotator;
window.Scramble = Scramble;
window.Reveal = Reveal;
window.LiveClock = LiveClock;
window.SplitWords = SplitWords;
window.EasterEgg = EasterEgg;
