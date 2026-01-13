import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Bot, 
  Workflow, 
  Clock, 
  DollarSign, 
  Link2, 
  TrendingUp,
  Brain,
  Database,
  Code2,
  Headphones
} from 'lucide-react';
import serviceAutomationAi from '@/assets/service-automation-ai.jpg';

const AutomatizacionesIA = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <ServicePageLayout
        title="Automatizaciones con IA para operaciones empresariales en Calgary"
        metaTitle="Automatizaciones con IA para Operaciones en Calgary | RCW Innovation"
        metaDescription="Optimiza procesos con IA y automatización en Calgary. Reduce costos y tiempos. Atención en español."
        keywords="automatización IA Calgary, workflows inteligentes Calgary, automatización empresarial, integración CRM ERP, reducción costos operativos, automatización procesos Calgary"
        canonicalUrl="https://www.rcwinnovation.com/automatizaciones-ia-operaciones-calgary"
        heroImage={serviceAutomationAi}
        heroImageAlt="Automatización de procesos con inteligencia artificial en Calgary - Robots industriales y workflows inteligentes con redes neuronales holográficas"
        tag="Operación"
        icon={Bot}
        shortDescription="Workflows inteligentes para atención, ventas y operaciones, integrados con CRM/ERP para transformar tu eficiencia operativa."
        problemTitle="Problema: procesos manuales y costosos"
        problemDescription="Realizar tareas repetitivas consume tiempo y recursos. Los errores humanos generan pérdidas económicas y baja eficiencia. Equipos sobrecargados con trabajo manual que podría automatizarse, limitando su capacidad de enfocarse en tareas de alto valor."
        solutionTitle="Solución: automatización inteligente a medida"
        solutionDescription="Identificamos y mapeamos procesos que se pueden automatizar, implementamos flujos con IA (bots, integraciones) y optimizamos en tiempo real. Nos integramos con CRM, ERP y sistemas existentes sin interrumpir tu operación."
        features={[
          {
            title: 'Workflows Inteligentes',
            description: 'Diseñamos flujos de trabajo que automatizan tareas repetitivas y se adaptan según el contexto y los datos.',
            icon: Workflow,
          },
          {
            title: 'Atención 24/7',
            description: 'Implementamos sistemas de atención automatizada que responden consultas y resuelven problemas a cualquier hora.',
            icon: Clock,
          },
          {
            title: 'Reducción de Costos',
            description: 'Optimizamos procesos para reducir significativamente los costos operativos de tu empresa.',
            icon: DollarSign,
          },
          {
            title: 'Integración Total',
            description: 'Conectamos con CRM, ERP, herramientas de email marketing, pasarelas de pago y más.',
            icon: Link2,
          },
          {
            title: 'Mayor Escalabilidad',
            description: 'Automatizaciones que crecen con tu negocio sin aumentar proporcionalmente los costos.',
            icon: TrendingUp,
          },
          {
            title: 'Soporte y Capacitación',
            description: 'Te acompañamos en todo el proceso con soporte continuo y capacitación para tu equipo.',
            icon: Headphones,
          },
        ]}
        benefitsTitle="Ventajas de automatizar con IA"
        benefits={[
          'Reducción de errores y tiempos de respuesta',
          'Menos costes operativos (hasta 60% de ahorro)',
          'Mayor escalabilidad y productividad',
          'Soporte y capacitación incluidos',
          'Atención al cliente 24/7 sin fricciones',
          'Integración con sistemas existentes sin disrupciones',
          'Liberación de tu equipo para tareas estratégicas',
          'Monitoreo y alertas en tiempo real',
        ]}
        ctaText="Solicita tu plan de automatización con IA en español"
        processSteps={[
          {
            title: 'Mapeo de Procesos',
            description: 'Documentamos y analizamos tus procesos actuales para identificar oportunidades de automatización.',
          },
          {
            title: 'Diseño de Workflows',
            description: 'Diseñamos los flujos automatizados con puntos de decisión, integraciones y lógica de negocio.',
          },
          {
            title: 'Desarrollo e Integración',
            description: 'Construimos las automatizaciones y las conectamos con tus sistemas existentes.',
          },
          {
            title: 'Testing y Validación',
            description: 'Probamos exhaustivamente cada escenario para garantizar funcionamiento correcto.',
          },
          {
            title: 'Despliegue y Monitoreo',
            description: 'Activamos las automatizaciones y monitoreamos su rendimiento con alertas en tiempo real.',
          },
        ]}
        faqs={[
          {
            question: '¿Con qué sistemas pueden integrarse las automatizaciones?',
            answer: 'Nos integramos con prácticamente cualquier sistema: Kommo, HubSpot, Salesforce, Odoo, Zoho, SAP, Stripe, PayPal, Mailchimp, WhatsApp Business, y muchos más.',
          },
          {
            question: '¿Cuánto tiempo toma implementar una automatización?',
            answer: 'Automatizaciones simples pueden estar listas en 1-2 semanas. Proyectos más complejos con múltiples integraciones toman 4-8 semanas.',
          },
          {
            question: '¿Pueden automatizar WhatsApp y atención al cliente?',
            answer: 'Sí, implementamos chatbots inteligentes en WhatsApp Business que pueden responder consultas, tomar pedidos, agendar citas y escalar a humanos cuando es necesario.',
          },
          {
            question: '¿Qué pasa si una automatización falla?',
            answer: 'Implementamos sistemas de monitoreo con alertas automáticas. Si algo falla, nuestro equipo es notificado inmediatamente y resolvemos el problema rápidamente.',
          },
          {
            question: '¿Puedo ver métricas de las automatizaciones?',
            answer: 'Sí, proporcionamos dashboards personalizados donde puedes ver en tiempo real el rendimiento, volumen de transacciones y ahorro generado.',
          },
        ]}
        relatedServices={[
          { title: 'Creación de Agentes IA', href: '/creacion-agentes-ia-inteligencia-calgary', icon: Brain },
          { title: 'Sistemas de Gestión', href: '/sistemas-gestion-operaciones-calgary', icon: Database },
          { title: 'Software a Medida', href: '/diseno-software-medida-premium-calgary', icon: Code2 },
        ]}
      />
    </div>
  );
});

AutomatizacionesIA.displayName = 'AutomatizacionesIA';

export default AutomatizacionesIA;