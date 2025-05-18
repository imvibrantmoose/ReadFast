import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "ReadFast - Improve Your Reading Speed",
  description = "Train your brain to read faster while maintaining comprehension with our interactive exercises and personalized insights.",
  keywords = "reading speed, speed reading, comprehension, wpm, words per minute, reading improvement",
  ogImage = "/og-image.jpg",
  ogUrl = "/",
  canonical = "/",
}) => {
  const siteUrl = window.location.origin;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${ogUrl}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}${ogUrl}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Canonical */}
      <link rel="canonical" href={`${siteUrl}${canonical}`} />
    </Helmet>
  );
};

export default SEO;
