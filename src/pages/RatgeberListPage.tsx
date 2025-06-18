import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb';

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
    // Dynamisch alle Ratgeber-Artikel aus dem public/data/ratgeber Verzeichnis laden
    const loadArticles = async () => {
      try {
        // Hole alle JSON-Dateien im Verzeichnis (nur im Build/Prod, im Dev ggf. anpassen)
        const req = await fetch('/data/ratgeber/index.json');
        let files: string[] = [];
        if (req.ok) {
          files = await req.json();
        } else {
          // Fallback: statische Liste, falls kein Index vorhanden
          files = [
            'solaranlage-kosten-2025.json',
            'solaranlagen-trends-2025.json',
            'solaranlage-installieren-ablauf.json',
            'moderne-solaranlagen-2025.json'
          ];
        }
        const articles: RatgeberArticle[] = [];
        for (const file of files) {
          try {
            const res = await fetch(`/data/ratgeber/${file}`);
            if (!res.ok) continue;
            const data = await res.json();
            articles.push({
              slug: data.slug,
              title: data.title,
              description: data.metaDescription || data.description || '',
              image: data.heroImage?.src || data.image || '',
              readTime: data.readTime || '5 Min. Lesezeit'
            });
          } catch {}
        }
        setArticles(articles);
      } catch {
        setArticles([]);
      }
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
    document.title = "Ratgeber - SonnenHelden24";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entdecke unseren Solar-Ratgeber: Photovoltaik, Stromspeicher, Förderung, Technik & Praxistipps für deine Solaranlage.');
    }
  }, []);

  const handleCTAClick = () => {
    window.open('https://app.sonnenhelden24.de', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Solar-Ratgeber...</p>
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
            Solar-Beratung anfragen
            <span className="ml-2 hidden group-hover:inline-block transition-opacity duration-200">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </header>

      {/* Breadcrumbs */}
      <BreadcrumbSchema items={[
        { name: 'Startseite', url: '/' },
        { name: 'Ratgeber', url: '/ratgeber' }
      ]} />
      <section className="pt-20 pb-4 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Startseite</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Ratgeber</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <div className="pt-4 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solar-Ratgeber für Photovoltaik & Stromspeicher
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles, was du über Solaranlagen, Photovoltaik, Stromspeicher, Förderung und Technik wissen musst. Unser Expertenratgeber hilft dir bei der Planung deiner eigenen PV-Anlage.
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
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.readTime}
                  </div>
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                  <a 
                    href={`/ratgeber/${article.slug}`}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
                  >
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-yellow-600 rounded-2xl p-8 scroll-reveal">
            <h2 className="text-3xl font-bold text-white mb-4">
              Brauchst du persönliche Solar-Beratung?
            </h2>
            <p className="text-yellow-100 mb-6 text-lg">
              Lass dich kostenlos von unseren Solar-Experten beraten und erhalte ein individuelles Angebot für deine PV-Anlage.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Jetzt Solar-Beratung anfragen
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 scroll-reveal">
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

export default RatgeberListPage;
