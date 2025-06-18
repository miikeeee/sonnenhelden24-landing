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
            src="https://qumi1raeu1ly0ptd.public.blob.vercel-storage.com/SonnenHelden24%20Branding/Sonnenhelden%20Logo%20500%20x%20120%20schwarz-FedDT3PWV59uMqMrNfrRkENONXp5nJ.svg"
            alt="sonnenhelden24 Logo"
            className="h-8 sm:h-10"
          />
        </a>
        <Button 
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 group"
          onClick={onCTAClick}
        >
          Solar-Beratung anfragen
          <span className="ml-2 hidden group-hover:inline-block transition-opacity duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 18l6-6-6-6"/></svg>
          </span>
        </Button>
      </div>
    </header>
  );
};

export default RatgeberHeader;
