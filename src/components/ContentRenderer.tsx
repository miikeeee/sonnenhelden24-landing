
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ContentBlock {
  type: 'h1' | 'h2' | 'text' | 'image' | 'table' | 'cta';
  text?: string;
  src?: string;
  alt?: string;
  url?: string;
  buttonText?: string;
  tableData?: Array<Array<string>>;
  tableHeaders?: Array<string>;
}

interface ContentRendererProps {
  content: ContentBlock[];
}

const ContentRenderer = ({ content }: ContentRendererProps) => {
  const handleCTAClick = (url?: string) => {
    window.open(url || 'https://app.neko24.de', '_blank');
  };

  const renderContent = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'h1':
        return (
          <h1 key={index} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {block.text}
          </h1>
        );
      
      case 'h2':
        return (
          <h2 key={index} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-8">
            {block.text}
          </h2>
        );
      
      case 'text':
        return (
          <p key={index} className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
            {block.text}
          </p>
        );
      
      case 'image':
        return (
          <div key={index} className="mb-6 sm:mb-8">
            <img 
              src={block.src} 
              alt={block.alt || ''} 
              className="w-full rounded-lg shadow-lg"
            />
            {block.alt && (
              <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center italic px-2">
                {block.alt}
              </p>
            )}
          </div>
        );
      
      case 'table':
        return (
          <div key={index} className="mb-6 sm:mb-8 -mx-4 sm:mx-0">
            <div className="overflow-x-auto">
              <div className="min-w-full inline-block align-middle">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                  {block.tableHeaders && (
                    <thead>
                      <tr className="bg-blue-50">
                        {block.tableHeaders.map((header, headerIndex) => (
                          <th key={headerIndex} className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-900 text-sm sm:text-base">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {block.tableData?.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'cta':
        return (
          <div key={index} className="my-6 sm:my-8 p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-base sm:text-lg text-gray-800 mb-4">{block.text}</p>
            <Button 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleCTAClick(block.url)}
            >
              {block.buttonText || 'Jetzt anfragen'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="prose prose-sm sm:prose-lg max-w-none">
      {content.map((block, index) => renderContent(block, index))}
    </div>
  );
};

export default ContentRenderer;
