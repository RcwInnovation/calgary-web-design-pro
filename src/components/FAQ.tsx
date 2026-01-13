import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuál es la diferencia entre Asesoría 5.0 y Consultoría 5.0?',
    answer: 'La Asesoría 5.0 son sesiones rápidas (30-90 días) enfocadas en diagnóstico y plan de acción inmediato. La Consultoría 5.0 es un proyecto integral que incluye roadmap completo, implementación y optimización continua.',
  },
  {
    question: '¿Cómo pueden ayudar a mi negocio?',
    answer: 'Unimos tecnología, automatización y estrategia para eliminar tareas repetitivas, fortalecer tu marca y convertir más leads en clientes. Todo respaldado por métricas y resultados medibles.',
  },
  {
    question: '¿Se integran con sistemas existentes?',
    answer: 'Sí, nos integramos con CRM, ERP y otras suites como Kommo, HubSpot, Odoo, Zoho y SAP. Nuestro enfoque es potenciar lo que ya funciona, no reemplazarlo.',
  },
  {
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: 'Prometemos "quick wins" en 2-3 semanas, un MVP funcional en 4-8 semanas y despliegues completos en 8-12 semanas, dependiendo de la complejidad del proyecto.',
  },
  {
    question: '¿Cómo manejan la seguridad de la información?',
    answer: 'Usamos NDA, cifrado de datos, control de acceso estricto y nunca utilizamos los datos de clientes para entrenar modelos sin permiso expreso.',
  },
  {
    question: '¿Cuáles son las opciones de inversión y pago?',
    answer: 'Ofrecemos proyectos por hitos o "retainers" mensuales, con opciones de financiamiento disponibles para proyectos de mayor envergadura.',
  },
  {
    question: '¿Quién es dueño del código al finalizar?',
    answer: 'El cliente conserva la propiedad total del proyecto y todo el código desarrollado. La empresa retiene únicamente la autoría técnica y metodológica.',
  },
  {
    question: '¿Qué los diferencia de otras agencias?',
    answer: 'No vendemos servicios, diseñamos sistemas que generan resultados reales. Combinamos branding, tecnología de punta e innovación con un enfoque 100% orientado a métricas.',
  },
  {
    question: '¿Cómo puedo empezar?',
    answer: 'Agenda una Asesoría o Consultoría 5.0. Analizaremos tus objetivos, identificaremos oportunidades y crearemos un roadmap personalizado para tu negocio.',
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
            Preguntas frecuentes
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