import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Lightbulb, Target, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onOpenConsultation: () => void;
}

// Text animation variants
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  }),
};

const glowAnimation = {
  animate: {
    textShadow: [
      '0 0 20px rgba(212, 175, 55, 0)',
      '0 0 40px rgba(212, 175, 55, 0.3)',
      '0 0 60px rgba(212, 175, 55, 0.5)',
      '0 0 40px rgba(212, 175, 55, 0.3)',
      '0 0 20px rgba(212, 175, 55, 0)',
    ],
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const Hero = ({ onOpenDiagnostic, onOpenConsultation }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      {/* Floating orbs with animation */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Particle effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-sm text-muted-foreground relative z-10">
              Innovación, Ingeniería y Automatización 5.0
            </span>
          </motion.div>

          {/* H1 Title with staggered word animation */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            {['Impulsamos', 'la', 'innovación,', 'el'].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + i * 0.08,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="text-gradient-gold inline-block relative mr-[0.25em]"
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0,
                ...glowAnimation.animate 
              }}
              transition={{ 
                opacity: { delay: 0.5, duration: 0.5 },
                scale: { delay: 0.5, duration: 0.6, type: 'spring', stiffness: 100 },
                y: { delay: 0.5, duration: 0.5 },
                textShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              diseño web
              <motion.span
                className="absolute -inset-2 bg-accent/10 rounded-lg blur-xl -z-10"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
            {['y', 'la', 'automatización', 'inteligente', 'en', 'Calgary'].map((word, i) => (
              <motion.span
                key={`p2-${i}`}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + i * 0.08,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                {word}
              </motion.span>
            ))}
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