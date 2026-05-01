/* ============================================================
   Wärmepumpen Page – DN AirTecH GmbH
   Design: "Thermal Precision" – Cyan/Blue Theme
   ============================================================ */

import { useEffect } from 'react';
import { Link } from 'wouter';
import { Thermometer, CheckCircle, ArrowRight, Phone, Zap, Leaf, BarChart3 } from 'lucide-react';
import ParticleField from '@/components/ParticleField';

const WAERMEPUMPE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/waermepumpe_3d-3fmsDqhXfai9ZtMQ6Eyn9b.webp';
const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';

const types = [
  {
    title: 'Luft-Wasser Wärmepumpe',
    desc: 'Die wirtschaftlichste Lösung für Neubauten und Sanierungen. Nutzt die Außenluft als Wärmequelle und benötigt keine aufwendige Erschließung.',
    features: ['Einfache Installation', 'Keine Erdarbeiten', 'Für Neubau & Sanierung', 'COP bis 4,5'],
    efficiency: 85,
  },
  {
    title: 'Sole-Wasser Wärmepumpe',
    desc: 'Höchste Effizienz durch Erdwärme. Geothermische Energie sorgt für konstante Leistung unabhängig von der Außentemperatur.',
    features: ['Höchste Effizienz', 'Konstante Leistung', 'Lange Lebensdauer', 'COP bis 5,5'],
    efficiency: 95,
  },
  {
    title: 'Wasser-Wasser Wärmepumpe',
    desc: 'Nutzt Grundwasser als Wärmequelle – ideal für Gebiete mit geeignetem Grundwasservorkommen. Sehr hohe Jahresarbeitszahl.',
    features: ['Sehr hohe JAZ', 'Gleichmäßige Leistung', 'Umweltfreundlich', 'COP bis 6,0'],
    efficiency: 98,
  },
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
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-fade-in, .stagger-children').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0"><ParticleField count={40} interactive={false} /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Wärmepumpen · Offenbach am Main</span></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              <span className="text-white">Wärmepumpen</span><br />
              <span className="gradient-heading">für die Zukunft</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
              Hocheffiziente Wärmepumpensysteme für nachhaltiges Heizen und Kühlen – mit bis zu 70% staatlicher Förderung.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2">Angebot anfragen<ArrowRight className="w-4 h-4" /></button></Link>
              <a href="tel:+4969330887540"><button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}><Phone className="w-4 h-4" />Jetzt anrufen</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-20 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Vorteile</span><div className="w-8 h-px bg-cyan-400" /></div>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Warum eine Wärmepumpe?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {benefits.map((b) => (
              <div key={b.title} className="glass-card neon-border p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 border border-cyan-400/30 bg-cyan-400/10"><b.icon className="w-6 h-6 text-cyan-400" /></div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 scroll-fade-in">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Systeme</span></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Die richtige Wärmepumpe <span className="gradient-heading">für Ihr Zuhause</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-children">
            {types.map((type) => (
              <div key={type.title} className="glass-card service-card neon-border p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="tag-cyan">{type.efficiency}% Effizienz</span>
                  <div className="w-8 h-8 flex items-center justify-center border border-cyan-400/30 bg-cyan-400/10"><Thermometer className="w-4 h-4 text-cyan-400" /></div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{type.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{type.desc}</p>
                {/* Efficiency Bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-slate-500 mb-1"><span>Effizienz</span><span>{type.efficiency}%</span></div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000" style={{ width: `${type.efficiency}%` }} />
                  </div>
                </div>
                <ul className="space-y-2">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="relative py-24 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative scroll-fade-in">
              <img src={WAERMEPUMPE_IMAGE} alt="Wärmepumpe" className="w-full rounded-sm object-cover h-80" />
              <div className="absolute -bottom-4 -right-4 glass-card neon-border p-4">
                <div className="stat-number text-3xl">COP 5.0</div>
                <div className="text-white text-sm font-medium">Jahresarbeitszahl</div>
                <div className="text-slate-400 text-xs">Beste Effizienzklasse A+++</div>
              </div>
            </div>
            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Unsere Marken</span></div>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                Qualität von <span className="gradient-heading">führenden Herstellern</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Wir arbeiten ausschließlich mit renommierten Herstellern zusammen und garantieren höchste Qualität, 
                lange Lebensdauer und optimale Effizienz für Ihre Wärmepumpenanlage.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Daikin', 'Mitsubishi', 'Vaillant', 'Bosch', 'Viessmann', 'Nibe'].map((brand) => (
                  <div key={brand} className="glass-card neon-border px-4 py-3 text-center">
                    <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{brand}</span>
                  </div>
                ))}
              </div>
              <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2">Beratung anfragen<ArrowRight className="w-4 h-4" /></button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Jetzt auf <span className="gradient-heading">Wärmepumpe umsteigen</span>
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Profitieren Sie von staatlichen Förderungen bis zu 70% und senken Sie dauerhaft Ihre Energiekosten.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2 text-base px-8 py-4">Kostenlose Beratung<ArrowRight className="w-5 h-5" /></button></Link>
            <a href="tel:+4969330887540"><button className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}><Phone className="w-5 h-5" />Jetzt anrufen</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
