import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Globe, 
  Search, 
  ShoppingCart, 
  Smartphone, 
  CreditCard, 
  Gauge,
  Share2,
  GraduationCap,
  Bot
} from 'lucide-react';
import serviceWebAppDesign from '@/assets/service-web-app-design.jpg';

const DisenoWebApp = () => {
  return (
    <ServicePageLayout
      title="Diseño de sitios web y aplicaciones móviles para negocios en Calgary"
      metaTitle="Diseño Web y App Móvil Profesional en Calgary | RCW Innovation"
      metaDescription="Creamos sitios web y aplicaciones móviles profesionales y responsivas en Calgary, con experiencia de usuario excelente e integraciones avanzadas."
      keywords="diseño web Calgary, desarrollo web Calgary, aplicaciones móviles Calgary, PWA Calgary, e-commerce Calgary, páginas web profesionales Calgary"
      canonicalUrl="https://www.rcwinnovation.com/diseno-web-app-movil-calgary"
      heroImage={serviceWebAppDesign}
      heroImageAlt="Diseño web profesional y aplicaciones móviles en Calgary - Laptop y smartphone mostrando interfaces UI/UX modernas con wireframes y elementos de diseño"
      tag="Web Pro"
      icon={Globe}
      shortDescription="Sitios orientados a conversión con SEO técnico, e-commerce seguro y apps PWA que convierten visitantes en clientes."
      problemTitle="Problema: presencia digital incompleta"
      problemDescription="Contar solo con una web o solo con una app limita la experiencia. Para competir en el mercado actual, necesitas presencia en ambos canales con coherencia visual y excelente experiencia de usuario."
      solutionTitle="Solución: web + app mobile de alto nivel"
      solutionDescription="Diseñamos interfaces UX/UI profesionales, desarrollamos webs responsivas y apps nativas o híbridas. Aseguramos coherencia visual, velocidades rápidas e integraciones con API y bases de datos para una experiencia impecable."
      features={[
        {
          title: 'SEO desde la Arquitectura',
          description: 'Optimización técnica integrada desde el diseño para posicionar en Google desde el día uno.',
          icon: Search,
        },
        {
          title: 'E-commerce Seguro',
          description: 'Tiendas online con pasarelas de pago seguras, inventario y gestión de pedidos.',
          icon: ShoppingCart,
        },
        {
          title: 'Apps Móviles (PWA)',
          description: 'Progressive Web Apps que funcionan como apps nativas sin necesidad de tiendas de aplicaciones.',
          icon: Smartphone,
        },
        {
          title: 'Velocidad Optimizada',
          description: 'Sitios ultra-rápidos que cargan en menos de 3 segundos para máxima conversión.',
          icon: Gauge,
        },
        {
          title: 'Pagos Integrados',
          description: 'Integración con Stripe, PayPal, Square y otras pasarelas para cobros sin fricciones.',
          icon: CreditCard,
        },
        {
          title: 'Diseño Responsive',
          description: 'Experiencia perfecta en cualquier dispositivo: móvil, tablet y escritorio.',
          icon: Globe,
        },
      ]}
      benefitsTitle="Beneficios de nuestra solución web + app"
      benefits={[
        'Experiencia de usuario consistente en todas las plataformas',
        'Incremento de clientes y retención',
        'Optimización de procesos internos (pedidos, pagos, reservas)',
        'Posicionamiento y percepción premium',
        'SEO técnico implementado desde la arquitectura',
        'Progressive Web Apps (PWA) instalables',
        'Velocidad de carga ultra-optimizada (Core Web Vitals)',
        'Panel de administración intuitivo (CMS)',
      ]}
      ctaText="Cotiza el desarrollo de tu web y app móvil en Calgary"
      processSteps={[
        {
          title: 'Estrategia y Wireframes',
          description: 'Definimos objetivos, estructura del sitio y experiencia de usuario antes de diseñar.',
        },
        {
          title: 'Diseño UI/UX',
          description: 'Creamos diseños visuales impactantes centrados en la conversión y la marca.',
        },
        {
          title: 'Desarrollo Frontend',
          description: 'Construimos el sitio con tecnologías modernas, optimizado para velocidad y SEO.',
        },
        {
          title: 'Integración Backend',
          description: 'Conectamos con CMS, bases de datos, pasarelas de pago y sistemas externos.',
        },
        {
          title: 'Lanzamiento y Optimización',
          description: 'Publicamos el sitio optimizado y monitoreamos métricas para mejoras continuas.',
        },
      ]}
      faqs={[
        {
          question: '¿Qué tipo de sitios web desarrollan?',
          answer: 'Desarrollamos landing pages, sitios corporativos, e-commerce, blogs, portales web, aplicaciones web (PWA) y cualquier solución digital personalizada.',
        },
        {
          question: '¿Incluyen hosting y dominio?',
          answer: 'Sí, incluimos hosting de alta disponibilidad por el primer año. El dominio puede incluirse o ayudamos a configurar uno que ya tengas.',
        },
        {
          question: '¿Cuánto tiempo toma desarrollar un sitio web?',
          answer: 'Una landing page toma 1-2 semanas. Un sitio corporativo 3-4 semanas. E-commerce y aplicaciones web complejas 6-10 semanas.',
        },
        {
          question: '¿Los sitios son optimizados para Google?',
          answer: 'Sí, implementamos SEO técnico completo: estructura semántica, velocidad, schema markup, meta tags, sitemap y más.',
        },
        {
          question: '¿Podré actualizar el contenido yo mismo?',
          answer: 'Sí, todos nuestros sitios incluyen un CMS intuitivo y capacitación para que puedas actualizar textos, imágenes y contenido fácilmente.',
        },
      ]}
      relatedServices={[
        { title: 'Branding y Redes Sociales', href: '/servicios/branding-redes', icon: Share2 },
        { title: 'Mentoría & Capacitación', href: '/servicios/mentoria-capacitacion', icon: GraduationCap },
        { title: 'Automatizaciones con IA', href: '/servicios/automatizaciones-ia', icon: Bot },
      ]}
    />
  );
};

export default DisenoWebApp;
