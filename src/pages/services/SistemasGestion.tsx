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
  Brain,
  Award,
  Leaf,
  HardHat
} from 'lucide-react';
import { motion } from 'framer-motion';
import serviceErpSystems from '@/assets/service-erp-systems.jpg';

const isoStandards = [
  {
    icon: Award,
    title: 'ISO 9001',
    subtitle: 'Sistema de Gestión de Calidad',
    description: 'Mejora continua de procesos y satisfacción del cliente mediante estándares de calidad reconocidos internacionalmente.',
    color: 'primary',
  },
  {
    icon: Leaf,
    title: 'ISO 14001',
    subtitle: 'Sistema de Gestión Ambiental',
    description: 'Minimiza el impacto ambiental de tu operación y cumple con regulaciones medioambientales.',
    color: 'accent',
  },
  {
    icon: HardHat,
    title: 'ISO 45001',
    subtitle: 'Seguridad y Salud Ocupacional',
    description: 'Protege a tus colaboradores con un sistema de gestión de seguridad y salud en el trabajo.',
    color: 'primary',
  },
];

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
      customSection={
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Estándares Internacionales
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Normas ISO que implementamos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Alineamos tu sistema de gestión con los estándares internacionales más reconocidos para garantizar calidad, seguridad y sostenibilidad.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {isoStandards.map((standard, index) => (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${standard.color}/20 to-${standard.color}/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                  <div className={`relative bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-${standard.color}/20 h-full hover:border-${standard.color}/40 transition-all duration-300`}>
                    <div className={`w-16 h-16 bg-${standard.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${standard.color}/20 transition-colors`}>
                      <standard.icon className={`w-8 h-8 text-${standard.color}`} />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-primary">{standard.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground">{standard.subtitle}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* HSEQ Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20">
                <Shield className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h4 className="font-bold text-lg">Enfoque HSEQ Integrado</h4>
                  <p className="text-sm text-muted-foreground">Health, Safety, Environment & Quality</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      }
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
