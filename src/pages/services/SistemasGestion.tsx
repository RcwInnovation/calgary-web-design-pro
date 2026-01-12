import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Database, 
  LayoutDashboard, 
  Users, 
  Shield, 
  TrendingUp, 
  BarChart3,
  Bot,
  Code2,
  Brain
} from 'lucide-react';
import serviceErpSystems from '@/assets/service-erp-systems.jpg';

const SistemasGestion = () => {
  return (
    <ServicePageLayout
      title="Sistemas de gestión de operaciones para empresas en Calgary"
      metaTitle="Sistemas de Gestión de Operaciones y ERP en Calgary | RCW Innovation"
      metaDescription="Implementamos sistemas de gestión y ERPs a medida en Calgary, integrando procesos y datos para aumentar la productividad."
      keywords="sistemas gestión Calgary, ERP Calgary, CRM Calgary, software empresarial Calgary, dashboards tiempo real, gestión empresarial Calgary"
      canonicalUrl="https://www.rcwinnovation.com/sistemas-gestion-operaciones-calgary"
      heroImage={serviceErpSystems}
      heroImageAlt="Sistemas de gestión ERP y CRM en Calgary - Dashboard empresarial con analíticas en tiempo real, gráficas y métricas de rendimiento"
      tag="Operaciones"
      icon={Database}
      shortDescription="Diseño e implementación de ERP/CRM/SGC con dashboards en tiempo real y automatización para controlar cada aspecto de tu negocio."
      problemTitle="Problema: falta de visibilidad y control"
      problemDescription="Empresas con procesos dispersos tienen información duplicada, errores frecuentes y poca capacidad de análisis. Sin datos centralizados, tomar decisiones estratégicas se convierte en un ejercicio de adivinación."
      solutionTitle="Solución: un sistema integrado para todo tu negocio"
      solutionDescription="Analizamos tus procesos y configuramos o desarrollamos un ERP adaptado. Conectamos áreas de ventas, inventarios, finanzas y producción. Visibilizamos métricas en dashboards en tiempo real para tomar decisiones informadas."
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
          title: 'Escalabilidad Controlada',
          description: 'Sistemas que crecen contigo sin perder rendimiento ni organización.',
          icon: TrendingUp,
        },
        {
          title: 'Reportes Automatizados',
          description: 'Generación automática de reportes personalizados para análisis y toma de decisiones.',
          icon: BarChart3,
        },
        {
          title: 'Integración Completa',
          description: 'Conexión con herramientas de facturación, inventario, marketing y sistemas externos.',
          icon: Database,
        },
      ]}
      benefitsTitle="Beneficios de un sistema integrado"
      benefits={[
        'Datos centralizados y actualizados en tiempo real',
        'Mejora en la toma de decisiones basada en datos',
        'Reducción de errores manuales y duplicación',
        'Escalabilidad y personalización según tus necesidades',
        'Procesos estandarizados en toda la organización',
        'Visibilidad total del negocio en un solo lugar',
        'Automatización de reportes recurrentes',
        'Capacitación completa para tu equipo',
      ]}
      ctaText="Pide tu consultoría en sistemas de gestión empresariales"
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
