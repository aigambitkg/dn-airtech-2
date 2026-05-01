/* ============================================================
   Ventilation Page – DN AirTecH GmbH
   Design: "Thermal Precision" – Cyan/Blue Theme
   ============================================================ */

import { useEffect } from 'react';
import { Link } from 'wouter';
import { Wind, CheckCircle, ArrowRight, Phone, Activity, Leaf, Shield } from 'lucide-react';
import ParticleField from '@/components/ParticleField';

const VENTILATION_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/ventilation_3d-RjEFucGM4K8CuYkiofJ52f.webp';
const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';

const systems = [
  { title: 'Zentrale Lüftungsanlage', desc: 'Vollständige Belüftung des gesamten Gebäudes über ein zentrales Kanalsystem mit Wärmerückgewinnung bis 95%.', features: ['Wärmerückgewinnung', 'Gesamtgebäude', 'Automatische Steuerung', 'Filterung'], tag: 'Komplett' },
  { title: 'Dezentrale Lüftung', desc: 'Flexible Einzelraumlösungen ohne aufwendige Kanalinstallation – ideal für Sanierungen und Nachrüstungen.', features: ['Keine Kanalarbeiten', 'Flexible Installation', 'Raumweise Steuerung', 'Nachrüstbar'], tag: 'Flexibel' },
  { title: 'Zu-/Abluftanlage', desc: 'Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung für optimale Luftqualität und minimalen Energieverlust.', features: ['Kontrollierte Lüftung', 'Energieeffizient', 'Feuchtigkeitsregulierung', 'Schadstofffilterung'], tag: 'Wohnraum' },
  { title: 'Industrielüftung', desc: 'Leistungsstarke Lüftungssysteme für Gewerbe, Industrie und öffentliche Gebäude nach VDI-Richtlinien.', features: ['Hohe Leistung', 'VDI-konform', 'Schadstoffabsaugung', 'Explosionsschutz'], tag: 'Gewerbe' },
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
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-fade-in, .stagger-children').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0"><ParticleField count={40} interactive={false} /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Ventilation · Offenbach am Main</span></div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              <span className="text-white">Lüftungssysteme</span><br />
              <span className="gradient-heading">für gesunde Luft</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
              Professionelle Lüftungsanlagen für Wohn- und Gewerbegebäude – mit Wärmerückgewinnung bis 95% und intelligenter Steuerung.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2">Angebot anfragen<ArrowRight className="w-4 h-4" /></button></Link>
              <a href="tel:+4969330887540"><button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}><Phone className="w-4 h-4" />Jetzt anrufen</button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 scroll-fade-in">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Systeme</span></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Das passende Lüftungssystem <span className="gradient-heading">für Ihr Gebäude</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {systems.map((s) => (
              <div key={s.title} className="glass-card service-card neon-border p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="tag-cyan">{s.tag}</span>
                  <div className="w-8 h-8 flex items-center justify-center border border-cyan-400/30 bg-cyan-400/10"><Wind className="w-4 h-4 text-cyan-400" /></div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative scroll-fade-in">
              <img src={VENTILATION_IMAGE} alt="Lüftungsanlage" className="w-full rounded-sm object-cover h-80" />
              <div className="absolute -bottom-4 -right-4 glass-card neon-border p-4">
                <div className="stat-number text-3xl">95%</div>
                <div className="text-white text-sm font-medium">Wärmerückgewinnung</div>
                <div className="text-slate-400 text-xs">Maximale Effizienz</div>
              </div>
            </div>
            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Qualität</span></div>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                Zertifizierte <span className="gradient-heading">Lüftungsexperten</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Unsere Lüftungssysteme werden nach den höchsten Standards geplant und installiert. 
                Alle Anlagen erfüllen die aktuellen Normen und werden regelmäßig gewartet.
              </p>
              <div className="space-y-3 mb-8">
                {['DIN EN 13779 konform', 'VDI 6022 zertifiziert', 'Energieausweis-kompatibel', 'Smart-Home-Integration', 'Wartungsverträge verfügbar'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />{item}</div>
                ))}
              </div>
              <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2">Beratung anfragen<ArrowRight className="w-4 h-4" /></button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Jetzt für <span className="gradient-heading">bessere Luftqualität</span> sorgen
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2 text-base px-8 py-4">Kostenlose Beratung<ArrowRight className="w-5 h-5" /></button></Link>
            <a href="tel:+4969330887540"><button className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}><Phone className="w-5 h-5" />Jetzt anrufen</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
