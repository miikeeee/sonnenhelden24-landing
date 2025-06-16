import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AgbPage = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-700 mb-6">
              für die Nutzung von klimahero24.de<br />
              <strong>Stand: 15. Juni 2025</strong>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Anbieterinformationen</h2>
              <p className="text-gray-700 mb-4">
                klimahero24.de ist ein Angebot von:
              </p>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                <p className="mb-1">Mike Mildenberger</p>
                <p className="mb-1">Rosenweg 21</p>
                <p className="mb-1">53604 Bad Honnef</p>
                <p>E-Mail: info@klimahero24.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Geltungsbereich und Vertragsgegenstand</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Nutzer der Webseite www.klimahero24.de und regeln die Bedingungen der Nutzung sowie die angebotenen Vermittlungsleistungen.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Die Webseite dient der Leadgenerierung und -vermittlung. Nutzer können über bereitgestellte Formulare Angaben zu geplanten Klimaanlagen- oder Klimatisierungsvorhaben machen, die nach ihrer Zustimmung an ausgewählte, externe Dienstleister weitergeleitet werden. Es kommt kein Vertrag über eine handwerkliche Leistung mit klimahero24.de zustande.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(3)</strong> Die Vermittlung erfolgt ausschließlich auf Grundlage dieser AGB. Abweichende Bedingungen gelten nur, wenn sie durch den Betreiber schriftlich bestätigt wurden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Leistungen von klimahero24.de</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> klimahero24.de vermittelt auf Anfrage den Kontakt zwischen interessierten Endkunden (Nutzern) und ausgewählten Dienstleistern, insbesondere im Bereich Klimaanlagen, Klimatisierung und vergleichbare handwerkliche Leistungen.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Die Vermittlung erfolgt auf Basis der im Formular übermittelten Angaben. Diese werden nach explizitem Einverständnis der Nutzer an geeignete Partnerunternehmen übermittelt.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(3)</strong> Es erfolgt keine Prüfung der Bonität, Seriosität oder Fachkunde der angefragten Nutzer. Ebenso erfolgt keine Gewährleistung für das Zustandekommen eines Auftrags oder die Qualität der erbrachten Leistung durch die vermittelten Dienstleister.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(4)</strong> Die Leistung des Webseitenbetreibers ist mit der erfolgreichen Übermittlung der Nutzerdaten an mindestens einen geeigneten Dienstleister erfüllt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Keine Beratung und keine eigene Leistungserbringung</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> klimahero24.de erbringt keine handwerklichen Dienstleistungen, Beratungen oder technische Planungen. Der Betreiber ist ausschließlich für die Vermittlung von Kontakten zuständig.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Vertragsverhältnisse über handwerkliche oder technische Leistungen kommen ausschließlich zwischen dem vermittelten Dienstleister und dem Nutzer zustande.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(3)</strong> klimahero24.de wird nicht Vertragspartner und übernimmt keine Gewährleistung, Haftung oder Verantwortung für Leistungen oder Aussagen der vermittelten Dienstleister.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Nutzerpflichten</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> Der Nutzer verpflichtet sich, im Rahmen der Nutzung der Website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>alle Angaben im Anfrageformular wahrheitsgemäß und vollständig zu machen,</li>
                <li>keine rechtswidrigen Inhalte zu übermitteln,</li>
                <li>keine Daten Dritter ohne deren Zustimmung einzugeben,</li>
                <li>das Formular nicht missbräuchlich oder zu Testzwecken zu verwenden.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Der Nutzer ist dafür verantwortlich, sicherzustellen, dass er unter der angegebenen E-Mail-Adresse oder Telefonnummer erreichbar ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Weitergabe von Nutzerdaten</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> Mit Absenden des Formulars erklärt der Nutzer seine ausdrückliche Einwilligung zur Weitergabe seiner personenbezogenen Daten an Dritte (z. B. Handwerksbetriebe, Dienstleister).
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Die Daten werden ausschließlich zu dem Zweck verwendet, den Kontakt zwischen Nutzer und Dienstleister herzustellen. Eine weitergehende Nutzung oder Speicherung erfolgt nicht.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(3)</strong> Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden. Bis dahin vorgenommene Datenverarbeitungen bleiben rechtmäßig.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(4)</strong> Näheres regelt die Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Kosten</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> Die Nutzung der Plattform und das Ausfüllen sowie Absenden des Formulars ist für den Nutzer kostenfrei.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Die Finanzierung der Seite erfolgt durch Vermittlungshonorare, die ggf. von den angebundenen Partnerunternehmen gezahlt werden. Daraus entstehen dem Nutzer keine zusätzlichen Kosten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Keine Erfolgsgarantie</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> klimahero24.de übernimmt keine Garantie dafür, dass:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>ein geeigneter Anbieter zur Verfügung steht,</li>
                <li>ein Rückruf oder Angebot durch die Partnerunternehmen erfolgt,</li>
                <li>die übermittelten Anbieter zur Anfrage passen,</li>
                <li>ein Vertrag zustande kommt.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Der Betreiber behält sich das Recht vor, Anfragen nicht zu übermitteln oder abzulehnen, etwa bei unvollständigen Angaben, offensichtlichem Spam oder unseriösen Inhalten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Haftungsausschluss</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> Der Betreiber haftet ausschließlich bei Vorsatz oder grober Fahrlässigkeit. Eine Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine Kardinalpflicht verletzt wurde.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Es wird insbesondere keine Haftung übernommen für:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Schäden, die aus der Nutzung der Plattform entstehen,</li>
                <li>Schäden durch fehlerhafte oder verspätete Weiterleitung,</li>
                <li>Schäden durch Dienstleistungen Dritter (vermittelte Handwerksbetriebe),</li>
                <li>technische Probleme oder Ausfälle der Webseite.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Geistiges Eigentum und Nutzung der Inhalte</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> Alle Inhalte auf klimahero24.de, wie Texte, Bilder, Grafiken, Logos und Layouts, sind urheberrechtlich geschützt.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Eine Nutzung außerhalb des bestimmungsgemäßen Gebrauchs ist untersagt. Eine Vervielfältigung, Verbreitung oder kommerzielle Nutzung bedarf der ausdrücklichen Zustimmung des Betreibers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Änderungen der AGB</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> Der Betreiber behält sich das Recht vor, diese AGB jederzeit zu ändern oder anzupassen. Die jeweils aktuelle Fassung ist auf der Website einsehbar.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Wesentliche Änderungen, die Nutzerrechte betreffen, werden gesondert mitgeteilt – z. B. durch E-Mail oder gut sichtbaren Hinweis auf der Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Schlussbestimmungen</h2>
              <p className="text-gray-700 mb-4">
                <strong>(1)</strong> Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Gerichtsstand für alle Streitigkeiten im Zusammenhang mit der Nutzung dieser Webseite ist – soweit gesetzlich zulässig – Königswinter.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(3)</strong> Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein, berührt dies nicht die Wirksamkeit der übrigen Bestimmungen. Die unwirksame Regelung wird durch eine wirtschaftlich möglichst gleichkommende Regelung ersetzt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgbPage;
