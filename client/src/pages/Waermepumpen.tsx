/* ============================================================
   Wärmepumpen – DN AirTecH GmbH
   Design: "Precision Light" – White + Red (#D32F2F) + Blue (#1565C0)
   ============================================================ */

import { useEffect } from 'react';
import { Link } from 'wouter';
import { Thermometer, CheckCircle, ArrowRight, Phone, Zap, Leaf, BarChart3, TrendingUp } from 'lucide-react';

const WAERMEPUMPE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/waermepumpe_3d-3fmsDqhXfai9ZtMQ6Eyn9b.webp';
const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';

const types = [
  { title: 'Luft-Wasser Wärmepumpe', desc: 'Die wirtschaftlichste Lösung für Neubauten und Sanierungen. Nutzt die Außenluft als Wärmequelle.', features: ['Einfache Installation', 'Keine Erdarbeiten', 'Für Neubau & Sanierung', 'COP bis 4,5'], efficiency: 85, color: 'red' },
  { title: 'Sole-Wasser Wärmepumpe', desc: 'Höchste Effizienz durch Erdwärme. Konstante Leistung unabhängig von der Außentemperatur.', features: ['Höchste Effizienz', 'Konstante Leistung', 'Lange Lebensdauer', 'COP bis 5,5'], efficiency: 95, color: 'blue' },
  { title: 'Wasser-Wasser Wärmepumpe', desc: 'Nutzt Grundwasser als Wärmequelle – ideal für Gebiete mit geeignetem Grundwasservorkommen.', features: ['Sehr hohe JAZ', 'Gleichmäßige Leistung', 'Umweltfreundlich', 'COP bis 6,0'], efficiency: 98, color: 'red' },
];

const benefits = [
  { icon: Leaf, title: 'CO₂-neutral', desc: 'Bis zu 75% weniger CO₂-Emissionen im Vergleich zu fossilen Heizsystemen.' },
  { icon: BarChart3, title: 'Energieeffizienz', desc: 'Aus 1 kWh Strom werden bis zu 5 kWh Wärme – das spart bares Geld.' },
  { icon: Zap, title: 'Förderung', desc: 'Bis zu 70% staatliche Förderung durch BAFA und KfW möglich.' },
  { icon: Thermometer, title: 'Heizen & Kühlen', desc: 'Im Sommer kann die Wärmepumpe auch zum Kühlen verwendet werden.' },
];

export default function Waermepumpen() {
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
      <section className="relative min-h-[65vh] flex items-end pb-16 overflow-hidden pt-16">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${WAERMEPUMPE_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(21,101,192,0.85) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-badge mb-4 inline-flex" style={{ background: 'rgba(21,101,192,0.2)', borderColor: 'rgba(30,136,229,0.5)', color: '#90CAF9' }}>
              <Leaf className="w-3 h-3" /> Energieeffizient · Bis 70% Förderung
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              Wärmepumpen<br /><span style={{ color: '#90CAF9' }}>der Zukunft</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              Hocheffiziente Wärmepumpensysteme für Heizung und Warmwasser. Bis zu 70% staatliche Förderung durch BAFA und KfW.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt">
                <button className="btn-blue flex items-center gap-2">KOSTENLOSE BERATUNG <ArrowRight className="w-4 h-4" /></button>
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
            {[{ val: '70%', label: 'Förderung möglich' }, { val: '5,0', label: 'Max. COP-Wert' }, { val: '150+', label: 'Anlagen installiert' }, { val: '20+', label: 'Jahre Lebensdauer' }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="stat-number text-4xl lg:text-5xl">{s.val}</div>
                <div className="text-gray-600 text-sm mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-fade-in">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="divider-red" /><span className="section-label">Vorteile</span><div className="divider-red" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Warum eine Wärmepumpe?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {benefits.map((b, i) => (
              <div key={b.title} className="card-light p-6 text-center">
                <div className={`icon-box-${i % 2 === 0 ? 'red' : 'blue'} mx-auto mb-4`}><b.icon className="w-5 h-5" /></div>
                <h3 className="text-gray-900 font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEMS ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 scroll-fade-in">
            <div className="flex items-center gap-3 mb-3">
              <div className="divider-red" /><span className="section-label">Systeme</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Die richtige Wärmepumpe<br /><span className="gradient-heading-blue">für Ihr Zuhause</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-children">
            {types.map((type) => (
              <div key={type.title} className="card-light p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 text-xs font-bold" style={{ background: type.color === 'red' ? 'rgba(211,47,47,0.08)' : 'rgba(21,101,192,0.08)', color: type.color === 'red' ? '#D32F2F' : '#1565C0', fontFamily: 'Space Grotesk, sans-serif' }}>{type.efficiency}% Effizienz</span>
                  <div className={`icon-box-${type.color}`}><Thermometer className="w-4 h-4" /></div>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{type.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{type.desc}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Effizienz</span>
                    <span className="font-bold" style={{ color: type.color === 'red' ? '#D32F2F' : '#1565C0', fontFamily: 'Space Grotesk, sans-serif' }}>{type.efficiency}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 overflow-hidden">
                    <div className="h-full" style={{ width: `${type.efficiency}%`, background: type.color === 'red' ? 'linear-gradient(90deg, #D32F2F, #EF5350)' : 'linear-gradient(90deg, #1565C0, #1E88E5)' }} />
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: type.color === 'red' ? '#D32F2F' : '#1565C0' }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS + SHOWCASE ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative scroll-fade-in">
              <img src={WAERMEPUMPE_IMAGE} alt="Wärmepumpe" className="w-full object-cover h-80" />
              <div className="absolute -bottom-5 -right-5 bg-white p-5 shadow-lg border-t-4 border-blue-600">
                <div className="stat-number text-3xl">COP 5.0</div>
                <div className="text-gray-900 text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Jahresarbeitszahl</div>
                <div className="text-gray-400 text-xs">Effizienzklasse A+++</div>
              </div>
            </div>
            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="divider-red" /><span className="section-label">Unsere Marken</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                Qualität von <span className="gradient-heading-red">führenden Herstellern</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Wir arbeiten ausschließlich mit renommierten Herstellern zusammen und garantieren höchste Qualität und optimale Effizienz.</p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {['Daikin', 'Mitsubishi', 'Vaillant', 'Bosch', 'Viessmann', 'Nibe'].map((brand) => (
                  <div key={brand} className="px-3 py-3 border border-gray-200 bg-white hover:border-red-200 hover:bg-red-50 transition-all text-center">
                    <span className="text-gray-700 font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{brand}</span>
                  </div>
                ))}
              </div>
              <Link href="/kontakt">
                <button className="btn-primary flex items-center gap-2">BERATUNG ANFRAGEN <ArrowRight className="w-4 h-4" /></button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FÖRDERUNG ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="divider-red" /><span className="section-label">Staatliche Förderung</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                Bis zu <span className="gradient-heading-red">70% Förderung</span><br />durch BAFA & KfW
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">Der Staat fördert den Einbau von Wärmepumpen großzügig. Wir beraten Sie kostenlos und übernehmen die Antragstellung.</p>
              <div className="space-y-3 mb-8">
                {[['BAFA-Förderung', 'Bis zu 70% der Investitionskosten'], ['KfW-Kredit', 'Günstige Finanzierung ab 0,01% p.a.'], ['Steuerbonus', 'Bis zu 20% der Kosten absetzbar'], ['Antragsservice', 'Wir übernehmen die komplette Antragstellung']].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100">
                    <TrendingUp className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-gray-900 font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</div>
                      <div className="text-gray-500 text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/kontakt">
                <button className="btn-primary flex items-center gap-2">FÖRDERBERATUNG ANFRAGEN <ArrowRight className="w-4 h-4" /></button>
              </Link>
            </div>
            <div className="relative scroll-fade-in">
              <img src={HERO_IMAGE} alt="Wärmepumpe Installation" className="w-full h-80 object-cover" />
              <div className="absolute -top-5 -right-5 bg-white p-5 shadow-lg border-t-4 border-red-600">
                <div className="stat-number text-3xl">70%</div>
                <div className="text-gray-900 text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Max. Förderung</div>
                <div className="text-gray-400 text-xs">BAFA + KfW</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Bereit für Ihre neue Wärmepumpe?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Profitieren Sie von staatlichen Förderungen bis zu 70% und senken Sie dauerhaft Ihre Energiekosten.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt">
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold hover:bg-gray-50 transition-all" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
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
