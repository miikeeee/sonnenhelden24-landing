
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";

interface SidebarConfig {
  newsletter?: {
    headline: string;
    text: string;
    button: string;
  };
  infobox?: {
    text: string;
    button: string;
  };
}

interface RatgeberSidebarProps {
  config: SidebarConfig;
}

const RatgeberSidebar = ({ config }: RatgeberSidebarProps) => {
  const handleCTAClick = () => {
    window.open('https://app.klimahero24.de', '_blank');
  };

  return (
    <div className="space-y-6">
      {config.newsletter && (
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-bold text-blue-900 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              {config.newsletter.headline}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-blue-800 mb-4 leading-relaxed">
              {config.newsletter.text}
            </p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleCTAClick}
            >
              {config.newsletter.button}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {config.infobox && (
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <p className="text-orange-900 mb-4 leading-relaxed">
              {config.infobox.text}
            </p>
            <Button 
              variant="outline"
              className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={handleCTAClick}
            >
              {config.infobox.button}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RatgeberSidebar;
