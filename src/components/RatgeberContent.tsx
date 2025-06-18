
import { Button } from "@/components/ui/button";
import ContentRenderer from '@/components/ContentRenderer';
import RatgeberSidebar from '@/components/RatgeberSidebar';

interface RatgeberContentProps {
  data: {
    content: Array<{
      type: 'h1' | 'h2' | 'text' | 'image' | 'table' | 'cta';
      text?: string;
      src?: string;
      alt?: string;
      url?: string;
      buttonText?: string;
      tableData?: Array<Array<string>>;
      tableHeaders?: Array<string>;
    }>;
    sidebar: {
      newsletter?: {
        headline: string;
        text: string;
        button: string;
      };
      infobox?: {
        text: string;
        button: string;
      };
    };
  };
  onCTAClick: () => void;
}

const RatgeberContent = ({ data, onCTAClick }: RatgeberContentProps) => {
  return (
    <div className="pb-12 sm:pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 sm:p-6 lg:p-8">
              {/* Skip the h1 since it's already in hero */}
              <ContentRenderer content={data.content.filter(item => item.type !== 'h1')} />
            </div>
          </div>

          {/* Sticky Sidebar - positioned even lower to align with content start */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-80 space-y-6">
              <RatgeberSidebar config={data.sidebar} />
              
              {/* Additional info box */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Kostenlose Fördermittelberatung und Angebote von Fachfirmen sichern</h3>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={onCTAClick}
                >
                  Jetzt Beratung anfragen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatgeberContent;
