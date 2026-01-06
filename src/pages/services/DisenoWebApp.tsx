import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Globe, 
  Search, 
  ShoppingCart, 
  Smartphone, 
  Gauge, 
  BarChart3,
  Share2,
  GraduationCap,
  Bot
} from 'lucide-react';
import serviceWebDesign from '@/assets/service-web-design.jpg';

const DisenoWebApp = () => {
  return (
    <ServicePageLayout
      title="Diseño Web – App Móvil"
      metaTitle="Diseño Web y Aplicaciones Móviles Calgary | RCW Innovation"
      metaDescription="Sitios web orientados a conversión con SEO técnico, e-commerce seguro y apps PWA. Diseño web profesional y apps móviles en Calgary."
      keywords="diseño web Calgary, desarrollo web Calgary, aplicaciones móviles Calgary, PWA Calgary, e-commerce Calgary, SEO Calgary, páginas web Calgary"
      heroImage={serviceWebDesign}
      heroImageAlt="Diseño web y aplicaciones móviles en Calgary - RCW Innovation"
      tag="Web Pro"
      icon={Globe}
      shortDescription="Sitios orientados a conversión con SEO técnico, e-commerce seguro y apps PWA que convierten visitantes en clientes."
      longDescription="Creamos presencias digitales que generan resultados reales. Nuestros sitios web están diseñados desde la arquitectura para posicionar en buscadores, convertir visitantes y proporcionar experiencias memorables. Desde landing pages de alto impacto hasta tiendas e-commerce completas y Progressive Web Apps, construimos soluciones web que impulsan el crecimiento de tu negocio."
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
          title: 'Analytics Integradas',
          description: 'Seguimiento completo del comportamiento de usuarios para optimización continua.',
          icon: BarChart3,
        },
        {
          title: 'Diseño Responsive',
          description: 'Experiencia perfecta en cualquier dispositivo: móvil, tablet y escritorio.',
          icon: Globe,
        },
      ]}
      benefits={[
        'SEO técnico implementado desde la arquitectura',
        'E-commerce seguro y escalable con múltiples pasarelas',
        'Progressive Web Apps (PWA) instalables',
        'Diseño responsive premium para todos los dispositivos',
        'Velocidad de carga ultra-optimizada (Core Web Vitals)',
        'Integración con Google Analytics y herramientas de marketing',
        'Panel de administración intuitivo (CMS)',
        'Hosting de alta disponibilidad incluido',
      ]}
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