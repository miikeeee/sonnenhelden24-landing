import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DatenschutzPage = () => {
  const currentDate = new Date().toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Solaranlage/sonnenhelden24-logo.svg"
              alt="sonnenhelden24 Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Datenschutzerklärung</h1>
          <p className="text-gray-600 mb-8">Stand: {currentDate}</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Allgemeines und Pflichtinformationen</h2>
              <p className="text-gray-700">
                Wir, die Betreiber der Website <strong>sonnenhelden24.de</strong>, nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG) und dem Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG), sowie dieser Datenschutzerklärung.
              </p>
              <p className="text-gray-700">
                Diese Erklärung gibt Ihnen einen Überblick darüber, welche Art von Daten zu welchem Zweck erhoben werden und wie wir deren Schutz gewährleisten. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-gray-700 mb-4">
                Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="mb-1 font-medium">Mike Mildenberger</p>
                <p className="mb-1">Rosenweg 21</p>
                <p className="mb-1">53604 Bad Honnef</p>
                <p className="mb-1"><strong>E-Mail:</strong> info@sonnenhelden24.de</p>
                <p><strong>Website:</strong> https://www.sonnenhelden24.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Ihre Rechte als betroffene Person</h2>
              <p className="text-gray-700 mb-4">
                Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen die folgenden Rechte:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können eine Bestätigung darüber verlangen, ob wir personenbezogene Daten von Ihnen verarbeiten, und Auskunft über diese Daten erhalten.</li>
                <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die unverzügliche Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
                <li><strong>Recht auf Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten Daten verlangen, soweit die Verarbeitung nicht zur Erfüllung einer rechtlichen Verpflichtung oder zur Geltendmachung von Rechtsansprüchen erforderlich ist.</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
                <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, jederzeit Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt.</li>
                <li><strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Zur Ausübung dieser Rechte wenden Sie sich bitte an die oben genannte E-Mail-Adresse.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p className="text-gray-700 mb-4">
                Im Falle datenschutzrechtlicher Verstöße steht Ihnen gemäß Art. 77 DSGVO ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Die für uns zuständige Aufsichtsbehörde ist:
              </p>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="mb-1 font-medium">Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</p>
                <p className="mb-1">Kavalleriestraße 2-4</p>
                <p className="mb-1">40213 Düsseldorf</p>
                <p><strong>Website:</strong> <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ldi.nrw.de</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Datenerfassung auf unserer Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">a) Hosting und Server-Logfiles</h3>
              <p className="text-gray-700 mb-4">
                Unsere Website wird von einem externen Dienstleister gehostet, um einen sicheren und performanten Betrieb zu gewährleisten.
              </p>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <p className="mb-1 font-medium">Vercel Inc.</p>
                <p className="mb-1">340 S Lemon Ave #4133</p>
                <p>Walnut, CA 91789, USA</p>
              </div>
              <p className="text-gray-700 mb-4">
                Bei jedem Zugriff erhebt unser Hoster Vercel automatisch Daten und speichert diese in Server-Logfiles. Dies umfasst:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Ihre IP-Adresse (in der Regel anonymisiert)</li>
                <li>Datum und Uhrzeit der Serveranfrage</li>
                <li>Besuchte Seite (URL) und übertragene Datenmenge</li>
                <li>Browsertyp, Browserversion und Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschließlich der Sicherstellung des fehlerfreien Betriebs und der Sicherheit unserer Website.
                <br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an einer sicheren und technisch fehlerfreien Bereitstellung der Website).
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">b) Kontaktaufnahme</h3>
              <p className="text-gray-700">
                Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden die von Ihnen übermittelten Daten (z. B. Name, E-Mail-Adresse, Inhalt der Anfrage) bei uns gespeichert, um Ihre Anfrage zu bearbeiten. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                <br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (sofern die Anfrage vertragsrelevant ist) oder Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der Bearbeitung Ihrer Anfrage).
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies und ähnliche Technologien</h2>
              <p className="text-gray-700 mb-4">
                Unsere Website verwendet Cookies. Dies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir unterscheiden zwischen technisch notwendigen Cookies, die für die Grundfunktion der Seite erforderlich sind, und optionalen Cookies für Analyse- und Marketingzwecke.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Technisch notwendige Cookies</strong> werden auf Grundlage von § 25 Abs. 2 TTDSG und Art. 6 Abs. 1 lit. f DSGVO gesetzt.</li>
                  <li><strong>Analyse-, Marketing- & Funktionale Cookies</strong> werden nur mit Ihrer ausdrücklichen Einwilligung über unser Cookie-Banner gesetzt. <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Ihre Einwilligung können Sie jederzeit über die Cookie-Einstellungen auf unserer Website für die Zukunft widerrufen oder anpassen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Analyse-Tools und Dienste von Drittanbietern</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">a) Google Analytics</h3>
              <p className="text-gray-700 mb-4">
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics der Google Ireland Limited. Google Analytics verwendet Cookies, um das Verhalten der Website-Besucher zu analysieren.
              </p>
              <p className="text-gray-700 mb-4">
                Wir haben die <strong>IP-Anonymisierung</strong> aktiviert. Ihre IP-Adresse wird von Google innerhalb der EU/EWR vor der Übermittlung in die USA gekürzt. Eine Datenübermittlung in die USA erfolgt auf Grundlage des EU-U.S. Data Privacy Framework.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Rechtsgrundlage:</strong> Die Nutzung erfolgt ausschließlich auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG).
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">b) Hotjar</h3>
              <p className="text-gray-700 mb-4">
                Wir nutzen Hotjar (Anbieter: Hotjar Ltd., Malta), um die Bedürfnisse unserer Nutzer besser zu verstehen und das Angebot auf dieser Website zu optimieren. Hotjar verwendet Cookies und andere Technologien, um Daten über das Nutzerverhalten zu erheben (z.B. Klicks, Mausbewegungen, Scroll-Höhe).
              </p>
              <p className="text-gray-700 mb-4">
                Ihre IP-Adresse wird dabei nur in anonymisierter Form erfasst. Hotjar speichert diese Informationen in unserem Auftrag in einem pseudonymisierten Nutzerprofil. Sensible Daten werden nicht erfasst.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Rechtsgrundlage:</strong> Die Nutzung erfolgt ausschließlich auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG). Sie können der Datenerhebung durch Hotjar widersprechen, indem Sie folgenden Link aufrufen: <a href="https://www.hotjar.com/policies/do-not-track/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hotjar Opt-Out</a>.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Kommunikation und Datenorganisation (Google Workspace)</h2>
               <p className="text-gray-700 mb-4">
                Für unsere interne Organisation und externe Kommunikation nutzen wir Dienste von Google Workspace (Anbieter: Google Ireland Limited), darunter <strong>Gmail</strong> (E-Mail-Verkehr) und <strong>Google Drive</strong> (Cloud-Speicher).
              </p>
              <p className="text-gray-700 mb-4">
                Wenn Sie mit uns kommunizieren, werden Ihre Daten (z.B. E-Mails) auf den Servern von Google verarbeitet. Die Datenübermittlung in die USA ist durch das EU-U.S. Data Privacy Framework abgedeckt.
              </p>
              <p className="text-gray-700">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsabwicklung) und Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an einer effizienten und sicheren Organisation).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Speicherdauer</h2>
              <p className="text-gray-700 mb-4">
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es zur Erreichung des Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen (z.B. aus dem Handels- oder Steuerrecht) dies vorschreiben.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Server-Logfiles:</strong> Werden in der Regel nach 14–30 Tagen gelöscht.</li>
                <li><strong>Daten aus Kontaktanfragen:</strong> Werden nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</li>
                <li><strong>Analyse-Daten:</strong> Werden bei Google Analytics standardmäßig nach 14 Monaten gelöscht.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Datensicherheit</h2>
              <p className="text-gray-700">
                Wir treffen angemessene technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten zu schützen. Unsere Website nutzt aus Sicherheitsgründen eine <strong>SSL/TLS-Verschlüsselung</strong>, erkennbar am Schloss-Symbol und „https://“ in der Adresszeile Ihres Browsers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="text-gray-700">
                Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Version finden Sie stets unter:
              </p>
              <p className="text-gray-700">
                <a href="https://www.sonnenhelden24.de/datenschutz" className="text-blue-600 hover:underline break-words">
                  https://www.sonnenhelden24.de/datenschutz
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage;