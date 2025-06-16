
import { useEffect } from 'react';

interface SEOData {
  title: string;
  metaDescription: string;
  slug: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  publishDate?: string;
  author?: string;
  structuredData?: any;
}

export const useSEO = (data: SEOData | null) => {
  useEffect(() => {
    if (data) {
      document.title = data.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', data.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = data.metaDescription;
        document.head.appendChild(meta);
      }

      // Add Open Graph tags
      const ogTags = [
        { property: 'og:title', content: data.title },
        { property: 'og:description', content: data.metaDescription },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `${window.location.origin}/ratgeber/${data.slug}` },
        { property: 'og:site_name', content: 'badhelden24' },
        { property: 'og:locale', content: 'de_DE' }
      ];

      if (data.publishDate) {
        ogTags.push({ property: 'og:article:published_time', content: data.publishDate });
      }

      if (data.author) {
        ogTags.push({ property: 'og:article:author', content: data.author });
      }

      if (data.heroImage) {
        ogTags.push({ property: 'og:image', content: data.heroImage.src });
        ogTags.push({ property: 'og:image:alt', content: data.heroImage.alt });
      }

      // Remove existing OG tags and add new ones
      document.querySelectorAll('meta[property^="og:"]').forEach(tag => tag.remove());
      document.querySelectorAll('meta[name^="twitter:"]').forEach(tag => tag.remove());

      ogTags.forEach(({ property, content }) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      });

      // Add Twitter Card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: data.title },
        { name: 'twitter:description', content: data.metaDescription }
      ];

      if (data.heroImage) {
        twitterTags.push({ name: 'twitter:image', content: data.heroImage.src });
      }

      twitterTags.forEach(({ name, content }) => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      });

      if (data.structuredData) {
        const existingScript = document.querySelector('#structured-data');
        if (existingScript) {
          existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = 'structured-data';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data.structuredData);
        document.head.appendChild(script);
      }
    }
  }, [data]);
};
