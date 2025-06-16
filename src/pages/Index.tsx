import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Phone, ShieldCheck, Wind, User, Package } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import CityCards from "@/components/CityCards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [cityCards, setCityCards] = useState([]);
  const [ratgeberArticles, setRatgeberArticles] = useState([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
  }, [cityCards, ratgeberArticles]);

  useEffect(() => {
    const loadCityCards = async () => {
      try {
        const response = await fetch('/data/cities.json');
        const data = await response.json();
        
        // Load header images for each city
        const citiesWithImages = await Promise.all(
          data.cityCards.slice(0, 6).map(async (city) => {
            try {
              const cityResponse = await fetch(`/data/klimatisierung/${city.slug}.json`);
              const cityData = await cityResponse.json();
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
        
        setCityCards(citiesWithImages);
      } catch (error) {
        console.error('Error loading city cards:', error);
      }
    };
    loadCityCards();
  }, []);

  useEffect(() => {
    const loadRatgeberArticles = async () => {
      try {
        // Neue klimarelevante Ratgeber-Artikel (aus /public/data/ratgeber)
        const articles = [
          {
            slug: 'klimaanlagen-trends-2025',
            title: 'Klimaanlagen Trends 2025: Die neuesten Ideen für Ihr Zuhause',
            description: 'Klimaanlagen Trends 2025 ✓ Moderne Klimalösungen ✓ Aktuelle Designs & Technologien ✓ Inspiration für Ihr Zuhause ✓ Jetzt entdecken!',
            defaultImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            slug: 'klimaanlagen-design-trends-2025',
            title: 'Klimaanlagen Design Trends 2025: Moderne Lösungen & Innovationen',
            description: 'Klimaanlagen Design Trends 2025 ✓ Moderne Designs ✓ Neue Materialien ✓ Smart Home ✓ Farbtrends ✓ Professionelle Beratung ✓ Jetzt entdecken!',
            defaultImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            slug: 'moderne-klimaanlagen-2025',
            title: 'Moderne Klimaanlagen 2025: Trends, Technik & smarte Lösungen',
            description: 'Moderne Klimaanlagen 2025 ✓ Neue Technologien ✓ Smart-Home Integration ✓ Nachhaltigkeit ✓ Design-Trends ✓ Kosten & Tipps ✓ Jetzt entdecken!',
            defaultImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            slug: 'klimaanlage-kosten-2025',
            title: 'Klimaanlage Kosten 2025: Kompletter Preisüberblick',
            description: 'Klimaanlage Kosten 2025 ✓ Preise für Split- & Multisplit-Anlagen ✓ Kostenrechner ✓ Spartipps ✓ Förderungen ✓ Alle Infos zu Klimaanlagen-Preisen ✓ Jetzt informieren!',
            defaultImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            slug: 'klimaanlage-nachruesten-kosten',
            title: 'Klimaanlage nachrüsten Kosten 2024: Kompletter Preisüberblick',
            description: 'Klimaanlage nachrüsten Kosten 2024 ✓ Preise für Split- & Multisplit-Anlagen ✓ Sparpotential & Förderungen ✓ Kostenlose Beratung anfragen!',
            defaultImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            slug: 'barrierefreie-klimatisierung-planen',
            title: 'Barrierefreie Klimatisierung planen: Ratgeber & Förderungen 2025',
            description: 'Barrierefreie Klimatisierung planen ✓ DIN-Normen ✓ Förderungen ✓ Kosten & Tipps ✓ Professionelle Planung ✓ Jetzt informieren!',
            defaultImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }
        ];

        // Load actual data for each article to get hero images
        const articlesWithImages = await Promise.all(
          articles.slice(0, 6).map(async (article) => {
            try {
              const response = await fetch(`/data/ratgeber/${article.slug}.json`);
              const data = await response.json();
              return {
                ...article,
                title: data.title || article.title,
                description: data.metaDescription || article.description,
                image: data.heroImage?.src || article.defaultImage,
                link: `/ratgeber/${article.slug}`
              };
            } catch (error) {
              console.error(`Error loading ratgeber data for ${article.slug}:`, error);
              return {
                ...article,
                image: article.defaultImage,
                link: `/ratgeber/${article.slug}`
              };
            }
          })
        );

        setRatgeberArticles(articlesWithImages);
      } catch (error) {
        console.error('Error loading ratgeber articles:', error);
      }
    };
    loadRatgeberArticles();
  }, []);

  const benefits = [
    "Geprüfte Klimaanlagen-Experten aus deiner Region",
    "Bis zu 20% staatliche Förderung für Klimaanlagen",
    "Kostenlose Beratung & Planung",
    "5 Jahre Garantie auf Installation und Service"
  ];

  const keyBenefits = [
    {
      icon: ShieldCheck,
      title: "Festpreisgarantie",
      description: "Keine versteckten Kosten. Sie zahlen den vereinbarten Preis."
    },
    {
      icon: Wind,
      title: "Effiziente Klimatisierung",
      description: "Wir setzen auf moderne, energiesparende Klimaanlagen."
    },
    {
      icon: User,
      title: "Persönlicher Ansprechpartner",
      description: "Ein fester Ansprechpartner begleitet Sie durch das gesamte Projekt."
    },
    {
      icon: Package,
      title: "Alles aus einer Hand",
      description: "Von der Beratung bis zur Installation – wir koordinieren alles für Sie."
    }
  ];

  const faqs = [
    {
      question: "Wie lange dauert die Installation einer Klimaanlage?",
      answer: "Die Installation dauert in der Regel 1 bis 3 Tage, abhängig vom Umfang und den baulichen Gegebenheiten."
    },
    {
      question: "Was kostet eine Klimaanlage?",
      answer: "Die Kosten variieren je nach Modell, Leistung und Einbauaufwand. Eine erste Kostenschätzung erhalten Sie in unserem kostenlosen Beratungsgespräch."
    },
    {
      question: "Bieten Sie eine Garantie auf die Installation?",
      answer: "Ja, wir bieten eine 5-jährige Garantie auf die Installation und den Service. Ihre Zufriedenheit und die Qualität unserer Arbeit stehen an erster Stelle."
    },
    {
      question: "Wie läuft die Planung für meine Klimaanlage ab?",
      answer: "Nach Ihrer Anfrage führen wir eine kostenlose Erstberatung durch. Anschließend planen unsere Experten die optimale Lösung für Ihre Räume und erstellen ein transparentes Angebot."
    }
  ];

  const handleCTAClick = () => {
    window.open('https://app.klimahero24.de', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary/10">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Klimahero%20500x150%20mit%20rand.svg-Y1m6F1I7ZDarnjJjrTecyw5H1UnK3u.svg"
              alt="klimahero24 Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <div className="flex items-center space-x-2">
            <Button 
              className="sm:hidden bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Klimaanlage anfragen
            </Button>
            <Button 
              className="hidden sm:flex bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              <Phone className="w-4 h-4 mr-2" />
              Beratung anfragen
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Dein <span className="text-primary">Klima-Komfort</span> 
                  <br />für Zuhause & Büro
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Moderne Klimaanlagen – individuell geplant, professionell installiert und staatlich gefördert.
                </p>
              </div>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={handleCTAClick}
                >
                  Jetzt Beratung anfragen
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  onClick={handleCTAClick}
                >
                  Mehr erfahren
                </Button>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 • Über 2.500 zufriedene Kunden</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Klimaanlage/Klimaanlage%203-Klimahero24.de-VrsSz2BaJQ1AZvWlhiPPJUg99cLUE1.png" 
                alt="Moderne Klimaanlage installiert"
                className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white scroll-reveal">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              So einfach geht's zu deinem Klima-Komfort
            </h2>
            <p className="text-xl text-gray-600">
              In nur 3 Schritten zur optimalen Klimatisierung
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Anfrage stellen",
                description: "Beschreibe deine Wünsche und erhalte eine kostenlose Erstberatung",
                icon: "📝"
              },
              {
                step: "2", 
                title: "Planung & Angebot",
                description: "Unsere Experten planen deine Klimaanlage und prüfen Fördermöglichkeiten",
                icon: "📐"
              },
              {
                step: "3",
                title: "Installation",
                description: "Fachgerechte Installation durch geprüfte Experten aus deiner Region",
                icon: "❄️"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300 scroll-reveal" style={{transitionDelay: `${index * 100}ms`}}>
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-blue-200 transition-colors">
                  {item.icon}
                </div>
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white scroll-reveal">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ihre Vorteile mit klimahero24
            </h2>
            <p className="text-xl text-gray-600">
              Wir machen Ihre Klimatisierung einfach, sicher und transparent.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 scroll-reveal" style={{transitionDelay: `${index * 100}ms`}}>
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Cards Section */}
      {cityCards.length > 0 && (
        <div className="scroll-reveal">
          <CityCards cities={cityCards} showAllButton={true} />
        </div>
      )}

      {/* Ratgeber Section */}
      <section className="py-16 bg-gray-50 scroll-reveal">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ratgeber & Tipps für dein Klima
            </h2>
            <p className="text-xl text-gray-600">
              Erfahre alles Wichtige rund um Klimaanlagen, Kosten und Trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ratgeberArticles.map((article, index) => (
              <a 
                key={index}
                href={article.link}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group block scroll-reveal"
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                  <div className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                    Weiterlesen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full text-lg transition-all duration-300"
              onClick={() => window.location.href = '/ratgeber'}
            >
              Alle Ratgeber-Artikel
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 scroll-reveal">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Antworten auf die wichtigsten Fragen rund um Ihre Klimatisierung.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="scroll-reveal" style={{transitionDelay: `${index * 100}ms`}}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section with Background Pattern */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden scroll-reveal">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/20 rounded-lg rotate-12"></div>
          <div className="absolute top-20 right-16 w-16 h-16 bg-white/15 rounded-full"></div>
          <div className="absolute bottom-16 left-20 w-20 h-20 bg-white/20 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/10 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/15 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-white/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/2 w-18 h-18 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für dein perfektes Raumklima?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Lass dich kostenlos beraten und erfahre, wie du deine Räume optimal klimatisieren kannst.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-bold"
            onClick={handleCTAClick}
          >
            Jetzt Klimaanlage anfragen
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Klimahero%20500x150%20wei%C3%9Fe%20schrift%20%283%29-e52237wmU5o7xtsip9xZGDtood5wgR.svg"
                alt="klimahero24 Logo"
                className="h-8 mb-4"
              />
              <p className="text-gray-400">Dein Partner für moderne Klimaanlagen in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/klimatisierung" className="hover:text-white transition-colors">Klimatisierung</a></li>
                <li><a href="/klimaanlage" className="hover:text-white transition-colors">Klimaanlage</a></li>
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

export default Index;
