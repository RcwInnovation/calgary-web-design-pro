import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto cuesta un sitio web profesional en Calgary?',
    answer: 'Nuestros proyectos comienzan desde $1,500 CAD para landing pages y desde $3,000 CAD para sitios web corporativos completos. El precio final depende de las funcionalidades específicas que necesites. Ofrecemos una consulta gratuita para darte un presupuesto personalizado.',
  },
  {
    question: '¿Cuánto tiempo toma desarrollar un sitio web?',
    answer: 'Una landing page puede estar lista en 1-2 semanas. Un sitio web corporativo completo generalmente toma 3-4 semanas. Proyectos más complejos con funcionalidades personalizadas pueden tomar 6-8 semanas.',
  },
  {
    question: '¿Ofrecen diseño web en español en Calgary?',
    answer: 'Sí, somos especialistas en diseño web para la comunidad hispana en Calgary. Toda nuestra comunicación y soporte es en español, y podemos crear tu sitio web bilingüe (español/inglés) para alcanzar más clientes.',
  },
  {
    question: '¿Qué incluye el servicio de diseño web?',
    answer: 'Incluye diseño personalizado, desarrollo responsive, optimización SEO básica, integración con Google Analytics, formularios de contacto, hosting por el primer año, SSL/seguridad, y capacitación para que puedas actualizar tu contenido.',
  },
  {
    question: '¿Pueden ayudarme con SEO para aparecer en Google?',
    answer: 'Absolutamente. Todos nuestros sitios incluyen SEO on-page básico. También ofrecemos servicios de SEO avanzado y posicionamiento local para que aparezcas en búsquedas como "tu servicio + Calgary".',
  },
  {
    question: '¿Qué pasa después de que mi sitio esté listo?',
    answer: 'Te capacitamos para que puedas hacer cambios básicos tú mismo. También ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, copias de seguridad, seguridad y soporte prioritario.',
  },
  {
    question: '¿Trabajan con negocios pequeños o solo empresas grandes?',
    answer: 'Trabajamos con negocios de todos los tamaños. De hecho, nos especializamos en ayudar a pequeñas y medianas empresas hispanas en Calgary a establecer su presencia digital profesional.',
  },
  {
    question: '¿Ofrecen garantía de satisfacción?',
    answer: 'Sí, ofrecemos garantía de satisfacción del 100%. Trabajamos contigo hasta que estés completamente satisfecho con tu sitio web. Además, incluimos 30 días de ajustes gratuitos después del lanzamiento.',
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section relative overflow-hidden bg-card/30">
      <div className="container-custom max-w-4xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Resuelve tus dudas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Preguntas frecuentes sobre diseño web en español
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Respuestas claras a las preguntas más comunes sobre nuestros servicios.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-card/40 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-semibold pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
