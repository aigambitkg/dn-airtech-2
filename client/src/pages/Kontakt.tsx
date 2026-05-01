/* ============================================================
   Kontakt – DN AirTecH GmbH
   Design: "Precision Light" – White + Red (#D32F2F) + Blue (#1565C0)
   DSGVO-konformes Kontaktformular
   ============================================================ */

import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028072501/aP9D2Nd9v4NH2iF8FuLCZP/hero_airtech_2040-bo8NoLUqCAAsmfisCCvahg.webp';

const services = ['Klimaanlage', 'Wärmepumpe', 'Ventilation', 'Sanitär', 'Wartung', 'Sonstiges'];

export default function Kontakt() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '', privacy: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.scroll-fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[45vh] flex items-end pb-16 overflow-hidden pt-16">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(26,26,46,0.9) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-badge mb-4 inline-flex" style={{ background: 'rgba(211,47,47,0.15)', borderColor: 'rgba(211,47,47,0.4)', color: '#EF5350' }}>
              Kostenlose Beratung
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}>
              Kontaktieren<br /><span style={{ color: '#EF5350' }}>Sie uns</span>
            </h1>
            <p className="text-gray-200 text-lg">Kostenlose Beratung und individuelle Angebote für Ihr Projekt.</p>
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ───────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4 scroll-fade-in">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="divider-red" /><span className="section-label">Erreichbarkeit</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                  Wir sind für Sie <span className="gradient-heading-red">da</span>
                </h2>
              </div>

              {[
                { icon: Phone, label: 'Telefon', value: '+49 69 3308 8754', href: 'tel:+4969330887540', sub: 'Hauptnummer' },
                { icon: Phone, label: 'Telefon 2', value: '+49 69 6638 9524', href: 'tel:+4969663895240', sub: 'Zweite Nummer' },
                { icon: Mail, label: 'E-Mail', value: 'info@dn-airtechgmbh.de', href: 'mailto:info@dn-airtechgmbh.de', sub: 'Antwort innerhalb 24h' },
                { icon: MapPin, label: 'Adresse', value: 'Heinrich-Krumm-Straße 20', href: null, sub: '63073 Offenbach am Main' },
              ].map(({ icon: Icon, label, value, href, sub }) => (
                <div key={label} className="card-light p-4 flex items-start gap-4">
                  <div className="icon-box-red flex-shrink-0"><Icon className="w-4 h-4" /></div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
                    {href ? (
                      <a href={href} className="text-gray-900 font-medium hover:text-red-600 transition-colors text-sm">{value}</a>
                    ) : (
                      <div className="text-gray-900 font-medium text-sm">{value}</div>
                    )}
                    <div className="text-gray-400 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}

              <div className="card-light p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span className="text-gray-900 font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Öffnungszeiten</span>
                </div>
                <div className="space-y-2 text-sm">
                  {[{ day: 'Mo – Fr', time: '08:00 – 18:00 Uhr' }, { day: 'Samstag', time: '09:00 – 14:00 Uhr' }, { day: 'Notfallservice', time: '24/7 erreichbar' }].map(({ day, time }) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-gray-500">{day}</span>
                      <span className="text-gray-900 font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 scroll-fade-in">
              <div className="bg-white border border-gray-200 shadow-sm p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="icon-box-red mx-auto mb-6 w-16 h-16 flex items-center justify-center" style={{ background: 'rgba(211,47,47,0.08)', border: '1px solid rgba(211,47,47,0.2)' }}>
                      <CheckCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Nachricht gesendet!</h3>
                    <p className="text-gray-500">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="divider-red" /><span className="section-label">Anfrage senden</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Name *</label>
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Ihr vollständiger Name" className="form-input-light" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>E-Mail *</label>
                        <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="ihre@email.de" className="form-input-light" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Telefon</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+49 ..." className="form-input-light" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Leistung</label>
                        <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="form-input-light">
                          <option value="">Bitte wählen</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Nachricht *</label>
                      <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..." rows={5} className="form-input-light resize-none" />
                    </div>

                    {/* DSGVO Checkbox */}
                    <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ accentColor: '#D32F2F' }}
                      />
                      <label htmlFor="privacy" className="text-gray-500 text-xs leading-relaxed cursor-pointer">
                        Ich habe die{' '}
                        <a href="/datenschutz" className="text-red-600 hover:underline font-medium">Datenschutzerklärung</a>
                        {' '}gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !formData.privacy}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Wird gesendet...</>
                      ) : (
                        <><Send className="w-4 h-4" />ANFRAGE ABSENDEN</>
                      )}
                    </button>

                    <p className="text-gray-400 text-xs text-center">
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
