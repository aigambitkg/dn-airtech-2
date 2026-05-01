/* ============================================================
   Referenzprojekte Page – DN AirTecH GmbH
   Design: "Thermal Precision"
   ============================================================ */

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Phone, MapPin, Calendar, Zap } from 'lucide-react';
import ParticleField from '@/components/ParticleField';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';
const WAERMEPUMPE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/waermepumpe_3d-3fmsDqhXfai9ZtMQ6Eyn9b.webp';
const VENTILATION_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/ventilation_3d-RjEFucGM4K8CuYkiofJ52f.webp';
const KLIMA_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/klima_3d-DNjJjuXEVDuNtiQHUg2UVB.webp';
const SANITAR_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/sanitar_hero-3Vd7CF5kvyf8ivCEPiartL.webp';

const projects = [
  { id: 1, title: 'Wohnkomplex Offenbach', category: 'Wärmepumpe', location: 'Offenbach am Main', year: '2024', desc: 'Installation von 12 Luft-Wasser-Wärmepumpen für einen modernen Wohnkomplex mit 48 Einheiten. Energieeinsparung von 65% gegenüber dem alten Gasheizungssystem.', image: WAERMEPUMPE_IMAGE, tag: 'Wärmepumpe', size: 'Großprojekt' },
  { id: 2, title: 'Bürogebäude Frankfurt', category: 'Klimaanlage', location: 'Frankfurt am Main', year: '2024', desc: 'Multi-Split-Klimaanlage für ein 5-stöckiges Bürogebäude mit 30 Inneneinheiten. Intelligente Zonenregelung und Smart-Building-Integration.', image: KLIMA_IMAGE, tag: 'Klimaanlage', size: 'Gewerbe' },
  { id: 3, title: 'Produktionshalle Hanau', category: 'Ventilation', location: 'Hanau', year: '2023', desc: 'Industrielle Lüftungsanlage für eine Produktionshalle mit 2.500 m². Schadstoffabsaugung, Wärmerückgewinnung und automatische Luftqualitätssteuerung.', image: VENTILATION_IMAGE, tag: 'Ventilation', size: 'Industrie' },
  { id: 4, title: 'Luxusvilla Dreieich', category: 'Sanitär', location: 'Dreieich', year: '2024', desc: 'Komplette Sanitärinstallation und Badplanung für eine Luxusvilla. Integration von Wärmepumpen-Boiler und Smart-Home-Steuerung für alle Wassersysteme.', image: SANITAR_IMAGE, tag: 'Sanitär', size: 'Privat', isNew: true },
  { id: 5, title: 'Schule Mühlheim', category: 'Ventilation', location: 'Mühlheim am Main', year: '2023', desc: 'Zentrale Lüftungsanlage für eine Grundschule mit 24 Klassenzimmern. CO₂-gesteuerte Frischluftzufuhr für optimale Lernbedingungen.', image: VENTILATION_IMAGE, tag: 'Ventilation', size: 'Öffentlich' },
  { id: 6, title: 'Einfamilienhaus Langen', category: 'Wärmepumpe', location: 'Langen', year: '2024', desc: 'Sole-Wasser-Wärmepumpe mit Fußbodenheizung und Warmwasserbereitung. Komplette Heizungssanierung mit 70% staatlicher Förderung.', image: WAERMEPUMPE_IMAGE, tag: 'Wärmepumpe', size: 'Privat' },
];

const categories = ['Alle', 'Wärmepumpe', 'Klimaanlage', 'Ventilation', 'Sanitär'];

export default function Referenzprojekte() {
  const [activeFilter, setActiveFilter] = useState('Alle');

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-fade-in, .stagger-children').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'Alle' ? projects : projects.filter((p) => p.tag === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0"><ParticleField count={30} interactive={false} /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Referenzprojekte</span></div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              <span className="text-white">Unsere</span><br />
              <span className="gradient-heading">Referenzprojekte</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              Über 500 erfolgreich abgeschlossene Projekte im Rhein-Main-Gebiet – von Privathäusern bis zu Industrieanlagen.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-12 scroll-fade-in">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-cyan-400 text-[oklch(0.09_0.012_240)]'
                    : 'border border-white/20 text-slate-300 hover:border-cyan-400/50 hover:text-white'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className={`glass-card ${project.isNew ? 'sanitar-card thermal-border' : 'service-card neon-border'} overflow-hidden`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.012_240)] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={project.isNew ? 'tag-orange' : 'tag-cyan'}>{project.tag}</span>
                    <span className="tag-cyan">{project.size}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[oklch(0.11_0.012_240)] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Ihr Projekt als nächstes?
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns und werden Sie Teil unserer Erfolgsgeschichte.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt"><button className="btn-primary-glow flex items-center gap-2 text-base px-8 py-4">Jetzt anfragen<ArrowRight className="w-5 h-5" /></button></Link>
            <a href="tel:+4969330887540"><button className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}><Phone className="w-5 h-5" />Jetzt anrufen</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
