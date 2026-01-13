import { forwardRef } from 'react';
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
import serviceBrandingSocial from '@/assets/service-branding-social.jpg';

const BrandingRedesSociales = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <ServicePageLayout
        title="Branding y estrategia de redes sociales para negocios en Calgary con video y fotografía profesional"
        metaTitle="Branding y Estrategias de Redes Sociales en Calgary | RCW Innovation"
        metaDescription="Construye tu marca y domina las redes sociales en Calgary. Branding, identidad, video y fotografía para negocios latinos."
        keywords="branding Calgary, estrategia redes sociales Calgary, identidad visual Calgary, marketing digital Calgary, gestión redes sociales latino, community manager Calgary, video fotografía Calgary"
        canonicalUrl="https://www.rcwinnovation.com/branding-estrategia-redes-sociales-calgary"
        heroImage={serviceBrandingSocial}
        heroImageAlt="Branding y estrategia de redes sociales en Calgary - Diseño de identidad visual y marketing digital con elementos de Instagram, TikTok y LinkedIn"
        tag="Estrategia"
        icon={Share2}
        shortDescription="Construcción de identidad visual y contenidos de alto impacto. Combinamos marketing orgánico y de pago para posicionar tu marca."
        problemTitle="Problema: marcas que pasan desapercibidas"
        problemDescription="Muchas empresas no tienen identidad visual clara ni estrategia digital, lo que causa poca confianza y poca recordación en sus clientes. Sin una presencia coherente y profesional, es difícil destacar en un mercado competitivo y convertir seguidores en clientes."
        solutionTitle="Solución: identidad + estrategia social completa"
        solutionDescription="Definimos tu imagen (logo, colores, tipografía) y creamos calendarios de contenido con storytelling y copy persuasivo. Analizamos tu audiencia y plataformas (Facebook, Instagram, LinkedIn, TikTok) para posicionar tu marca con estrategias probadas."
        features={[
          {
            title: 'Identidad Visual Completa',
            description: 'Diseñamos logotipos, paletas de colores, tipografías y guías de estilo que reflejan la esencia de tu marca.',
            icon: Palette,
          },
          {
            title: 'Direccionamiento Estratégico',
            description: 'Definimos misión, visión, valores y propuesta de valor para alinear tu marca con tus objetivos de negocio.',
            icon: Target,
          },
          {
            title: 'Estrategia de Contenido',
            description: 'Creamos calendarios editoriales y contenido de valor que conecta con tu audiencia y genera engagement.',
            icon: FileText,
          },
          {
            title: 'Campañas Publicitarias',
            description: 'Diseñamos y optimizamos campañas en Meta, Google y TikTok para maximizar tu retorno de inversión.',
            icon: TrendingUp,
          },
          {
            title: 'Gestión de Comunidad',
            description: 'Administramos tus redes sociales con respuestas rápidas, interacción genuina y monitoreo de menciones.',
            icon: Users,
          },
          {
            title: 'Creatividades de Alto Impacto',
            description: 'Producimos fotos, videos y gráficos optimizados para cada plataforma y objetivo de campaña.',
            icon: Share2,
          },
        ]}
        benefitsTitle="Beneficios de nuestra estrategia"
        benefits={[
          'Imagen coherente y profesional en todos los canales',
          'Direccionamiento estratégico claro (misión, visión, valores)',
          'Comunidad que interactúa y recomienda tu marca',
          'Contenido planificado y optimizado para conversión',
          'Medición y mejora continua basada en datos',
          'Mayor recordación de marca en tu mercado',
          'Aumento significativo de engagement y alcance',
          'Guías de estilo completas para consistencia visual',
          'Estrategias adaptadas al público latino en Calgary',
        ]}
        ctaText="Agenda tu consultoría de branding y redes en español"
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
          { title: 'Diseño Web – App Móvil', href: '/diseno-web-app-movil-calgary', icon: Globe },
          { title: 'Mentoría & Capacitación', href: '/mentoria-capacitacion-digital-calgary', icon: GraduationCap },
          { title: 'Software a Medida', href: '/diseno-software-medida-premium-calgary', icon: Code2 },
        ]}
      />
    </div>
  );
});

BrandingRedesSociales.displayName = 'BrandingRedesSociales';

export default BrandingRedesSociales;