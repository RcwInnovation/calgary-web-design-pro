import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  GraduationCap, 
  Users, 
  Video, 
  BookOpen, 
  Target, 
  Award,
  Globe,
  Share2,
  Bot
} from 'lucide-react';
import serviceMobile from '@/assets/service-mobile.jpg';

const MentoriaCapacitacion = () => {
  return (
    <ServicePageLayout
      title="Mentoría & Capacitación"
      metaTitle="Mentoría y Capacitación Empresarial Calgary | RCW Innovation"
      metaDescription="Programas 1:1 y para equipos sobre IA, productividad, automatización, UX y analítica. Capacitación empresarial en Calgary."
      keywords="capacitación empresarial Calgary, mentoría negocios Calgary, cursos IA Calgary, capacitación equipos, upskilling Calgary, formación digital Calgary"
      heroImage={serviceMobile}
      heroImageAlt="Mentoría y capacitación empresarial en Calgary - RCW Innovation"
      tag="Upskilling"
      icon={GraduationCap}
      shortDescription="Programas 1:1 y para equipos sobre IA, productividad, automatización, UX y analítica para potenciar las capacidades de tu equipo."
      longDescription="Capacitamos a tu equipo en las últimas tecnologías y metodologías para que puedan aprovechar al máximo las herramientas digitales. Nuestros programas de mentoría combinan teoría con práctica inmediata, permitiendo que los participantes apliquen lo aprendido directamente en sus proyectos reales desde la primera sesión."
      features={[
        {
          title: 'Programas Personalizados',
          description: 'Planes de capacitación adaptados a las necesidades específicas de tu equipo y negocio.',
          icon: Target,
        },
        {
          title: 'Sesiones 1:1',
          description: 'Mentoría individual intensiva para líderes y profesionales que buscan acelerar su desarrollo.',
          icon: Users,
        },
        {
          title: 'Workshops Prácticos',
          description: 'Talleres interactivos donde los participantes trabajan en proyectos reales.',
          icon: BookOpen,
        },
        {
          title: 'Sesiones Grabadas',
          description: 'Acceso a grabaciones de todas las sesiones para repaso y referencia futura.',
          icon: Video,
        },
        {
          title: 'Seguimiento Continuo',
          description: 'Acompañamiento post-capacitación para resolver dudas y medir el impacto.',
          icon: Target,
        },
        {
          title: 'Certificación',
          description: 'Diploma de certificación al completar el programa de capacitación.',
          icon: Award,
        },
      ]}
      benefits={[
        'Planes 100% personalizados según tus objetivos',
        'Workshops prácticos con casos reales de tu industria',
        'Seguimiento y soporte post-capacitación',
        'Certificación incluida para participantes',
        'Material de apoyo digital descargable',
        'Sesiones grabadas disponibles por 6 meses',
        'Aplicación inmediata en proyectos reales',
        'Métricas de progreso y evaluación de impacto',
      ]}
      processSteps={[
        {
          title: 'Diagnóstico de Necesidades',
          description: 'Evaluamos las habilidades actuales de tu equipo y definimos objetivos de aprendizaje.',
        },
        {
          title: 'Diseño del Programa',
          description: 'Creamos un plan de capacitación personalizado con contenidos, ejercicios y cronograma.',
        },
        {
          title: 'Ejecución',
          description: 'Impartimos las sesiones combinando teoría, práctica y casos aplicados a tu negocio.',
        },
        {
          title: 'Evaluación',
          description: 'Medimos el aprendizaje con proyectos prácticos y evaluaciones de conocimiento.',
        },
        {
          title: 'Seguimiento',
          description: 'Acompañamos la implementación con sesiones de seguimiento y resolución de dudas.',
        },
      ]}
      faqs={[
        {
          question: '¿Qué temas pueden enseñar?',
          answer: 'Cubrimos IA y automatización, productividad digital, UX/UI design, analítica de datos, marketing digital, gestión de proyectos ágiles, y tecnologías específicas como React, Python, etc.',
        },
        {
          question: '¿Las capacitaciones son presenciales o virtuales?',
          answer: 'Ofrecemos ambas modalidades. Las sesiones virtuales son en vivo por Zoom/Meet. También podemos ir a tus oficinas para capacitaciones presenciales en Calgary.',
        },
        {
          question: '¿Cuántas personas pueden participar?',
          answer: 'Desde sesiones 1:1 hasta grupos de hasta 20 personas. Para grupos más grandes, diseñamos programas especiales.',
        },
        {
          question: '¿Entregan certificación?',
          answer: 'Sí, al completar el programa cada participante recibe un certificado digital y físico de RCW Innovation.',
        },
        {
          question: '¿Pueden capacitar en herramientas específicas?',
          answer: 'Sí, podemos crear programas enfocados en herramientas específicas como HubSpot, Salesforce, Google Analytics, Figma, etc.',
        },
      ]}
      relatedServices={[
        { title: 'Diseño Web – App Móvil', href: '/servicios/diseno-web-app', icon: Globe },
        { title: 'Branding y Redes Sociales', href: '/servicios/branding-redes', icon: Share2 },
        { title: 'Automatizaciones con IA', href: '/servicios/automatizaciones-ia', icon: Bot },
      ]}
    />
  );
};

export default MentoriaCapacitacion;