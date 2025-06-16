import { useEffect, useRef } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RatgeberHeader from '@/components/RatgeberHeader';
import RatgeberHero from '@/components/RatgeberHero';
import RatgeberContent from '@/components/RatgeberContent';
import RatgeberFooter from '@/components/RatgeberFooter';
import { useRatgeberData } from '@/hooks/useRatgeberData';
import { useSEO } from '@/hooks/useSEO';

const RatgeberPage = () => {
  const { data, loading, error } = useRatgeberData();
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useSEO(data);

  // Scroll reveal effect
  useEffect(() => {
    if (loading || error || !data) return;

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
  }, [data, loading, error]);

  const handleCTAClick = () => {
    window.open('https://app.sonnenhelden24.de', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 sm:h-12 w-8 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">Lade Inhalte...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Seite nicht gefunden</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Die angeforderte Seite konnte nicht gefunden werden.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'Startseite', url: '/' },
    { name: 'Ratgeber', url: '/ratgeber' },
    { name: data.content.find(item => item.type === 'h1')?.text || data.title, url: `/ratgeber/${data.slug}` }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <RatgeberHeader onCTAClick={handleCTAClick} />

        {/* Breadcrumb Navigation */}
        <section className="pt-20 pb-4 bg-white scroll-reveal">
          <div className="container mx-auto px-4 max-w-7xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Startseite</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/ratgeber">Ratgeber</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{data.content.find(item => item.type === 'h1')?.text || data.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <div className="scroll-reveal">
          <RatgeberHero data={data} onCTAClick={handleCTAClick} />
        </div>
        <div className="scroll-reveal">
          <RatgeberContent data={data} onCTAClick={handleCTAClick} />
        </div>
        <div className="scroll-reveal">
          <RatgeberFooter />
        </div>
      </div>
    </>
  );
};

export default RatgeberPage;
