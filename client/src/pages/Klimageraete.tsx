/* ============================================================
   Klimageräte Page – DN AirTecH GmbH
   Design: "Thermal Precision" – Cyan/Blue Theme
   ============================================================ */

import { useEffect } from 'react';
import { Link } from 'wouter';
import { Wind, CheckCircle, ArrowRight, Phone, Snowflake, Sun, Wifi } from 'lucide-react';
import ParticleField from '@/components/ParticleField';

const KLIMA_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/klima_3d-DNjJjuXEVDuNtiQHUg2UVB.webp';
const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';

const klimaTypes = [
  {
    title: 'Split-Klimaanlage',
    desc: 'Die klassische Lösung für einzelne Räume. Besteht aus Innen- und Außeneinheit und bietet optimale Leistung bei geringem Energieverbrauch.',
    features: ['Für einzelne Räume', 'Einfache Installation', 'Leiser Betrieb', 'Energieeffizienzklasse A+++'],
    tag: 'Bestseller',
  },
  {
    title: 'Multi-Split-System',
    desc: 'Eine Außeneinheit versorgt mehrere Inneneinheiten – ideal für Mehrfamilienhäuser und Bürogebäude mit individueller Zonenregelung.',
    features: ['Mehrere Räume', 'Individuelle Steuerung', 'Platzsparend', 'Zentrale Außeneinheit'],
    tag: 'Flexibel',
  },
  {
    title: 'Inverter-Klimaanlage',
    desc: 'Modernste Technologie mit stufenloser Leistungsregulierung. Spart bis zu 40% Energie im Vergleich zu herkömmlichen Systemen.',
    features: ['Stufenlose Regelung', 'Bis 40% Energieeinsparung', 'Schnelle Reaktion', 'Gleichmäßige Temperatur'],
    tag: 'Energiesparend',
  },
  {
    title: 'Deckenkassetten',
    desc: 'Ideal für Gewerberäume und Büros. Die Einheit wird in der Decke versenkt und verteilt die Luft gleichmäßig in alle Richtungen.',
    features: ['Für Gewerberäume', 'Unsichtbare Installation', '360° Luftverteilung', 'Hohe Leistung'],
    tag: 'Gewerbe',
  },
];

const features = [
  { icon: Snowflake, title: 'Kühlen & Heizen', desc: 'Klimaanlagen können im Winter auch zum effizienten Heizen genutzt werden.' },
  { icon: Wind, title: 'Luftreinigung', desc: 'Integrierte Filter reinigen die Luft von Staub, Pollen und Bakterien.' },
  { icon: Wifi, title: 'Smart Control', desc: 'Steuerung per App, Sprachassistent oder Smart-Home-Integration.' },
  { icon: Sun, title: 'Solarkompatibel', desc: 'Optimale Kombination mit Photovoltaikanlagen für maximale Effizienz.' },
];

export default function Klimageraete() {
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
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Klimageräte · Offenbach am Main</span></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              <span className="text-white">Klimageräte</span><br />
              <span className="gradient-heading">der nächsten Generation</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
              Split-, Inverter- und Multi-Split-Klimaanlagen für optimalen Komfort – energieeffizient, leise und intelligent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2">Angebot anfragen<ArrowRight className="w-4 h-4" /></button></Link>
              <a href="tel:+4969330887540"><button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}><Phone className="w-4 h-4" />Jetzt anrufen</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-20 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.map((f) => (
              <div key={f.title} className="glass-card neon-border p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 border border-cyan-400/30 bg-cyan-400/10"><f.icon className="w-6 h-6 text-cyan-400" /></div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
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
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Produktübersicht</span></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Das richtige System <span className="gradient-heading">für jeden Bedarf</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {klimaTypes.map((type) => (
              <div key={type.title} className="glass-card service-card neon-border p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="tag-cyan">{type.tag}</span>
                  <div className="w-8 h-8 flex items-center justify-center border border-cyan-400/30 bg-cyan-400/10"><Wind className="w-4 h-4 text-cyan-400" /></div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{type.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{type.desc}</p>
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

      {/* PRODUCT IMAGE */}
      <section className="relative py-24 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Installation & Service</span></div>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                Von der Beratung bis zur <span className="gradient-heading">Inbetriebnahme</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Wir übernehmen die komplette Abwicklung – von der Planung über die Installation bis zur Einweisung und Wartung. 
                Alle Arbeiten werden von zertifizierten Klimatechnikern durchgeführt.
              </p>
              <div className="space-y-3 mb-8">
                {['Kostenlose Vor-Ort-Beratung', 'Professionelle Installation', 'Einweisung & Inbetriebnahme', 'Regelmäßige Wartungsverträge', 'Schneller Kundendienst'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />{item}</div>
                ))}
              </div>
              <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2">Beratung anfragen<ArrowRight className="w-4 h-4" /></button></Link>
            </div>
            <div className="relative scroll-fade-in">
              <img src={KLIMA_IMAGE} alt="Klimaanlage" className="w-full rounded-sm object-cover h-80" />
              <div className="absolute -bottom-4 -left-4 glass-card neon-border p-4">
                <div className="stat-number text-3xl">A+++</div>
                <div className="text-white text-sm font-medium">Energieeffizienz</div>
                <div className="text-slate-400 text-xs">Höchste Klasse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Jetzt <span className="gradient-heading">Klimaanlage installieren</span>
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">Kontaktieren Sie uns für ein kostenloses Angebot und professionelle Beratung.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2 text-base px-8 py-4">Kostenlose Beratung<ArrowRight className="w-5 h-5" /></button></Link>
            <a href="tel:+4969330887540"><button className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}><Phone className="w-5 h-5" />Jetzt anrufen</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
