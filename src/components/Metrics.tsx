import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Zap, DollarSign, Server } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '+45%',
    label: 'Eficiencia Operativa',
    description: 'Mejora promedio en procesos automatizados',
  },
  {
    icon: Zap,
    value: '3.2x',
    label: 'Mejora en Conversión',
    description: 'Incremento en tasas de conversión',
  },
  {
    icon: DollarSign,
    value: '-35%',
    label: 'Reducción de Costos',
    description: 'Ahorro gracias a automatización',
  },
  {
    icon: Server,
    value: '99.9%',
    label: 'Disponibilidad',
    description: 'Uptime en nuestras plataformas',
  },
];

export const Metrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Resultados comprobados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Beneficios medibles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Métricas de referencia típicas de nuestros proyectos que demuestran el impacto real en los negocios.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-2xl text-center group hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <metric.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};