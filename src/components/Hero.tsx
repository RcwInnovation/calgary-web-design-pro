import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Lightbulb, Target, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onOpenConsultation: () => void;
}

export const Hero = ({ onOpenDiagnostic, onOpenConsultation }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Innovación, Ingeniería y Automatización 5.0
            </span>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            Impulsamos la innovación, el{' '}
            <span className="text-gradient-blue">diseño web</span>
            {' '}y la automatización inteligente en Calgary
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Diseñamos soluciones de ingeniería, IA y automatización 5.0 para transformar tus procesos 
            en resultados y potenciar la innovación empresarial en Calgary, Alberta y Canadá.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={onOpenConsultation}
              className="btn-gold flex items-center gap-2 text-lg"
            >
              Solicitar Asesoría
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenDiagnostic}
              className="btn-glass flex items-center gap-2"
            >
              <Zap className="w-5 h-5 text-primary" />
              Consultoría 5.0
            </button>
          </motion.div>

          {/* Value Proposition Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="glass p-6 rounded-2xl text-left hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Innovación</h3>
              <p className="text-sm text-muted-foreground">
                Tecnología de vanguardia, arquitecturas modernas y agentes de IA que aprenden de tus datos.
              </p>
            </div>
            
            <div className="glass p-6 rounded-2xl text-left hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Estrategia</h3>
              <p className="text-sm text-muted-foreground">
                Detectamos oportunidades, creamos roadmaps accionables y maximizamos tu retorno de inversión.
              </p>
            </div>
            
            <div className="glass p-6 rounded-2xl text-left hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Resultados</h3>
              <p className="text-sm text-muted-foreground">
                KPIs claros, optimización continua y entregables que impactan ventas, procesos y experiencia.
              </p>
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