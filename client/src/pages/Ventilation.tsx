/* ============================================================
   Ventilation – DN AirTecH GmbH
   Design: "Precision Light" – White + Red (#D32F2F) + Blue (#1565C0)
   ============================================================ */

import { useEffect } from 'react';
import { Link } from 'wouter';
import { Wind, CheckCircle, ArrowRight, Phone, Activity, Leaf, Shield } from 'lucide-react';

const VENTILATION_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/ventilation_3d-RjEFucGM4K8CuYkiofJ52f.webp';

const systems = [
  { title: 'Zentrale Lüftungsanlage', desc: 'Vollständige Belüftung des gesamten Gebäudes über ein zentrales Kanalsystem mit Wärmerückgewinnung bis 95%.', features: ['Wärmerückgewinnung', 'Gesamtgebäude', 'Automatische Steuerung', 'Filterung'], tag: 'Komplett', color: 'red' },
  { title: 'Dezentrale Lüftung', desc: 'Flexible Einzelraumlösungen ohne aufwendige Kanalinstallation – ideal für Sanierungen und Nachrüstungen.', features: ['Keine Kanalarbeiten', 'Flexible Installation', 'Raumweise Steuerung', 'Nachrüstbar'], tag: 'Flexibel', color: 'blue' },
  { title: 'Zu-/Abluftanlage', desc: 'Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung für optimale Luftqualität und minimalen Energieverlust.', features: ['Kontrollierte Lüftung', 'Energieeffizient', 'Feuchtigkeitsregulierung', 'Schadstofffilterung'], tag: 'Wohnraum', color: 'red' },
  { title: 'Industrielüftung', desc: 'Leistungsstarke Lüftungssysteme für Gewerbe, Industrie und öffentliche Gebäude nach VDI-Richtlinien.', features: ['Hohe Leistung', 'VDI-konform', 'Schadstoffabsaugung', 'Explosionsschutz'], tag: 'Gewerbe', color: 'blue' },
];

const benefits = [
  { icon: Activity, title: 'Gesunde Luft', desc: 'Kontinuierliche Frischluftzufuhr reduziert CO₂, Schadstoffe und Allergene.' },
  { icon: Leaf, title: 'Energiesparen', desc: 'Wärmerückgewinnung bis 95% – minimaler Energieverlust beim Lüften.' },
  { icon: Shield, title: 'Schimmelschutz', desc: 'Kontrollierte Feuchtigkeitsregulierung verhindert Schimmelbildung.' },
  { icon: Wind, title: 'Komfort', desc: 'Kein manuelles Lüften mehr – automatisch optimale Luftqualität.' },
];

export default function Ventilation() {
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
        <div className="absolute inset-0" style={{ backgroundImage: `url(${VENTILATION_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(26,26,46,0.9) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-badge mb-4 inline-flex" style={{ background: 'rgba(21,101,192,0.15)', borderColor: 'rgba(21,101,192,0.4)', color: '#90CAF9' }}>
              <Wind className="w-3 h-3" /> Wärmerückgewinnung bis 95%
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              Lüftungssysteme<br /><span style={{ color: '#90CAF9' }}>für gesunde Luft</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-xl">
              Professionelle Lüftungsanlagen für Wohn- und Gewerbegebäude – mit Wärmerückgewinnung bis 95% und intelligenter Steuerung.
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
            {[{ val: '95%', label: 'Wärmerückgewinnung' }, { val: '100+', label: 'Anlagen installiert' }, { val: 'VDI', label: 'Zertifiziert' }, { val: '24h', label: 'Service' }].map((s) => (
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
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Warum eine Lüftungsanlage?</h2>
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
              Lüftungssysteme<br /><span className="gradient-heading-blue">für jeden Bedarf</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">Von der zentralen Anlage für Neubauten bis zur dezentralen Lösung für Sanierungen – wir haben das passende System.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children">
            {systems.map((s) => (
              <div key={s.title} className="card-light p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 text-xs font-bold" style={{ background: s.color === 'red' ? 'rgba(211,47,47,0.08)' : 'rgba(21,101,192,0.08)', color: s.color === 'red' ? '#D32F2F' : '#1565C0', fontFamily: 'Space Grotesk, sans-serif' }}>{s.tag}</span>
                  <div className={`icon-box-${s.color}`}><Wind className="w-4 h-4" /></div>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.color === 'red' ? '#D32F2F' : '#1565C0' }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Lüftungsanlage planen lassen?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot.</p>
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
