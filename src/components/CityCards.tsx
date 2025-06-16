import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CityCard {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface CityCardsProps {
  cities: CityCard[];
  showAllButton?: boolean;
}

const CityCards = ({ cities, showAllButton = false }: CityCardsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solaranlagen in deiner Stadt
          </h2>
          <p className="text-xl text-gray-600">
            Finde professionelle Photovoltaik-Experten in deiner Region
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg cursor-pointer" onClick={() => window.location.href = `/solaranlagen/${city.slug}` }>
                <img 
                  src={city.image}
                  alt={city.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{city.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {city.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-all duration-300"
                  onClick={() => window.location.href = `/solaranlagen/${city.slug}` }
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {showAllButton && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
              onClick={() => window.location.href = '/solaranlagen'}
            >
              Alle anzeigen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CityCards;
