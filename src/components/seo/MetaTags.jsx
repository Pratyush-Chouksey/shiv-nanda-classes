import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/content';

/**
 * MetaTags Component
 * Comprehensive SEO, Open Graph, Twitter Cards, and JSON-LD Structured Data
 * for Shiva Nanda Kathak Classes (DanceSchool / LocalBusiness).
 */
export default function MetaTags() {
  const title = `${siteConfig.academyName} | ${siteConfig.teacher} | Kathak Classes in Andheri West Mumbai`;
  const description = `Learn classical Kathak in Andheri West, Mumbai with Samidha Karanjekar (Alankaar, M.A. Kathak). Jaipur Gharana foundational training, Gandharva Mahavidyalaya exam coaching, semi-classical batches, and annual stage recitals.`;
  const siteUrl = "https://shivanandakathak.com";
  const ogImageUrl = `${siteUrl}/og-image.jpg`;

  // JSON-LD Structured Data for DanceSchool / LocalBusiness / EducationalOrganization
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": ["DanceSchool", "EducationalOrganization", "LocalBusiness"],
    "name": siteConfig.academyName,
    "alternateName": "Shiva Nanda Kathak Academy",
    "description": description,
    "url": siteUrl,
    "telephone": "+91-99207-64766",
    "email": siteConfig.email,
    "priceRange": "₹₹",
    "image": ogImageUrl,
    "founder": {
      "@type": "Person",
      "name": siteConfig.teacher,
      "jobTitle": "Kathak Guru & Classical Performer",
      "award": "Alankaar (Gandharva Mahavidyalaya), M.A. Kathak (Khairagarh University)",
      "knowsAbout": [
        "Kathak Dance",
        "Jaipur Gharana",
        "Teentaal",
        "Abhinaya",
        "Hasta Mudras",
        "Tatkar Footwork"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Society 33, D3, MHADA Colony, SVP Nagar, near Telephone Exchange, Kids Planet School Lane",
      "addressLocality": "Andheri West",
      "addressRegion": "Mumbai, Maharashtra",
      "postalCode": "400053",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.1417, // [TODO: Client to confirm exact GPS coordinates for Society 33 SVP Nagar]
      "longitude": 72.8222
    },
    "sameAs": [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.youtube
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kathak Programs & Batches",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kathak Classical Training (Prarambhik to Visharad)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gandharva Mahavidyalaya Examination Preparation & Alankaar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Semi-Classical Batches (Bhajans, Thumris & Lyrical Kathak)"
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Kathak classes in Andheri West Mumbai, Kathak dance classes Andheri West, Samidha Karanjekar, Shiva Nanda Kathak Classes, Jaipur Gharana Kathak Mumbai, Gandharva Mahavidyalaya Kathak exams, Kathak Alankaar teacher Mumbai, Khairagarh University Kathak, semi classical dance classes Andheri, Kathak classes SVP Nagar MHADA Colony"
      />
      <link rel="canonical" href={siteUrl} />
      <meta name="theme-color" content="#0B0A1F" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={siteConfig.academyName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdSchema)}
      </script>
    </Helmet>
  );
}
