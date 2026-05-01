/* ============================================================
   Datenschutz Page – DN AirTecH GmbH
   Design: "Thermal Precision"
   DSGVO-konform
   ============================================================ */

import { useEffect } from 'react';

export default function Datenschutz() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-cyan-400" /><span className="section-label">DSGVO</span></div>
        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Datenschutzerklärung</h1>
        <p className="text-slate-400 mb-12">Stand: Mai 2026</p>

        <div className="space-y-10 text-slate-400 leading-relaxed text-sm">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>1. Datenschutz auf einen Blick</h2>
            <div className="glass-card neon-border p-6 space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Datenerfassung auf dieser Website</h3>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2. Verantwortliche Stelle</h2>
            <div className="glass-card neon-border p-6">
              <p className="text-white font-semibold">DN AirTecH GmbH</p>
              <p>Heinrich-Krumm-Straße 20</p>
              <p>63073 Offenbach am Main</p>
              <p>E-Mail: <a href="mailto:info@dn-airtechgmbh.de" className="text-cyan-400 hover:underline">info@dn-airtechgmbh.de</a></p>
              <p>Telefon: <a href="tel:+4969330887540" className="text-cyan-400 hover:underline">+49 69 3308 8754</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3. Erhebung und Speicherung personenbezogener Daten</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Beim Besuch der Website</h3>
                <p>Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert: IP-Adresse des anfragenden Rechners, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Kontaktformular</h3>
                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>4. Cookies</h2>
            <div className="glass-card neon-border p-6 space-y-3">
              <p>Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
              <p>Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie beim nächsten Besuch wiederzuerkennen.</p>
              <p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p>
              <p>Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>5. Ihre Rechte</h2>
            <div className="space-y-3">
              {[
                { title: 'Auskunftsrecht (Art. 15 DSGVO)', desc: 'Sie haben das Recht, jederzeit unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.' },
                { title: 'Berichtigungsrecht (Art. 16 DSGVO)', desc: 'Sie haben das Recht, unrichtige personenbezogene Daten, die wir über Sie gespeichert haben, berichtigen zu lassen.' },
                { title: 'Löschungsrecht (Art. 17 DSGVO)', desc: 'Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.' },
                { title: 'Einschränkungsrecht (Art. 18 DSGVO)', desc: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.' },
                { title: 'Widerspruchsrecht (Art. 21 DSGVO)', desc: 'Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.' },
                { title: 'Beschwerderecht', desc: 'Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit.' },
              ].map(({ title, desc }) => (
                <div key={title} className="glass-card neon-border p-4">
                  <h3 className="text-white font-semibold mb-1 text-sm">{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>6. Datensicherheit</h2>
            <div className="glass-card neon-border p-6">
              <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>7. Kontakt bei Datenschutzfragen</h2>
            <div className="glass-card neon-border p-6">
              <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
              <p className="mt-2 text-white font-semibold">DN AirTecH GmbH</p>
              <p>E-Mail: <a href="mailto:info@dn-airtechgmbh.de" className="text-cyan-400 hover:underline">info@dn-airtechgmbh.de</a></p>
              <p>Telefon: <a href="tel:+4969330887540" className="text-cyan-400 hover:underline">+49 69 3308 8754</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
