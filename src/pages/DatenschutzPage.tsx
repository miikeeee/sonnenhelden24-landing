import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DatenschutzPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            klimahero24
          </div>
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
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Einleitung</h2>
              <p className="text-gray-700 mb-4">
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG, TMG, TTDSG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website klimahero24.de.
              </p>
              <p className="text-gray-700 mb-4">
                Mit dem Besuch dieser Website erklären Sie sich mit der nachfolgenden Verarbeitung Ihrer personenbezogenen Daten einverstanden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Verantwortlicher im Sinne der DSGVO</h2>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                <p className="mb-1">Mike Mildenberger</p>
                <p className="mb-1">Rosenweg 21</p>
                <p className="mb-1">53604 Bad Honnef</p>
                <p className="mb-1">E-Mail: info@klimahero24.de</p>
                <p>Website: https://www.klimahero24.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Hosting & Zugriffsdaten</h2>
              <p className="text-gray-700 mb-4">
                Unsere Website wird gehostet bei:
              </p>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg mb-4">
                <p className="mb-1">Vercel Inc.</p>
                <p className="mb-1">340 S Lemon Ave #4133</p>
                <p className="mb-1">Walnut, CA 91789, USA</p>
                <p>https://vercel.com/legal/privacy-policy</p>
              </div>
              <p className="text-gray-700 mb-4">
                Beim Besuch unserer Website erhebt Vercel automatisch Daten über Zugriffe auf die Website und speichert diese in sogenannten Server-Logfiles. Dabei werden folgende Daten erfasst:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Besuchte Website / URL</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Menge der gesendeten Daten</li>
                <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                <li>Verwendeter Browser</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Verwendete IP-Adresse (ggf. anonymisiert)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Diese Daten dienen ausschließlich der technischen Überwachung, Sicherheit und statistischen Auswertung und werden nicht mit anderen Datenquellen zusammengeführt.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p className="text-gray-700 mb-4">
                Wir verarbeiten personenbezogene Daten nur dann, wenn Sie uns diese freiwillig mitteilen, etwa durch:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>eine E-Mail-Anfrage</li>
                <li>die Nutzung unseres Kontaktformulars (falls vorhanden)</li>
                <li>den Zugriff auf bereitgestellte Inhalte (z. B. Google Drive-Dokumente)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Die Verarbeitung erfolgt zu folgenden Zwecken:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>zur Kommunikation mit Ihnen</li>
                <li>zur Bearbeitung Ihrer Anfragen</li>
                <li>zur technischen Bereitstellung und Optimierung der Website</li>
                <li>zur Erfüllung gesetzlicher Pflichten</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Rechtsgrundlage:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder Vertragsanbahnung)</li>
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Datenweitergabe an Dritte</h2>
              <p className="text-gray-700 mb-4">
                Grundsätzlich geben wir Ihre personenbezogenen Daten nicht an Dritte weiter – außer, dies ist im Rahmen der Nutzung technischer Dienstleister erforderlich oder gesetzlich vorgeschrieben.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Unsere externen Dienstleister:</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-2">a) Google Analytics</h4>
              <p className="text-gray-700 mb-4">
                Diese Website verwendet Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google").
              </p>
              <p className="text-gray-700 mb-4">
                Google Analytics verwendet Cookies, die eine Analyse Ihrer Nutzung der Website ermöglichen. Die erzeugten Informationen (einschließlich Ihrer gekürzten IP-Adresse) werden an Server von Google in den USA übertragen und dort gespeichert.
              </p>
              <p className="text-gray-700 mb-4">
                Wir haben die IP-Anonymisierung („anonymizeIP") aktiviert. Ihre IP-Adresse wird also innerhalb der EU gekürzt und nicht vollständig an Google übermittelt.
              </p>
              <p className="text-gray-700 mb-4">
                Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern oder über unser Cookie-Banner steuern.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-2">b) Google Gmail (E-Mail-Kommunikation)</h4>
              <p className="text-gray-700 mb-4">
                Für unsere geschäftliche Kommunikation nutzen wir Gmail von Google (Google Ireland Limited). Dabei werden Ihre E-Mails und ggf. enthaltene personenbezogene Daten über Server von Google verarbeitet.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anfrage)
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-2">c) Google Drive (Dokumentenfreigabe)</h4>
              <p className="text-gray-700 mb-4">
                Zur Bereitstellung von Inhalten oder Arbeitsunterlagen setzen wir Google Drive ein. Wenn Sie auf einen Link zu einem Dokument klicken, werden technische Informationen wie Ihre IP-Adresse an Google übermittelt.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Speicherdauer</h2>
              <p className="text-gray-700 mb-4">
                Wir speichern personenbezogene Daten nur so lange, wie dies zur Erreichung der genannten Zwecke erforderlich ist oder wie es gesetzlich vorgeschrieben ist.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>E-Mails werden nach abgeschlossener Bearbeitung und Ablauf gesetzlicher Fristen gelöscht.</li>
                <li>Log-Daten auf dem Server werden in der Regel automatisch nach 14–30 Tagen gelöscht.</li>
                <li>Google Analytics-Daten werden standardmäßig nach 14 Monaten gelöscht.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Ihre Rechte</h2>
              <p className="text-gray-700 mb-4">
                Sie haben nach Art. 15 ff. DSGVO folgende Rechte:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Auskunft über die bei uns gespeicherten Daten</li>
                <li>Berichtigung, wenn wir unrichtige Daten verarbeiten</li>
                <li>Löschung Ihrer Daten („Recht auf Vergessenwerden")</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Widerruf Ihrer Einwilligung (jederzeit mit Wirkung für die Zukunft)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Bitte senden Sie Ihre Anfrage an: info@klimahero24.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p className="text-gray-700 mb-4">
                Sollten Sie der Ansicht sein, dass die Verarbeitung Ihrer Daten gegen Datenschutzrecht verstößt, haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren:
              </p>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                <p className="mb-1">Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</p>
                <p className="mb-1">Kavalleriestraße 2-4</p>
                <p className="mb-1">40213 Düsseldorf</p>
                <p>www.ldi.nrw.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Sicherheit der Verarbeitung</h2>
              <p className="text-gray-700 mb-4">
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor Manipulation, Verlust oder unberechtigtem Zugriff zu schützen. Unsere Website ist durch HTTPS (SSL/TLS) gesichert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Aktualisierungen dieser Datenschutzerklärung</h2>
              <p className="text-gray-700 mb-4">
                Diese Datenschutzerklärung ist aktuell gültig (Stand: 15. Juni 2025). Wir behalten uns vor, sie bei technischen Änderungen oder rechtlichen Vorgaben anzupassen. Die jeweils aktuelle Version finden Sie stets unter:
              </p>
              <p className="text-gray-700">
                <a href="https://www.klimahero24.de/datenschutz" className="text-blue-600 hover:underline">
                  https://www.klimahero24.de/datenschutz
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
