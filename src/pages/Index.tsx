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

// ALLES auf Solaranlage/SonnenHelden24 umgestellt
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
              const cityResponse = await fetch(`/data/badsanierung/${city.slug}.json`);
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
    // Lade Solar-Ratgeberartikel
    const solarArticles = [
      {
        slug: 'solaranlage-kosten-2025',
        title: 'Solaranlage Kosten 2025: Kompletter Preisüberblick',
        description: 'Preise für Photovoltaik, Speicher, Wirtschaftlichkeit, Förderungen & Spartipps. Jetzt informieren!',
        image: 'https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Solaranlagen/Solaranlage_Bungalow-DZrdTziKXmx6nhsIjR95RzMqJBxP4q.png',
        link: '/ratgeber/solaranlage-kosten-2025'
      },
      {
        slug: 'solaranlage-installieren-ablauf',
        title: 'Solaranlage installieren: Ablauf & Checkliste',
        description: 'Von der Planung bis zur Inbetriebnahme – so läuft die Installation deiner PV-Anlage ab.',
        image: 'https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Solaranlagen/Installation_PV_Montage-sD7Vtawi6QqNaK8w31gLZbGRBl6Bs9.png',
        link: '/ratgeber/solaranlage-installieren-ablauf'
      },
      {
        slug: 'solaranlage-leistung-optimieren',
        title: 'Solaranlage Leistung optimieren',
        description: 'Tipps für maximale Effizienz, Eigenverbrauch und Ertrag deiner Photovoltaikanlage.',
        image: 'https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Solaranlagen/PV-Anlage_Mueller-Kj1arMqNfcTeHUdHBUpT9Ibum93bXz.png',
        link: '/ratgeber/solaranlage-leistung-optimieren'
      },
      {
        slug: 'solaranlage-mieten-oder-kaufen-vergleich',
        title: 'Solaranlage mieten oder kaufen? Der große Vergleich',
        description: 'Was lohnt sich mehr? Alle Vor- und Nachteile, Kosten und Förderungen im Überblick.',
        image: 'https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Solaranlagen/Solaranlage_und_Wallbox-66Fq4gWhfa3bzllE4BtWZHaYAA5DUP.png',
        link: '/ratgeber/solaranlage-mieten-oder-kaufen-vergleich'
      },
      {
        slug: 'solaranlagen-trends-2025',
        title: 'Solaranlagen Trends 2025',
        description: 'Die wichtigsten Innovationen, neue Technik und Markttrends für Photovoltaik.',
        image: 'https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Solaranlagen/Freiflaeche_solar-MlMSPm9RinSumNhGpyHBDjpOA0eiDN.png',
        link: '/ratgeber/solaranlagen-trends-2025'
      },
      {
        slug: 'moderne-solaranlagen-2025',
        title: 'Moderne Solaranlagen 2025',
        description: 'Was macht eine moderne PV-Anlage aus? Technik, Speicher, Wallbox & mehr.',
        image: 'https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Solaranlagen/PV_Wallbox_Kombi-rZEkktnhzysajfHxZZgu5c92y5O1OV.png',
        link: '/ratgeber/moderne-solaranlagen-2025'
      }
    ];
    setRatgeberArticles(solarArticles);
  }, []);

  const benefits = [
    "Unabhängigkeit von steigenden Strompreisen",
    "Bis zu 30% staatliche Förderung & 0% MwSt.",
    "Kostenlose Solar-Beratung & Angebot",
    "Schnelle Installation durch geprüfte Solar-Profis"
  ];

  const keyBenefits = [
    {
      icon: ShieldCheck,
      title: "100% Festpreisgarantie",
      description: "Keine versteckten Kosten. Du zahlst nur, was im Angebot steht."
    },
    {
      icon: Wind,
      title: "Maximale Effizienz",
      description: "Modernste Technik für höchste Erträge und Eigenverbrauch."
    },
    {
      icon: User,
      title: "Persönlicher Solar-Experte",
      description: "Ein fester Ansprechpartner begleitet dich von der Planung bis zur Inbetriebnahme."
    },
    {
      icon: Package,
      title: "Alles aus einer Hand",
      description: "Von der Beratung bis zur Montage – wir kümmern uns um alles."
    }
  ];

  const faqs = [
    {
      question: "Wie lange dauert die Installation einer Solaranlage?",
      answer: "Die Installation einer PV-Anlage dauert meist 1-3 Tage, abhängig von Größe und Aufwand."
    },
    {
      question: "Was kostet eine Solaranlage?",
      answer: "Die Kosten variieren je nach Größe, Ausstattung und Speicher. Eine typische Anlage für ein Einfamilienhaus kostet 9.000–16.000 €."
    },
    {
      question: "Gibt es eine Förderung für Solaranlagen?",
      answer: "Ja! 0% Mehrwertsteuer, KfW-Kredite und regionale Zuschüsse. Wir beraten dich zu allen Möglichkeiten."
    },
    {
      question: "Wie läuft die Planung ab?",
      answer: "Nach deiner Anfrage erhältst du eine kostenlose Erstberatung. Anschließend erstellen wir ein individuelles Angebot und übernehmen die komplette Planung."
    }
  ];

  const handleCTAClick = () => {
    window.open('https://app.sonnenhelden24.de', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/SonnenHelden24%20Branding/Sonnenhelden%20Logo%20500%20x%20120%20schwarz-FedDT3PWV59uMqMrNfrRkENONXp5nJ.svg"
              alt="sonnenhelden24 Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <div className="flex items-center space-x-2">
            <Button 
              className="sm:hidden bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Solar-Rechner starten
            </Button>
            <Button 
              className="hidden sm:flex bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 group"
              onClick={handleCTAClick}
            >
              Solar-Beratung anfragen
              <span className="ml-2 hidden group-hover:inline-block transition-opacity duration-200">
                <ArrowRight className="w-4 h-4" />
              </span>
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
                  Die <span className="text-yellow-500">Energiewende</span> <br />für dein Zuhause
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Photovoltaik, Speicher & Wallbox – alles aus einer Hand. Werde unabhängig von steigenden Strompreisen und sichere dir die beste Förderung.
                </p>
              </div>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={handleCTAClick}
                >
                  Jetzt Solar-Beratung anfragen
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                  onClick={handleCTAClick}
                >
                  Solar-Rechner starten
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <img 
                src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/Solaranlagen/Freiflaeche_solar-MlMSPm9RinSumNhGpyHBDjpOA0eiDN.png"
                alt="Solaranlage auf Hausdach – SonnenHelden24"
                className="rounded-2xl shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process-section" className="py-16 bg-white scroll-reveal">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              So einfach geht's zu deiner Solaranlage
            </h2>
            <p className="text-xl text-gray-600">
              In nur 3 Schritten von der Anfrage zur fertigen Solaranlage
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
                description: "Unsere Experten planen deine Solaranlage und prüfen Fördermöglichkeiten",
                icon: "📐"
              },
              {
                step: "3",
                title: "Installation",
                description: "Professionelle Installation durch geprüfte Solar-Profis aus deiner Region",
                icon: "🔨"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300 scroll-reveal" style={{transitionDelay: `${index * 100}ms`}}>
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-yellow-200 transition-colors">
                  {item.icon}
                </div>
                <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
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
              Deine Vorteile mit SonnenHelden24
            </h2>
            <p className="text-xl text-gray-600">
              Wir machen deine Solaranlage einfach, sicher und transparent.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 scroll-reveal" style={{transitionDelay: `${index * 100}ms`}}>
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mx-auto mb-4">
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
              Ratgeber & Tipps für deine Solaranlage
            </h2>
            <p className="text-xl text-gray-600">
              Erfahre alles Wichtige rund um Solaranlagen, Kosten und Trends
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
                  <div className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
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
              className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
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
              Antworten auf die wichtigsten Fragen rund um deine Solaranlage.
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
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 relative overflow-hidden scroll-reveal">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          {/* Geometric Pattern */}
          <div className="absolute top-8 left-8 w-24 h-24 bg-white/30 rounded-lg rotate-12"></div>
          <div className="absolute top-20 right-16 w-16 h-16 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-16 left-20 w-20 h-20 bg-white/30 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/15 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-white/30 rounded-lg rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/2 w-18 h-18 bg-white/15 rounded-full"></div>
          
          {/* Additional subtle elements */}
          <div className="absolute top-12 left-1/2 w-8 h-8 bg-white/15 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-white/20 rounded-full"></div>
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white/25 rounded-lg -rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/2 w-14 h-14 bg-white/10 rounded-lg rotate-30"></div>
        </div>
        
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für deine Solaranlage?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Lass dich kostenlos beraten und erfahre, wie viel Förderung du erhalten kannst.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-yellow-600 hover:bg-gray-100 px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-bold"
            onClick={handleCTAClick}
          >
            Jetzt Beratung anfragen
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/FavIcon%20500%20x%20500%20%281%29-VYpwjV6yIfD1z9XEUUqmlnOVoD2NDo.svg"
                alt="badhelden24 Logo"
                className="h-8 mb-4"
              />
              <p className="text-gray-400">Dein Partner für professionelle Badsanierung in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/badsanierung" className="hover:text-white transition-colors">Badsanierung</a></li>
                <li><a href="/badumbau" className="hover:text-white transition-colors">Badumbau</a></li>
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

export default Index;
