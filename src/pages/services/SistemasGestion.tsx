import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Database, 
  LayoutDashboard, 
  Users, 
  Shield, 
  Workflow, 
  BarChart3,
  Bot,
  Code2,
  Brain
} from 'lucide-react';
import serviceDevelopment from '@/assets/service-development.jpg';

const SistemasGestion = () => {
  return (
    <ServicePageLayout
      title="Sistemas de Gestión"
      metaTitle="Sistemas ERP CRM SGC Calgary | RCW Innovation"
      metaDescription="Diseño e implementación de ERP/CRM/SGC con dashboards en tiempo real y automatización. Sistemas de gestión empresarial en Calgary."
      keywords="ERP Calgary, CRM Calgary, sistemas gestión Calgary, software empresarial Calgary, dashboards tiempo real, gestión empresarial Calgary"
      heroImage={serviceDevelopment}
      heroImageAlt="Sistemas de gestión ERP CRM en Calgary - RCW Innovation"
      tag="Operaciones"
      icon={Database}
      shortDescription="Diseño e implementación de ERP/CRM/SGC con dashboards en tiempo real y automatización para controlar cada aspecto de tu negocio."
      longDescription="Implementamos sistemas de gestión empresarial que centralizan todas tus operaciones en una única plataforma inteligente. Desde la gestión de clientes (CRM) hasta la planificación de recursos (ERP), diseñamos soluciones que estandarizan procesos, proporcionan datos en tiempo real y escalan de manera controlada junto con tu negocio."
      features={[
        {
          title: 'Dashboards en Tiempo Real',
          description: 'Visualiza métricas clave de tu negocio al instante con paneles interactivos y actualizados.',
          icon: LayoutDashboard,
        },
        {
          title: 'Gestión de Clientes (CRM)',
          description: 'Centraliza toda la información de tus clientes, historial de interacciones y oportunidades de venta.',
          icon: Users,
        },
        {
          title: 'Permisos por Roles',
          description: 'Control granular de acceso para que cada miembro del equipo vea solo lo que necesita.',
          icon: Shield,
        },
        {
          title: 'Automatización de Procesos',
          description: 'Flujos de trabajo automáticos que eliminan tareas manuales y reducen errores.',
          icon: Workflow,
        },
        {
          title: 'Reportes y Analíticas',
          description: 'Generación automática de reportes personalizados para toma de decisiones informadas.',
          icon: BarChart3,
        },
        {
          title: 'Integración Completa',
          description: 'Conexión con herramientas de facturación, inventario, marketing y más.',
          icon: Database,
        },
      ]}
      benefits={[
        'Procesos estandarizados en toda la organización',
        'Datos centralizados en tiempo real',
        'Escalamiento controlado sin perder eficiencia',
        'Reducción significativa de errores manuales',
        'Visibilidad total del negocio en un solo lugar',
        'Toma de decisiones basada en datos',
        'Automatización de reportes recurrentes',
        'Capacitación completa para tu equipo',
      ]}
      processSteps={[
        {
          title: 'Diagnóstico Organizacional',
          description: 'Mapeamos tus procesos actuales, identificamos ineficiencias y definimos requerimientos.',
        },
        {
          title: 'Diseño del Sistema',
          description: 'Creamos la arquitectura del sistema, módulos, flujos de trabajo y estructura de datos.',
        },
        {
          title: 'Configuración y Desarrollo',
          description: 'Implementamos y personalizamos el sistema según tus necesidades específicas.',
        },
        {
          title: 'Migración de Datos',
          description: 'Transferimos tu información existente al nuevo sistema de forma segura y organizada.',
        },
        {
          title: 'Capacitación y Soporte',
          description: 'Entrenamos a tu equipo y proporcionamos soporte continuo post-implementación.',
        },
      ]}
      faqs={[
        {
          question: '¿Pueden implementar sistemas como Odoo, Zoho o desarrollar uno a medida?',
          answer: 'Sí, trabajamos con plataformas establecidas como Odoo, Zoho, HubSpot y también desarrollamos sistemas completamente a medida según tus necesidades.',
        },
        {
          question: '¿Cuánto tiempo toma implementar un ERP/CRM?',
          answer: 'Una implementación básica puede estar lista en 4-6 semanas. Proyectos más complejos con múltiples módulos y personalizaciones toman 8-12 semanas.',
        },
        {
          question: '¿Pueden migrar datos de mi sistema actual?',
          answer: 'Sí, realizamos migraciones completas de datos desde Excel, sistemas legacy, otros CRMs o cualquier fuente de datos estructurada.',
        },
        {
          question: '¿El sistema funciona en la nube o en mis servidores?',
          answer: 'Ofrecemos ambas opciones. La mayoría de clientes prefieren soluciones en la nube por su escalabilidad y menor costo de mantenimiento.',
        },
        {
          question: '¿Incluyen capacitación para mi equipo?',
          answer: 'Sí, incluimos sesiones de capacitación completas, manuales de usuario y videos tutoriales para asegurar la adopción exitosa del sistema.',
        },
      ]}
      relatedServices={[
        { title: 'Automatizaciones con IA', href: '/servicios/automatizaciones-ia', icon: Bot },
        { title: 'Software a Medida', href: '/servicios/software-medida', icon: Code2 },
        { title: 'Creación de Agentes IA', href: '/servicios/agentes-ia', icon: Brain },
      ]}
    />
  );
};

export default SistemasGestion;