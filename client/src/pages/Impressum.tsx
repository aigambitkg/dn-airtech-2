/* ============================================================
   Impressum Page – DN AirTecH GmbH
   Design: "Thermal Precision"
   ============================================================ */

import { useEffect } from 'react';

export default function Impressum() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4"><div className="divider-red" /><span className="section-label">Rechtliches</span></div>
        <h1 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>Impressum</h1>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Angaben gemäß § 5 TMG</h2>
            <div className="card-light p-6 space-y-1">
              <p className="text-gray-900 font-semibold">DN AirTecH GmbH</p>
              <p>Heinrich-Krumm-Straße 20</p>
              <p>63073 Offenbach am Main</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Kontakt</h2>
            <div className="card-light p-6 space-y-2">
              <p>Telefon: <a href="tel:+4969330887540" className="text-red-600 hover:underline">+49 69 3308 8754</a></p>
              <p>Telefon: <a href="tel:+4969663895240" className="text-red-600 hover:underline">+49 69 6638 9524</a></p>
              <p>E-Mail: <a href="mailto:info@dn-airtechgmbh.de" className="text-red-600 hover:underline">info@dn-airtechgmbh.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Handelsregister</h2>
            <div className="card-light p-6 space-y-1">
              <p>Registergericht: Amtsgericht Offenbach am Main</p>
              <p>Registernummer: HRB56122</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Umsatzsteuer-ID</h2>
            <div className="card-light p-6">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
              <p className="text-gray-900 font-semibold mt-1">DE363307976</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="card-light p-6">
              <p>DN AirTecH GmbH</p>
              <p>Heinrich-Krumm-Straße 20</p>
              <p>63073 Offenbach am Main</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Haftungsausschluss</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-900 font-semibold mb-2">Haftung für Inhalte</h3>
                <p className="text-sm">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold mb-2">Haftung für Links</h3>
                <p className="text-sm">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold mb-2">Urheberrecht</h3>
                <p className="text-sm">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
