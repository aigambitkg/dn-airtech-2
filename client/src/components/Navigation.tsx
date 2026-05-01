/* ============================================================
   Navigation – DN AirTecH GmbH
   Design: "Precision Light" – White + Red (#D32F2F) + Blue (#1565C0)
   ============================================================ */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress />

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(211,47,47,0.15)' : '1px solid rgba(0,0,0,0.07)',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.08)' : '0 1px 8px rgba(0,0,0,0.04)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                {/* Logo SVG – matches DN AirTecH brand colors */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="DN AirTecH Logo">
                  {/* Outer gear/fan blades – Red */}
                  <path d="M20 3C20 3 23.5 6.5 27 7.5C30.5 8.5 35 7.5 35 7.5C35 7.5 36 12 35 15.5C34 19 31.5 22 31.5 22C31.5 22 35 24.5 36 28C37 31.5 35 36 35 36C35 36 30.5 37 27 36C23.5 35 21.5 32.5 21.5 32.5C21.5 32.5 20.5 37 20 37C19.5 37 18.5 32.5 18.5 32.5C18.5 32.5 16.5 35 13 36C9.5 37 5 36 5 36C5 36 3 31.5 4 28C5 24.5 8.5 22 8.5 22C8.5 22 6 19 5 15.5C4 12 5 7.5 5 7.5C5 7.5 9.5 8.5 13 7.5C16.5 6.5 20 3 20 3Z" fill="#D32F2F"/>
                  {/* Inner white circle */}
                  <circle cx="20" cy="20" r="8" fill="white"/>
                  {/* N arrow – Blue */}
                  <path d="M16.5 16.5V23.5L20 20L23.5 23.5V16.5" stroke="#1565C0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#1A1A2E', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                    DN <span style={{ color: '#D32F2F' }}>AirTecH</span>
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '0.58rem', color: '#9CA3AF', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    GmbH · Klimatechnik
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 ${
                      link.highlight
                        ? 'text-red-600 font-semibold'
                        : location === link.href
                        ? 'text-red-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {link.label}
                    {link.highlight && (
                      <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', background: '#D32F2F', color: '#fff', padding: '1px 5px', textTransform: 'uppercase' }}>NEU</span>
                    )}
                    {/* Active/hover underline */}
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 transition-all duration-200"
                      style={{
                        background: link.highlight ? '#D32F2F' : '#D32F2F',
                        transform: (location === link.href || link.highlight) ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+4969330887540"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>+49 69 3308 8754</span>
              </a>
              <Link href="/kontakt">
                <button className="btn-primary text-xs px-5 py-2.5">ANFRAGE</button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Menü"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)', paddingTop: '70px' }}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`flex items-center gap-3 px-3 py-3.5 border-b text-base font-medium transition-colors ${
                  link.highlight
                    ? 'text-red-600 border-red-100'
                    : location === link.href
                    ? 'text-red-600 bg-red-50 border-red-100'
                    : 'text-gray-700 border-gray-100 hover:text-red-600'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {link.label}
                {link.highlight && (
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', background: '#D32F2F', color: '#fff', padding: '1px 5px', textTransform: 'uppercase' }}>NEU</span>
                )}
              </div>
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <a href="tel:+4969330887540" className="flex items-center gap-2 text-sm text-gray-600 px-3">
              <Phone className="w-4 h-4 text-red-600" />+49 69 3308 8754
            </a>
            <a href="tel:+4969663895240" className="flex items-center gap-2 text-sm text-gray-600 px-3">
              <Phone className="w-4 h-4 text-red-600" />+49 69 6638 9524
            </a>
            <Link href="/kontakt">
              <button className="btn-primary w-full justify-center mt-2">ANFRAGE STELLEN</button>
            </Link>
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
      className="fixed top-0 left-0 z-[60] h-0.5 transition-all duration-100"
      style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #D32F2F, #1565C0)' }}
    />
  );
}
