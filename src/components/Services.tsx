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

import serviceWebDesign from '@/assets/service-web-design.jpg';
import serviceLandingPage from '@/assets/service-landing-page.jpg';
import serviceCorporate from '@/assets/service-corporate.jpg';
import serviceSeo from '@/assets/service-seo.jpg';
import serviceDevelopment from '@/assets/service-development.jpg';
import serviceMobile from '@/assets/service-mobile.jpg';

const services = [
  {
    icon: Code2,
    title: 'Diseño de Software a la Medida',
    tag: 'Premium',
    description: 'Desarrollo de MVPs y plataformas escalables con arquitecturas modulares, APIs seguras y dashboards intuitivos.',
    features: ['Arquitecturas modulares', 'APIs seguras', 'Dashboards intuitivos'],
    image: serviceDevelopment,
    imageAlt: 'Desarrollo de software a medida en Calgary - plataformas escalables y MVPs',
    href: '/servicios/software-medida',
  },
  {
    icon: Share2,
    title: 'Branding y Redes Sociales',
    tag: 'Estrategia',
    description: 'Construcción de identidad visual y contenidos de alto impacto. Combinamos marketing orgánico y de pago.',
    features: ['Identidad visual', 'Marketing orgánico', 'Campañas de pago'],
    image: serviceLandingPage,
    imageAlt: 'Branding y marketing en redes sociales Calgary',
    href: '/servicios/branding-redes',
  },
  {
    icon: Bot,
    title: 'Automatizaciones con IA',
    tag: 'Operación',
    description: 'Workflows inteligentes para atención, ventas y operaciones, integrados con CRM/ERP.',
    features: ['Workflows inteligentes', 'Integración CRM/ERP', 'Atención 24/7'],
    image: serviceSeo,
    imageAlt: 'Automatización con inteligencia artificial Calgary',
    href: '/servicios/automatizaciones-ia',
  },
  {
    icon: Brain,
    title: 'Creación de Agentes IA',
    tag: 'Inteligencia',
    description: 'Desarrollo de agentes conversacionales y de back-end que aprenden de tus datos empresariales.',
    features: ['Agentes conversacionales', 'Aprendizaje continuo', 'Integración backend'],
    image: serviceCorporate,
    imageAlt: 'Desarrollo de agentes de inteligencia artificial Calgary',
    href: '/servicios/agentes-ia',
  },
  {
    icon: Database,
    title: 'Sistemas de Gestión',
    tag: 'Operaciones',
    description: 'Diseño e implementación de ERP/CRM/SGC con dashboards y automatización.',
    features: ['ERP/CRM personalizado', 'Dashboards en tiempo real', 'Automatización'],
    image: serviceDevelopment,
    imageAlt: 'Sistemas de gestión ERP CRM Calgary',
    href: '/servicios/sistemas-gestion',
  },
  {
    icon: CreditCard,
    title: 'Tarjeta Digital Profesional',
    tag: 'Smart',
    description: 'Tarjeta digital con QR/NFC, vCard y analíticas para networking profesional.',
    features: ['QR/NFC integrado', 'vCard automática', 'Analytics de contactos'],
    image: serviceLandingPage,
    imageAlt: 'Tarjeta digital profesional NFC Calgary',
    href: '/servicios/tarjeta-digital',
  },
  {
    icon: Globe,
    title: 'Diseño Web – App Móvil',
    tag: 'Web Pro',
    description: 'Sitios orientados a conversión con SEO técnico, e-commerce y apps PWA.',
    features: ['SEO desde arquitectura', 'E-commerce seguro', 'Apps móviles/PWA'],
    image: serviceWebDesign,
    imageAlt: 'Diseño web y aplicaciones móviles Calgary',
    href: '/servicios/diseno-web-app',
  },
  {
    icon: GraduationCap,
    title: 'Mentoría & Capacitación',
    tag: 'Upskilling',
    description: 'Programas 1:1 y para equipos sobre IA, productividad, automatización, UX y analítica.',
    features: ['Planes personalizados', 'Workshops prácticos', 'Seguimiento continuo'],
    image: serviceMobile,
    imageAlt: 'Mentoría y capacitación empresarial Calgary',
    href: '/servicios/mentoria-capacitacion',
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