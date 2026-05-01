/* ============================================================
   CookieBanner – DSGVO-konform
   Design: "Thermal Precision" – Glassmorphismus
   Speichert Einwilligung in localStorage
   ============================================================ */

import { useState, useEffect } from 'react';
import { X, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'wouter';

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  accepted: boolean;
};

const STORAGE_KEY = 'dn_airtech_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
    accepted: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const saveConsent = (state: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, timestamp: Date.now() }));
    setVisible(false);
  };

  const acceptAll = () => {
    const state = { necessary: true, analytics: true, marketing: true, accepted: true };
    setConsent(state);
    saveConsent(state);
  };

  const acceptNecessary = () => {
    const state = { necessary: true, analytics: false, marketing: false, accepted: true };
    setConsent(state);
    saveConsent(state);
  };

  const saveCustom = () => {
    saveConsent({ ...consent, accepted: true });
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie-Einstellungen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
          
          {/* Icon + Text */}
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-cyan-400/30 bg-cyan-400/10">
              <Shield className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Datenschutz & Cookies
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
                Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Notwendige Cookies sind für den Betrieb der Website erforderlich. 
                Mit Ihrer Einwilligung können wir auch Analyse-Cookies verwenden, um unsere Website zu verbessern.{' '}
                <Link href="/datenschutz">
                  <span className="text-cyan-400 hover:underline cursor-pointer">Datenschutzerklärung</span>
                </Link>
              </p>
              
              {/* Details Toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white mt-2 transition-colors"
              >
                {showDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                Einstellungen anpassen
              </button>
              
              {showDetails && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { key: 'necessary', label: 'Notwendig', desc: 'Technisch erforderlich', locked: true },
                    { key: 'analytics', label: 'Analyse', desc: 'Nutzungsstatistiken', locked: false },
                    { key: 'marketing', label: 'Marketing', desc: 'Personalisierte Inhalte', locked: false },
                  ].map(({ key, label, desc, locked }) => (
                    <label
                      key={key}
                      className={`flex items-center gap-3 p-3 border transition-all cursor-pointer ${
                        consent[key as keyof ConsentState]
                          ? 'border-cyan-400/40 bg-cyan-400/5'
                          : 'border-white/10 bg-white/2'
                      } ${locked ? 'cursor-not-allowed opacity-70' : 'hover:border-white/20'}`}
                    >
                      <input
                        type="checkbox"
                        checked={Boolean(consent[key as keyof ConsentState])}
                        disabled={locked}
                        onChange={(e) => !locked && setConsent(prev => ({ ...prev, [key]: e.target.checked }))}
                        className="w-4 h-4 accent-cyan-400"
                      />
                      <div>
                        <div className="text-xs font-medium text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {label}
                          {locked && <span className="ml-1 text-slate-500">(Pflicht)</span>}
                        </div>
                        <div className="text-[0.65rem] text-slate-500">{desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0 w-full lg:w-auto">
            {showDetails && (
              <button
                onClick={saveCustom}
                className="px-4 py-2.5 text-xs font-semibold border border-white/20 text-slate-300 hover:border-white/40 hover:text-white transition-all"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}
              >
                Auswahl speichern
              </button>
            )}
            <button
              onClick={acceptNecessary}
              className="px-4 py-2.5 text-xs font-semibold border border-white/20 text-slate-300 hover:border-white/40 hover:text-white transition-all"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}
            >
              Nur Notwendige
            </button>
            <button
              onClick={acceptAll}
              className="btn-primary-glow text-xs py-2.5 px-5"
            >
              Alle akzeptieren
            </button>
          </div>

          {/* Close */}
          <button
            onClick={acceptNecessary}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors lg:static"
            aria-label="Schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
