import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Code2, 
  Share2, 
  Bot, 
  Brain, 
  Database, 
  CreditCard, 
  Globe, 
  GraduationCap,
  CheckCircle, 
  Calendar, 
  Zap,
  ExternalLink
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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
    fullDescription: 'Creamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades de tu negocio. Desde MVPs hasta plataformas empresariales completas.',
    benefits: [
      'Escalabilidad garantizada',
      'Seguridad de nivel empresarial',
      'Experiencia de usuario optimizada',
      'Código limpio y documentado',
      'Integraciones con sistemas existentes',
      'Soporte y mantenimiento continuo'
    ],
  },
  {
    icon: Share2,
    title: 'Branding y Redes Sociales',
    tag: 'Estrategia',
    description: 'Construcción de identidad visual y contenidos de alto impacto. Combinamos marketing orgánico y de pago.',
    features: ['Identidad visual', 'Marketing orgánico', 'Campañas de pago'],
    image: serviceLandingPage,
    imageAlt: 'Branding y marketing en redes sociales Calgary',
    fullDescription: 'Desarrollamos tu marca desde cero o la potenciamos con estrategias de contenido y publicidad que generan resultados medibles.',
    benefits: [
      'Posicionamiento de marca sólido',
      'Mayor conversión y fidelización',
      'Guías de estilo completas',
      'Estrategia de contenido',
      'Gestión de redes sociales',
      'Campañas publicitarias optimizadas'
    ],
  },
  {
    icon: Bot,
    title: 'Automatizaciones con IA',
    tag: 'Operación',
    description: 'Workflows inteligentes para atención, ventas y operaciones, integrados con CRM/ERP.',
    features: ['Workflows inteligentes', 'Integración CRM/ERP', 'Atención 24/7'],
    image: serviceSeo,
    imageAlt: 'Automatización con inteligencia artificial Calgary',
    fullDescription: 'Implementamos flujos de trabajo automatizados que reducen costos operativos y mejoran la experiencia del cliente con atención disponible las 24 horas.',
    benefits: [
      'Atención 24/7 sin fricciones',
      'Reducción significativa de costos',
      'Visibilidad total de operaciones',
      'Integración con sistemas existentes',
      'Escalabilidad automática',
      'Reportes y analíticas en tiempo real'
    ],
  },
  {
    icon: Brain,
    title: 'Creación de Agentes IA',
    tag: 'Inteligencia',
    description: 'Desarrollo de agentes conversacionales y de back-end que aprenden de tus datos empresariales.',
    features: ['Agentes conversacionales', 'Aprendizaje continuo', 'Integración backend'],
    image: serviceCorporate,
    imageAlt: 'Desarrollo de agentes de inteligencia artificial Calgary',
    fullDescription: 'Creamos agentes de IA personalizados que entienden tu negocio, responden preguntas y automatizan tareas complejas.',
    benefits: [
      'Respuesta instantánea a consultas',
      'Integración total con tus sistemas',
      'Mejora continua con machine learning',
      'Personalización total',
      'Escalable según demanda',
      'Analytics de conversaciones'
    ],
  },
  {
    icon: Database,
    title: 'Sistemas de Gestión',
    tag: 'Operaciones',
    description: 'Diseño e implementación de ERP/CRM/SGC con dashboards y automatización.',
    features: ['ERP/CRM personalizado', 'Dashboards en tiempo real', 'Automatización'],
    image: serviceDevelopment,
    imageAlt: 'Sistemas de gestión ERP CRM Calgary',
    fullDescription: 'Implementamos sistemas de gestión empresarial que centralizan tus operaciones y te dan control total sobre tu negocio.',
    benefits: [
      'Procesos estandarizados',
      'Datos en tiempo real',
      'Escalamiento controlado',
      'Permisos por roles',
      'Integración con herramientas existentes',
      'Capacitación incluida'
    ],
  },
  {
    icon: CreditCard,
    title: 'Tarjeta Digital Profesional',
    tag: 'Smart',
    description: 'Tarjeta digital con QR/NFC, vCard y analíticas para networking profesional.',
    features: ['QR/NFC integrado', 'vCard automática', 'Analytics de contactos'],
    image: serviceLandingPage,
    imageAlt: 'Tarjeta digital profesional NFC Calgary',
    fullDescription: 'Moderniza tu networking con tarjetas digitales que impresionan y te permiten hacer seguimiento de cada contacto.',
    benefits: [
      'Compartir con un toque',
      'Seguimiento analítico de contactos',
      'Diseño 100% personalizable',
      'Actualización en tiempo real',
      'Compatible con todos los dispositivos',
      'Integración con CRM'
    ],
  },
  {
    icon: Globe,
    title: 'Diseño Web – App Móvil',
    tag: 'Web Pro',
    description: 'Sitios orientados a conversión con SEO técnico, e-commerce y apps PWA.',
    features: ['SEO desde arquitectura', 'E-commerce seguro', 'Apps móviles/PWA'],
    image: serviceWebDesign,
    imageAlt: 'Diseño web y aplicaciones móviles Calgary',
    fullDescription: 'Creamos presencias digitales que convierten visitantes en clientes, con tecnología de punta y optimización para buscadores.',
    benefits: [
      'SEO técnico desde la arquitectura',
      'E-commerce seguro y escalable',
      'Progressive Web Apps (PWA)',
      'Diseño responsive premium',
      'Velocidad de carga optimizada',
      'Analíticas integradas'
    ],
    isLink: true,
    linkTo: '/',
  },
  {
    icon: GraduationCap,
    title: 'Mentoría & Capacitación',
    tag: 'Upskilling',
    description: 'Programas 1:1 y para equipos sobre IA, productividad, automatización, UX y analítica.',
    features: ['Planes personalizados', 'Workshops prácticos', 'Seguimiento continuo'],
    image: serviceMobile,
    imageAlt: 'Mentoría y capacitación empresarial Calgary',
    fullDescription: 'Capacitamos a tu equipo en las últimas tecnologías y metodologías para que puedan aprovechar al máximo las herramientas digitales.',
    benefits: [
      'Planes 100% personalizados',
      'Workshops prácticos con casos reales',
      'Seguimiento y soporte post-capacitación',
      'Certificación incluida',
      'Material de apoyo digital',
      'Sesiones grabadas disponibles'
    ],
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
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.isLink) {
      // If it's the web design service, it already links to current page
      // In future, this could navigate to a dedicated page
      setSelectedService(service);
    } else {
      setSelectedService(service);
    }
  };

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
              onClick={() => handleServiceClick(service)}
            >
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
                  {service.isLink ? (
                    <>
                      Ver página <ExternalLink className="w-3 h-3" />
                    </>
                  ) : (
                    'Asesoría 5.0 →'
                  )}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)} modal>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-card border-border p-0 sm:p-6">
          {selectedService && (
            <>
              <DialogHeader className="p-4 sm:p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <selectedService.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-2">
                      {selectedService.tag}
                    </span>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <div className="px-4 sm:px-0">
                <div className="space-y-4 sm:space-y-6">
                  {/* Full Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {selectedService.fullDescription}
                  </p>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Beneficios clave</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Pills */}
                  <div className="flex flex-wrap gap-2">
                    {selectedService.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-border pb-4 sm:pb-0">
                    <Button 
                      onClick={() => {
                        setSelectedService(null);
                        onOpenConsultation();
                      }}
                      className="w-full btn-gold gap-2 text-sm sm:text-base py-5 sm:py-6"
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      Asesoría 5.0
                    </Button>
                    <Button 
                      onClick={() => {
                        setSelectedService(null);
                        onOpenDiagnostic();
                      }}
                      variant="outline"
                      className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base py-5 sm:py-6"
                    >
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                      Consultoría 5.0
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};