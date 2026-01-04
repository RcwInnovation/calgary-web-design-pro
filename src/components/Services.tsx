import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Palette, Rocket, Building2, Globe, Code, Smartphone, X, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import serviceWebDesign from '@/assets/service-web-design.jpg';
import serviceLandingPage from '@/assets/service-landing-page.jpg';
import serviceCorporate from '@/assets/service-corporate.jpg';
import serviceSeo from '@/assets/service-seo.jpg';
import serviceDevelopment from '@/assets/service-development.jpg';
import serviceMobile from '@/assets/service-mobile.jpg';

const services = [
  {
    icon: Palette,
    title: 'Diseño Web Profesional',
    description: 'Creamos sitios web únicos y personalizados que reflejan la identidad de tu marca con un diseño moderno y atractivo.',
    features: ['UI/UX Premium', 'Responsive Design', 'Optimizado para conversión'],
    image: serviceWebDesign,
    fullDescription: 'Nuestro equipo de diseñadores expertos crea sitios web que no solo se ven increíbles, sino que también convierten visitantes en clientes. Utilizamos las últimas tendencias en diseño y tecnología para crear experiencias digitales memorables.',
    benefits: [
      'Diseño personalizado 100% único',
      'Interfaz intuitiva y fácil de navegar',
      'Optimizado para todos los dispositivos',
      'Tiempos de carga ultra rápidos',
      'Integración con herramientas de marketing',
      'Soporte técnico incluido'
    ],
  },
  {
    icon: Rocket,
    title: 'Landing Pages de Alta Conversión',
    description: 'Diseño de landing pages optimizadas para maximizar tus conversiones y generar más leads para tu negocio en Calgary.',
    features: ['A/B Testing', 'CTA Optimizados', 'Velocidad máxima'],
    image: serviceLandingPage,
    fullDescription: 'Las landing pages son esenciales para campañas de marketing efectivas. Diseñamos páginas enfocadas en un solo objetivo: convertir visitantes en leads o clientes, con copy persuasivo y diseño estratégico.',
    benefits: [
      'Tasas de conversión superiores al promedio',
      'Diseño enfocado en la acción',
      'Copy persuasivo incluido',
      'Integración con CRM y email marketing',
      'Análisis y métricas de rendimiento',
      'Optimización continua'
    ],
  },
  {
    icon: Building2,
    title: 'Sitios Web Corporativos',
    description: 'Desarrollamos sitios web corporativos profesionales que transmiten confianza y profesionalismo a tus clientes.',
    features: ['Multi-página', 'CMS Integrado', 'SEO Incluido'],
    image: serviceCorporate,
    fullDescription: 'Tu sitio web corporativo es la cara digital de tu empresa. Creamos presencias online que reflejan el profesionalismo y los valores de tu marca, con todas las funcionalidades que necesitas para crecer.',
    benefits: [
      'Múltiples páginas y secciones',
      'Sistema de gestión de contenido fácil',
      'Blog integrado',
      'Formularios de contacto avanzados',
      'Galería de proyectos o productos',
      'Certificado SSL incluido'
    ],
  },
  {
    icon: Globe,
    title: 'SEO y Posicionamiento',
    description: 'Optimización para buscadores que te ayudará a aparecer en los primeros resultados de Google en Calgary.',
    features: ['SEO On-page', 'Velocidad web', 'Schema Markup'],
    image: serviceSeo,
    fullDescription: 'El SEO es fundamental para que tus clientes potenciales te encuentren. Implementamos estrategias de posicionamiento que aumentan tu visibilidad orgánica y te posicionan como líder en tu industria.',
    benefits: [
      'Auditoría SEO completa',
      'Optimización de palabras clave',
      'Mejora de velocidad de carga',
      'Schema Markup estructurado',
      'Estrategia de contenidos',
      'Reportes mensuales de rendimiento'
    ],
  },
  {
    icon: Code,
    title: 'Desarrollo a Medida',
    description: 'Soluciones personalizadas con las últimas tecnologías para necesidades específicas de tu negocio.',
    features: ['React/Next.js', 'APIs Integradas', 'Escalabilidad'],
    image: serviceDevelopment,
    fullDescription: 'Cuando necesitas algo más que un sitio web estándar, nuestro equipo de desarrollo crea soluciones a medida. Desde aplicaciones web hasta integraciones complejas, hacemos realidad tus ideas.',
    benefits: [
      'Código limpio y documentado',
      'Tecnologías modernas (React, Node.js)',
      'Integraciones con APIs externas',
      'Base de datos personalizada',
      'Panel de administración',
      'Mantenimiento y actualizaciones'
    ],
  },
  {
    icon: Smartphone,
    title: 'Diseño Mobile-First',
    description: 'Diseños optimizados primero para móvil, garantizando una experiencia perfecta en todos los dispositivos.',
    features: ['Responsive', 'Touch-friendly', 'PWA Ready'],
    image: serviceMobile,
    fullDescription: 'Más del 60% del tráfico web viene de dispositivos móviles. Nuestro enfoque mobile-first garantiza que tu sitio se vea y funcione perfectamente en cualquier pantalla.',
    benefits: [
      'Diseño responsive adaptativo',
      'Experiencia táctil optimizada',
      'Carga rápida en 4G/5G',
      'Compatible con PWA',
      'Menús y navegación móvil intuitiva',
      'Testing en múltiples dispositivos'
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

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleWhatsApp = (serviceTitle: string) => {
    const message = encodeURIComponent(`Hola, me interesa el servicio de ${serviceTitle}. ¿Podrían darme más información?`);
    window.open(`https://wa.me/15878961997?text=${message}`, '_blank');
  };

  const handleSchedule = () => {
    const message = encodeURIComponent(`Hola, me gustaría agendar una asesoría para conocer más sobre sus servicios.`);
    window.open(`https://wa.me/15878961997?text=${message}`, '_blank');
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
            Lo que hacemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Nuestros servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos soluciones completas de diseño y desarrollo web para empresas en Calgary 
            que buscan destacar en el mundo digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="card-premium group cursor-pointer overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              {/* Image */}
              <div className="relative h-40 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Click indicator */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-sm text-primary group-hover:underline">
                  Ver más detalles →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                      <selectedService.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Full Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">¿Qué incluye?</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <Button 
                    onClick={() => handleWhatsApp(selectedService.title)}
                    className="flex-1 btn-primary gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </Button>
                  <Button 
                    onClick={handleSchedule}
                    variant="outline"
                    className="flex-1 gap-2 border-accent text-accent hover:bg-accent hover:text-background"
                  >
                    <Calendar className="w-5 h-5" />
                    Agendar Asesoría
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
