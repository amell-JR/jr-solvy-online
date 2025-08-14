import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "JR Solvy | AI Solutions & Digital Innovation",
  description = "Empowering Innovation. Accelerating Tomorrow. JR Solvy provides cutting-edge AI solutions, web development, mobile apps, and digital marketing services.",
  keywords = "AI solutions, web development, mobile apps, digital marketing, automation, React, React Native, machine learning, UI/UX design",
  image = "/preview-image.jpg",
  url = "https://jrsolvy.com",
  type = "website"
}) => {
  const fullTitle = title.includes("JR Solvy") ? title : `${title} | JR Solvy`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="JR Solvy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="JR Solvy" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jrsolvy" />
      <meta name="twitter:creator" content="@jrsolvy" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="msapplication-TileColor" content="#4F46E5" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JR Solvy",
          "description": description,
          "url": url,
          "logo": `${url}/logo.svg`,
          "sameAs": [
            "https://linkedin.com/in/robertsunday",
            "https://twitter.com/jrsolvy"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "robertsunday333@gmail.com",
            "contactType": "business"
          },
          "founder": {
            "@type": "Person",
            "name": "Robert Sunday",
            "email": "robertsunday333@gmail.com"
          },
          "areaServed": "Worldwide",
          "serviceType": [
            "AI Solutions",
            "Web Development", 
            "Mobile App Development",
            "Digital Marketing",
            "UI/UX Design",
            "IT Consulting"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;