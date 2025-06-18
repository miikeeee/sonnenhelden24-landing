import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AgbPage = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-gray-600 mb-8">für die Nutzung der Website sonnenhelden24.de | Stand: {currentDate}</p>
          
          <div className="prose prose-lg max-w-none space-y-8">

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich und Anbieter</h2>
              <p className="text-gray-700">
                <strong>(1)</strong> Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) regeln die Nutzung der Website <strong>sonnenhelden24.de</strong> (nachfolgend „Website“) durch ihre Besucher (nachfolgend „Nutzer“).
              </p>
              <p className="text-gray-700 mb-4">
                <strong>(2)</strong> Anbieter der Website und Vertragspartner des Nutzers ist:
              </p>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="mb-1 font-medium">Mike Mildenberger</p>
                <p className="mb-1">Rosenweg 21</p>
                <p className="mb-1">53604 Bad Honnef</p>
                <p><strong>E-Mail:</strong> info@sonnenhelden24.de</p>
              </div>
              <p className="text-gray-700 mt-4">
                <strong>(3)</strong> Mit der Nutzung der Website, insbesondere dem Absenden einer Anfrage, erkennt der Nutzer diese AGB als verbindlich an. Abweichende, entgegenstehende oder ergänzende Bedingungen des Nutzers werden nur dann und insoweit Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 2 Leistungsbeschreibung und Vertragsgegenstand</h2>
              <p className="text-gray-700">
                <strong>(1)</strong> Die Website ist eine Informations- und Vermittlungsplattform. Sie bietet Nutzern redaktionelle Inhalte und Ratgeber rund um das Thema Bad, Sanierung und Handwerk.
              </p>
              <p className="text-gray-700">
                <strong>(2)</strong> Kernleistung ist die (zukünftige) kostenlose Vermittlung von Anfragen von Nutzern, die an handwerklichen Dienstleistungen interessiert sind (sog. „Leads“), an geeignete, unabhängige Drittunternehmen (nachfolgend „Partnerunternehmen“).
              </p>
              <p className="text-gray-700">
                <strong>(3)</strong> Der Anbieter selbst erbringt <strong>keine</strong> handwerklichen Leistungen, Planungsleistungen oder Beratungen. Die Website dient ausschließlich als Intermediär. Ein Vertrag über die Erbringung von Handwerksleistungen kommt, wenn überhaupt, ausschließlich zwischen dem Nutzer und dem jeweiligen Partnerunternehmen zustande. Der Anbieter wird zu keinem Zeitpunkt Partei eines solchen Vertrages.
              </p>
              <p className="text-gray-700">
                <strong>(4)</strong> Die Leistung des Anbieters ist mit der ordnungsgemäßen Weiterleitung der Anfrage des Nutzers an ein oder mehrere Partnerunternehmen vollständig erbracht. Es besteht keine Garantie für eine erfolgreiche Vermittlung, die Kontaktaufnahme durch ein Partnerunternehmen oder das Zustandekommen eines Vertrages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 3 Pflichten des Nutzers</h2>
              <p className="text-gray-700">
                <strong>(1)</strong> Der Nutzer ist verpflichtet, bei der Eingabe seiner Daten in Anfrageformularen wahrheitsgemäße, aktuelle und vollständige Angaben zu machen. Die Angabe von Daten Dritter ist ohne deren ausdrückliche Zustimmung unzulässig.
              </p>
              <p className="text-gray-700">
                <strong>(2)</strong> Die missbräuchliche Nutzung der Dienste, insbesondere das Absenden von Anfragen ohne ernsthaftes Interesse (sog. „Spaßanfragen“), ist untersagt. Der Anbieter behält sich vor, Nutzer bei Zuwiderhandlung von der Nutzung auszuschließen und ggf. Schadensersatzansprüche geltend zu machen.
              </p>
              <p className="text-gray-700">
                <strong>(3)</strong> Der Nutzer ist allein dafür verantwortlich, die von Partnerunternehmen unterbreiteten Angebote, deren Qualifikationen und Seriosität eigenständig zu prüfen. Der Anbieter führt keine Überprüfung der Partnerunternehmen durch.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 4 Kosten</h2>
              <p className="text-gray-700">
                Die Nutzung der Website und die Vermittlung von Anfragen sind für den Nutzer <strong>vollständig kostenfrei</strong>. Der Anbieter finanziert sein Angebot durch Provisionen, die von den Partnerunternehmen für die Vermittlung von Leads entrichtet werden. Diese Kosten werden nicht auf den Nutzer umgelegt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 5 Haftungsausschluss und Gewährleistung</h2>
              <p className="text-gray-700">
                <strong>(1)</strong> Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
              </p>
              <p className="text-gray-700">
                <strong>(2)</strong> Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht). Die Haftung ist in diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p className="text-gray-700">
                <strong>(3)</strong> Der Anbieter übernimmt <strong>keinerlei Haftung oder Gewährleistung</strong> für die von den Partnerunternehmen erbrachten Leistungen, deren Qualität, Preisgestaltung, Termintreue oder sonstige Aspekte des zwischen dem Nutzer und dem Partnerunternehmen geschlossenen Vertrages. Jegliche Ansprüche sind direkt an das jeweilige Partnerunternehmen zu richten.
              </p>
              <p className="text-gray-700">
                <strong>(4)</strong> Der Anbieter übernimmt keine Gewähr für die ständige und ununterbrochene Verfügbarkeit der Website. Eine Haftung für Schäden, die aus technischen Störungen, Wartungsarbeiten oder Serverausfällen resultieren, ist ausgeschlossen, sofern nicht grobe Fahrlässigkeit oder Vorsatz seitens des Anbieters vorliegt.
              </p>
              <p className="text-gray-700">
                <strong>(5)</strong> Die auf der Website bereitgestellten redaktionellen Inhalte dienen der allgemeinen Information. Der Anbieter übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität dieser Inhalte. Sie stellen keine Fachberatung dar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 6 Datenschutz</h2>
              <p className="text-gray-700">
                Der Schutz der personenbezogenen Daten des Nutzers hat für den Anbieter höchste Priorität. Die Erhebung, Verarbeitung und Nutzung von Daten erfolgt ausschließlich im Rahmen der gesetzlichen Bestimmungen. Details hierzu, insbesondere zur Weitergabe von Daten an Partnerunternehmen im Rahmen einer Anfrage, sind in unserer separaten <Link to="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</Link> geregelt, die integraler Bestandteil dieser AGB ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 7 Urheberrecht</h2>
              <p className="text-gray-700">
                Alle auf der Website veröffentlichten Inhalte, insbesondere Texte, Bilder, Grafiken und das Layout, sind urheberrechtlich geschützt. Jede Form der Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des Anbieters.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 8 Online-Streitbeilegung</h2>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a> finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 9 Schlussbestimmungen</h2>
              <p className="text-gray-700">
                <strong>(1)</strong> Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="text-gray-700">
                <strong>(2)</strong> Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, so wird hierdurch die Gültigkeit der übrigen Bestimmungen nicht berührt. Anstelle der unwirksamen Bestimmung tritt eine rechtlich zulässige Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
              </p>
              <p className="text-gray-700">
                <strong>(3)</strong> Der Anbieter behält sich das Recht vor, diese AGB jederzeit ohne Nennung von Gründen zu ändern. Die geänderten Bedingungen werden dem Nutzer auf der Website zugänglich gemacht.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgbPage;