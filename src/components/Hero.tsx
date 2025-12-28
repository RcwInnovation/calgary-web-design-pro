import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export const Hero = ({ onOpenDiagnostic }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Expertos en diseño web para hispanos en Calgary
            </span>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            Diseño y desarrollo de{' '}
            <span className="text-gradient-blue">páginas web</span>
            {' '}en Calgary
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Creamos páginas web, landing pages y sitios corporativos que convierten visitantes en clientes. 
            Diseño innovador, soporte local y resultados profesionales en español.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#contacto" className="btn-gold flex items-center gap-2 text-lg">
              Agenda tu asesoría estratégica
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenDiagnostic}
              className="btn-glass flex items-center gap-2"
            >
              <Zap className="w-5 h-5 text-primary" />
              Generar Diagnóstico 5.0
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>100% Satisfacción garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span>Diseño premium incluido</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Entrega en 2-4 semanas</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
