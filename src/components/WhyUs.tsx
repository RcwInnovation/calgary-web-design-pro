import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Clock, MessageSquare, Star, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Atención en Español',
    description: 'Comunicación clara y directa en tu idioma. Sin barreras, sin malentendidos.',
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Diseños de alta gama que compiten con las mejores agencias del mercado.',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Proyectos entregados en 2-4 semanas sin sacrificar calidad.',
  },
  {
    icon: MessageSquare,
    title: 'Soporte Local',
    description: 'Estamos en Calgary, listos para reunirnos contigo cuando lo necesites.',
  },
  {
    icon: Star,
    title: 'Experiencia Comprobada',
    description: 'Más de 50 proyectos exitosos para empresas hispanas en Alberta.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Medibles',
    description: 'Enfocados en generar leads y conversiones reales para tu negocio.',
  },
];

const testimonials = [
  {
    name: 'María García',
    company: 'Restaurante El Sol',
    text: 'RCW Innovation transformó nuestra presencia online. Ahora recibimos el doble de reservas.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    company: 'CM Construcciones',
    text: 'Profesionales, puntuales y excelente comunicación. Nuestra web genera leads cada semana.',
    rating: 5,
  },
  {
    name: 'Ana Torres',
    company: 'Torres Legal Services',
    text: 'El mejor equipo de diseño web en Calgary. Atención personalizada y resultados increíbles.',
    rating: 5,
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="por-que-nosotros" className="section relative overflow-hidden bg-card/30">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Nuestra diferencia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            ¿Por qué elegirnos en Calgary?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Somos la agencia de diseño web de confianza para la comunidad hispana en Calgary.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-border/30 bg-card/50 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Lo que dicen nuestros clientes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card-premium"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="font-semibold block">{testimonial.name}</span>
                    <span className="text-sm text-muted-foreground">{testimonial.company}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
