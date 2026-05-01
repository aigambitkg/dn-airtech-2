/* ============================================================
   Home Page – DN AirTecH GmbH
   Design: "Thermal Precision" – Industrial Neo-Futurism 2040
   Sections: Hero, Stats, Services, About, Testimonials, FAQ, CTA
   ============================================================ */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import {
  ArrowRight, Thermometer, Wind, Droplets, Wrench,
  ChevronDown, Star, CheckCircle, Phone, Mail,
  Zap, Shield, Award, Clock, ChevronRight
} from 'lucide-react';
import ParticleField from '@/components/ParticleField';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';
const SANITAR_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/sanitar_hero-3Vd7CF5kvyf8ivCEPiartL.webp';
const WAERMEPUMPE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/waermepumpe_3d-3fmsDqhXfai9ZtMQ6Eyn9b.webp';
const VENTILATION_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/ventilation_3d-RjEFucGM4K8CuYkiofJ52f.webp';
const KLIMA_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/klima_3d-DNjJjuXEVDuNtiQHUg2UVB.webp';

const services = [
  {
    icon: Thermometer,
    title: 'Wärmepumpen',
    description: 'Hocheffiziente Luft-Wasser, Sole-Wasser und Wasser-Wasser Wärmepumpen für nachhaltiges Heizen und Kühlen.',
    href: '/waermepumpen',
    image: WAERMEPUMPE_IMAGE,
    tag: 'Energieeffizient',
    color: 'cyan',
  },
  {
    icon: Wind,
    title: 'Klimageräte',
    description: 'Split-, Inverter- und Multi-Split-Klimaanlagen für optimalen Komfort in Wohn- und Geschäftsräumen.',
    href: '/klimageraete',
    image: KLIMA_IMAGE,
    tag: 'Smart Control',
    color: 'cyan',
  },
  {
    icon: Wind,
    title: 'Ventilation',
    description: 'Professionelle Lüftungssysteme für gesunde Raumluft, optimale Luftqualität und maximale Energieeffizienz.',
    href: '/ventilation',
    image: VENTILATION_IMAGE,
    tag: 'Luftqualität',
    color: 'cyan',
  },
  {
    icon: Droplets,
    title: 'Sanitär',
    description: 'Moderne Sanitärinstallationen, Badplanung und Warmwassersysteme – integriert mit Wärmepumpentechnologie.',
    href: '/sanitaer',
    image: SANITAR_IMAGE,
    tag: 'NEU 2040',
    color: 'orange',
    isNew: true,
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Projekte', sublabel: 'erfolgreich abgeschlossen' },
  { value: 15, suffix: '+', label: 'Jahre', sublabel: 'Erfahrung' },
  { value: 24, suffix: 'h', label: 'Service', sublabel: 'Reaktionszeit' },
  { value: 98, suffix: '%', label: 'Zufriedenheit', sublabel: 'Kundenbewertung' },
];

const testimonials = [
  {
    name: 'Jarebica Adnan',
    role: 'Geschäftskunde',
    text: 'Die Firma DN AirTecH GmbH hat schon mehrere Objekte für uns erfolgreich umgesetzt. Der Geschäftsführer Herr Pepic ist eine sehr zuverlässige Person und die Terminabsprachen haben immer stets funktioniert.',
    rating: 5,
  },
  {
    name: 'G. Gennaro',
    role: 'Privatkunde',
    text: 'Von der Beratung bis zur Ausführung alles reibungslos gelaufen. Vielen Dank an das DN Team für die professionelle Arbeit und die schnelle Umsetzung.',
    rating: 5,
  },
  {
    name: 'Julia M.',
    role: 'Privatkunde',
    text: 'Vom Anfang bis zum Ende war der Service hervorragend. Das Klimagerät funktioniert einwandfrei, und die Installation war schnell und professionell. Ich kann es nur wärmstens empfehlen!',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'Wie sichert DN AirTech die Produktqualität bei seinen Ventilationssystemen?',
    answer: 'DN AirTech gewährleistet die höchste Qualität durch den Einsatz langlebiger, korrosionsbeständiger Materialien und modernster Technologien. Jedes System wird gründlich getestet, um eine konstante Luftzirkulation und exzellente Luftqualität zu garantieren.',
  },
  {
    question: 'Welche Qualitätsmerkmale zeichnen die Wärmepumpen von DN AirTech aus?',
    answer: 'Unsere Wärmepumpen zeichnen sich durch hohe Energieeffizienz (COP-Werte bis 5,0), leisen Betrieb, intelligente Steuerung und langlebige Komponenten aus. Alle Geräte werden von zertifizierten Fachkräften installiert.',
  },
  {
    question: 'Was macht die Klimaanlagen von DN AirTech besonders in Bezug auf Produktqualität?',
    answer: 'Unsere Klimageräte bieten erstklassige Leistung und hohe Energieeffizienz. Mit fortschrittlicher Invertertechnologie sorgen sie für angenehme Temperaturen und konstante Luftqualität bei minimalem Energieverbrauch.',
  },
  {
    question: 'Wie wird die Installation der Ventilationssysteme von DN AirTech gewährleistet?',
    answer: 'Alle Installationen werden von qualifizierten Fachkräften mit jahrelanger Erfahrung durchgeführt. Wir garantieren eine saubere, präzise und normkonforme Umsetzung mit anschließender Funktionsprüfung.',
  },
  {
    question: 'Was zeichnet die Installation der Wärmepumpen von DN AirTech aus?',
    answer: 'Unsere Wärmepumpeninstallationen umfassen eine individuelle Planung, professionelle Montage und Inbetriebnahme sowie eine umfassende Einweisung. Wir übernehmen auch alle erforderlichen Genehmigungen.',
  },
  {
    question: 'Bietet DN AirTech auch Sanitärinstallationen an?',
    answer: 'Ja! Unser neuer Sanitärbereich umfasst moderne Badplanung, Sanitärinstallationen und die Integration von Warmwassersystemen mit Wärmepumpentechnologie für maximale Energieeffizienz.',
  },
];

function StatCounter({ value, suffix, label, sublabel }: { value: number; suffix: string; label: string; sublabel: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 2000;
          const step = value / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= value) { start = value; clearInterval(timer); }
            setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {count.toLocaleString('de-DE')}{suffix}
      </div>
      <div className="text-white font-semibold mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{label}</div>
      <div className="text-slate-500 text-sm mt-0.5">{sublabel}</div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className="text-white font-medium pr-4 group-hover:text-cyan-400 transition-colors"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-fade-in, .stagger-children').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay */}
        <div className="hero-overlay absolute inset-0" />
        
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        {/* Particle System */}
        <div className="absolute inset-0">
          <ParticleField count={60} interactive={true} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-cyan-400" />
              <span className="section-label">Professioneller Service · Rhein-Main-Gebiet</span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            >
              <span className="text-white">Klimatechnik</span>
              <br />
              <span className="gradient-heading">der Zukunft</span>
              <br />
              <span className="text-white text-4xl sm:text-5xl lg:text-6xl">für Ihr Zuhause</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Verkauf und Installation von Klimaanlagen, Wärmepumpen, Lüftungssystemen und 
              Sanitäranlagen im Rhein-Main-Gebiet. Seit über 15 Jahren Ihr zuverlässiger Partner.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/kontakt">
                <button className="btn-primary-glow flex items-center gap-2">
                  Jetzt anfragen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/referenzprojekte">
                <button
                  className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-sm font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}
                >
                  Referenzprojekte
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, text: 'Zertifizierte Fachkräfte' },
                { icon: Award, text: 'Qualitätsgarantie' },
                { icon: Clock, text: '24h Notfallservice' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>

        {/* Contact Quick Access */}
        <div className="absolute bottom-8 right-6 lg:right-12 hidden md:flex flex-col gap-2">
          <a
            href="tel:+4969330887540"
            className="flex items-center gap-2 glass-card px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>+49 69 3308 8754</span>
          </a>
          <a
            href="mailto:info@dn-airtechgmbh.de"
            className="flex items-center gap-2 glass-card px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>info@dn-airtechgmbh.de</span>
          </a>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-16 bg-[oklch(0.11_0.012_240)] border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-16 scroll-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-cyan-400" />
              <span className="section-label">Unsere Leistungen</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Dienstleistungen im Bereich{' '}
              <span className="gradient-heading">Klimatechnik & Sanitär</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Von der Planung bis zur Wartung – wir bieten umfassende Lösungen für ein optimales Raumklima und moderne Sanitärsysteme.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <div
                  className={`glass-card ${service.isNew ? 'sanitar-card thermal-border' : 'service-card neon-border'} cursor-pointer h-full`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.012_240)] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className={service.isNew ? 'tag-orange' : 'tag-cyan'}>
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className={`w-10 h-10 flex items-center justify-center mb-4 border ${service.isNew ? 'border-orange-400/30 bg-orange-400/10' : 'border-cyan-400/30 bg-cyan-400/10'}`}>
                      <service.icon className={`w-5 h-5 ${service.isNew ? 'text-orange-400' : 'text-cyan-400'}`} />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className={`flex items-center gap-2 text-sm font-semibold ${service.isNew ? 'text-orange-400' : 'text-cyan-400'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / PROCESS SECTION ===== */}
      <section className="relative py-24 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text */}
            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-cyan-400" />
                <span className="section-label">Über Uns</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              >
                Ihr Partner für{' '}
                <span className="gradient-heading">nachhaltige Klimatechnik</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                In Offenbach am Main sind wir Ihr zuverlässiger Partner für die Installation von Klimaanlagen, 
                Wärmepumpen und Lüftungssystemen. Mit langjähriger Erfahrung garantieren wir eine effiziente 
                und professionelle Umsetzung.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Unser Ziel ist es, hochwertige Klimatisierungslösungen bereitzustellen, die für ein angenehmes, 
                energieeffizientes und gesundes Wohn- und Arbeitsumfeld sorgen. Mit modernster Technologie 
                und nachhaltigen Konzepten optimieren wir Ihr Raumklima.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Zertifizierte Fachkräfte',
                  'Energieeffiziente Lösungen',
                  'Schnelle Umsetzung',
                  'Langfristige Wartung',
                  'Individuelle Beratung',
                  'Qualitätsgarantie',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/kontakt">
                <button className="btn-primary-glow flex items-center gap-2">
                  Kontakt aufnehmen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Right: Process Steps */}
            <div className="space-y-4 scroll-fade-in">
              {[
                { num: '01', title: 'Planung & Konzept', desc: 'Individuelle Klimakonzepte, perfekt auf Ihre Anforderungen abgestimmt.' },
                { num: '02', title: 'Beratung', desc: 'Kompetente Beratung für das effizienteste System für Ihr Zuhause oder Unternehmen.' },
                { num: '03', title: 'Ausführung', desc: 'Präzise Installation mit höchster Sorgfalt – schnell, sauber und reibungslos.' },
                { num: '04', title: 'Wartung', desc: 'Regelmäßige Wartungen für optimale Funktion und lange Lebensdauer Ihrer Anlage.' },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className="glass-card p-6 flex gap-5 hover:border-cyan-400/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="text-3xl font-bold flex-shrink-0 w-12 text-right"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'oklch(0.75 0.2 195 / 0.3)',
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-cyan-400" />
              <span className="section-label">Kundenstimmen</span>
              <div className="w-8 h-px bg-cyan-400" />
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card testimonial-card neon-border p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {t.name}
                    </div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="relative py-24 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-cyan-400" />
              <span className="section-label">FAQ</span>
              <div className="w-8 h-px bg-cyan-400" />
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Häufig gestellte Fragen
            </h2>
            <p className="text-slate-400">
              Finden Sie Antworten auf die wichtigsten Fragen zu unseren Leistungen.
            </p>
          </div>

          <div className="space-y-0 scroll-fade-in">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Ihre Frage ist nicht dabei?</p>
            <Link href="/kontakt">
              <button className="btn-primary-glow flex items-center gap-2 mx-auto">
                <Phone className="w-4 h-4" />
                Kontaktieren Sie uns
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0 bg-[oklch(0.09_0.012_240/0.88)]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <ParticleField count={30} interactive={false} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="section-label">Jetzt starten</span>
            <Zap className="w-5 h-5 text-cyan-400" />
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
          >
            Bereit für das{' '}
            <span className="gradient-heading">Klima der Zukunft?</span>
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und erhalten Sie ein individuelles Angebot für Ihr Projekt.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt">
              <button className="btn-primary-glow flex items-center gap-2 text-base px-8 py-4">
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <a href="tel:+4969330887540">
              <button
                className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
