import React from "react";

const PolicyPage = () => {
  return (
    <section className="min-h-screen flex items-center  text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10  text-blue-600">
          Impressum & Datenschutz
        </h1>

        <div className="text-lg space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Impressum</h2>
            <p>
              <strong>Angaben gemäß § 5 TMG</strong><br />
              Betreiber der Webseite: <br />
              Max Mustermann<br />
              Beispielstraße 12<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
            <p>
              <strong>Kontakt:</strong><br />
              Telefon: 0123 / 456789<br />
              E-Mail: info@promotions-ranking.de
            </p>
            <p>
              <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
              Max Mustermann<br />
              Beispielstraße 12<br />
              12345 Musterstadt
            </p>
            <p>
              <strong>Plattform der EU-Kommission zur Online-Streitbeilegung:</strong><br />
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Datenschutzerklärung</h2>
            <p><strong>(Stand: Juli 2025)</strong></p>

            <p><strong>1. Allgemeine Hinweise</strong><br />
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              Die Nutzung unserer Webseite ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (z.B. Name, E-Mail-Adresse, Erfahrungsbericht) erhoben werden, erfolgt dies stets auf freiwilliger Basis.
            </p>

            <p><strong>2. Verantwortlicher</strong><br />
              Max Mustermann<br />
              Beispielstraße 12<br />
              12345 Musterstadt<br />
              E-Mail: info@promotions-ranking.de
            </p>

            <p><strong>3. Erhebung und Verarbeitung personenbezogener Daten</strong><br />
              Personenbezogene Daten werden insbesondere dann erhoben, wenn Sie:
              <ul className="list-disc list-inside ml-4">
                <li>einen Erfahrungsbericht einreichen</li>
                <li>uns per E-Mail kontaktieren</li>
              </ul>
              Diese Daten verwenden wir ausschließlich zur Veröffentlichung der Erfahrungsberichte (ggf. anonymisiert) oder zur Bearbeitung Ihrer Anfrage. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche Einwilligung.
            </p>

            <p><strong>4. Rechtsgrundlage der Verarbeitung</strong><br />
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, z.B. Sicherheit, Analyse).
            </p>

            <p><strong>5. Speicherdauer</strong><br />
              Daten werden gelöscht, sobald der Zweck entfällt oder Sie Ihre Einwilligung widerrufen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <p><strong>6. Ihre Rechte</strong><br />
              Sie haben jederzeit das Recht auf:
              <ul className="list-disc list-inside ml-4">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch (Art. 21 DSGVO)</li>
                <li>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              Bitte richten Sie Ihre Anliegen an: info@promotions-ranking.de
            </p>

            <p><strong>7. Server-Log-Dateien</strong><br />
              Der Hosting-Provider speichert automatisch Informationen wie:
              <ul className="list-disc list-inside ml-4">
                <li>IP-Adresse</li>
                <li>Browsertyp/Browserversion</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              Diese Daten sind nicht bestimmten Personen zuordenbar und dienen der Sicherheit und Statistik.
            </p>

            <p><strong>8. Cookies und Analyse-Tools</strong><br />
              Diese Website verwendet ggf. technisch notwendige Cookies. Aktuell keine Analyse-Tools wie Google Analytics. Bei Einführung erfolgt Zustimmung über ein Cookie-Banner.
            </p>

            <p><strong>9. Erfahrungsberichte</strong><br />
              Erfahrungsberichte werden freiwillig eingereicht. Eine Veröffentlichung erfolgt unter Pseudonym oder anonym. Bitte keine personenbezogenen Daten Dritter ohne Einwilligung einreichen. Beiträge können auf Wunsch gelöscht oder bearbeitet werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyPage;
