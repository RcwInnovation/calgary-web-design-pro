import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Share2, 
  Palette, 
  TrendingUp, 
  Users, 
  FileText, 
  Target,
  Globe,
  GraduationCap,
  Code2
} from 'lucide-react';
import serviceLandingPage from '@/assets/service-landing-page.jpg';

const BrandingRedesSociales = () => {
  return (
    <ServicePageLayout
      title="Branding y Redes Sociales"
      metaTitle="Branding y Marketing en Redes Sociales Calgary | RCW Innovation"
      metaDescription="Construcción de identidad visual y contenidos de alto impacto. Marketing orgánico y de pago para posicionar tu marca en Calgary y Canadá."
      keywords="branding Calgary, marketing redes sociales Calgary, identidad visual Calgary, marketing digital Calgary, gestión redes sociales, campañas publicitarias Calgary"
      heroImage={serviceLandingPage}
      heroImageAlt="Branding y marketing en redes sociales en Calgary - RCW Innovation"
      tag="Estrategia"
      icon={Share2}
      shortDescription="Construcción de identidad visual y contenidos de alto impacto. Combinamos marketing orgánico y de pago para posicionar tu marca."
      longDescription="Desarrollamos tu marca desde cero o la potenciamos con estrategias de contenido y publicidad que generan resultados medibles. Nuestro enfoque integral combina diseño de identidad visual, gestión de redes sociales y campañas publicitarias optimizadas para maximizar tu presencia digital y convertir seguidores en clientes leales."
      features={[
        {
          title: 'Identidad Visual Completa',
          description: 'Diseñamos logotipos, paletas de colores, tipografías y guías de estilo que reflejan la esencia de tu marca.',
          icon: Palette,
        },
        {
          title: 'Estrategia de Contenido',
          description: 'Creamos calendarios editoriales y contenido de valor que conecta con tu audiencia y genera engagement.',
          icon: FileText,
        },
        {
          title: 'Campañas Publicitarias',
          description: 'Diseñamos y optimizamos campañas en Meta, Google y TikTok para maximizar tu retorno de inversión.',
          icon: Target,
        },
        {
          title: 'Gestión de Comunidad',
          description: 'Administramos tus redes sociales con respuestas rápidas, interacción genuina y monitoreo de menciones.',
          icon: Users,
        },
        {
          title: 'Análisis y Reportes',
          description: 'Proporcionamos informes detallados con métricas clave para medir el impacto de cada acción.',
          icon: TrendingUp,
        },
        {
          title: 'Creatividades de Alto Impacto',
          description: 'Producimos fotos, videos y gráficos optimizados para cada plataforma y objetivo de campaña.',
          icon: Share2,
        },
      ]}
      benefits={[
        'Posicionamiento de marca sólido y diferenciado',
        'Mayor conversión y fidelización de clientes',
        'Guías de estilo completas para consistencia visual',
        'Aumento significativo de engagement en redes',
        'Campañas publicitarias con ROI optimizado',
        'Presencia coherente en todas las plataformas',
        'Contenido estratégico que genera leads',
        'Reportes mensuales con insights accionables',
      ]}
      processSteps={[
        {
          title: 'Auditoría de Marca',
          description: 'Analizamos tu presencia actual, competencia y oportunidades para definir una estrategia diferenciadora.',
        },
        {
          title: 'Diseño de Identidad',
          description: 'Creamos los elementos visuales de tu marca: logo, colores, tipografías y guía de estilo completa.',
        },
        {
          title: 'Estrategia de Contenido',
          description: 'Desarrollamos el calendario editorial, tono de voz y pilares de contenido para cada plataforma.',
        },
        {
          title: 'Ejecución y Publicación',
          description: 'Producimos y publicamos contenido optimizado, gestionamos la comunidad y lanzamos campañas.',
        },
        {
          title: 'Optimización Continua',
          description: 'Analizamos métricas, ajustamos estrategias y escalamos lo que funciona para maximizar resultados.',
        },
      ]}
      faqs={[
        {
          question: '¿Qué plataformas de redes sociales manejan?',
          answer: 'Gestionamos todas las plataformas principales: Instagram, Facebook, LinkedIn, TikTok, Twitter/X, YouTube y Pinterest, seleccionando las más relevantes para tu audiencia.',
        },
        {
          question: '¿Incluyen la creación de contenido?',
          answer: 'Sí, nuestros planes incluyen diseño gráfico, redacción de copy, edición de video y fotografía de producto según el paquete seleccionado.',
        },
        {
          question: '¿Cuánto tiempo toma ver resultados?',
          answer: 'Los primeros resultados orgánicos suelen verse en 30-60 días. Con campañas pagadas, puedes ver resultados desde la primera semana.',
        },
        {
          question: '¿Manejan también la publicidad pagada?',
          answer: 'Sí, diseñamos, implementamos y optimizamos campañas en Meta Ads, Google Ads y TikTok Ads con enfoque en ROI.',
        },
        {
          question: '¿Puedo aprobar el contenido antes de publicarse?',
          answer: 'Absolutamente. Enviamos el contenido con anticipación para tu revisión y aprobación antes de cada publicación.',
        },
      ]}
      relatedServices={[
        { title: 'Diseño Web – App Móvil', href: '/servicios/diseno-web-app', icon: Globe },
        { title: 'Mentoría & Capacitación', href: '/servicios/mentoria-capacitacion', icon: GraduationCap },
        { title: 'Software a Medida', href: '/servicios/software-medida', icon: Code2 },
      ]}
    />
  );
};

export default BrandingRedesSociales;