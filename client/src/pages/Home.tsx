/* ============================================================
   Home Page – DN AirTecH GmbH
   Design: "Precision Light" – White + Red (#D32F2F) + Blue (#1565C0)
   ============================================================ */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { Thermometer, Wind, Droplets, Wrench, ArrowRight, Phone, CheckCircle, ChevronDown, Star, Quote, Mail } from 'lucide-react';
import ParticleField from '@/components/ParticleField';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';
const WAERMEPUMPE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/waermepumpe_3d-3fmsDqhXfai9ZtMQ6Eyn9b.webp';
const KLIMA_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/klima_3d-DNjJjuXEVDuNtiQHUg2UVB.webp';
const VENTILATION_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/ventilation_3d-RjEFucGM4K8CuYkiofJ52f.webp';
const SANITAR_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/sanitar_hero-3Vd7CF5kvyf8ivCEPiartL.webp';

const services = [
  { icon: Thermometer, title: 'Wärmepumpen', desc: 'Hocheffiziente Luft-Wasser, Sole-Wasser und Wasser-Wasser Wärmepumpen. Bis zu 70% staatliche Förderung.', href: '/waermepumpen', image: WAERMEPUMPE_IMAGE, tag: 'ENERGIEEFFIZIENT', color: 'red' },
  { icon: Wind, title: 'Klimageräte', desc: 'Split-, Inverter- und Multi-Split-Klimaanlagen für optimalen Komfort. Energieeffizienzklasse A+++.', href: '/klimageraete', image: KLIMA_IMAGE, tag: 'SMART CONTROL', color: 'blue' },
  { icon: Wind, title: 'Ventilation', desc: 'Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung bis 95%. Für gesunde Raumluft.', href: '/ventilation', image: VENTILATION_IMAGE, tag: 'LUFTQUALITÄT', color: 'blue' },
  { icon: Droplets, title: 'Sanitär', desc: 'Moderne Sanitärinstallationen, Badplanung und Warmwassersysteme mit Wärmepumpentechnologie.', href: '/sanitaer', image: SANITAR_IMAGE, tag: 'NEU 2040', color: 'red', isNew: true },
];

const stats = [
  { value: 500, suffix: '+', label: 'Projekte', sub: 'erfolgreich abgeschlossen' },
  { value: 15, suffix: '+', label: 'Jahre', sub: 'Erfahrung' },
  { value: 24, suffix: 'h', label: 'Service', sub: 'Notfallbereitschaft' },
  { value: 98, suffix: '%', label: 'Zufriedenheit', sub: 'Kundenbewertung' },
];

const testimonials = [
  { name: 'Jarebica Adnan', role: 'Geschäftskunde', text: 'Die Firma DN AirTecH GmbH hat schon mehrere Objekte für uns erfolgreich umgesetzt. Der Geschäftsführer Herr Pepic ist eine sehr zuverlässige Person und die Terminabsprachen haben immer stets funktioniert.' },
  { name: 'G. Gennaro', role: 'Privatkunde', text: 'Von der Beratung bis zur Ausführung alles reibungslos gelaufen. Vielen Dank an das DN Team für die professionelle Arbeit und die schnelle Umsetzung.' },
  { name: 'Julia M.', role: 'Privatkunde', text: 'Vom Anfang bis zum Ende war der Service hervorragend. Das Klimagerät funktioniert einwandfrei, und die Installation war schnell und professionell. Ich kann es nur wärmstens empfehlen!' },
];

const faqs = [
  { q: 'Wie sichert DN AirTech die Produktqualität bei seinen Ventilationssystemen?', a: 'DN AirTech gewährleistet die höchste Qualität durch den Einsatz langlebiger, korrosionsbeständiger Materialien und modernster Technologien. Jedes System wird gründlich getestet, um eine konstante Luftzirkulation und exzellente Luftqualität zu garantieren.' },
  { q: 'Welche Qualitätsmerkmale zeichnen die Wärmepumpen von DN AirTech aus?', a: 'Unsere Wärmepumpen zeichnen sich durch hohe Energieeffizienz (COP-Werte bis 5,0), leisen Betrieb, intelligente Steuerung und langlebige Komponenten aus. Alle Geräte werden von zertifizierten Fachkräften installiert.' },
  { q: 'Was macht die Klimaanlagen von DN AirTech besonders?', a: 'Unsere Klimageräte bieten erstklassige Leistung und hohe Energieeffizienz. Mit fortschrittlicher Invertertechnologie sorgen sie für angenehme Temperaturen und konstante Luftqualität bei minimalem Energieverbrauch.' },
  { q: 'Bietet DN AirTech auch Sanitärinstallationen an?', a: 'Ja! Unser neuer Sanitärbereich umfasst moderne Badplanung, Sanitärinstallationen und die Integration von Warmwassersystemen mit Wärmepumpentechnologie für maximale Energieeffizienz.' },
  { q: 'Welche Förderungen sind für Wärmepumpen möglich?', a: 'Durch BAFA und KfW sind Förderungen von bis zu 70% des Investitionsvolumens möglich. Wir beraten Sie kostenlos zu allen aktuellen Förderprogrammen und übernehmen die Antragstellung.' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = 16;
        const increment = target / (duration / step);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className="stat-number text-5xl lg:text-6xl">{count}{suffix}</div>;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-gray-800 font-medium text-sm sm:text-base" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{q}</span>
        <ChevronDown className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
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
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center right' }}
        />
        {/* Light overlay – white on left, transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 35%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0) 100%)',
          }}
        />
        {/* Subtle particle overlay */}
        <div className="absolute inset-0 opacity-30">
          <ParticleField count={35} interactive={true} dark={false} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="hero-badge mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              Professioneller Service · Rhein-Main-Gebiet
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', color: '#1A1A2E' }}
            >
              Klimatechnik<br />
              <span className="gradient-heading-red">der Zukunft</span><br />
              <span style={{ fontSize: '0.75em', color: '#374151', fontWeight: 600 }}>für Ihr Zuhause</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Verkauf und Installation von Klimaanlagen, Wärmepumpen, Lüftungssystemen und Sanitäranlagen im Rhein-Main-Gebiet. Seit über 15 Jahren Ihr zuverlässiger Partner.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Zertifizierte Fachkräfte', 'Qualitätsgarantie', '24h Notfallservice'].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt">
                <button className="btn-primary flex items-center gap-2">
                  JETZT ANFRAGEN <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/referenzprojekte">
                <button className="btn-secondary flex items-center gap-2">
                  Referenzprojekte <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-400 tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Scroll</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
                <div className="text-gray-900 font-semibold mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
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
              <span className="section-label">Unsere Leistungen</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Dienstleistungen im Bereich<br />
              <span className="gradient-heading-red">Klimatechnik & Sanitär</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Von der Planung bis zur Wartung – wir bieten umfassende Lösungen für ein optimales Raumklima und moderne Sanitärsysteme.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {services.map((s) => (
              <Link key={s.title} href={s.href}>
                <div className={`card-service h-full cursor-pointer ${s.isNew ? 'sanitar-card' : ''}`}>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={s.color === 'red' ? 'tag-red' : 'tag-blue'}>{s.tag}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className={`icon-box-${s.color} mb-3`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-gray-900 font-bold text-lg mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {s.title}
                      {s.isNew && (
                        <span className="ml-2 text-xs font-bold px-1.5 py-0.5 bg-red-600 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}>NEU</span>
                      )}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex items-center gap-1.5 text-red-600 text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="divider-red" />
                <span className="section-label">Über Uns</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              >
                Ihr Partner für<br />
                <span className="gradient-heading-blue">nachhaltige Klimatechnik</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In Offenbach am Main sind wir Ihr zuverlässiger Partner für die Installation von Klimaanlagen, Wärmepumpen und Lüftungssystemen. Mit langjähriger Erfahrung garantieren wir eine effiziente und professionelle Umsetzung.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Unser Ziel ist es, hochwertige Klimatisierungslösungen bereitzustellen, die für ein angenehmes, energieeffizientes und gesundes Wohn- und Arbeitsumfeld sorgen.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Zertifizierte Fachkräfte', 'Energieeffiziente Lösungen', 'Schnelle Umsetzung', 'Langfristige Wartung', 'Individuelle Beratung', 'Qualitätsgarantie'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/kontakt">
                <button className="btn-primary flex items-center gap-2">
                  KONTAKT AUFNEHMEN <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="scroll-fade-in">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '01', title: 'Planung & Konzept', desc: 'Individuelle Klimakonzepte, perfekt auf Ihre Anforderungen abgestimmt.' },
                  { num: '02', title: 'Beratung', desc: 'Kompetente Beratung für das effizienteste System für Ihr Zuhause oder Unternehmen.' },
                  { num: '03', title: 'Ausführung', desc: 'Präzise Installation mit höchster Sorgfalt – schnell, sauber und reibungslos.' },
                  { num: '04', title: 'Wartung', desc: 'Regelmäßige Wartungen für optimale Funktion und lange Lebensdauer Ihrer Anlage.' },
                ].map((step) => (
                  <div key={step.num} className="card-light p-5">
                    <div
                      className="text-3xl font-black mb-3"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(211,47,47,0.15)' }}
                    >
                      {step.num}
                    </div>
                    <h3
                      className="text-gray-900 font-bold text-sm mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SANITÄR HIGHLIGHT ─────────────────────────────────── */}
      <section className="py-24 section-light-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative scroll-fade-in order-2 lg:order-1">
              <img
                src={SANITAR_IMAGE}
                alt="Sanitärinstallation"
                className="w-full h-80 object-cover"
              />
              <div
                className="absolute -bottom-5 -right-5 bg-white p-5 shadow-lg border-l-4 border-red-600"
              >
                <div className="stat-number text-3xl">200+</div>
                <div className="text-gray-900 text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Bäder modernisiert</div>
                <div className="text-gray-400 text-xs">Seit 2009</div>
              </div>
            </div>
            <div className="scroll-fade-in order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="divider-red" />
                <span className="section-label">Neu: Sanitär</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
              >
                Sanitär trifft<br />
                <span className="gradient-heading-red">Klimatechnik</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Als Experte für Wärmepumpen und Klimatechnik können wir Ihre Sanitäranlage optimal mit einer Wärmepumpe kombinieren. Das Ergebnis: bis zu 70% weniger Energiekosten für die Warmwasserbereitung.
              </p>
              <div className="space-y-3 mb-8">
                {['Wärmepumpen-Boiler', 'Moderne Badplanung & Design', 'Barrierefreie Lösungen', 'Smart-Home-Integration', '24h Notfallservice'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/sanitaer">
                <button className="btn-primary flex items-center gap-2">
                  SANITÄR ENTDECKEN <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-fade-in">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="divider-red" />
              <span className="section-label">Kundenstimmen</span>
              <div className="divider-red" />
            </div>
            <h2
              className="text-4xl font-bold text-gray-900"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Was unsere Kunden sagen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: 'linear-gradient(135deg, #D32F2F, #1565C0)', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-fade-in">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="divider-red" />
              <span className="section-label">FAQ</span>
              <div className="divider-red" />
            </div>
            <h2
              className="text-4xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              Häufig gestellte Fragen
            </h2>
            <p className="text-gray-500">Finden Sie Antworten auf die wichtigsten Fragen zu unseren Leistungen.</p>
          </div>
          <div className="bg-white p-6 shadow-sm scroll-fade-in">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-4">Ihre Frage ist nicht dabei?</p>
            <Link href="/kontakt">
              <button className="btn-secondary flex items-center gap-2 mx-auto">
                <Mail className="w-4 h-4" /> KONTAKTIEREN SIE UNS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(26,26,46,0.88)' }} />
        <div className="absolute inset-0 opacity-40">
          <ParticleField count={30} interactive={false} dark={true} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line-red" />
            <span className="section-label text-red-400">Jetzt starten</span>
            <div className="accent-line-red" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            Bereit für das Klima<br />
            <span className="gradient-heading-red">der Zukunft?</span>
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und erhalten Sie ein individuelles Angebot für Ihr Projekt.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt">
              <button className="btn-primary flex items-center gap-2 text-base px-8 py-4">
                KOSTENLOSE BERATUNG <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <a href="tel:+4969330887540">
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                <Phone className="w-5 h-5" /> Jetzt anrufen
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
