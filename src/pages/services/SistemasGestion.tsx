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
      title="Sistemas de gestión de operaciones en Calgary con estándares ISO y enfoque HSEQ"
      metaTitle="Sistemas de Gestión y ERP con ISO y HSEQ en Calgary | RCW Innovation"
      metaDescription="Implementamos ERPs integrados con estándares ISO (9001, 14001, 45001) y enfoque HSEQ en Calgary. Controla y optimiza tu empresa."
      keywords="sistemas gestión Calgary, ERP Calgary, CRM Calgary, ISO 9001 Calgary, ISO 14001 Calgary, ISO 45001 Calgary, HSEQ Calgary, software empresarial Calgary"
      canonicalUrl="https://www.rcwinnovation.com/sistemas-gestion-operaciones-calgary"
      heroImage={serviceErpSystems}
      heroImageAlt="Sistemas de gestión ERP y CRM en Calgary - Dashboard empresarial con analíticas en tiempo real, gráficas y métricas de rendimiento"
      tag="Operaciones"
      icon={Database}
      shortDescription="Diseño e implementación de ERP/CRM/SGC con dashboards en tiempo real y automatización para controlar cada aspecto de tu negocio."
      problemTitle="Problema: procesos desorganizados y riesgos en calidad"
      problemDescription="Procesos desorganizados, datos dispersos y riesgos en calidad y seguridad. Sin datos centralizados, tomar decisiones estratégicas se convierte en un ejercicio de adivinación."
      solutionTitle="Solución: ERP alineado a ISO y HSEQ"
      solutionDescription="RCW analiza tu operación y diseña un ERP alineado a ISO 9001 (Calidad), ISO 14001 (Medio Ambiente), ISO 45001 (Seguridad y Salud), integrando los principios HSEQ (Health, Safety, Environment, Quality)."
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
      benefitsTitle="Beneficios de un sistema integrado con ISO/HSEQ"
      benefits={[
        'Visibilidad total y control de procesos',
        'Mejora en calidad, seguridad y ambiente (HSEQ)',
        'Reducción de errores y cumplimiento normativo',
        'Datos centralizados para tomar decisiones',
        'Procesos estandarizados según normas ISO',
        'Reducción de riesgos operacionales',
        'Automatización de reportes de cumplimiento',
        'Capacitación completa para tu equipo',
      ]}
      ctaText="Solicitar consultoría en sistemas de gestión e ISO/HSEQ"
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
