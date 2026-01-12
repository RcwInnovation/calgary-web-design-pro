import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Share2, 
  Bot, 
  Brain, 
  Database, 
  CreditCard, 
  Globe, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

import serviceSoftwareCustom from '@/assets/service-software-custom.jpg';
import serviceBrandingSocial from '@/assets/service-branding-social.jpg';
import serviceAutomationAi from '@/assets/service-automation-ai.jpg';
import serviceAgentsAi from '@/assets/service-agents-ai.jpg';
import serviceErpSystems from '@/assets/service-erp-systems.jpg';
import serviceDigitalCard from '@/assets/service-digital-card.jpg';
import serviceWebAppDesign from '@/assets/service-web-app-design.jpg';
import serviceMentoringTraining from '@/assets/service-mentoring-training.jpg';

const services = [
  {
    icon: Code2,
    title: 'Diseño de Software a la Medida',
    tag: 'Premium',
    description: 'Desarrollo de MVPs y plataformas escalables con arquitecturas modulares, APIs seguras y dashboards intuitivos.',
    features: ['Arquitecturas modulares', 'APIs seguras', 'Dashboards intuitivos'],
    image: serviceSoftwareCustom,
    imageAlt: 'Desarrollo de software a medida premium en Calgary - Equipo de desarrolladores creando plataformas escalables y MVPs con tecnología de vanguardia',
    href: '/diseno-software-medida-premium-calgary',
  },
  {
    icon: Share2,
    title: 'Branding y Redes Sociales',
    tag: 'Estrategia',
    description: 'Construcción de identidad visual y contenidos de alto impacto. Combinamos marketing orgánico y de pago.',
    features: ['Identidad visual', 'Marketing orgánico', 'Campañas de pago'],
    image: serviceBrandingSocial,
    imageAlt: 'Branding y estrategia de redes sociales en Calgary - Diseño de identidad visual y marketing digital para negocios latinos',
    href: '/branding-estrategia-redes-sociales-calgary',
  },
  {
    icon: Bot,
    title: 'Automatizaciones con IA',
    tag: 'Operación',
    description: 'Workflows inteligentes para atención, ventas y operaciones, integrados con CRM/ERP.',
    features: ['Workflows inteligentes', 'Integración CRM/ERP', 'Atención 24/7'],
    image: serviceAutomationAi,
    imageAlt: 'Automatización de procesos con inteligencia artificial en Calgary - Workflows inteligentes y robots que optimizan operaciones empresariales',
    href: '/automatizaciones-ia-operaciones-calgary',
  },
  {
    icon: Brain,
    title: 'Creación de Agentes IA',
    tag: 'Inteligencia',
    description: 'Desarrollo de agentes conversacionales y de back-end que aprenden de tus datos empresariales.',
    features: ['Agentes conversacionales', 'Aprendizaje continuo', 'Integración backend'],
    image: serviceAgentsAi,
    imageAlt: 'Desarrollo de agentes de inteligencia artificial y chatbots en Calgary - Asistentes virtuales conversacionales para atención al cliente 24/7',
    href: '/creacion-agentes-ia-inteligencia-calgary',
  },
  {
    icon: Database,
    title: 'Sistemas de Gestión',
    tag: 'Operaciones',
    description: 'Diseño e implementación de ERP/CRM/SGC con dashboards y automatización.',
    features: ['ERP/CRM personalizado', 'Dashboards en tiempo real', 'Automatización'],
    image: serviceErpSystems,
    imageAlt: 'Sistemas de gestión ERP y CRM en Calgary - Dashboards en tiempo real y analíticas empresariales para toma de decisiones',
    href: '/sistemas-gestion-operaciones-calgary',
  },
  {
    icon: CreditCard,
    title: 'Tarjeta Digital Profesional',
    tag: 'Smart',
    description: 'Tarjeta digital con QR/NFC, vCard y analíticas para networking profesional.',
    features: ['QR/NFC integrado', 'vCard automática', 'Analytics de contactos'],
    image: serviceDigitalCard,
    imageAlt: 'Tarjeta digital profesional con QR y NFC en Calgary - Networking moderno con tarjeta de metal premium y código QR inteligente',
    href: '/tarjeta-digital-profesional-calgary',
  },
  {
    icon: Globe,
    title: 'Diseño Web – App Móvil',
    tag: 'Web Pro',
    description: 'Sitios orientados a conversión con SEO técnico, e-commerce y apps PWA.',
    features: ['SEO desde arquitectura', 'E-commerce seguro', 'Apps móviles/PWA'],
    image: serviceWebAppDesign,
    imageAlt: 'Diseño web profesional y aplicaciones móviles en Calgary - Desarrollo de sitios responsivos y apps PWA con UX/UI moderno',
    href: '/diseno-web-app-movil-calgary',
  },
  {
    icon: GraduationCap,
    title: 'Mentoría & Capacitación',
    tag: 'Upskilling',
    description: 'Programas 1:1 y para equipos sobre IA, productividad, automatización, UX y analítica.',
    features: ['Planes personalizados', 'Workshops prácticos', 'Seguimiento continuo'],
    image: serviceMentoringTraining,
    imageAlt: 'Mentoría y capacitación empresarial en Calgary - Talleres de innovación digital y formación de equipos en tecnología e IA',
    href: '/mentoria-capacitacion-digital-calgary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface ServicesProps {
  onOpenConsultation: () => void;
  onOpenDiagnostic: () => void;
}

export const Services = ({ onOpenConsultation, onOpenDiagnostic }: ServicesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Servicios principales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Soluciones que impulsan tu negocio
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Ofrecemos ocho categorías de servicio especializadas, cada una diseñada para 
            maximizar el impacto en tu negocio con tecnología de vanguardia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="card-premium group cursor-pointer overflow-hidden"
            >
              <Link to={service.href} className="block h-full">
                {/* Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Click indicator */}
                <div className="pt-4 border-t border-border/50">
                  <span className="text-sm text-primary group-hover:underline flex items-center gap-1">
                    Ver más detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
