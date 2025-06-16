import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

interface RatgeberHeroProps {
  data: {
    content: Array<{
      type: 'h1' | 'h2' | 'text' | 'image' | 'table' | 'cta';
      text?: string;
    }>;
    title: string;
    metaDescription: string;
    heroImage?: {
      src: string;
      alt: string;
    };
    publishDate?: string;
    readTime?: string;
    author?: string;
  };
  onCTAClick: () => void;
}

const RatgeberHero = ({ data, onCTAClick }: RatgeberHeroProps) => {
  return (
    <section className="pt-4 sm:pt-8 pb-8 sm:pb-12 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-green-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1">
              {data.heroImage && (
                <img 
                  src={data.heroImage.src}
                  alt={data.heroImage.alt}
                  className="w-full rounded-lg shadow-lg"
                />
              )}
            </div>

            {/* Text Column */}
            <div className="order-1 lg:order-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {data.content.find(item => item.type === 'h1')?.text || data.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-gray-600">
                {data.publishDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{data.publishDate}</span>
                  </div>
                )}
                {data.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{data.readTime}</span>
                  </div>
                )}
                {data.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>{data.author}</span>
                  </div>
                )}
              </div>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                {data.metaDescription}
              </p>
              
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={onCTAClick}
              >
                Jetzt Beratung anfragen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatgeberHero;
