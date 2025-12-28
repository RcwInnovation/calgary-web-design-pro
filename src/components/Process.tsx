import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Lightbulb, Palette, Code2, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consulta Inicial',
    description: 'Analizamos tus necesidades, objetivos y visión para tu proyecto.',
  },
  {
    icon: Lightbulb,
    title: 'Estrategia',
    description: 'Desarrollamos un plan personalizado con estructura y funcionalidades.',
  },
  {
    icon: Palette,
    title: 'Diseño',
    description: 'Creamos mockups y prototipos para tu aprobación antes de desarrollar.',
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description: 'Construimos tu sitio con código limpio y las mejores tecnologías.',
  },
  {
    icon: Rocket,
    title: 'Lanzamiento',
    description: 'Publicamos tu sitio optimizado y te capacitamos para usarlo.',
  },
  {
    icon: HeartHandshake,
    title: 'Soporte',
    description: 'Te acompañamos con mantenimiento y actualizaciones continuas.',
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="proceso" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Cómo trabajamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Nuestro proceso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un proceso transparente y eficiente para llevar tu proyecto desde la idea hasta el éxito.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-card border-2 border-primary flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                {/* Step Number Badge */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-20">
                  {index + 1}
                </span>

                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
