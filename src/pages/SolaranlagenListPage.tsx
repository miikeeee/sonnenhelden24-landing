import { useEffect, useState } from 'react';
import { MapPin, ArrowRight, Phone, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface City {
  name: string;
  slug: string;
  image: string;
  description: string;
  population?: string;
}

const SolaranlagenListPage = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCities, setVisibleCities] = useState(9);
  const [showingMore, setShowingMore] = useState(false);

  useEffect(() => {
    // Solar-Texte für die wichtigsten Städte
    const cityList = [
      {
        name: "Berlin",
        slug: "berlin",
        image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Photovoltaik in Berlin: Profitiere von städtischer Solarenergie und nachhaltigen Lösungen für dein Zuhause.",
        population: "3.7 Mio. Einwohner"
      },
      {
        name: "Hamburg",
        slug: "hamburg",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d14d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Solaranlagen in Hamburg: Nutze die Kraft der Sonne an der Elbe – für mehr Unabhängigkeit und grüne Energie.",
        population: "1.9 Mio. Einwohner"
      },
      {
        name: "München",
        slug: "muenchen",
        image: "https://images.unsplash.com/photo-1595655931695-059d14e2447d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Solarenergie in München: Bayerische Qualität für nachhaltige Stromerzeugung auf deinem Dach.",
        population: "1.5 Mio. Einwohner"
      },
      {
        name: "Köln",
        slug: "koeln",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Solaranlagen in Köln: Rheinische Lebensfreude trifft auf moderne Photovoltaik-Technik.",
        population: "1.1 Mio. Einwohner"
      },
      {
        name: "Frankfurt",
        slug: "frankfurt",
        image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Solarstrom in Frankfurt: Effiziente Photovoltaik für das Finanzzentrum Deutschlands.",
        population: "760.000 Einwohner"
      },
      {
        name: "Stuttgart",
        slug: "stuttgart",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Solaranlagen in Stuttgart: Innovative Lösungen für nachhaltige Energie im Ländle.",
        population: "630.000 Einwohner"
      }
      // ...weitere Städte können ergänzt werden
    ];
    setCities(cityList);
    setLoading(false);
  }, []);

  useEffect(() => {
    document.title = "Solaranlagen in deiner Stadt - sonnenhelden24";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Photovoltaik und Solaranlagen in allen deutschen Großstädten. Finde geprüfte Solar-Experten in deiner Region.');
    }
  }, []);

  const handleCTAClick = () => {
    window.open('https://app.sonnenhelden24.de', '_blank');
  };

  const handleShowMore = () => {
    setVisibleCities(cities.length);
    setShowingMore(true);
  };

  const handleShowLess = () => {
    setVisibleCities(9);
    setShowingMore(false);
    document.getElementById('cities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Städte...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Sonnenhelden24%20Logo%20SVG%20orange%20Text%20%28quer%29-1nQw6Qw7Qw7Qw7Qw7Qw7Qw.svg"
              alt="sonnenhelden24 Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <Button 
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            onClick={handleCTAClick}
          >
            <Phone className="w-4 h-4 mr-2" />
            Solar-Beratung anfragen
          </Button>
        </div>
      </header>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solaranlagen in deiner Stadt
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finde geprüfte Solar-Experten für deine Photovoltaik-Anlage in ganz Deutschland. 
              Lokale Spezialisten mit nationalen Qualitätsstandards.
            </p>
          </div>

          {/* Cities Grid */}
          <div id="cities-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.slice(0, visibleCities).map((city, index) => (
                <a 
                  key={index} 
                  href={`/solaranlagen/${city.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group block"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={city.image}
                      alt={`Solaranlagen ${city.name}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {city.population}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{city.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{city.description}</p>
                    <div className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Show More/Less Button */}
            {cities.length > 9 && (
              <div className="text-center mt-12">
                {!showingMore ? (
                  <Button 
                    onClick={handleShowMore}
                    variant="outline"
                    size="lg"
                    className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Mehr Städte anzeigen ({cities.length - visibleCities} weitere)
                  </Button>
                ) : (
                  <Button 
                    onClick={handleShowLess}
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-400 text-gray-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    Weniger anzeigen
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-yellow-500 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Deine Stadt ist nicht dabei?
            </h2>
            <p className="text-yellow-100 mb-6 text-lg">
              Kein Problem! Wir sind deutschlandweit tätig und finden auch in deiner Region den passenden Solar-Experten.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Jetzt Solar-Beratung anfragen
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Sonnenhelden24%20Logo%20SVG%20orange%20Text%20%28quer%29-1nQw6Qw7Qw7Qw7Qw7Qw7Qw.svg"
                alt="sonnenhelden24 Logo"
                className="h-8 mb-4"
              />
              <p className="text-gray-400">Dein Partner für moderne Solaranlagen in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/solaranlagen" className="hover:text-white transition-colors">Solaranlagen</a></li>
                <li><a href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-400">
                <span className="block">✉️ info@sonnenhelden24.de</span>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 sonnenhelden24. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolaranlagenListPage;
