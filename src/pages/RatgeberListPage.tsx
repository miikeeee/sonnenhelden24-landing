import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RatgeberArticle {
  slug: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}

const RatgeberListPage = () => {
  const [articles, setArticles] = useState<RatgeberArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Simulate loading ratgeber articles
    const loadArticles = () => {
      const ratgeberArticles = [
        {
          slug: "solaranlagen-trends-2025",
          title: "Solaranlagen Trends 2025",
          description: "Die wichtigsten Trends für moderne Solaranlagen und smarte Photovoltaik-Lösungen für dein Zuhause.",
          image: "https://sonnenhelden24.de/assets/solar-trend-2025.png",
          readTime: "11 Min. Lesezeit"
        },
        {
          slug: "solaranlagen-design-trends-2025",
          title: "Solaranlagen Design Trends 2025",
          description: "Moderne Designs, neue Materialien und Smart-Home-Innovationen für Solaranlagen.",
          image: "https://sonnenhelden24.de/assets/solar-design-2025.png",
          readTime: "13 Min. Lesezeit"
        },
        {
          slug: "moderne-solaranlagen-2025",
          title: "Moderne Solaranlagen 2025",
          description: "Technik, Trends und smarte Lösungen für moderne Photovoltaik im Überblick.",
          image: "https://sonnenhelden24.de/assets/solar-modern-2025.png",
          readTime: "16 Min. Lesezeit"
        },
        {
          slug: "solaranlage-kosten-2025",
          title: "Solaranlage Kosten 2025",
          description: "Was kostet eine Solaranlage wirklich? Preisüberblick, Spartipps und Förderungen.",
          image: "https://sonnenhelden24.de/assets/solar-kosten-2025.png",
          readTime: "12 Min. Lesezeit"
        },
        {
          slug: "solaranlage-nachruesten-kosten",
          title: "Solaranlage nachrüsten Kosten",
          description: "Alle Kosten, Förderungen und Tipps für das Nachrüsten einer Solaranlage.",
          image: "https://sonnenhelden24.de/assets/solar-nachruesten-2025.png",
          readTime: "12 Min. Lesezeit"
        },
        {
          slug: "barrierefreie-solarplanung",
          title: "Barrierefreie Solarplanung",
          description: "Sichere und komfortable Solarenergie für alle Lebensphasen – inkl. Förderungen.",
          image: "https://sonnenhelden24.de/assets/solar-barrierefrei-2025.png",
          readTime: "10 Min. Lesezeit"
        },
        {
          slug: "kleine-daecher-effizient-nutzen",
          title: "Kleine Dächer effizient nutzen",
          description: "Tipps und clevere Lösungen für die Installation von Solaranlagen auf kleinen Dächern.",
          image: "https://sonnenhelden24.de/assets/solar-kleine-daechern.png",
          readTime: "14 Min. Lesezeit"
        },
        {
          slug: "photovoltaik-ohne-foerderung",
          title: "Photovoltaik ohne Förderung",
          description: "Ist die Installation einer Photovoltaikanlage ohne staatliche Förderung sinnvoll?",
          image: "https://sonnenhelden24.de/assets/solar-ohne-foerderung.png",
          readTime: "15 Min. Lesezeit"
        },
        {
          slug: "solaranlage-einbau-dauer",
          title: "Solaranlage Einbau Dauer",
          description: "Wie lange dauert die Installation? Tipps für eine reibungslose Planung und Zeitersparnis.",
          image: "https://sonnenhelden24.de/assets/solar-einbau-dauer.png",
          readTime: "9 Min. Lesezeit"
        },
        {
          slug: "wasserleitung-sanieren",
          title: "Klimaanlage nachrüsten: Worauf achten?",
          description: "Ablauf, Kosten und Tipps für die Nachrüstung einer Klimaanlage im Überblick.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Klimaanlage/Klimaanlage%207-Klimahero24.de-WDSu1svsDkVEPftg8DhqYZBHHHw0He.png",
          readTime: "8 Min. Lesezeit"
        }
      ];
      setArticles(ratgeberArticles);
      setLoading(false);
    };

    loadArticles();
  }, []);

  // Scroll reveal effect
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Apply observer to elements that should have scroll reveal
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [articles]);

  useEffect(() => {
    document.title = "Ratgeber - klimahero24";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entdecke unseren umfassenden Ratgeber für Klimaanlagen. Tipps, Trends und wichtige Informationen für dein optimales Raumklima.');
    }
  }, []);

  const handleCTAClick = () => {
    window.open('https://app.klimahero24.de', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Ratgeber...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://klimahero24.de/favicon.svg"
              alt="klimahero24 Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            onClick={handleCTAClick}
          >
            <Phone className="w-4 h-4 mr-2" />
            Beratung anfragen
          </Button>
        </div>
      </header>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ratgeber für deine Klimatisierung
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahre alles Wichtige rund um Klimaanlagen, Kosten, Trends und Tipps. 
              Unser Expertenratgeber hilft dir bei der Planung deines optimalen Raumklimas.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group scroll-reveal" style={{transitionDelay: `${index * 100}ms`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                  <a 
                    href={`/ratgeber/${article.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-blue-600 rounded-2xl p-8 scroll-reveal">
            <h2 className="text-3xl font-bold text-white mb-4">
              Brauchst du persönliche Beratung?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Lass dich kostenlos von unseren Experten beraten und erhalte ein individuelles Angebot.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Jetzt Beratung anfragen
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">klimahero24</div>
              <p className="text-gray-400">Dein Partner für moderne Klimaanlagen in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/klimatisierung" className="hover:text-white transition-colors">Klimatisierung</a></li>
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
                <span className="block">📞 0800 123 456 789</span>
                <span className="block">✉️ info@klimahero24.de</span>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 klimahero24. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RatgeberListPage;
