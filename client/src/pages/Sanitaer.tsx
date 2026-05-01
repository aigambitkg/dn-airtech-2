/* ============================================================
   Sanitär – DN AirTecH GmbH
   Design: "Precision Light" – White + Red (#D32F2F) + Blue (#1565C0)
   ============================================================ */

import { useEffect } from 'react';
import { Link } from 'wouter';
import { Droplets, Thermometer, Wrench, CheckCircle, ArrowRight, Phone, Star, Zap, Shield } from 'lucide-react';

const SANITAR_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/sanitar_hero-3Vd7CF5kvyf8ivCEPiartL.webp';
const WAERMEPUMPE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/waermepumpe_3d-3fmsDqhXfai9ZtMQ6Eyn9b.webp';

const sanitarServices = [
  { icon: Droplets, title: 'Sanitärinstallation', description: 'Professionelle Installation von Waschbecken, Toiletten, Duschen, Badewannen und allen sanitären Einrichtungen nach modernsten Standards.', features: ['Komplette Badplanung', 'Barrierefreie Lösungen', 'Designbäder', 'Schnelle Montage'], color: 'red' },
  { icon: Thermometer, title: 'Warmwassersysteme', description: 'Effiziente Warmwasserversorgung durch Integration mit Wärmepumpentechnologie – energiesparend und zuverlässig.', features: ['Wärmepumpen-Boiler', 'Durchlauferhitzer', 'Zirkulationssysteme', 'Smart-Steuerung'], color: 'blue' },
  { icon: Wrench, title: 'Rohrleitungsbau', description: 'Fachgerechte Verlegung von Trinkwasser- und Abwasserleitungen nach aktuellen DIN-Normen und technischen Vorschriften.', features: ['Trinkwasserinstallation', 'Abwassersysteme', 'Druckprüfung', 'Normgerecht'], color: 'red' },
  { icon: Zap, title: 'Smart Sanitär', description: 'Intelligente Sanitärsysteme mit digitaler Steuerung, Verbrauchsüberwachung und Integration in Smart-Home-Systeme.', features: ['App-Steuerung', 'Verbrauchsmonitoring', 'Smart-Home-Integration', 'Fernwartung'], color: 'blue' },
  { icon: Shield, title: 'Wartung & Reparatur', description: 'Regelmäßige Wartung und schnelle Reparatur aller sanitären Anlagen – für dauerhaft einwandfreie Funktion.', features: ['Wartungsverträge', '24h Notfallservice', 'Ersatzteilversorgung', 'Protokollierung'], color: 'red' },
  { icon: Star, title: 'Badplanung & Design', description: 'Von der Idee bis zur Umsetzung – wir planen Ihr Traumbad mit modernsten Designelementen und optimaler Raumnutzung.', features: ['3D-Planung', 'Materialberatung', 'Komplettlösung', 'Designberatung'], color: 'blue' },
];

const processSteps = [
  { num: '01', title: 'Beratungsgespräch', desc: 'Kostenlose Erstberatung vor Ort – wir analysieren Ihre Wünsche und den Ist-Zustand.' },
  { num: '02', title: 'Planung & Angebot', desc: 'Detaillierte Planung mit 3D-Visualisierung und transparentem Festpreisangebot.' },
  { num: '03', title: 'Materialauswahl', desc: 'Gemeinsame Auswahl von Armaturen, Fliesen und Sanitärobjekten nach Ihrem Geschmack.' },
  { num: '04', title: 'Fachgerechte Montage', desc: 'Saubere und präzise Installation durch zertifizierte Sanitärfachkräfte.' },
  { num: '05', title: 'Abnahme & Übergabe', desc: 'Gemeinsame Abnahme, Einweisung und Übergabe aller Unterlagen und Garantien.' },
];

export default function Sanitaer() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.scroll-fade-in, .stagger-children').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end pb-16 overflow-hidden pt-16">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${SANITAR_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(26,26,46,0.88) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-badge mb-4 inline-flex" style={{ background: 'rgba(211,47,47,0.15)', borderColor: 'rgba(211,47,47,0.4)', color: '#EF5350' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Neu im Angebot · Sanitärtechnik
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              Sanitär &<br /><span style={{ color: '#EF5350' }}>Badtechnik</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-xl">
              Von der einfachen Reparatur bis zum kompletten Badumbau – alles aus einer Hand. Kombiniert mit Wärmepumpentechnik für maximale Energieeffizienz.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt">
                <button className="btn-primary flex items-center gap-2">KOSTENLOSE BERATUNG <ArrowRight className="w-4 h-4" /></button>
              </Link>
              <a href="tel:+4969330887540">
                <button className="flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white hover:bg-white/10 transition-all font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}>
                  <Phone className="w-4 h-4" /> JETZT ANRUFEN
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {[{ val: '200+', label: 'Bäder modernisiert' }, { val: '15+', label: 'Jahre Erfahrung' }, { val: '24h', label: 'Notfallservice' }, { val: '100%', label: 'Qualitätsgarantie' }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="stat-number text-4xl lg:text-5xl">{s.val}</div>
                <div className="text-gray-600 text-sm mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 scroll-fade-in">
            <div className="flex items-center gap-3 mb-3">
              <div className="divider-red" />
              <span className="section-label">Leistungsspektrum</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Von der Reparatur bis zum<br /><span className="gradient-heading-red">kompletten Badumbau</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">Wir bieten alles aus einer Hand – von der einfachen Reparatur bis zur vollständigen Badsanierung.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {sanitarServices.map((s) => (
              <div key={s.title} className="sanitar-card p-6">
                <div className={`icon-box-${s.color} mb-4`}><s.icon className="w-5 h-5" /></div>
                <h3 className="text-gray-900 font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WÄRMEPUMPEN INTEGRATION ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="divider-red" />
                <span className="section-label">Synergie-Vorteil</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                Sanitär trifft<br /><span className="gradient-heading-blue">Wärmepumpentechnik</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Als Experte für Wärmepumpen können wir Ihre Sanitäranlage optimal mit einer Wärmepumpe kombinieren. Das Ergebnis: bis zu 70% weniger Energiekosten für die Warmwasserbereitung.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ val: '70%', label: 'Energieeinsparung', desc: 'bei Warmwasserbereitung' }, { val: '5,0', label: 'COP-Wert', desc: 'maximale Effizienz' }, { val: '70%', label: 'Förderung', desc: 'durch BAFA/KfW möglich' }, { val: '20+', label: 'Jahre', desc: 'Systemlebensdauer' }].map((item) => (
                  <div key={item.label} className="card-light p-4">
                    <div className="stat-number text-2xl">{item.val}</div>
                    <div className="text-gray-900 font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.label}</div>
                    <div className="text-gray-400 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/waermepumpen">
                <button className="btn-blue flex items-center gap-2">MEHR ZU WÄRMEPUMPEN <ArrowRight className="w-4 h-4" /></button>
              </Link>
            </div>
            <div className="relative scroll-fade-in">
              <img src={WAERMEPUMPE_IMAGE} alt="Wärmepumpe für Warmwasser" className="w-full h-80 object-cover" />
              <div className="absolute -bottom-5 -left-5 bg-white p-5 shadow-lg border-l-4 border-blue-600">
                <div className="text-blue-600 font-bold text-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>A+++</div>
                <div className="text-gray-900 text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Energieeffizienz</div>
                <div className="text-gray-400 text-xs">Warmwasserbereitung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-fade-in">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="divider-red" />
              <span className="section-label">Unser Prozess</span>
              <div className="divider-red" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>So läuft Ihr Badprojekt ab</h2>
          </div>
          <div className="space-y-4 stagger-children">
            {processSteps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start bg-white p-5 shadow-sm border border-gray-100">
                <div className="w-12 h-12 min-w-12 flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #D32F2F, #B71C1C)', fontFamily: 'Space Grotesk, sans-serif' }}>{step.num}</div>
                <div>
                  <h3 className="text-gray-900 font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 section-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Ihr Traumbad wartet auf Sie</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">Kontaktieren Sie uns für eine kostenlose Beratung. Wir planen gemeinsam Ihr perfektes Bad.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt">
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold hover:bg-gray-50 transition-all" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                KOSTENLOSE BERATUNG <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a href="tel:+4969330887540">
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white hover:bg-white/10 transition-all font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}>
                <Phone className="w-4 h-4" /> +49 69 3308 8754
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
