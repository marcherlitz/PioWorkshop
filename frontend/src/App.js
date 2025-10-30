import React from 'react';
import './App.css';

function App() {
  const images = [
    '3DB559B2-19CD-4E8B-B8BC-672A890D0DAB.JPG',
    '473DF10E-6B12-4B57-88AD-DE7530921075.JPG',
    '6D954852-1241-47B4-A08E-FF13387DF8E2.JPG',
    '8F55977A-1C8F-4D19-A129-B0C75B6ACB87.JPG',
    '9808BACB-C200-4873-935B-1658F3149538.JPG',
    '99913936-44E7-45A2-BB43-1CFD1AD56C18_1_105_c.jpeg',
    'BFF2E359-FA36-476C-95F3-CBC0A22D60A8.JPG',
    'D3C745C4-F792-425D-9580-897AB880163A_1_105_c.jpeg',
    'DSC04429.JPG',
    'DSC04430.JPG',
    'DSC05102.JPG',
    'DSC05106.JPG',
    'DSC05108.JPG',
    'FA4CE7DC-58F1-4B46-97EA-1938DEA442C2.JPG'
  ];

  const agendaItems = [
    { phase: '1. Ignite', time: '13:00 – 13:20', title: 'Warum 80 % der KI-Projekte scheitern', description: 'Einstieg, Erwartung, Definition der größten Umsetzungshürden' },
    { phase: '2. Decode', time: '13:20 – 13:50', title: 'Real Cases & Lessons Learned', description: 'Beispiele aus Unternehmen, die KI umgesetzt haben – Erfolge & Stolpersteine' },
    { phase: '3. Power Stack Showcase', time: '13:50 – 14:20', title: 'Wie Piovation & Do IT Now Produktivität schaffen', description: 'Live-Einblick in: Piovation AI Pipeline Ops, Do IT Now HPC Integration, AMD / Supermicro Hardware Power' },
    { phase: '4. Challenge Clusters', time: '14:20 – 15:00', title: 'Wo es bei uns brennt', description: 'Teilnehmer teilen ihre größten Umsetzungsprobleme – Bildung von Themenclustern' },
    { phase: '5. Solution Labs', time: '15:00 – 16:00', title: 'Von der Hürde zum Lösungsansatz', description: 'Mixed Teams entwickeln für jedes Cluster konkrete Lösungsansätze (keine Theorie – echte Roadmaps)' },
    { phase: '6. Commitment & Next Steps', time: '16:00 – 16:45', title: 'Vom Workshop zum Projektstart', description: 'Zusammenführung, Verantwortlichkeiten, Termine für Umsetzung' },
    { phase: '7. Wrap-Up', time: '16:45 – 17:00', title: 'AI Factory 2026 – Das Zielbild', description: 'Vision, Foto, Follow-Up-Plan' }
  ];

  const comparisonItems = [
    { typical: 'Viele Folien, wenig Output', workshop: 'Hands-on, reale Cases, klare Projektideen' },
    { typical: 'Fokus auf Algorithmen', workshop: 'Fokus auf Umsetzung, Integration & Betrieb' },
    { typical: 'Theoretische Frameworks', workshop: 'Praktische, validierte Architekturen' },
    { typical: 'Kein technischer Tiefgang', workshop: 'Deep Dive in MLOps, Data Pipeline & Infra' },
    { typical: 'Kein Follow-up', workshop: 'Klare Next Steps & Verantwortlichkeiten' }
  ];

  const industries = [
    { name: 'Pharma / Life Science', issue: 'AI-basierte Forschung, aber Bottlenecks bei Datenzugriff & Skalierung' },
    { name: 'Automotive / Manufacturing', issue: 'Predictive Maintenance & Quality Control, aber Probleme bei Modell-Deployment' },
    { name: 'Energy / Utilities', issue: 'AI-Optimierung von Netzen & Turbinen, aber Integrationslücken in HPC-Infrastruktur' },
    { name: 'Public Research / AI Labs', issue: 'starke KI-Teams, aber keine produktive Pipeline' },
    { name: 'Finance / Insurance', issue: 'AI-Scoring & Forecasts, aber Compliance- und Deployment-Hürden' },
    { name: 'Cloud Service Providers', issue: 'KI-Dienste & Infrastruktur anbieten, aber Herausforderungen bei Multi-Cloud-Integration & Performance-Optimierung' }
  ];

  return (
    <div className="App">
      <header className="hero-section">
        <div className="hero-image-wrapper">
          <img src="/images/FA4CE7DC-58F1-4B46-97EA-1938DEA442C2.JPG" alt="AI Factory Event" className="hero-background-image" />
          <div className="hero-overlay"></div>
          <div className="hero-content-overlay">
            <div className="hero-badges">
              <span className="hero-badge">YOU ARE INVITED</span>
              <span className="hero-badge">AI TALKS</span>
            </div>
            <h1 className="hero-title">AI Factory 2026</h1>
            <h2 className="hero-subtitle">From Lab to Launchpad</h2>
            <p className="hero-description">Wie Piovation & Do IT Now Unternehmen helfen, KI wirklich produktiv zu machen.</p>
            <div className="hero-logos">
              <img src="/logos/doitnow.png" alt="DO IT NOW" className="hero-partner-logo" />
              <img src="/logos/AMD_Logo.png" alt="AMD" className="hero-partner-logo hero-partner-logo-amd" />
              <img src="/logos/pv_white.png" alt="PioVation" className="hero-partner-logo hero-partner-logo-piovation" />
            </div>
            <div className="hero-meta">
              <span className="hero-date">Wednesday, 03 December 2025</span>
              <span className="hero-time">13:00-17:00 (CET)</span>
            </div>
            <a 
              href="https://2e9p77.share-eu1.hsforms.com/20Rh8LrDTSiqN_QK7t_JaOg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-cta"
            >
              Register Now
            </a>
          </div>
        </div>
      </header>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-heading">Ziel des Workshops</h2>
            <p className="intro-text">
              Viele Unternehmen experimentieren mit KI – doch <strong>80 % der Projekte bleiben in der Konzeptphase stecken</strong>. Grund: Integration, Infrastruktur und Skalierung scheitern an Realität, Budgets oder Fachwissen.
            </p>
            <p className="intro-text">
              Der halbtägige Workshop „AI Factory 2026 – From Lab to Launchpad" bringt Entscheider, Data Scientists und IT-Architekten zusammen, die an genau dieser Stelle feststecken – und gemeinsam mit Piovation & Do IT Now lernen, wie man KI-Systeme schnell, sicher und produktiv bekommt.
            </p>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container">
          <h2 className="section-heading">Warum dieser Workshop anders ist</h2>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-col-header">Typische KI-Workshops</div>
              <div className="comparison-col-header highlight">AI Factory 2026 – From Lab to Launchpad</div>
            </div>
            <div className="comparison-body">
              {comparisonItems.map((item, index) => (
                <div key={index} className="comparison-row">
                  <div className="comparison-col">{item.typical}</div>
                  <div className="comparison-col highlight">{item.workshop}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="target-section">
        <div className="container">
          <h2 className="section-heading">Für wen ist der Workshop gedacht?</h2>
          <p className="target-intro">
            Teilnehmen sollen Unternehmen und Organisationen, die KI-Projekte real im Einsatz oder in Vorbereitung haben, aber Schwierigkeiten in der Umsetzung erleben – etwa mit Datenintegration, Modellbetrieb, Infrastruktur oder Governance.
          </p>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-issue">{industry.issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-column">
              <div className="info-card">
                <h2 className="section-title">Der Workshop in Kürze</h2>
                <div className="workshop-specs">
                  <div className="spec-item">
                    <span className="spec-label">Dauer:</span>
                    <span className="spec-value">4 Stunden</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Teilnehmerzahl:</span>
                    <span className="spec-value">20 – 25 (Manager + Tech)</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Format:</span>
                    <span className="spec-value">interaktives Lab</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h2 className="section-title">Event Details</h2>
                <div className="detail-group">
                  <div className="detail-row">
                    <span className="detail-label">Location</span>
                    <div className="detail-value">
                      <p>IHUNU Kochwerkstatt</p>
                      <p className="detail-secondary">Wörthstraße 30, 81667 München</p>
                    </div>
                  </div>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps?q=Wörthstraße+30,+81667+München&output=embed"
                      width="100%"
                      height="250"
                      style={{ border: 0, borderRadius: '8px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Event Location"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="info-card partners-card">
                <h2 className="section-title">Powered by</h2>
                <div className="partners-showcase">
                  <div className="partner-logo-large">
                    <img src="/logos/pv_green.png" alt="PioVation" className="partner-logo-img" />
                    <span className="partner-name">PioVation</span>
                  </div>
                  <div className="partner-logo-large">
                    <img src="/logos/doitnow.png" alt="DO IT NOW" className="partner-logo-img" />
                    <span className="partner-name">DO IT NOW</span>
                  </div>
                  <div className="partner-logo-large">
                    <img src="/logos/AMD_Logo.png" alt="AMD" className="partner-logo-img" />
                    <span className="partner-name">AMD</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h2 className="section-title">Ergebnisse nach dem Workshop</h2>
                <ul className="info-list">
                  <li>3 – 4 konkreten Projektinitiativen (Problem + Lösung + Owner + Zeithorizont)</li>
                  <li>Technischer Architektur-Entwurf (Skizze der Lösung mit Piovation + Do IT Now)</li>
                  <li>Verbindlicher Roadmap für nächste Schritte (inkl. Ansprechpartner & Terminplan)</li>
                  <li>Vernetzung mit Technologie- und Infrastrukturpartnern (AMD, Supermicro, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="content-column">
              <div className="info-card agenda-card">
                <h2 className="section-title">Agenda</h2>
                <div className="agenda-list">
                  {agendaItems.map((item, index) => (
                    <div key={index} className="agenda-item">
                      <div className="agenda-time">{item.time}</div>
                      <div className="agenda-content-full">
                        <div className="agenda-phase">{item.phase}</div>
                        <span className="agenda-title">{item.title}</span>
                        {item.description && <p className="agenda-description">{item.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-heading">Event Gallery</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={`/images/${image}`} 
                  alt={`Event ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/logos/pv_green.png" alt="PioVation" className="footer-logo-img" />
              <span className="footer-text">Piovation · AI Factory 2026</span>
            </div>
            <div className="footer-contact">
              <span className="footer-text">Questions? </span>
              <a href="mailto:info@piovation.com" className="footer-link">info@piovation.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
