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

const SolaranlageListPage = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCities, setVisibleCities] = useState(9);
  const [showingMore, setShowingMore] = useState(false);

  useEffect(() => {
    const loadCities = async () => {
      const cityList = [
        {
          name: "Berlin",
          slug: "berlin",
          image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Solaranlagen und Photovoltaik in Berlin – unabhängig werden mit SonnenHelden24.",
          population: "3.7 Mio. Einwohner"
        },
        {
          name: "Hamburg",
          slug: "hamburg",
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d14d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Solarenergie für Hamburg – Beratung, Planung und Installation vom Experten.",
          population: "1.9 Mio. Einwohner"
        },
        {
          name: "München",
          slug: "muenchen",
          image: "https://images.unsplash.com/photo-1595655931695-059d14e2447d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Exklusive Solaranlagen in München mit bayerischen Qualitätsstandards.",
          population: "1.5 Mio. Einwohner"
        },
        {
          name: "Köln",
          slug: "koeln",
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Moderne Solaranlagen in der Domstadt mit rheinischer Gemütlichkeit.",
          population: "1.1 Mio. Einwohner"
        },
        {
          name: "Frankfurt",
          slug: "frankfurt",
          image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Erstklassige Solaranlagen im Finanzenzentrum Deutschlands.",
          population: "760.000 Einwohner"
        },
        {
          name: "Stuttgart",
          slug: "stuttgart",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Innovative Solaranlagen in der Automobilstadt mit schwäbischer Präzision.",
          population: "630.000 Einwohner"
        },
        {
          name: "Düsseldorf",
          slug: "duesseldorf",
          image: "https://images.unsplash.com/photo-1551975074-52ec8ac997ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Elegante Solaranlagen in der Mode- und Kunststadt am Rhein.",
          population: "650.000 Einwohner"
        },
        {
          name: "Dortmund",
          slug: "dortmund",
          image: "https://images.unsplash.com/photo-1471919743851-c4df8b6eefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Zuverlässige Solaranlagen im Herzen des Ruhrgebiets.",
          population: "590.000 Einwohner"
        },
        {
          name: "Essen",
          slug: "essen",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Qualitätsvolle Solaranlagen in der Kulturhauptstadt 2010.",
          population: "580.000 Einwohner"
        },
        {
          name: "Leipzig",
          slug: "leipzig",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Moderne Solaranlagen in der sächsischen Metropole.",
          population: "600.000 Einwohner"
        },
        {
          name: "Dresden",
          slug: "dresden",
          image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Erstklassige Solaranlagen in der Kulturstadt an der Elbe.",
          population: "560.000 Einwohner"
        },
        {
          name: "Hannover",
          slug: "hannover",
          image: "https://images.unsplash.com/photo-1551975074-52ec8ac997ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Professionelle Solaranlagen in der niedersächsischen Landeshauptstadt.",
          population: "540.000 Einwohner"
        },
        {
          name: "Nürnberg",
          slug: "nuernberg",
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Traditionelle Solaranlagen in der fränkischen Metropole.",
          population: "520.000 Einwohner"
        },
        {
          name: "Bremen",
          slug: "bremen",
          image: "https://images.unsplash.com/photo-1539650116574-75c0c6d14d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Maritime Solaranlagen in der Hansestadt Bremen.",
          population: "570.000 Einwohner"
        },
        {
          name: "Mannheim",
          slug: "mannheim",
          image: "https://images.unsplash.com/photo-1595655931695-059d14e2447d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          description: "Innovative Solaranlagen in der Quadratestadt.",
          population: "310.000 Einwohner"
        }
      ];

      // Load hero images from city data files
      try {
        const citiesWithImages = await Promise.all(
          cityList.map(async (city) => {
            try {
              const response = await fetch(`/data/solaranlage/${city.slug}.json`);
              const cityData = await response.json();
              return {
                ...city,
                image: cityData.heroImage || city.image
              };
            } catch (error) {
              console.error(`Error loading data for ${city.slug}:`, error);
              return city;
            }
          })
        );
        setCities(citiesWithImages);
      } catch (error) {
        console.error('Error loading city images:', error);
        setCities(cityList);
      }
      
      setLoading(false);
    };

    loadCities();
  }, []);

  useEffect(() => {
    document.title = "Solaranlage in deiner Stadt - sonnenhelden24";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Solaranlagen, Photovoltaik und Solarberatung in allen deutschen Großstädten. Finde unabhängige Energie für dein Zuhause!');
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
    // Scroll to top of cities section
    document.getElementById('cities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
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
              src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/SonnenHelden24%20Branding/Sonnenhelden%20Logo%20500%20x%20120%20schwarz-FedDT3PWV59uMqMrNfrRkENONXp5nJ.svg"
              alt="sonnenhelden24 Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <Button 
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 group"
            onClick={handleCTAClick}
          >
            Solar-Rechner starten
            <span className="ml-2 hidden group-hover:inline-block transition-opacity duration-200">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </header>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solaranlage in deiner Stadt
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finde unabhängige Solarenergie für dein Zuhause. Lokale Experten, deutschlandweit.
            </p>
          </div>

          {/* Cities Grid */}
          <div id="cities-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.slice(0, visibleCities).map((city, index) => (
                <a 
                  key={index} 
                  href={`/solaranlage/${city.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group block"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={city.image}
                      alt={`Solaranlage ${city.name}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
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
                    className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
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
          <div className="mt-16 text-center bg-yellow-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Deine Stadt ist nicht dabei?
            </h2>
            <p className="text-yellow-100 mb-6 text-lg">
              Kein Problem! Wir sind deutschlandweit tätig und finden auch in deiner Region den passenden Handwerker.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Jetzt anfragen
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
                src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/SonnenHelden24%20Branding/Sonnenhelden%20Logo%20500%20x%20120%20weiß-Bz0RFF9br3RVT1drrNbvOVpaO5YV3k.svg"
                alt="sonnenhelden24 Logo"
                className="h-8 mb-4"
              />
              <p className="text-gray-400">Dein Partner für unabhängige Solarenergie in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/solaranlage" className="hover:text-white transition-colors">Solaranlage</a></li>
                <li><a href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
                <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
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
            <p>&copy; 2024 sonnenhelden24. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolaranlageListPage;
