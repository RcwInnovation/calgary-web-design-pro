import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Code2, 
  Layers, 
  Shield, 
  Gauge, 
  Database, 
  GitBranch,
  Share2,
  Bot,
  Brain
} from 'lucide-react';
import serviceDevelopment from '@/assets/service-development.jpg';

const SoftwareAMedida = () => {
  return (
    <ServicePageLayout
      title="Diseño de Software a la Medida"
      metaTitle="Desarrollo de Software a Medida en Calgary | RCW Innovation"
      metaDescription="Desarrollo de MVPs y plataformas escalables con arquitecturas modulares, APIs seguras y dashboards intuitivos. Soluciones de software personalizadas en Calgary."
      keywords="desarrollo software Calgary, software a medida Calgary, MVP desarrollo Calgary, plataformas escalables, APIs seguras, desarrollo aplicaciones empresariales Calgary"
      heroImage={serviceDevelopment}
      heroImageAlt="Desarrollo de software a medida en Calgary - RCW Innovation creando plataformas escalables"
      tag="Premium"
      icon={Code2}
      shortDescription="Desarrollo de MVPs y plataformas escalables con arquitecturas modulares, APIs seguras y dashboards intuitivos para impulsar tu negocio."
      longDescription="Creamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades únicas de tu negocio. Desde la conceptualización de MVPs hasta el desarrollo de plataformas empresariales completas, nuestro equipo de ingenieros expertos utiliza las tecnologías más avanzadas para construir productos digitales robustos, seguros y escalables que impulsan el crecimiento de tu empresa."
      features={[
        {
          title: 'Arquitecturas Modulares',
          description: 'Diseñamos sistemas con componentes independientes que facilitan el mantenimiento, la escalabilidad y las actualizaciones futuras.',
          icon: Layers,
        },
        {
          title: 'APIs Seguras',
          description: 'Desarrollamos interfaces de programación robustas con autenticación avanzada, cifrado de datos y mejores prácticas de seguridad.',
          icon: Shield,
        },
        {
          title: 'Dashboards Intuitivos',
          description: 'Creamos paneles de control visuales que te permiten monitorear métricas clave y tomar decisiones basadas en datos.',
          icon: Gauge,
        },
        {
          title: 'Bases de Datos Optimizadas',
          description: 'Diseñamos esquemas de datos eficientes que garantizan rendimiento óptimo incluso con millones de registros.',
          icon: Database,
        },
        {
          title: 'Control de Versiones',
          description: 'Implementamos flujos de trabajo Git profesionales para un desarrollo colaborativo y trazabilidad completa.',
          icon: GitBranch,
        },
        {
          title: 'Código Documentado',
          description: 'Entregamos código limpio, bien documentado y siguiendo las mejores prácticas de la industria.',
          icon: Code2,
        },
      ]}
      benefits={[
        'Escalabilidad garantizada para crecer con tu negocio',
        'Seguridad de nivel empresarial con cifrado de extremo a extremo',
        'Experiencia de usuario optimizada para máxima conversión',
        'Integraciones con sistemas existentes (CRM, ERP, etc.)',
        'Soporte técnico y mantenimiento continuo',
        'Propiedad total del código fuente',
        'Documentación técnica completa',
        'Capacitación para tu equipo incluida',
      ]}
      processSteps={[
        {
          title: 'Descubrimiento y Análisis',
          description: 'Entendemos a fondo tus necesidades, objetivos de negocio y requerimientos técnicos para definir el alcance del proyecto.',
        },
        {
          title: 'Diseño de Arquitectura',
          description: 'Creamos la arquitectura técnica, diagramas de flujo y prototipos de interfaz para validar la solución antes del desarrollo.',
        },
        {
          title: 'Desarrollo Ágil',
          description: 'Implementamos el software en sprints cortos con entregas incrementales, permitiendo feedback continuo y ajustes rápidos.',
        },
        {
          title: 'Testing y QA',
          description: 'Ejecutamos pruebas exhaustivas automatizadas y manuales para garantizar la calidad y estabilidad del producto.',
        },
        {
          title: 'Despliegue y Soporte',
          description: 'Desplegamos en infraestructura escalable y proporcionamos soporte técnico continuo con actualizaciones regulares.',
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