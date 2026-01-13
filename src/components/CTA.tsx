import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Zap, Phone, Mail, MapPin } from 'lucide-react';

interface CTAProps {
  onOpenDiagnostic: () => void;
}

export const CTA = ({ onOpenDiagnostic }: CTAProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Empieza hoy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Agenda tu asesoría estratégica
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Da el primer paso hacia una presencia digital profesional. Agenda una consulta 
              y descubre cómo podemos ayudarte a crecer tu negocio en Calgary.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+15878961997"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+1 (587) 896-1997</span>
              </a>
              <a
                href="mailto:info@rcwinnovation.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>info@rcwinnovation.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Calgary, Alberta, Canadá</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/15878961997?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20estrat%C3%A9gica%20para%20mi%20sitio%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2"
              >
                Agenda tu asesoría estratégica
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={onOpenDiagnostic}
                className="btn-glass flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 text-primary" />
                Generar Diagnóstico 5.0
              </button>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold mb-6">¿Qué incluye el diagnóstico?</h3>
            <ul className="space-y-4">
              {[
                'Análisis de tu situación actual online',
                'Revisión de tu competencia en Calgary',
                'Recomendaciones personalizadas',
                'Presupuesto sin compromiso',
                'Respuestas a todas tus preguntas',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">100% sin compromiso.</strong> No tienes que pagar nada 
                para obtener nuestra opinión profesional sobre tu proyecto.
              </p>
            </div>

            {/* Closing phrase */}
            <div className="mt-6 pt-6 border-t border-border/30">
              <p className="text-center text-foreground font-medium italic">
                "Si estás aquí, no es casualidad. El siguiente paso define tu crecimiento."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
