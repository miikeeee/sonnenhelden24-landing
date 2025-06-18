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
          slug: "badsanierung-kosten-2025",
          title: "Badsanierung Kosten 2025",
          description: "Was kostet eine Badsanierung wirklich? Kompletter Preisüberblick, Spartipps und Förderungen für Ihr Traumbad.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/arbeiten%20im%20bad%20vier%20personen%20-Badhelden24.de-RuTB1hVK33131mazupD1cW8nh5z2Gj.png",
          readTime: "14 Min. Lesezeit"
        },
        {
          slug: "kleine-bader-optimal-gestalten",
          title: "Kleine Bäder optimal gestalten",
          description: "Platzsparende Lösungen und clevere Tricks für kleine Badezimmer. So holen Sie das Maximum aus jedem Quadratmeter heraus.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/freistehende%20badewanne%20hell%20-Badhelden24.de-d8TdRRMsymtMkSsmoroTQvuio1f0A6.png",
          readTime: "5 Min. Lesezeit"
        },
        {
          slug: "badezimmer-fliesen-trends-2025",
          title: "Badezimmer Fliesen Trends 2025",
          description: "Moderne Fliesendesigns, neue Materialien und angesagte Verlegemuster für Ihr Badezimmer. Alle Trends im Überblick.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/Badezimmer%20mit%20Dusche%20-%20nicht%20barrierefrei-Badhelden24.de-1NvXjHAmaDIWqsgWaR7ZdWaVNcJPAZ.png",
          readTime: "3 Min. Lesezeit"
        },
        {
          slug: "barrierefreies-bad-planen",
          title: "Barrierefreies Bad planen",
          description: "Alles über barrierefreie Bäder: DIN-Normen, Förderungen bis 6.250€, Kosten und professionelle Planungstipps.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/Helles%20Badezimmer%20mit%20Dusche%20-%20barrierefrei-Badhelden24.de-yHfdup9qau6blEN9pcJSyq3t79jHeW.png",
          readTime: "4 Min. Lesezeit"
        },
        {
          slug: "badsanierung-ohne-fliesen",
          title: "Badsanierung ohne Fliesen",
          description: "Moderne Alternativen zu Fliesen: Wandpaneele, Putz, Naturstein. Alle Vor- und Nachteile im Überblick.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/Modernes%20Badezimmer%20mit%20gro%C3%9Fer%20Dusche-Badhelden24.de-yjvm6L5diTiHiA32DnRTwYbBtyBtrx.png",
          readTime: "2 Min. Lesezeit"
        },
        {
          slug: "badezimmer-renovieren-schritt-fuer-schritt",
          title: "Badezimmer renovieren Schritt für Schritt",
          description: "Komplette Renovierungsanleitung von der Planung bis zur Fertigstellung. Mit Zeitplan und Profi-Tipps.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/arbeiten%20im%20bad%20drei%20Personen%20Waschbecken%20montage%20-Badhelden24.de-ZkUQbxKJzc4RfL1BDAkcnSXRyxZmpe.png",
          readTime: "3 Min. Lesezeit"
        },
        {
          slug: "moderne-badausstattung-2025",
          title: "Moderne Badausstattung 2025",
          description: "Neueste Trends bei Sanitärobjekten: Smart-Toiletten, berührungslose Armaturen und nachhaltige Lösungen.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/freistehende%20badewanne%20modern%20-Badhelden24.de-ydGl1fXYaf3kvEZErfow3rgTsI8wF1.png",
          readTime: "4 Min. Lesezeit"
        },
        {
          slug: "badumbau-kosten",
          title: "Badsanierung Kosten 2024",
          description: "Was kostet eine Badsanierung wirklich? Alle Infos zu Preisen, Förderungen und Sparmöglichkeiten.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/zwei%20handwerker%20wasseranschluss-cmlLtaSDhgllT9kU43X9qilTnHYULR.png",
          readTime: "5 Min. Lesezeit"
        },
        {
          slug: "badsanierung-dauer",
          title: "Dauer einer Badsanierung",
          description: "Wie lange dauert eine Badsanierung? Tipps für eine reibungslose Planung und Zeitersparnis.",
          image: "https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Badezimmer/zwei%20personen%20arbeiten%20im%20bad-NUZb5rGZoCploDDSzAJt4ILtTbmcSo.png",
          readTime: "5 Min. Lesezeit"
        },
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
    document.title = "Ratgeber - badhelden24";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entdecke unseren umfassenden Ratgeber für Badsanierung. Tipps, Trends und wichtige Informationen für dein Traumbad.');
    }
  }, []);

  const handleCTAClick = () => {
    window.open('https://app.badhelden24.de', '_blank');
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
              src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/SonnenHelden24%20Branding/Sonnenhelden%20Logo%20500%20x%20120%20schwarz-FedDT3PWV59uMqMrNfrRkENONXp5nJ.svg"
              alt="badhelden24 Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 group"
            onClick={handleCTAClick}
          >
            Beratung anfragen
            <span className="ml-2 hidden group-hover:inline-block transition-opacity duration-200">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </header>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ratgeber für deine Badsanierung
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahre alles Wichtige rund um Badsanierung, Kosten, Trends und Tipps. 
              Unser Expertenratgeber hilft dir bei der Planung deines Traumbads.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group scroll-reveal" style={{transitionDelay: `${index * 100}ms`}}>
                <a href={`/ratgeber/${article.slug}`} className="block relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.readTime}
                  </div>
                </a>
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
              <div className="text-2xl font-bold text-blue-400 mb-4">badhelden24</div>
              <p className="text-gray-400">Dein Partner für professionelle Badsanierung in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/badsanierung" className="hover:text-white transition-colors">Badsanierung</a></li>
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
                <span className="block">✉️ info@badhelden24.de</span>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 badhelden24. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RatgeberListPage;
