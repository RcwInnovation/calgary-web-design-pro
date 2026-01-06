import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, ShoppingCart, LayoutDashboard, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    icon: Bot,
    title: 'Suite de Automatización',
    description: 'Para atención y ventas, integrando CRM y agentes de IA.',
    result: '2.8×',
    resultLabel: 'velocidad de respuesta',
    tags: ['CRM', 'Agentes IA', 'Automatización'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Headless',
    description: 'Con SEO técnico y analítica avanzada para maximizar ventas orgánicas.',
    result: '+38%',
    resultLabel: 'ingresos orgánicos',
    tags: ['E-commerce', 'SEO', 'Analytics'],
  },
  {
    icon: LayoutDashboard,
    title: 'Plataforma de Gestión',
    description: 'Con dashboards en tiempo real y permisos por rol para control total.',
    result: '-31%',
    resultLabel: 'tiempos operativos',
    tags: ['Dashboard', 'ERP', 'Permisos'],
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="proyectos" className="section relative overflow-hidden">
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
            Casos de éxito
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Proyectos destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones reales que hemos implementado para empresas que buscaban resultados tangibles.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-strong p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Result */}
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-6">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold text-accent">{project.result}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{project.resultLabel}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};