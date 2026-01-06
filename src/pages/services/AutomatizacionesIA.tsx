import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Bot, 
  Workflow, 
  Clock, 
  DollarSign, 
  Link2, 
  BarChart3,
  Brain,
  Database,
  Code2
} from 'lucide-react';
import serviceSeo from '@/assets/service-seo.jpg';

const AutomatizacionesIA = () => {
  return (
    <ServicePageLayout
      title="Automatizaciones con IA"
      metaTitle="Automatización con Inteligencia Artificial Calgary | RCW Innovation"
      metaDescription="Workflows inteligentes para atención, ventas y operaciones integrados con CRM/ERP. Automatización empresarial con IA en Calgary."
      keywords="automatización IA Calgary, workflows inteligentes Calgary, automatización empresarial, integración CRM ERP, chatbots inteligentes, automatización procesos Calgary"
      heroImage={serviceSeo}
      heroImageAlt="Automatización con inteligencia artificial en Calgary - RCW Innovation"
      tag="Operación"
      icon={Bot}
      shortDescription="Workflows inteligentes para atención, ventas y operaciones, integrados con CRM/ERP para transformar tu eficiencia operativa."
      longDescription="Implementamos flujos de trabajo automatizados potenciados por inteligencia artificial que reducen costos operativos, eliminan tareas repetitivas y mejoran significativamente la experiencia de tus clientes. Nuestras soluciones se integran perfectamente con tus sistemas existentes para proporcionar atención 24/7, procesamiento automático de datos y toma de decisiones inteligente."
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
          title: 'Visibilidad Completa',
          description: 'Dashboards en tiempo real que muestran el estado de cada automatización y sus resultados.',
          icon: BarChart3,
        },
        {
          title: 'IA Adaptativa',
          description: 'Algoritmos que aprenden de los datos y mejoran continuamente su rendimiento.',
          icon: Bot,
        },
      ]}
      benefits={[
        'Atención al cliente 24/7 sin fricciones',
        'Reducción de hasta 60% en costos operativos',
        'Visibilidad total de procesos en tiempo real',
        'Eliminación de errores humanos en tareas repetitivas',
        'Escalabilidad automática según demanda',
        'Integración con sistemas existentes sin disrupciones',
        'Respuestas instantáneas a consultas frecuentes',
        'Liberación de tu equipo para tareas de alto valor',
      ]}
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
        { title: 'Creación de Agentes IA', href: '/servicios/agentes-ia', icon: Brain },
        { title: 'Sistemas de Gestión', href: '/servicios/sistemas-gestion', icon: Database },
        { title: 'Software a Medida', href: '/servicios/software-medida', icon: Code2 },
      ]}
    />
  );
};

export default AutomatizacionesIA;