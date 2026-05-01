/* ============================================================
   Sanitär Page – DN AirTecH GmbH
   Design: "Thermal Precision" – Warm Copper + Steam Aesthetic
   NEU: Dedicated Sanitär Section with Warm Color Theme
   ============================================================ */

import { useEffect } from 'react';
import { Link } from 'wouter';
import {
  Droplets, Thermometer, Wrench, CheckCircle, ArrowRight,
  Phone, Star, Zap, Shield, Clock
} from 'lucide-react';
import ParticleField from '@/components/ParticleField';

const SANITAR_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/sanitar_hero-3Vd7CF5kvyf8ivCEPiartL.webp';
const WAERMEPUMPE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/waermepumpe_3d-3fmsDqhXfai9ZtMQ6Eyn9b.webp';

const sanitarServices = [
  {
    icon: Droplets,
    title: 'Sanitärinstallation',
    description: 'Professionelle Installation von Waschbecken, Toiletten, Duschen, Badewannen und allen sanitären Einrichtungen nach modernsten Standards.',
    features: ['Komplette Badplanung', 'Barrierefreie Lösungen', 'Designbäder', 'Schnelle Montage'],
  },
  {
    icon: Thermometer,
    title: 'Warmwassersysteme',
    description: 'Effiziente Warmwasserversorgung durch Integration mit Wärmepumpentechnologie – energiesparend und zuverlässig.',
    features: ['Wärmepumpen-Boiler', 'Durchlauferhitzer', 'Zirkulationssysteme', 'Smart-Steuerung'],
  },
  {
    icon: Wrench,
    title: 'Rohrleitungsbau',
    description: 'Fachgerechte Verlegung von Trinkwasser- und Abwasserleitungen nach aktuellen DIN-Normen und technischen Vorschriften.',
    features: ['Trinkwasserinstallation', 'Abwassersysteme', 'Druckprüfung', 'Normgerecht'],
  },
  {
    icon: Zap,
    title: 'Smart Sanitär',
    description: 'Intelligente Sanitärsysteme mit digitaler Steuerung, Verbrauchsüberwachung und Integration in Smart-Home-Systeme.',
    features: ['App-Steuerung', 'Verbrauchsmonitoring', 'Smart-Home-Integration', 'Fernwartung'],
  },
  {
    icon: Shield,
    title: 'Wartung & Reparatur',
    description: 'Regelmäßige Wartung und schnelle Reparatur aller sanitären Anlagen – für dauerhaft einwandfreie Funktion.',
    features: ['Wartungsverträge', '24h Notfallservice', 'Ersatzteilversorgung', 'Protokollierung'],
  },
  {
    icon: Star,
    title: 'Badplanung & Design',
    description: 'Von der Idee bis zur Umsetzung – wir planen Ihr Traumbad mit modernsten Designelementen und optimaler Raumnutzung.',
    features: ['3D-Planung', 'Materialberatung', 'Komplettlösung', 'Designberatung'],
  },
];

const advantages = [
  { value: '15+', label: 'Jahre Erfahrung', desc: 'in der Sanitärbranche' },
  { value: '200+', label: 'Bäder', desc: 'erfolgreich modernisiert' },
  { value: '100%', label: 'Normkonform', desc: 'nach DIN-Standards' },
  { value: '24h', label: 'Notfallservice', desc: 'bei Rohrbruch & Co.' },
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
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-fade-in, .stagger-children').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${SANITAR_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="sanitar-overlay absolute inset-0" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        {/* Warm Particle Effect */}
        <div className="absolute inset-0">
          <ParticleField count={40} interactive={false} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-orange-400" />
              <span className="section-label" style={{ color: 'oklch(0.82 0.16 40)' }}>
                Sanitärinstallation · Offenbach am Main
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="tag-orange">NEU 2040</span>
              <span className="tag-orange">Wärmepumpen-Integration</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            >
              <span className="text-white">Sanitär</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, oklch(0.82 0.16 40), oklch(0.72 0.18 40))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                der Zukunft
              </span>
            </h1>

            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
              Moderne Sanitärinstallationen, intelligente Warmwassersysteme und futuristische Badplanung – 
              integriert mit energieeffizienter Wärmepumpentechnologie.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt">
                <button className="btn-thermal flex items-center gap-2">
                  Kostenlose Beratung
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:+4969330887540">
                <button
                  className="flex items-center gap-2 px-6 py-3 border border-orange-400/30 text-orange-300 hover:border-orange-400/60 hover:text-orange-200 transition-all duration-300 font-semibold text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="relative py-16 bg-[oklch(0.11_0.012_240)] border-y border-orange-400/10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv) => (
              <div key={adv.label} className="text-center">
                <div
                  className="text-4xl lg:text-5xl font-bold mb-1"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    background: 'linear-gradient(135deg, oklch(0.82 0.16 40), oklch(0.72 0.18 40))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {adv.value}
                </div>
                <div className="text-white font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{adv.label}</div>
                <div className="text-slate-500 text-sm">{adv.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 scroll-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-orange-400" />
              <span className="section-label" style={{ color: 'oklch(0.82 0.16 40)' }}>Leistungen</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Unser Sanitär-{' '}
              <span style={{
                background: 'linear-gradient(135deg, oklch(0.95 0.005 210) 0%, oklch(0.82 0.16 40) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Leistungsspektrum
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Von der einfachen Reparatur bis zum kompletten Badumbau – wir bieten alles aus einer Hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {sanitarServices.map((service) => (
              <div key={service.title} className="glass-card sanitar-card thermal-border p-6 h-full">
                <div className="w-12 h-12 flex items-center justify-center mb-5 border border-orange-400/30 bg-orange-400/10">
                  <service.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3
                  className="text-white font-bold text-xl mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WÄRMEPUMPEN-INTEGRATION ===== */}
      <section className="relative py-24 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative scroll-fade-in">
              <div className="relative rounded-sm overflow-hidden">
                <img
                  src={WAERMEPUMPE_IMAGE}
                  alt="Wärmepumpe für Warmwasser"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.012_240)] via-transparent to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card thermal-border p-4 max-w-48">
                <div className="text-orange-400 font-bold text-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>70%</div>
                <div className="text-white text-sm font-medium">Energieeinsparung</div>
                <div className="text-slate-400 text-xs">durch Wärmepumpen-Boiler</div>
              </div>
            </div>

            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-orange-400" />
                <span className="section-label" style={{ color: 'oklch(0.82 0.16 40)' }}>Synergien nutzen</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              >
                Sanitär trifft{' '}
                <span style={{
                  background: 'linear-gradient(135deg, oklch(0.95 0.005 210) 0%, oklch(0.82 0.16 40) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Wärmepumpe
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Als Experte für Wärmepumpen und Klimatechnik können wir Ihre Sanitäranlage optimal 
                mit einer Wärmepumpe kombinieren. Das Ergebnis: bis zu 70% weniger Energiekosten 
                für die Warmwasserbereitung.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Wärmepumpen-Boiler', desc: 'Warmwasser mit minimalem Stromverbrauch' },
                  { title: 'Fußbodenheizung', desc: 'Gleichmäßige Wärme durch Niedertemperatursysteme' },
                  { title: 'Solarthermie-Integration', desc: 'Erneuerbare Energie für Warmwasser und Heizung' },
                  { title: 'Smart-Home-Steuerung', desc: 'Automatische Optimierung des Energieverbrauchs' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium text-sm">{item.title}</span>
                      <span className="text-slate-400 text-sm"> – {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/kontakt">
                <button className="btn-thermal flex items-center gap-2">
                  Beratung anfragen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-orange-400" />
              <span className="section-label" style={{ color: 'oklch(0.82 0.16 40)' }}>Unser Prozess</span>
              <div className="w-8 h-px bg-orange-400" />
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Von der Idee zum Traumbad
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 stagger-children">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-orange-400/30 to-transparent z-0" />
                )}
                <div className="glass-card thermal-border p-5 relative z-10 h-full">
                  <div
                    className="text-3xl font-bold mb-3"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'oklch(0.72 0.18 40 / 0.4)',
                    }}
                  >
                    {step.num}
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-cyan-500/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            Ihr Traumbad wartet
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung. Wir planen Ihr neues Bad 
            und erstellen ein transparentes Festpreisangebot.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt">
              <button className="btn-thermal flex items-center gap-2 text-base px-8 py-4">
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <a href="tel:+4969330887540">
              <button
                className="flex items-center gap-2 px-8 py-4 border border-orange-400/30 text-orange-300 hover:border-orange-400/60 hover:text-orange-200 transition-all duration-300 font-semibold"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <Phone className="w-5 h-5" />
                +49 69 3308 8754
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
