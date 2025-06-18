import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm">
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
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>SonnenHelden24.de</p>
                <p>Mike Mildenberger</p>
                <p>Rosenweg 21</p>
                <p className="mb-4">53604 Bad Honnef, Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
              <div className="text-gray-700">
                <p className="mb-2">✉️ info@sonnenhelden24.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Umsatzsteuer-Identifikationsnummer</h2>
              <div className="text-gray-700">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
                <p className="font-medium">DE365504670</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
              <div className="text-gray-700">
                <p>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV:</p>
                <p className="font-medium">Mike Mildenberger</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Online-Streitbeilegung</h2>
              <div className="text-gray-700">
                <p className="mb-4">
                  Informationen zur Online-Streitbeilegung: Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform") geschaffen. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen.
                </p>
                <p className="mb-4">
                  Sie können die OS-Plattform unter dem folgenden Link erreichen: 
                  <a href="http://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    http://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG).
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;
