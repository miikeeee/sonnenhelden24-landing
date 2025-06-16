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
            src="/favicon.ico"
            alt="sonnenhelden24 Logo"
            className="h-8 sm:h-10"
          />
        </a>
        <Button 
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          onClick={onCTAClick}
        >
          <Phone className="w-4 h-4 mr-2" />
          Solar-Beratung anfragen
        </Button>
      </div>
    </header>
  );
};

export default RatgeberHeader;
