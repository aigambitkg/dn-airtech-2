/* ============================================================
   Kontakt Page – DN AirTecH GmbH
   Design: "Thermal Precision"
   DSGVO-konformes Kontaktformular
   ============================================================ */

import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import ParticleField from '@/components/ParticleField';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';

const services = ['Klimaanlage', 'Wärmepumpe', 'Ventilation', 'Sanitär', 'Wartung', 'Sonstiges'];

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '', privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[45vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0"><ParticleField count={25} interactive={false} /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Kontakt</span></div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              <span className="text-white">Kontaktieren</span><br />
              <span className="gradient-heading">Sie uns</span>
            </h1>
            <p className="text-slate-300 text-xl">Kostenlose Beratung und individuelle Angebote für Ihr Projekt.</p>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 circuit-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 scroll-fade-in">
              <div>
                <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">Erreichbarkeit</span></div>
                <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                  Wir sind für Sie <span className="gradient-heading">da</span>
                </h2>
              </div>

              {[
                { icon: Phone, label: 'Telefon', value: '+49 69 3308 8754', href: 'tel:+4969330887540', sub: 'Hauptnummer' },
                { icon: Phone, label: 'Telefon 2', value: '+49 69 6638 9524', href: 'tel:+4969663895240', sub: 'Zweite Nummer' },
                { icon: Mail, label: 'E-Mail', value: 'info@dn-airtechgmbh.de', href: 'mailto:info@dn-airtechgmbh.de', sub: 'Antwort innerhalb 24h' },
                { icon: MapPin, label: 'Adresse', value: 'Heinrich-Krumm-Straße 20', href: null, sub: '63073 Offenbach am Main' },
              ].map(({ icon: Icon, label, value, href, sub }) => (
                <div key={label} className="glass-card neon-border p-5 flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-cyan-400/30 bg-cyan-400/10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
                    {href ? (
                      <a href={href} className="text-white font-medium hover:text-cyan-400 transition-colors">{value}</a>
                    ) : (
                      <div className="text-white font-medium">{value}</div>
                    )}
                    <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}

              <div className="glass-card neon-border p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Öffnungszeiten</span>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Mo – Fr', time: '08:00 – 18:00 Uhr' },
                    { day: 'Samstag', time: '09:00 – 14:00 Uhr' },
                    { day: 'Notfallservice', time: '24/7 erreichbar' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-slate-400">{day}</span>
                      <span className="text-white">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 scroll-fade-in">
              <div className="glass-card neon-border p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-cyan-400/30 bg-cyan-400/10">
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Nachricht gesendet!</h3>
                    <p className="text-slate-400">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-px bg-cyan-400" />
                      <span className="section-label">Anfrage senden</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-2 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Name *</label>
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Ihr vollständiger Name" className="form-input-futuristic" />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-2 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>E-Mail *</label>
                        <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="ihre@email.de" className="form-input-futuristic" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-2 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Telefon</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+49 ..." className="form-input-futuristic" />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-2 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Leistung</label>
                        <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="form-input-futuristic">
                          <option value="">Bitte wählen</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-2 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Nachricht *</label>
                      <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..." rows={5} className="form-input-futuristic resize-none" />
                    </div>

                    {/* DSGVO Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        className="w-4 h-4 mt-0.5 accent-cyan-400 flex-shrink-0"
                      />
                      <label htmlFor="privacy" className="text-slate-400 text-xs leading-relaxed cursor-pointer">
                        Ich habe die{' '}
                        <a href="/datenschutz" className="text-cyan-400 hover:underline">Datenschutzerklärung</a>
                        {' '}gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !formData.privacy}
                      className="btn-primary-glow w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />Wird gesendet...</>
                      ) : (
                        <><Send className="w-4 h-4" />Anfrage absenden</>
                      )}
                    </button>

                    <p className="text-slate-600 text-xs text-center">
                      * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
