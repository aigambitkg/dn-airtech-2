/* ============================================================
   Footer – Futuristisches Design mit Grid-Layout
   Design: "Thermal Precision"
   ============================================================ */

import { Link } from 'wouter';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative footer-dark overflow-hidden">
      {/* Top accent line */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #D32F2F 0%, #1565C0 50%, #D32F2F 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3C20 3 23.5 6.5 27 7.5C30.5 8.5 35 7.5 35 7.5C35 7.5 36 12 35 15.5C34 19 31.5 22 31.5 22C31.5 22 35 24.5 36 28C37 31.5 35 36 35 36C35 36 30.5 37 27 36C23.5 35 21.5 32.5 21.5 32.5C21.5 32.5 20.5 37 20 37C19.5 37 18.5 32.5 18.5 32.5C18.5 32.5 16.5 35 13 36C9.5 37 5 36 5 36C5 36 3 31.5 4 28C5 24.5 8.5 22 8.5 22C8.5 22 6 19 5 15.5C4 12 5 7.5 5 7.5C5 7.5 9.5 8.5 13 7.5C16.5 6.5 20 3 20 3Z" fill="#D32F2F"/>
                <circle cx="20" cy="20" r="8" fill="rgba(255,255,255,0.1)"/>
                <path d="M16.5 16.5V23.5L20 20L23.5 23.5V16.5" stroke="#1E88E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  DN <span style={{ color: '#EF5350' }}>AirTecH</span>
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>GmbH · Klimatechnik</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Ihr zuverlässiger Partner für Klimatechnik, Wärmepumpen, Lüftung und Sanitär im Rhein-Main-Gebiet.
            </p>
            <div className="flex gap-3">
              <a href="https://www.google.com/maps/search/DN+AirTecH+GmbH" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
                style={{ background: '#D32F2F', fontFamily: 'Space Grotesk, sans-serif' }}>G</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
                style={{ background: '#1565C0', fontFamily: 'Space Grotesk, sans-serif' }}>in</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Leistungen</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/waermepumpen', label: 'Wärmepumpen' },
                { href: '/klimageraete', label: 'Klimageräte' },
                { href: '/ventilation', label: 'Ventilation' },
                { href: '/sanitaer', label: 'Sanitär' },
                { href: '/referenzprojekte', label: 'Referenzprojekte' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 text-red-600 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Rechtliches</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/impressum', label: 'Impressum' },
                { href: '/datenschutz', label: 'Datenschutz' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 text-red-600 group-hover:translate-x-0.5 transition-transform" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+4969330887540" className="footer-link flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">+49 69 3308 8754</div>
                    <div className="text-xs text-slate-500">Hauptnummer</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+4969663895240" className="footer-link flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">+49 69 6638 9524</div>
                    <div className="text-xs text-slate-500">Zweite Nummer</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@dn-airtechgmbh.de" className="footer-link flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">info@dn-airtechgmbh.de</div>
                    <div className="text-xs text-slate-500">E-Mail</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">Heinrich-Krumm-Straße 20</div>
                    <div className="text-sm">63073 Offenbach am Main</div>
                    <div className="text-xs text-slate-500 mt-1">Rhein-Main-Gebiet</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem', marginTop: '2rem' }} />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans, sans-serif' }}>
            © {year} DN AirTecH GmbH · HRB56122 · AG Offenbach am Main
          </p>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="footer-link text-xs">Impressum</Link>
            <Link href="/datenschutz" className="footer-link text-xs">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
