import { Button } from "@/components/ui/button";
import { ArrowRight, Info, Lightbulb } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface ContentBlock {
  type: 'h1' | 'h2' | 'text' | 'image' | 'table' | 'cta' | 'infobox' | 'blockquote' | 'list';
  text?: string;
  src?: string;
  alt?: string;
  url?: string;
  buttonText?: string;
  tableData?: Array<Array<string>>;
  tableHeaders?: Array<string>;
  // Für Infobox
  style?: 'tip' | 'info';
  title?: string;
  // Für Blockquote
  source?: string;
  // Für List
  ordered?: boolean;
  items?: string[];
}

interface ContentRendererProps {
  content: ContentBlock[];
}

const ContentRenderer = ({ content }: ContentRendererProps) => {
  const handleCTAClick = (url?: string) => {
    window.open(url || 'https://app.sonnenhelden24.de', '_blank');
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
          <div key={index} className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
            <ReactMarkdown
              components={{
                strong: ({node, ...props}) => <strong className="font-bold" {...props} />, // Tailwind für bold
                a: ({node, ...props}) => <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" {...props} />
              }}
            >
              {block.text || ''}
            </ReactMarkdown>
          </div>
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
          <div key={index} className="my-6 sm:my-8 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full border-collapse text-sm">
              {block.tableHeaders && (
                <thead className="bg-gray-50">
                  <tr>
                    {block.tableHeaders.map((header, headerIndex) => (
                      <th 
                        key={headerIndex} 
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-gray-800 whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="divide-y divide-gray-200 bg-white">
                {block.tableData?.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td 
                        key={cellIndex} 
                        className="px-4 py-3 text-gray-600 whitespace-nowrap"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
      case 'infobox': {
        const isTip = block.style === 'tip';
        const boxClasses = isTip ? 'bg-yellow-50 border-yellow-400 text-yellow-800' : 'bg-blue-50 border-blue-400 text-blue-800';
        return (
          <div key={index} className={`my-8 p-4 border-l-4 rounded-r-md ${boxClasses}`}>
            <h4 className="font-bold flex items-center">
              {isTip ? <Lightbulb className="w-5 h-5 mr-2" /> : <Info className="w-5 h-5 mr-2" />}
              {block.title}
            </h4>
            <p className="mt-2 text-sm sm:text-base">{block.text}</p>
          </div>
        );
      }
      case 'blockquote':
        return (
          <blockquote key={index} className="my-8 border-l-4 border-gray-300 pl-4 italic text-gray-600">
            <p className="text-lg sm:text-xl">"{block.text}"</p>
            {block.source && <footer className="mt-2 text-sm not-italic text-gray-500">— {block.source}</footer>}
          </blockquote>
        );
      case 'list': {
        const ListTag = block.ordered ? 'ol' : 'ul';
        const listStyle = block.ordered ? 'list-decimal' : 'list-disc';
        return (
          <ListTag key={index} className={`my-5 pl-5 space-y-2 text-base sm:text-lg text-gray-700 list-inside ${listStyle}`}>
            {block.items?.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ListTag>
        );
      }
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
