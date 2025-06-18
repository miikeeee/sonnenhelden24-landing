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
import RatgeberFooter from '@/components/RatgeberFooter';
import { useRatgeberData } from '@/hooks/useRatgeberData';
import { useSEO } from '@/hooks/useSEO';
import ReactMarkdown from 'react-markdown';

// --- NEUE HELFER & TYPEN (vorher in RatgeberContent.tsx) ---

// Helper-Icons für die Infobox
const InfoIcon = () => (
  <svg className="w-5 h-5 inline-block mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const TipIcon = () => (
  <svg className="w-5 h-5 inline-block mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
);

// Typ-Definitionen für alle möglichen Inhaltselemente
type ContentItem = 
  | { type: 'h1' | 'h2' | 'text'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'table'; tableHeaders: string[]; tableData: (string | number)[][] }
  | { type: 'cta'; text: string; buttonText: string }
  | { type: 'infobox'; style: 'tip' | 'info'; title: string; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'blockquote'; text: string; source: string };

// --- HAUPTKOMPONENTE: RatgeberPage ---

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
        threshold: 0.01,
        rootMargin: '0px 0px -10px 0px'
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
  }, [data, loading, error]);

  const handleCTAClick = () => {
    window.open('https://app.badhelden24.de', '_blank');
  };

  // Ladezustand
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

  // Fehlerzustand oder keine Daten
  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Seite nicht gefunden</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">Die angeforderte Seite konnte nicht gefunden werden.</p>
          <a href="/" className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
            Zur Startseite
          </a>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'Startseite', url: '/' },
    { name: 'Ratgeber', url: '/ratgeber' },
    { name: data.content.find((item): item is { type: 'h1'; text: string } => item.type === 'h1')?.text || data.title, url: `/ratgeber/${data.slug}` }
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
                  <BreadcrumbPage>{breadcrumbItems[2].name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <div className="scroll-reveal">
          <RatgeberHero data={data} onCTAClick={handleCTAClick} />
        </div>
        
        {/* --- HIER BEGINNT DIE INTEGRIERTE CONTENT-RENDER-LOGIK --- */}
        <div className="scroll-reveal">
            <main className="bg-white py-8 sm:py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <article className="prose prose-lg max-w-none">
                        {data.content.map((item: ContentItem, index: number) => {
                            switch (item.type) {
                                case 'h1':
                                    return <h1 key={index} className="text-3xl sm:text-4xl font-bold text-gray-900 mt-8 mb-4">{item.text}</h1>;
                                case 'h2':
                                    return <h2 key={index} className="text-2xl sm:text-3xl font-bold text-gray-800 mt-12 mb-4 border-b pb-2">{item.text}</h2>;
                                case 'text':
                                    return (
                                        <div key={index} className="my-5 text-base sm:text-lg leading-relaxed text-gray-700">
                                            <ReactMarkdown
                                                components={{
                                                    li: ({children, ...props}) => (
                                                        <li {...props} style={{marginBottom: '0.5em', display: 'flex', alignItems: 'flex-start'}}>
                                                            <span style={{color: '#fbbf24', marginRight: 8, fontSize: 18}}>•</span>
                                                            <span>{children}</span>
                                                        </li>
                                                    ),
                                                    strong: ({node, ...props}) => <strong className="font-bold" {...props} />, // Optional: Tailwind für bold
                                                    a: ({node, ...props}) => <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" {...props} />
                                                }}
                                            >
                                                {item.text || ''}
                                            </ReactMarkdown>
                                        </div>
                                    );
                                case 'image':
                                    return (
                                        <figure key={index} className="my-8">
                                            <img src={item.src} alt={item.alt} className="rounded-lg shadow-md w-full" />
                                            <figcaption className="text-center text-sm text-gray-500 mt-2">{item.alt}</figcaption>
                                        </figure>
                                    );
                                case 'table':
                                    return (
                                        <div key={index} className="my-8 overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200 border">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        {item.tableHeaders.map((header, i) => (
                                                            <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {item.tableData.map((row, i) => (
                                                        <tr key={i} className="hover:bg-gray-50">
                                                            {row.map((cell, j) => (
                                                                <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    );
                                case 'cta':
                                    return (
                                        <div key={index} className="my-10 p-6 bg-blue-600 rounded-lg text-white text-center shadow-lg">
                                            <div className="text-lg sm:text-xl font-semibold mb-4">
                                                <ReactMarkdown
                                                    components={{
                                                        strong: ({node, ...props}) => <strong className="font-bold" {...props} />, // Tailwind für bold
                                                        a: ({node, ...props}) => <a className="text-blue-200 underline" target="_blank" rel="noopener noreferrer" {...props} />
                                                    }}
                                                >
                                                    {item.text || ''}
                                                </ReactMarkdown>
                                            </div>
                                            <button onClick={handleCTAClick} className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-100 transition-colors">
                                                {item.buttonText}
                                            </button>
                                        </div>
                                    );
                                case 'infobox':
                                    const isTip = item.style === 'tip';
                                    const boxClasses = isTip ? 'bg-yellow-50 border-yellow-400 text-yellow-800' : 'bg-blue-50 border-blue-400 text-blue-800';
                                    return (
                                        <div key={index} className={`my-8 p-4 border-l-4 rounded-r-md ${boxClasses}`}>
                                            <h4 className="font-bold flex items-center">
                                                {isTip ? <TipIcon /> : <InfoIcon />}
                                                {item.title}
                                            </h4>
                                            <div className="mt-2 text-sm sm:text-base">
                                                <ReactMarkdown
                                                    components={{
                                                        strong: ({node, ...props}) => <strong className="font-bold" {...props} />, // Tailwind für bold
                                                        a: ({node, ...props}) => <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" {...props} />
                                                    }}
                                                >
                                                    {item.text || ''}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    );
                                case 'list':
                                    const ListTag = item.ordered ? 'ol' : 'ul';
                                    const listStyle = item.ordered ? 'list-decimal' : 'list-disc';
                                    return (
                                        <ListTag key={index} className={`my-5 pl-5 space-y-2 text-base sm:text-lg text-gray-700 list-inside ${listStyle}`}>
                                            {item.items.map((listItem, i) => (
                                                <li key={i}>
                                                    <ReactMarkdown
                                                        components={{
                                                            strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                                                            a: ({node, ...props}) => <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" {...props} />
                                                        }}
                                                    >
                                                        {listItem}
                                                    </ReactMarkdown>
                                                </li>
                                            ))}
                                        </ListTag>
                                    );
                                case 'blockquote':
                                    return (
                                        <blockquote key={index} className="my-8 border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                            <p className="text-lg sm:text-xl">"{item.text}"</p>
                                            {item.source && <footer className="mt-2 text-sm not-italic text-gray-500">— {item.source}</footer>}
                                        </blockquote>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </article>
                </div>
            </main>
        </div>
        
        <div className="scroll-reveal">
          <RatgeberFooter />
        </div>
      </div>
    </>
  );
};

export default RatgeberPage;