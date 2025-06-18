
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface RatgeberData {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  publishDate?: string;
  readTime?: string;
  author?: string;
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
  structuredData?: any;
}

export const useRatgeberData = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<RatgeberData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Loading ratgeber data for slug:', slug);
        const response = await fetch(`/data/ratgeber/${slug}.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to load data for ${slug}`);
        }
        
        const jsonData = await response.json();
        console.log('Loaded ratgeber data:', jsonData);
        setData(jsonData);
      } catch (err) {
        console.error('Error loading ratgeber data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadData();
    }
  }, [slug]);

  return { data, loading, error };
};
