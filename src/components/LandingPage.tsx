import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Phone, MapPin, Calendar, Shield, PhoneOutgoing, Home, FileText, Wrench, Sparkles, Users, DollarSign, Smile, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import KlickstreckeIframe from "./KlickstreckeIframe";

interface ProcessStep {
  icon: keyof typeof import("lucide-react").icons;
  title: string;
  description: string;
}
interface ProcessSectionData {
  heading: string;
  subheading?: string;
  steps: ProcessStep[];
}

interface KeyBenefit {
  icon: keyof typeof import("lucide-react").icons;
  title: string;
  description: string;
}
interface KeyBenefitsSectionData {
  heading: string;
  benefits: KeyBenefit[];
}

interface LandingPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  heroImage?: string;
  sections: Array<{
    heading: string;
    text: string;
    image?: string;
  }>;
  imageSections?: Array<{
    src: string;
    alt: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    text: string; // This will no longer be used for the primary hero button
    url: string;
  };
  location?: string;
  processSection?: ProcessSectionData;
  keyBenefitsSection?: KeyBenefitsSectionData;
  structuredData?: any;
}

interface LandingPageProps {
  data: LandingPageData;
}

const LandingPage = ({ data }: LandingPageProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleCTAClick = () => {
    window.open('https://app.sonnenhelden24.de', '_blank');
  };

  const IconComponent = ({ name, ...props }: { name: keyof typeof import("lucide-react").icons } & React.ComponentProps<typeof ArrowRight>) => {
    const LucideIcon = { PhoneOutgoing, Home, FileText, Wrench, Sparkles, Users, ShieldCheck, DollarSign, Smile, CheckCircle, Star, Phone, MapPin, Calendar, Shield, ArrowRight }[name];
    if (!LucideIcon) return <ArrowRight {...props} />; // Fallback icon
    return <LucideIcon {...props} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
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
          <div className="flex items-center space-x-2">
            <Button 
              className="sm:hidden bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              Solaranlage anfragen
            </Button>
            <Button 
              className="hidden sm:flex bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              onClick={handleCTAClick}
            >
              <Phone className="w-4 h-4 mr-2" />
              Solar-Beratung anfragen
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 text-blue-600 mb-3 sm:mb-4">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">{data.location || 'Deutschlandweit'}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {data.h1}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  {data.heroText}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {["Geprüfte Solar-Experten aus deiner Region",
                  "Bis zu 30% staatliche Förderung",
                  "Kostenlose Beratung & Planung",
                  "5 Jahre Garantie auf alle Arbeiten"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={handleCTAClick}
                >
                   Jetzt Beratung anfragen
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
                  onClick={handleCTAClick}
                >
                  Mehr erfahren
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                <div className="flex justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-center sm:text-left text-sm sm:text-base">4.9/5 • Über 2.500 zufriedene Solar-Kunden</span>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src={data.heroImage || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                alt={`Solaranlage ${data.location || ''}`}
                className="relative z-10 w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections with iframe after 3rd section */}
      {data.sections.map((section, index) => (
        <>
          <section key={index} className={`py-12 sm:py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4 max-w-6xl">
              <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    {section.heading}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {section.text}
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                      onClick={handleCTAClick}
                    >
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl transform rotate-3 opacity-30"></div>
                    <img 
                      src={section.image || "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                      alt={section.heading}
                      className="relative z-10 w-full h-60 sm:h-80 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Insert iframe after the 3rd section (index 2) */}
          {index === 2 && (
            <section className="py-12 sm:py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <KlickstreckeIframe />
              </div>
            </section>
          )}
        </>
      ))}

      {/* Process Section */}
      {data.processSection && (
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                {data.processSection.heading}
              </h2>
              {data.processSection.subheading && (
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  {data.processSection.subheading}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.processSection.steps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <IconComponent name={step.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-white">
            <div className="space-y-3 sm:space-y-4">
              <Calendar className="w-10 sm:w-12 h-10 sm:h-12 mx-auto text-blue-200" />
              <h3 className="text-xl sm:text-2xl font-bold">Über 10 Jahre</h3>
              <p className="text-blue-100 text-sm sm:text-base">Erfahrung mit Klimaanlagen</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <Shield className="w-10 sm:w-12 h-10 sm:h-12 mx-auto text-blue-200" />
              <h3 className="text-xl sm:text-2xl font-bold">100% Garantie</h3>
              <p className="text-blue-100 text-sm sm:text-base">5 Jahre Gewährleistung auf alle Arbeiten</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <CheckCircle className="w-10 sm:w-12 h-10 sm:h-12 mx-auto text-blue-200" />
              <h3 className="text-xl sm:text-2xl font-bold">2.500+ Kunden</h3>
              <p className="text-blue-100 text-sm sm:text-base">Zufriedene Kunden deutschlandweit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      {data.keyBenefitsSection && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {data.keyBenefitsSection.heading}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {data.keyBenefitsSection.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 animate-scale-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <IconComponent name={benefit.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Alles was du über deine Klimaanlage wissen musst
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {data.faq.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <button
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{item.question}</span>
                  <ArrowRight 
                    className={`w-4 sm:w-5 h-4 sm:h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white animate-fade-in">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Bereit für deine neue Solaranlage?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Lass dich kostenlos beraten und erfahre, wie viel Förderung du für deine Solaranlage erhalten kannst.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs sm:max-w-sm mx-auto"
            onClick={handleCTAClick}
          >
            Jetzt Beratung anfragen
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <img 
                src="https://klimahero24.de/favicon.svg"
                alt="klimahero24 Logo"
                className="h-8 mb-3 sm:mb-4"
              />
              <p className="text-gray-400 text-sm sm:text-base">Dein Partner für moderne Klimaanlagen in ganz Deutschland.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/klimatisierung" className="hover:text-white transition-colors">Klimatisierung</a></li>
                <li><a href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontakt</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                <span className="block">📞 0800 123 456 789</span>
                <span className="block">✉️ info@sonnenhelden24.de</span>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 sonnenhelden24. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
