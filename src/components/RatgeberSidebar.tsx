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
    window.open('https://app.sonnenhelden24.de', '_blank');
  };

  return (
    <div className="space-y-6">
      {config.newsletter && (
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-bold text-yellow-900 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              {config.newsletter.headline}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-yellow-800 mb-4 leading-relaxed">
              {config.newsletter.text}
            </p>
            <Button 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
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
              className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
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
