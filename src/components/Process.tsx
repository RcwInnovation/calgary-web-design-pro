import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code2, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Descubrimiento',
    description: 'Definición de objetivos, audiencias y métricas. Diagnóstico de oportunidades.',
  },
  {
    icon: Palette,
    title: 'Diseño',
    description: 'UX/UI premium, arquitectura técnica y roadmap de entregas.',
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description: 'Implementación ágil con seguridad y pruebas automatizadas.',
  },
  {
    icon: Rocket,
    title: 'Implementación',
    description: 'Despliegue escalable, monitoreo y entrenamiento de equipos.',
  },
  {
    icon: TrendingUp,
    title: 'Optimización',
    description: 'Medición de KPIs e iteración para crecimiento sostenido.',
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
            Un proceso transparente y eficiente que garantiza resultados medibles en cada etapa.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
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