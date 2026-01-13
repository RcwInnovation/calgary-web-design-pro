import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Code2, 
  Layers, 
  Shield, 
  Gauge, 
  Link2, 
  Headphones,
  Bot,
  Database,
  Brain
} from 'lucide-react';
import serviceSoftwareCustom from '@/assets/service-software-custom.jpg';

const SoftwareAMedida = () => {
  return (
    <ServicePageLayout
      title="Diseño de software a la medida premium en Calgary para empresas innovadoras"
      metaTitle="Diseño de Software a la Medida Premium en Calgary | RCW Innovation"
      metaDescription="Creamos software a medida en Calgary con IA y arquitectura escalable. Atención en español y diagnóstico personalizado."
      keywords="diseño software Calgary, software a medida Calgary, desarrollo software premium, MVP desarrollo Calgary, IA software Calgary, software empresarial Calgary"
      canonicalUrl="https://www.rcwinnovation.com/diseno-software-medida-premium-calgary"
      heroImage={serviceSoftwareCustom}
      heroImageAlt="Desarrollo de software a medida premium en Calgary - Equipo de desarrolladores creando plataformas escalables con arquitectura modular e IA integrada"
      tag="Premium"
      icon={Code2}
      shortDescription="Desarrollo de MVPs y plataformas escalables con arquitecturas modulares, IA integrada y dashboards intuitivos para impulsar tu negocio."
      problemTitle="Problema: el límite del software genérico"
      problemDescription="Muchos negocios dependen de herramientas genéricas que no se ajustan a sus procesos. Esto limita su crecimiento y aumenta los costos operativos. Las soluciones estándar no pueden adaptarse a flujos de trabajo únicos ni escalar según las necesidades específicas de cada empresa."
      solutionTitle="Solución: software a medida que impulsa tu operación"
      solutionDescription="Nuestro equipo diseña sistemas personalizados con arquitectura escalable, IA integrada y flujos optimizados que se adaptan a tu industria. Desde la estrategia hasta la implementación, te acompañamos en español con soporte continuo y actualizaciones."
      features={[
        {
          title: 'Interfaces Intuitivas',
          description: 'Diseñamos experiencias de usuario modernas que maximizan la productividad y minimizan la curva de aprendizaje.',
          icon: Gauge,
        },
        {
          title: 'Integraciones Seguras',
          description: 'Conectamos con tus sistemas actuales (CRM, ERP, pasarelas de pago) con autenticación avanzada y cifrado.',
          icon: Shield,
        },
        {
          title: 'IA y Automatización',
          description: 'Incorporamos inteligencia artificial para automatizar procesos repetitivos y ahorrar tiempo valioso.',
          icon: Bot,
        },
        {
          title: 'Arquitectura Escalable',
          description: 'Diseñamos sistemas modulares que crecen contigo, desde startup hasta empresa consolidada.',
          icon: Layers,
        },
        {
          title: 'APIs Robustas',
          description: 'Desarrollamos interfaces de programación seguras para conectar con cualquier servicio externo.',
          icon: Link2,
        },
        {
          title: 'Soporte Continuo',
          description: 'Mantenimiento, actualizaciones y soporte técnico para garantizar el funcionamiento óptimo.',
          icon: Headphones,
        },
      ]}
      benefitsTitle="Beneficios de trabajar con nosotros"
      benefits={[
        'Interfaces intuitivas y experiencia de usuario moderna',
        'Integraciones seguras con tus sistemas actuales',
        'Inteligencia artificial y automatización para ahorrar tiempo',
        'Soporte continuo y actualizaciones incluidas',
        'Arquitectura escalable que crece con tu negocio',
        'Propiedad total del código fuente',
        'Documentación técnica completa',
        'Capacitación para tu equipo incluida',
      ]}
      ctaText="Solicita tu diagnóstico de software personalizado en español"
      processSteps={[
        {
          title: 'Descubrimiento y Análisis',
          description: 'Entendemos a fondo tus necesidades, objetivos de negocio y requerimientos técnicos para definir el alcance.',
        },
        {
          title: 'Diseño de Arquitectura',
          description: 'Creamos la arquitectura técnica, diagramas de flujo y prototipos para validar la solución.',
        },
        {
          title: 'Desarrollo Ágil',
          description: 'Implementamos en sprints cortos con entregas incrementales y feedback continuo.',
        },
        {
          title: 'Testing y QA',
          description: 'Pruebas exhaustivas automatizadas y manuales para garantizar calidad y estabilidad.',
        },
        {
          title: 'Despliegue y Soporte',
          description: 'Desplegamos en infraestructura escalable con soporte técnico continuo.',
        },
      ]}
      faqs={[
        {
          question: '¿Qué tecnologías utilizan para el desarrollo?',
          answer: 'Utilizamos tecnologías modernas como React, Node.js, Python, PostgreSQL, MongoDB, AWS y Google Cloud, seleccionando el stack óptimo según los requerimientos específicos de cada proyecto.',
        },
        {
          question: '¿Cuánto tiempo toma desarrollar un MVP?',
          answer: 'Un MVP funcional típicamente se desarrolla en 4-8 semanas. El tiempo exacto depende de la complejidad de las funcionalidades requeridas.',
        },
        {
          question: '¿Puedo integrar el software con mis sistemas actuales?',
          answer: 'Sí, diseñamos todas nuestras soluciones pensando en la integración. Podemos conectar con CRMs, ERPs, pasarelas de pago y cualquier sistema que utilices actualmente.',
        },
        {
          question: '¿Qué pasa si necesito cambios después del lanzamiento?',
          answer: 'Ofrecemos planes de mantenimiento y soporte continuo que incluyen actualizaciones, nuevas funcionalidades y optimizaciones según evolucionen tus necesidades.',
        },
        {
          question: '¿El código fuente es mío?',
          answer: 'Absolutamente. Al finalizar el proyecto, recibes la propiedad total del código fuente, documentación y todos los activos desarrollados.',
        },
      ]}
      relatedServices={[
        { title: 'Automatizaciones con IA', href: '/servicios/automatizaciones-ia', icon: Bot },
        { title: 'Sistemas de Gestión', href: '/servicios/sistemas-gestion', icon: Database },
        { title: 'Creación de Agentes IA', href: '/servicios/agentes-ia', icon: Brain },
      ]}
    />
  );
};

export default SoftwareAMedida;
