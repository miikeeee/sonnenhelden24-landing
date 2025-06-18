import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LandingPage from '@/components/LandingPage';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

interface LandingPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  heroImage?: string;
  location?: string;
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
    text: string;
    url: string;
  };
  structuredData?: any;
}

const SolaranlagePage = () => {
  const { slug, city, district } = useParams<{ slug?: string; city?: string; district?: string }>();
  const [data, setData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        let dataPath = '';
        if (city && district) {
          dataPath = `/data/solaranlage/${city}/${district}.json`;
        } else if (slug) {
          dataPath = `/data/solaranlage/${slug}.json`;
        } else {
          setError('Ungültige URL');
          setLoading(false);
          return;
        }
        const response = await fetch(dataPath);
        if (!response.ok) {
          throw new Error(`Failed to load data for ${dataPath}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    if (slug || (city && district)) {
      loadData();
    }
  }, [slug, city, district]);

  useEffect(() => {
    if (data) {
      document.title = data.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', data.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = data.metaDescription;
        document.head.appendChild(meta);
      }
      // Open Graph Tags
      const ogTags = [
        { property: 'og:title', content: data.title },
        { property: 'og:description', content: data.metaDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${window.location.origin}/solaranlage/${data.slug}` },
        { property: 'og:site_name', content: 'sonnenhelden24' },
        { property: 'og:locale', content: 'de_DE' }
      ];
      if (data.heroImage) {
        ogTags.push({ property: 'og:image', content: data.heroImage });
        ogTags.push({ property: 'og:image:alt', content: data.h1 });
      }
      document.querySelectorAll('meta[property^="og:"]').forEach(tag => tag.remove());
      document.querySelectorAll('meta[name^="twitter:"]').forEach(tag => tag.remove());
      ogTags.forEach(({ property, content }) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      });
      // Twitter Card
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: data.title },
        { name: 'twitter:description', content: data.metaDescription }
      ];
      if (data.heroImage) {
        twitterTags.push({ name: 'twitter:image', content: data.heroImage });
      }
      twitterTags.forEach(({ name, content }) => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      });
      // Structured Data
      if (data.structuredData) {
        const existingScript = document.querySelector('#structured-data');
        if (existingScript) {
          existingScript.remove();
        }
        const script = document.createElement('script');
        script.id = 'structured-data';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data.structuredData);
        document.head.appendChild(script);
      }
    }
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Inhalte...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Seite nicht gefunden</h1>
          <p className="text-gray-600 mb-6">
            Die angeforderte Seite konnte nicht gefunden werden.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    );
  }

  // Breadcrumbs auf Solaranlage anpassen
  let breadcrumbItems = [
    { name: 'Startseite', url: '/' },
    { name: 'Solaranlage', url: '/solaranlage' }
  ];
  if (city && district && data) {
    breadcrumbItems.push(
      { name: city.charAt(0).toUpperCase() + city.slice(1), url: `/solaranlage/${city}` },
      { name: data.location || data.h1, url: `/solaranlage/${city}/${district}` }
    );
  } else if (data) {
    breadcrumbItems.push(
      { name: data.location || data.h1, url: `/solaranlage/${data.slug}` }
    );
  }

  const handleCTAClick = () => {
    window.open('https://app.sonnenhelden24.de', '_blank');
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
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
            <div className="flex items-center space-x-2">
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
          </div>
        </header>
        {/* Breadcrumb Navigation */}
        <section className="pt-20 pb-4 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Startseite</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/solaranlage">Solaranlage</BreadcrumbLink>
                </BreadcrumbItem>
                {city && district && data ? (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={`/solaranlage/${city}`}>{city.charAt(0).toUpperCase() + city.slice(1)}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{data.location || data.h1}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{data.location || data.h1}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>
        <LandingPage data={data} />
      </div>
    </>
  );
};

export default SolaranlagePage;
