/* ============================================================
   Footer – Futuristisches Design mit Grid-Layout
   Design: "Thermal Precision"
   ============================================================ */

import { Link } from 'wouter';
import { Phone, Mail, MapPin, Facebook, Instagram, Zap, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[oklch(0.07_0.01_240)] border-t border-white/5 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20" />
                <div className="absolute inset-0 rounded-sm border border-cyan-400/30" />
                <Zap className="w-5 h-5 text-cyan-400 relative z-10" />
              </div>
              <div>
                <div className="font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem' }}>
                  DN <span className="text-cyan-400">AirTecH</span>
                </div>
                <div className="text-[0.6rem] text-slate-500 tracking-widest uppercase">GmbH</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Ihr zuverlässiger Partner für Klimatechnik, Wärmepumpen, Lüftung und Sanitär im Rhein-Main-Gebiet.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 text-slate-400 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 text-slate-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="section-label mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Startseite' },
                { href: '/waermepumpen', label: 'Wärmepumpen' },
                { href: '/klimageraete', label: 'Klimageräte' },
                { href: '/ventilation', label: 'Ventilation' },
                { href: '/sanitaer', label: 'Sanitär', isNew: true },
                { href: '/referenzprojekte', label: 'Referenzprojekte' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm cursor-pointer group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      {link.label}
                      {link.isNew && <span className="tag-orange text-[0.6rem] py-0.5">NEU</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="section-label mb-6">Leistungen</h4>
            <ul className="space-y-3">
              {[
                'Klimaanlage Installation',
                'Wärmepumpen Einbau',
                'Lüftungsanlagen',
                'Sanitärinstallation',
                'Wartung & Service',
                'Planung & Beratung',
                'Notfallservice',
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="section-label mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+4969330887540" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">+49 69 3308 8754</div>
                    <div className="text-xs text-slate-500">Hauptnummer</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+4969663895240" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">+49 69 6638 9524</div>
                    <div className="text-xs text-slate-500">Zweite Nummer</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@dn-airtechgmbh.de" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">info@dn-airtechgmbh.de</div>
                    <div className="text-xs text-slate-500">E-Mail</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
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
        <div className="divider-glow mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            © {year} DN AirTecH GmbH · HRB56122 · AG Offenbach am Main
          </p>
          <div className="flex items-center gap-6">
            <Link href="/impressum">
              <span className="text-slate-500 hover:text-slate-300 text-xs transition-colors cursor-pointer">
                Impressum
              </span>
            </Link>
            <Link href="/datenschutz">
              <span className="text-slate-500 hover:text-slate-300 text-xs transition-colors cursor-pointer">
                Datenschutz
              </span>
            </Link>
            <span className="text-slate-600 text-xs">
              USt-IdNr. DE363307976
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
