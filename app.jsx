/* global React, LRMark, LRWordmark, Loader, Cursor, TaglineRotator, Scramble, Reveal, LiveClock, SplitWords, EasterEgg, HeroBlueprint, SubGraphic, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSlider, TweakSelect */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "graphite",
  "logoVariant": "seal",
  "tagline": "rotate",
  "intensity": 9,
  "accent": "green"
} /*EDITMODE-END*/;

const TAGLINES = [
"Building infrastructure for Nigeria's next economy.",
"The infrastructure behind Nigeria's ambition.",
"We build what Nigeria's economy runs on."];


const TICKER_ITEMS = [
['LR.GROUP', 'HOLDING/OPERATING'],
['LAND REPUBLIC', 'ACTIVE — LAGOS / OYO / IMO'],
['NGN', '10B+ TRANSACTED'],
['OMM PARTNERSHIP', 'OYO STATE GOVT — 1,000 UNITS'],
['LR CAPITAL', 'COMING SOON'],
['THESIS', 'COLD CHAIN / LOGISTICS / PROCESSING'],
['STATUS', '● BUILDING'],
['REV', '2026.04']];


function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply palette via html class
  React.useEffect(() => {
    const map = { graphite: '', bone: 'theme-bone', oxblood: 'theme-oxblood', forest: 'theme-forest' };
    document.documentElement.className = map[t.palette] || '';
  }, [t.palette]);

  // accent override
  React.useEffect(() => {
    const accents = {
      orange: '#ff5b1f',
      gold: '#d4a253',
      signal: '#f0e3d0',
      green: '#7ab87a'
    };
    document.documentElement.style.setProperty('--accent', accents[t.accent] || accents.orange);
  }, [t.accent]);

  const taglineToShow = t.tagline === 'rotate' ? null : TAGLINES[Number(t.tagline.slice(-1)) - 1];

  return (
    <>
      <Loader />
      <Cursor />
      <EasterEgg />

      <div className="shell">
        {/* Frame */}
        <div className="frame"><div className="frame-r" /><div className="frame-b" /></div>

        {/* Top bar */}
        <div className="topbar">
          <div className="topbar-l">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--fg)' }}>
              <LRMark size={20} variant={t.logoVariant} accent />
              <b>THE LR GROUP</b>
            </span>
            <span className="meta-hide">HOLDING / OPERATING CO.</span>
          </div>
          <div className="topbar-r">
            <span className="meta-hide">LAGOS — 06°27′17″N / 03°25′40″E</span>
            <span><LiveClock /></span>
            <span><i className="dot" />ACTIVE</span>
          </div>
        </div>

        {/* Side rails */}
        <div className="rail left">SHEET <b>A.00 — INDEX</b> / REV 2026.04</div>
        <div className="rail right">© 2026 — <b>BUILT IN LAGOS</b></div>

        <main>
          {/* HERO */}
          <section className="hero" data-screen-label="01 Hero">
            <div className="hero-eyebrow">
              <span>◆</span>
              <span>FILE</span>
              <b>00.01 — INDEX</b>
              <span style={{ marginLeft: 'auto' }} className="num">2026 / Q2</span>
              <span>—</span>
              <span>HOLDING CO. / FAMILY OF VENTURES</span>
            </div>

            <h1 className="hero-headline">
              <SplitWords text="Building the infrastructure" baseDelay={1} />
              <br />
              <SplitWords text="<em>Nigeria&rsquo;s next economy</em> runs on." baseDelay={4} />
            </h1>

            <div className="hero-aside">
              <p style={{ fontFamily: "Inter" }}>
                <b>The LR Group</b> is the parent company of <b>Land Republic</b>, and a family of ventures building the physical and financial infrastructure that powers Nigeria&rsquo;s next economy.
              </p>

              {t.tagline === 'rotate' ?
              <TaglineRotator taglines={TAGLINES} /> :

              <div className="hero-tagline-rotator">
                    <div className="label">CURRENT THESIS</div>
                    <div className="lines"><div className="line active">{taglineToShow}</div></div>
                  </div>

              }

              <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-dim)' }}>
                <span>EST. <span style={{ color: 'var(--fg)' }}>2024</span></span>
                <span>HQ <span style={{ color: 'var(--fg)' }}>LAGOS, NG</span></span>
                <span>VENTURES <span style={{ color: 'var(--accent)' }}>02</span></span>
              </div>
            </div>

            <HeroBlueprint />
          </section>

          {/* ABOUT */}
          <Reveal as="section" className="section-head" delay={0}>
            <div className="section-head-no">§ 02 — ABOUT</div>
            <h2 className="section-head-title">
              A holding company built on a single thesis: <em>Nigeria&rsquo;s next economic leap requires infrastructure built by people who understand the market.</em>
            </h2>
          </Reveal>

          <Reveal as="section" className="about" data-screen-label="02 About">
            <div className="about-meta">
              <b>Filed</b>
              <span>2024 — LAGOS</span>
              <b style={{ marginTop: 12 }}>Structure</b>
              <span>HOLDING CO. + 2 OPERATING SUBSIDIARIES</span>
              <b style={{ marginTop: 12 }}>Sectors</b>
              <span>REAL ESTATE</span>
              <span>CRITICAL INFRASTRUCTURE</span>
              <span>STRATEGIC CAPITAL</span>
            </div>

            <div className="about-body">
              <p>
                Founded as the holding company behind <b>Land Republic</b>, The LR Group has expanded into a portfolio of businesses united by a single thesis.
              </p>
              <p>
                We develop real estate. We deploy capital into critical supply chain and logistics infrastructure. We build technology platforms that bring transparency and trust to industries that need both.
              </p>
              <p style={{ color: 'var(--fg-dim)' }}>
                Every venture in our portfolio exists because we identified a structural gap — and decided to close it.
              </p>
            </div>

            <div className="about-thesis">
              {[
              ['01', 'PHYSICAL', 'Real estate, construction, land development at scale.'],
              ['02', 'FINANCIAL', 'Strategic capital deployed into structural gaps.'],
              ['03', 'OPERATIONAL', 'Cold chain, logistics, processing, manufacturing.'],
              ['04', 'DIGITAL', 'Platforms that bring transparency to opaque markets.']].
              map(([n, k, d]) =>
              <div key={n} className="about-thesis-item">
                  <span className="n">{n}</span>
                  <span className="t"><b>{k}</b>{d}</span>
                </div>
              )}
            </div>
          </Reveal>

          {/* SUBSIDIARIES */}
          <Reveal as="section" className="section-head" delay={0}>
            <div className="section-head-no">§ 03 — SUBSIDIARIES</div>
            <h2 className="section-head-title">
              Two operating companies. <em>One thesis.</em> Both load-bearing.
            </h2>
          </Reveal>

          <section className="subs" data-screen-label="03 Subsidiaries">
            <Reveal as="div" className="sub" delay={0}>
              <div className="sub-no">
                <span>SUB.01 / OPERATING</span>
                <span className="status"><i className="dot" />ACTIVE</span>
              </div>
              <h3 className="sub-name">Land <em>Republic</em>.</h3>
              <p className="sub-oneliner">
                <b>Real estate development for modern Nigeria.</b> Land Republic acquires, develops, and delivers premium real estate — from estate communities and commercial hubs to private construction.
              </p>

              <SubGraphic kind="land-republic" />

              <div className="sub-stats">
                <div className="sub-stat">
                  <div className="v">10B<em>+</em></div>
                  <div className="l">NGN TRANSACTED</div>
                </div>
                <div className="sub-stat">
                  <div className="v">1,000<em>U</em></div>
                  <div className="l">OMM / OYO PPP</div>
                </div>
                <div className="sub-stat">
                  <div className="v">04</div>
                  <div className="l">ACTIVE STATES</div>
                </div>
                <div className="sub-stat">
                  <div className="v">3<em>x</em></div>
                  <div className="l">BUYER SEGMENTS</div>
                </div>
              </div>

              <div className="sub-locations">
                <span>LAGOS</span><span>OYO</span><span>IMO</span><span>+ EXPANDING</span>
              </div>

              <a className="sub-link hoverable" href="https://landrepublic.co" target="_blank" rel="noreferrer">
                <span>VISIT LANDREPUBLIC.CO</span>
                <span className="arrow">→</span>
              </a>
            </Reveal>

            <div className="sub-divider" />

            <Reveal as="div" className="sub" delay={150}>
              <div className="sub-no">
                <span>SUB.02 / FORMING</span>
                <span className="status soon"><i className="dot" />COMING SOON</span>
              </div>
              <h3 className="sub-name">LR <em>Capital</em>.</h3>
              <p className="sub-oneliner">
                <b>Infrastructure deployments for Africa&rsquo;s growth.</b> LR Capital identifies and invests in critical infrastructure gaps — cold chain, agricultural supply, and platforms that make markets work.
              </p>

              <SubGraphic kind="lr-capital" />

              <div className="sub-thesis-list">
                <div className="item">
                  <span className="n">01</span>
                  <span>Cold chain / post-harvest infrastructure</span>
                  <span className="s">PHYS</span>
                </div>
                <div className="item">
                  <span className="n">02</span>
                  <span>Supply chain &amp; logistics</span>
                  <span className="s">OPS</span>
                </div>
                <div className="item">
                  <span className="n">03</span>
                  <span>Technology platforms — markets that work</span>
                  <span className="s">DIGITAL</span>
                </div>
                <div className="item">
                  <span className="n">04</span>
                  <span>Processing &amp; manufacturing infrastructure</span>
                  <span className="s">PHYS</span>
                </div>
              </div>

              <a className="sub-link disabled" aria-disabled="true">
                <span>BRIEFINGS Q4 2026</span>
                <span className="arrow">◇</span>
              </a>
            </Reveal>
          </section>

          {/* FOOTER */}
          <Reveal as="footer" className="foot" data-screen-label="04 Footer">
            <div className="foot-col">
              <h4>Contact</h4>
              <a href="mailto:hello@landrepublic.co">hello@landrepublic.co</a>
              <p style={{ color: 'var(--fg-dim)' }}>For investment, partnerships &amp; press.</p>
            </div>
            <div className="foot-col">
              <h4>Ventures</h4>
              <a href="https://landrepublic.co" target="_blank" rel="noreferrer" className="hoverable">Land Republic ↗</a>
              <p style={{ color: 'var(--fg-dim)' }}>LR Capital — soon</p>
            </div>
            <div className="foot-col">
              <h4>HQ</h4>
              <p>Lagos, Nigeria</p>
              <p style={{ color: 'var(--fg-dim)' }}>06°27′17″N<br />03°25′40″E</p>
            </div>
            <div className="foot-col">
              <h4>Index</h4>
              <p style={{ color: 'var(--fg-dim)' }}>§01 Hero<br />§02 About<br />§03 Subsidiaries<br />§04 Contact</p>
            </div>

            <div className="foot-bottom" style={{ gridColumn: '1 / -1' }}>
              <div>
                <div style={{ marginBottom: 8 }}>© 2026 THE LR GROUP — ALL RIGHTS RESERVED.</div>
                <div style={{ color: 'var(--fg-dim)' }}>BUILT IN LAGOS · TYPESET IN FRAUNCES &amp; JETBRAINS MONO</div>
                <div style={{ color: 'var(--fg-dim)', marginTop: 4, fontSize: 9.5 }}>↳ TYPE &ldquo;LR&rdquo; FOR EASTER EGG</div>
              </div>
              <div className="glyph"><em>L</em>R<span style={{ color: 'var(--accent)' }}>.</span></div>
            </div>
          </Reveal>
        </main>

        {/* Ticker */}
        <div className="ticker">
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map(([k, v], i) =>
            <span key={i}>
                <span className="sep">◆</span>
                <span style={{ color: 'var(--fg-dim)' }}>{k}</span>
                <span className="num">{v}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakRadio label="Theme" value={t.palette}
        options={[
        { value: 'graphite', label: 'Graphite' },
        { value: 'bone', label: 'Bone' },
        { value: 'oxblood', label: 'Oxblood' },
        { value: 'forest', label: 'Forest' }]
        }
        onChange={(v) => setTweak('palette', v)} />
        <TweakRadio label="Accent" value={t.accent}
        options={[
        { value: 'orange', label: 'Signal' },
        { value: 'gold', label: 'Gold' },
        { value: 'green', label: 'Green' },
        { value: 'signal', label: 'Bone' }]
        }
        onChange={(v) => setTweak('accent', v)} />

        <TweakSection label="Logo" />
        <TweakRadio label="Variant" value={t.logoVariant}
        options={[
        { value: 'mono', label: 'Plan' },
        { value: 'stack', label: 'Stack' },
        { value: 'seal', label: 'Seal' }]
        }
        onChange={(v) => setTweak('logoVariant', v)} />

        <TweakSection label="Tagline" />
        <TweakSelect label="Show" value={t.tagline}
        options={[
        { value: 'rotate', label: 'Rotate all 3' },
        { value: 'tag1', label: '1 — Building infrastructure...' },
        { value: 'tag2', label: '2 — The infrastructure behind...' },
        { value: 'tag3', label: '3 — We build what Nigeria...' }]
        }
        onChange={(v) => setTweak('tagline', v)} />

        <TweakSection label="Motion" />
        <TweakSlider label="Intensity" value={t.intensity} min={1} max={10}
        onChange={(v) => setTweak('intensity', v)} />
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);