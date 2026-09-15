// Schema JSON-LD global de RCW Innovation.
// Dominio canónico: https://rcwinnovation.com (sin www).
//
// PLANTILLA COMENTADA — AggregateRating / Review:
// Rellenar únicamente con reseñas reales; marcar reseñas falsas viola las políticas de Google.
// Cuando existan reseñas verificables (p. ej. Google Business Profile), descomentar y completar:
//
// "aggregateRating": {
//   "@type": "AggregateRating",
//   "ratingValue": "REEMPLAZAR_CON_PROMEDIO_REAL",
//   "reviewCount": "REEMPLAZAR_CON_TOTAL_REAL",
//   "bestRating": "5",
//   "worstRating": "1"
// },
// "review": [
//   {
//     "@type": "Review",
//     "author": { "@type": "Person", "name": "NOMBRE_REAL_DEL_CLIENTE" },
//     "datePublished": "AAAA-MM-DD",
//     "reviewBody": "TEXTO_REAL_DE_LA_RESENA",
//     "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
//   }
// ]

const SITE_URL = "https://rcwinnovation.com";

export const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "RCW Innovation Inc.",
    "alternateName": "RCW Innovation",
    "url": `${SITE_URL}/`,
    "logo": `${SITE_URL}/favicon.png`,
    "description": "Empresa de tecnología en Calgary, Alberta. Desarrollo de páginas web, software a medida, automatización con inteligencia artificial y branding digital, con atención en español e inglés en Canadá y Colombia.",
    "foundingDate": "2023",
    "founder": { "@id": `${SITE_URL}/#founder` },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-587-896-1997",
      "email": "info@rcwinnovation.com",
      "contactType": "customer service",
      "areaServed": ["CA", "CO"],
      "availableLanguage": ["es", "en"]
    },
    "sameAs": [
      "https://www.facebook.com/rcwinnovationai/",
      "https://www.instagram.com/rcwinnovationai_/",
      "https://share.google/xUcKvRUSis6kFdoYs",
      "https://www.linkedin.com/company/rcwinnovation",
      "https://www.youtube.com/@rcwinnovationai",
      "https://www.tiktok.com/@rcwinnovationai"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    "name": "RCW Innovation Inc.",
    "image": `${SITE_URL}/favicon.png`,
    "url": `${SITE_URL}/`,
    "telephone": "+1-587-896-1997",
    "email": "info@rcwinnovation.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      // TODO: añadir "streetAddress" con la dirección física real cuando esté disponible.
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.0447,
      "longitude": -114.0719
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": [
      { "@type": "City", "name": "Calgary" },
      { "@type": "AdministrativeArea", "name": "Alberta" },
      { "@type": "Country", "name": "CA" },
      { "@type": "Country", "name": "CO" }
    ],
    "parentOrganization": { "@id": `${SITE_URL}/#organization` }
  };

  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    "name": "Ricardo Luna Becerra",
    "jobTitle": "Fundador y Consultor Principal",
    "description": "Ingeniero Industrial y de Proyectos especializado en innovación, transformación digital y soluciones tecnológicas para negocios. Fundador de RCW Innovation Inc. y de las plataformas Servicios Latinos Canada y Canada One Click.",
    "url": `${SITE_URL}/es/about`,
    "sameAs": [
      "https://www.linkedin.com/in/consultoricardolunab/",
      "https://servicioslatinoscanada.com/",
      "https://canadaoneclick.ca/"
    ],
    "worksFor": { "@id": `${SITE_URL}/#organization` },
    "knowsLanguage": ["es", "en"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia entre Asesoría 5.0 y Consultoría 5.0?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La Asesoría 5.0 son sesiones rápidas (30-90 días) enfocadas en diagnóstico y plan de acción inmediato. La Consultoría 5.0 es un proyecto integral que incluye roadmap completo, implementación y optimización continua."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo pueden ayudar a mi negocio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unimos tecnología, automatización y estrategia para eliminar tareas repetitivas, fortalecer tu marca y convertir más leads en clientes. Todo respaldado por métricas y resultados medibles."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se integran con sistemas existentes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, nos integramos con CRM, ERP y otras suites como Kommo, HubSpot, Odoo, Zoho y SAP. Nuestro enfoque es potenciar lo que ya funciona, no reemplazarlo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma ver resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quick wins en 2-3 semanas, un MVP funcional en 4-8 semanas y despliegues completos en 8-12 semanas, dependiendo de la complejidad del proyecto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo manejan la seguridad de la información?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usamos NDA, cifrado de datos, control de acceso estricto y nunca utilizamos los datos de clientes para entrenar modelos sin permiso expreso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son las opciones de inversión y pago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos proyectos por hitos o retainers mensuales, con opciones de financiamiento disponibles para proyectos de mayor envergadura."
        }
      },
      {
        "@type": "Question",
        "name": "¿Quién es dueño del código al finalizar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El cliente conserva la propiedad total del proyecto y todo el código desarrollado. La empresa retiene únicamente la autoría técnica y metodológica."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué los diferencia de otras agencias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diseñamos sistemas orientados a resultados medibles, combinando branding, tecnología e innovación con un enfoque en métricas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puedo empezar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agenda una Asesoría o Consultoría 5.0. Analizaremos tus objetivos, identificaremos oportunidades y crearemos un roadmap personalizado para tu negocio."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Desarrollo Web y Automatización con IA",
    "provider": { "@id": `${SITE_URL}/#localbusiness` },
    "areaServed": {
      "@type": "City",
      "name": "Calgary"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Innovación Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño de Software a la Medida",
            "description": "Desarrollo de MVPs y plataformas escalables con arquitecturas modulares y APIs seguras"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding y Redes Sociales",
            "description": "Construcción de identidad visual y contenidos de alto impacto"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatizaciones con IA",
            "description": "Workflows inteligentes para atención, ventas y operaciones"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creación de Agentes IA",
            "description": "Agentes conversacionales y de back-end que aprenden de los datos empresariales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistemas de Gestión ERP/CRM",
            "description": "Diseño e implementación de sistemas con dashboards y automatización"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño Web y Apps Móviles",
            "description": "Sitios orientados a conversión con SEO técnico y apps PWA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mentoría y Capacitación",
            "description": "Programas sobre IA, productividad, automatización, UX y analítica"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};
