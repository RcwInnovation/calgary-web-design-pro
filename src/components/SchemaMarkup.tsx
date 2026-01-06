export const SchemaMarkup = () => {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RCW Innovation",
    "url": "https://rcwinnovation.com/diseno-web-calgary",
    "description": "Servicios de diseño web en español en Calgary. Creamos páginas web profesionales, landing pages de conversión y sitios corporativos optimizados para Google.",
    "areaServed": [
      { "@type": "City", "name": "Calgary" },
      { "@type": "AdministrativeArea", "name": "Alberta" },
      { "@type": "Country", "name": "CA" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta un sitio web profesional en Calgary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestros proyectos comienzan desde $1,500 CAD para landing pages y desde $3,000 CAD para sitios web corporativos completos. El precio final depende de las funcionalidades específicas que necesites. Ofrecemos una consulta gratuita para darte un presupuesto personalizado."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma desarrollar un sitio web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una landing page puede estar lista en 1-2 semanas. Un sitio web corporativo completo generalmente toma 3-4 semanas. Proyectos más complejos con funcionalidades personalizadas pueden tomar 6-8 semanas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen diseño web en español en Calgary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, somos especialistas en diseño web para la comunidad hispana en Calgary. Toda nuestra comunicación y soporte es en español, y podemos crear tu sitio web bilingüe (español/inglés) para alcanzar más clientes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué incluye el servicio de diseño web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Incluye diseño personalizado, desarrollo responsive, optimización SEO básica, integración con Google Analytics, formularios de contacto, hosting por el primer año, SSL/seguridad, y capacitación para que puedas actualizar tu contenido."
        }
      },
      {
        "@type": "Question",
        "name": "¿Pueden ayudarme con SEO para aparecer en Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Todos nuestros sitios incluyen SEO on-page básico. También ofrecemos servicios de SEO avanzado y posicionamiento local para que aparezcas en búsquedas como 'tu servicio + Calgary'."
        }
      },
      {
        "@type": "Question",
        "name": "¿Trabajan con negocios pequeños o solo empresas grandes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con negocios de todos los tamaños. De hecho, nos especializamos en ayudar a pequeñas y medianas empresas hispanas en Calgary a establecer su presencia digital profesional."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen garantía de satisfacción?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos garantía de satisfacción del 100%. Trabajamos contigo hasta que estés completamente satisfecho con tu sitio web. Además, incluimos 30 días de ajustes gratuitos después del lanzamiento."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Diseño y Desarrollo Web",
    "provider": {
      "@type": "LocalBusiness",
      "name": "RCW Innovation Inc"
    },
    "areaServed": {
      "@type": "City",
      "name": "Calgary"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Diseño Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Pages",
            "description": "Diseño de landing pages de alta conversión optimizadas para generar leads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sitios Web Corporativos",
            "description": "Desarrollo de sitios web profesionales y corporativos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Local",
            "description": "Optimización para buscadores con enfoque en Calgary"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
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
