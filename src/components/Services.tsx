import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Rocket, Building2, Globe, Code, Smartphone } from 'lucide-react';

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
  },
  {
    icon: Rocket,
    title: 'Landing Pages de Alta Conversión',
    description: 'Diseño de landing pages optimizadas para maximizar tus conversiones y generar más leads para tu negocio en Calgary.',
    features: ['A/B Testing', 'CTA Optimizados', 'Velocidad máxima'],
    image: serviceLandingPage,
  },
  {
    icon: Building2,
    title: 'Sitios Web Corporativos',
    description: 'Desarrollamos sitios web corporativos profesionales que transmiten confianza y profesionalismo a tus clientes.',
    features: ['Multi-página', 'CMS Integrado', 'SEO Incluido'],
    image: serviceCorporate,
  },
  {
    icon: Globe,
    title: 'SEO y Posicionamiento',
    description: 'Optimización para buscadores que te ayudará a aparecer en los primeros resultados de Google en Calgary.',
    features: ['SEO On-page', 'Velocidad web', 'Schema Markup'],
    image: serviceSeo,
  },
  {
    icon: Code,
    title: 'Desarrollo a Medida',
    description: 'Soluciones personalizadas con las últimas tecnologías para necesidades específicas de tu negocio.',
    features: ['React/Next.js', 'APIs Integradas', 'Escalabilidad'],
    image: serviceDevelopment,
  },
  {
    icon: Smartphone,
    title: 'Diseño Mobile-First',
    description: 'Diseños optimizados primero para móvil, garantizando una experiencia perfecta en todos los dispositivos.',
    features: ['Responsive', 'Touch-friendly', 'PWA Ready'],
    image: serviceMobile,
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
