import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Brain, 
  MessageSquare, 
  Cpu, 
  RefreshCw, 
  Link2, 
  Shield,
  Bot,
  Database,
  Code2
} from 'lucide-react';
import serviceCorporate from '@/assets/service-corporate.jpg';

const AgentesIA = () => {
  return (
    <ServicePageLayout
      title="Creación de Agentes IA"
      metaTitle="Desarrollo de Agentes de IA Calgary | RCW Innovation"
      metaDescription="Desarrollo de agentes conversacionales y de back-end que aprenden de tus datos empresariales. Inteligencia artificial personalizada en Calgary."
      keywords="agentes IA Calgary, chatbots inteligentes Calgary, IA conversacional, machine learning Calgary, asistentes virtuales, desarrollo IA Calgary"
      heroImage={serviceCorporate}
      heroImageAlt="Desarrollo de agentes de inteligencia artificial en Calgary - RCW Innovation"
      tag="Inteligencia"
      icon={Brain}
      shortDescription="Desarrollo de agentes conversacionales y de back-end que aprenden de tus datos empresariales para automatizar tareas complejas."
      longDescription="Creamos agentes de inteligencia artificial personalizados que entienden profundamente tu negocio, responden preguntas complejas y automatizan tareas que antes requerían intervención humana. Nuestros agentes aprenden continuamente de las interacciones para mejorar su precisión y efectividad, convirtiéndose en un activo estratégico para tu empresa."
      features={[
        {
          title: 'Agentes Conversacionales',
          description: 'Chatbots avanzados que mantienen conversaciones naturales y resuelven consultas complejas.',
          icon: MessageSquare,
        },
        {
          title: 'Procesamiento de Lenguaje',
          description: 'Comprensión avanzada del lenguaje natural para interpretar intenciones y contexto.',
          icon: Cpu,
        },
        {
          title: 'Aprendizaje Continuo',
          description: 'Algoritmos que mejoran automáticamente basándose en las interacciones y feedback.',
          icon: RefreshCw,
        },
        {
          title: 'Integración Backend',
          description: 'Conexión directa con tus bases de datos, APIs y sistemas para acciones en tiempo real.',
          icon: Link2,
        },
        {
          title: 'Seguridad de Datos',
          description: 'Protección de información sensible con cifrado y controles de acceso estrictos.',
          icon: Shield,
        },
        {
          title: 'Personalización Total',
          description: 'Agentes entrenados específicamente con tu conocimiento empresarial y tono de voz.',
          icon: Brain,
        },
      ]}
      benefits={[
        'Respuesta instantánea a consultas 24/7',
        'Integración total con tus sistemas existentes',
        'Mejora continua con machine learning',
        'Reducción de carga en equipos de soporte',
        'Escalabilidad ilimitada según demanda',
        'Analytics detallados de conversaciones',
        'Personalización del tono y conocimiento',
        'Transferencia fluida a agentes humanos cuando es necesario',
      ]}
      processSteps={[
        {
          title: 'Análisis de Conocimiento',
          description: 'Recopilamos y organizamos el conocimiento de tu empresa: FAQs, manuales, procesos y datos relevantes.',
        },
        {
          title: 'Diseño del Agente',
          description: 'Definimos la personalidad, capacidades, flujos de conversación y límites del agente.',
        },
        {
          title: 'Entrenamiento',
          description: 'Entrenamos el modelo con tus datos y refinamos las respuestas hasta lograr la precisión deseada.',
        },
        {
          title: 'Integración',
          description: 'Conectamos el agente con tus canales (web, WhatsApp, etc.) y sistemas backend.',
        },
        {
          title: 'Optimización',
          description: 'Monitoreamos el rendimiento y optimizamos continuamente basándonos en las interacciones reales.',
        },
      ]}
      faqs={[
        {
          question: '¿En qué canales pueden funcionar los agentes?',
          answer: 'Nuestros agentes pueden desplegarse en tu sitio web, WhatsApp Business, Facebook Messenger, Telegram, Slack, y prácticamente cualquier plataforma de mensajería.',
        },
        {
          question: '¿Cómo aprende el agente sobre mi negocio?',
          answer: 'Entrenamos el agente con tu documentación, FAQs, manuales de producto, historial de conversaciones y cualquier conocimiento relevante que nos proporciones.',
        },
        {
          question: '¿El agente puede realizar acciones en mis sistemas?',
          answer: 'Sí, podemos integrar el agente para que ejecute acciones como crear tickets, actualizar CRM, procesar pedidos, agendar citas y más.',
        },
        {
          question: '¿Qué pasa si el agente no sabe responder algo?',
          answer: 'Configuramos reglas de escalamiento para transferir automáticamente a un agente humano cuando la consulta excede las capacidades del bot.',
        },
        {
          question: '¿Puedo ver las conversaciones y métricas?',
          answer: 'Sí, proporcionamos un dashboard completo con historial de conversaciones, tasas de resolución, temas frecuentes y métricas de satisfacción.',
        },
      ]}
      relatedServices={[
        { title: 'Automatizaciones con IA', href: '/servicios/automatizaciones-ia', icon: Bot },
        { title: 'Sistemas de Gestión', href: '/servicios/sistemas-gestion', icon: Database },
        { title: 'Software a Medida', href: '/servicios/software-medida', icon: Code2 },
      ]}
    />
  );
};

export default AgentesIA;