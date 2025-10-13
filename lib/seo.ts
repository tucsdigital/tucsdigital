import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
  structuredData?: any
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = '/assets/imgs/template/tucs-isotipo.png',
    noIndex = false
  } = config

  const fullTitle = title.includes('Tucs Digital') ? title : `${title} | Tucs Digital`
  const baseUrl = 'https://tucsdigital.com'
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: "Tucs Digital" }],
    creator: "Tucs Digital",
    publisher: "Tucs Digital",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || baseUrl,
      siteName: 'Tucs Digital',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_AR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'tu-codigo-de-verificacion-google',
      yandex: 'tu-codigo-de-verificacion-yandex',
      yahoo: 'tu-codigo-de-verificacion-yahoo',
    },
  }
}

// Schema.org JSON-LD generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tucs Digital",
    "description": "Especialistas en desarrollo web, aplicaciones móviles y soluciones digitales personalizadas",
    "url": "https://tucsdigital.com",
    "logo": "https://tucsdigital.com/assets/imgs/template/tucs-isotipo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5491144713445",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressLocality": "Buenos Aires"
    },
    "sameAs": [
      "https://www.linkedin.com/company/tucs-digital",
      "https://www.instagram.com/tucsdigital",
      "https://www.facebook.com/tucsdigital"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50"
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  category: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Tucs Digital",
      "url": "https://tucsdigital.com"
    },
    "category": service.category,
    "url": service.url,
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": service.url,
      "serviceSmsNumber": "+5491144713445"
    }
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tucs Digital",
    "description": "Agencia de desarrollo web y soluciones digitales en Buenos Aires",
    "url": "https://tucsdigital.com",
    "telephone": "+5491144713445",
    "email": "tucsdigital@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressLocality": "Buenos Aires",
      "addressRegion": "Buenos Aires"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.6037",
      "longitude": "-58.3816"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Argentina"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Digitales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aplicaciones Móviles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce"
          }
        }
      ]
    }
  }
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}
