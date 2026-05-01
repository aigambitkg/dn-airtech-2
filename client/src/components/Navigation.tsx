/* ============================================================
   Navigation – Glassmorphismus + Scroll-aware
   Design: "Thermal Precision" – Sticky, transparent on top
   ============================================================ */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Zap, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/waermepumpen', label: 'Wärmepumpen' },
  { href: '/klimageraete', label: 'Klimageräte' },
  { href: '/ventilation', label: 'Ventilation' },
  { href: '/sanitaer', label: 'Sanitär', highlight: true },
  { href: '/referenzprojekte', label: 'Referenzen' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
        style={{ paddingTop: '2px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 rounded-sm border border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors" />
                  <Zap className="w-5 h-5 text-cyan-400 relative z-10" />
                </div>
                <div>
                  <div className="font-bold text-white leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                    DN <span className="text-cyan-400">AirTecH</span>
                  </div>
                  <div className="text-[0.6rem] text-slate-400 tracking-widest uppercase leading-none mt-0.5">
                    GmbH · Klimatechnik
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer group ${
                      link.highlight
                        ? 'text-orange-400 hover:text-orange-300'
                        : location === link.href
                        ? 'text-cyan-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em' }}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-300 ${
                        link.highlight
                          ? 'bg-orange-400/60 scale-x-100'
                          : location === link.href
                          ? 'bg-cyan-400 scale-x-100'
                          : 'bg-cyan-400/60 scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+4969330887540"
                className="hidden md:flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <Phone className="w-4 h-4" />
                <span>+49 69 3308 8754</span>
              </a>
              <Link href="/kontakt">
                <button className="hidden lg:block btn-primary-glow text-sm py-2 px-5">
                  Anfrage
                </button>
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
                aria-label="Menü öffnen"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <div className="flex flex-col gap-2 mt-8">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`flex items-center gap-4 py-4 border-b border-white/5 transition-all duration-300 cursor-pointer ${
                    link.highlight ? 'text-orange-400' : location === link.href ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                  style={{
                    transitionDelay: `${i * 50}ms`,
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: mobileOpen ? 1 : 0,
                  }}
                >
                  <span
                    className="text-xl font-semibold"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {link.label}
                  </span>
                  {link.highlight && (
                    <span className="tag-orange text-xs">NEU</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a href="tel:+4969330887540" className="flex items-center gap-3 text-slate-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>+49 69 3308 8754</span>
            </a>
            <a href="tel:+4969663895240" className="flex items-center gap-3 text-slate-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>+49 69 6638 9524</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
}
