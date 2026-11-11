import { useState } from 'react';

export default function App() {
  const [metricValue, setMetricValue] = useState(75);
  const [activeTab, setActiveTab] = useState('FORMULATIONS');

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">
            Atelier Vespers
          </a>
          <span className="edge-coords">GRASSE · VALENSOLE // WINTER HARVEST</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          <a href="#details" onClick={() => setActiveTab('FORMULATIONS')}>FORMULATIONS</a>
          <a href="#details" onClick={() => setActiveTab('HARVESTS')}>HARVESTS</a>
          <a href="#details" onClick={() => setActiveTab('DISTILLERY')}>DISTILLERY</a>
        </nav>

        <a href="#inquire" className="edge-action-btn">
          ACQUIRE FLACON
        </a>
      </header>

      {/* FULL-BLEED ARCHITECTURAL HERO */}
      <header id="top" className="hero-fullbleed">
        <img
          src="/references/sites/site-5-vespers.jpg"
          alt="ATELIER VESPERS // BOTANICAL RESINS"
          className="hero-bg-photo"
        />
        <div className="hero-scrim" />

        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">DISTILLATION NO. 09 · PROVENCE</span>
            <h1 className="hero-title">
              BOTANICAL RESIN EXTRACTION
              <span className="hero-subline">SLOW DISTILLATION NO. 09.</span>
            </h1>
            <p className="hero-lead">
              Slow cold-extraction resins and wild rockrose aged in dark glass demijohns across Provencal winters.
            </p>
            <a href="#details" className="editorial-cta-btn">
              Explore Specification
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Engineering Readouts">
            <span>180-DAY COLD MACERATION</span>
            <span>·</span>
            <span>1.42% PURE ABSOLUTE</span>
            <span>·</span>
            <span>IFRA 51ST AMENDMENT</span>
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="details" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">BOTANICAL BENCH // ACTIVE HARVEST</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.01em', color: 'var(--ink-primary)' }}>
              Extraction Telemetry &amp; Purity
            </h2>
            <p style={{ color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Slow-macerated botanical resins and wild rockrose tinctures, aged in small glass carboys with unadulterated plant absolutes.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--ink-primary)' }}>
                <span>MACERATION CYCLE ENVELOPE</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>{metricValue}% NOMINAL ({Math.round(metricValue * 1.8)} DAYS COLD CURE)</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={metricValue}
                onChange={(e) => setMetricValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE PROTOCOL</td>
                  <td className="spec-value">{activeTab}</td>
                </tr>
                <tr>
                  <td className="spec-label">COLD MACERATION</td>
                  <td className="spec-value">180 Days in darkened amber glass</td>
                </tr>
                <tr>
                  <td className="spec-label">EXTRACTION YIELD</td>
                  <td className="spec-value">1.42% pure absolutes by weight</td>
                </tr>
                <tr>
                  <td className="spec-label">SOLVENT PURITY</td>
                  <td className="spec-value">Certified organic neutral cane spirit (96.5% ABV)</td>
                </tr>
                <tr>
                  <td className="spec-label">COMPOUNDING STANDARD</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>IFRA 51st Amendment Artisan Registry</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lab-display-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 700 }}>CHROMATOGRAPHIC ASSAY</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)' }}>CYCLE: {metricValue} / 100</span>
            </div>

            <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: 'var(--surface-color)', padding: '1.25rem', border: '1px solid var(--border-soft)' }}>
              {[30, 45, 60, 42, 75, 90, 84, 94, 72, 80, 66, 85].map((base, idx) => {
                const height = Math.min(100, Math.round((base * metricValue) / 75));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(23, 29, 23, 0.15)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
              <span>SOLVENT MATRIX</span>
              <span style={{ color: 'var(--accent-color)', fontWeight: 700 }}>96.5% ABV ORGANIC SPIRIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="inquire" style={{ borderTop: '1px solid var(--border-soft)', padding: '4rem 3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.75rem', letterSpacing: '0.04em', color: 'var(--ink-primary)' }}>
          Atelier Vespers
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>
          GRASSE · VALENSOLE // WINTER HARVEST · COMMISSIONS &amp; SPECIFICATIONS OPEN FOR 2026
        </p>
      </footer>
    </div>
  );
}
