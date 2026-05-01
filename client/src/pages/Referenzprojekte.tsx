/* ============================================================
   Referenzprojekte – DN AirTecH GmbH
   Design: "Precision Light" – White + Red (#D32F2F) + Blue (#1565C0)
   ============================================================ */

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Phone, MapPin, Calendar } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';
const WAERMEPUMPE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/waermepumpe_3d-3fmsDqhXfai9ZtMQ6Eyn9b.webp';
const VENTILATION_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/ventilation_3d-RjEFucGM4K8CuYkiofJ52f.webp';
const KLIMA_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/klima_3d-DNjJjuXEVDuNtiQHUg2UVB.webp';
const SANITAR_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/sanitar_hero-3Vd7CF5kvyf8ivCEPiartL.webp';

const projects = [
  { id: 1, title: 'Wohnkomplex Offenbach', location: 'Offenbach am Main', year: '2024', desc: 'Installation von 12 Luft-Wasser-Wärmepumpen für einen modernen Wohnkomplex mit 48 Einheiten. Energieeinsparung von 65%.', image: WAERMEPUMPE_IMAGE, tag: 'Wärmepumpe', size: 'Großprojekt', color: 'blue' },
  { id: 2, title: 'Bürogebäude Frankfurt', location: 'Frankfurt am Main', year: '2024', desc: 'Multi-Split-Klimaanlage für ein 5-stöckiges Bürogebäude mit 30 Inneneinheiten und Smart-Building-Integration.', image: KLIMA_IMAGE, tag: 'Klimaanlage', size: 'Gewerbe', color: 'red' },
  { id: 3, title: 'Produktionshalle Hanau', location: 'Hanau', year: '2023', desc: 'Industrielle Lüftungsanlage für eine Produktionshalle mit 2.500 m². Schadstoffabsaugung und Wärmerückgewinnung.', image: VENTILATION_IMAGE, tag: 'Ventilation', size: 'Industrie', color: 'blue' },
  { id: 4, title: 'Luxusvilla Dreieich', location: 'Dreieich', year: '2024', desc: 'Komplette Sanitärinstallation und Badplanung für eine Luxusvilla mit Wärmepumpen-Boiler und Smart-Home-Steuerung.', image: SANITAR_IMAGE, tag: 'Sanitär', size: 'Privat', color: 'red' },
  { id: 5, title: 'Schule Mühlheim', location: 'Mühlheim am Main', year: '2023', desc: 'Zentrale Lüftungsanlage für eine Grundschule mit 24 Klassenzimmern. CO₂-gesteuerte Frischluftzufuhr.', image: VENTILATION_IMAGE, tag: 'Ventilation', size: 'Öffentlich', color: 'blue' },
  { id: 6, title: 'Einfamilienhaus Langen', location: 'Langen', year: '2024', desc: 'Sole-Wasser-Wärmepumpe mit Fußbodenheizung. Komplette Heizungssanierung mit 70% staatlicher Förderung.', image: WAERMEPUMPE_IMAGE, tag: 'Wärmepumpe', size: 'Privat', color: 'red' },
];

const categories = ['Alle', 'Wärmepumpe', 'Klimaanlage', 'Ventilation', 'Sanitär'];

export default function Referenzprojekte() {
  const [activeFilter, setActiveFilter] = useState('Alle');

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.scroll-fade-in, .stagger-children').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'Alle' ? projects : projects.filter((p) => p.tag === activeFilter);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden pt-16">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(26,26,46,0.9) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-badge mb-4 inline-flex" style={{ background: 'rgba(211,47,47,0.15)', borderColor: 'rgba(211,47,47,0.4)', color: '#EF5350' }}>
              500+ abgeschlossene Projekte
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              Unsere<br /><span style={{ color: '#EF5350' }}>Referenzprojekte</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
              Über 500 erfolgreich abgeschlossene Projekte im Rhein-Main-Gebiet – von Privathäusern bis zu Industrieanlagen.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-12 scroll-fade-in">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2 text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.05em',
                  background: activeFilter === cat ? '#D32F2F' : 'white',
                  color: activeFilter === cat ? 'white' : '#374151',
                  border: activeFilter === cat ? '2px solid #D32F2F' : '2px solid #E5E7EB',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 text-xs font-bold text-white" style={{ background: project.color === 'red' ? '#D32F2F' : '#1565C0', fontFamily: 'Space Grotesk, sans-serif' }}>{project.tag}</span>
                    <span className="px-2 py-1 text-xs font-bold text-white bg-black/40" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.size}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-gray-900 font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.year}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 section-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Ihr Projekt als nächstes?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">Kontaktieren Sie uns und werden Sie Teil unserer Erfolgsgeschichte.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt">
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold hover:bg-gray-50 transition-all" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                JETZT ANFRAGEN <ArrowRight className="w-4 h-4" />
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
