
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface RatgeberHeaderProps {
  onCTAClick: () => void;
}

const RatgeberHeader = ({ onCTAClick }: RatgeberHeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img 
            src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/FavIcon%20500%20x%20500-0BoxfiLkXw4D2e41W20ELwwpufi7NW.svg"
            alt="klimahero24 Logo"
            className="h-8 sm:h-10"
          />
        </a>
        <Button 
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          onClick={onCTAClick}
        >
          <Phone className="w-4 h-4 mr-2" />
          Beratung anfragen
        </Button>
      </div>
    </header>
  );
};

export default RatgeberHeader;
