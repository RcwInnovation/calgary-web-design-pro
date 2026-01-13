import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Brain, 
  MessageSquare, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp,
  Bot,
  Database,
  Code2
} from 'lucide-react';
import serviceAgentsAi from '@/assets/service-agents-ai.jpg';

const AgentesIA = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <ServicePageLayout
        title="Agentes de inteligencia artificial y chatbots en Calgary para atención 24/7"
        metaTitle="Creación de Agentes de IA y Chatbots en Calgary | RCW Innovation"
        metaDescription="Desarrollamos agentes de IA conversacionales en Calgary para soporte al cliente, automatización y ventas. Atención en español."
        keywords="agentes IA Calgary, chatbots Calgary, IA conversacional, asistentes virtuales Calgary, atención 24/7 Calgary, desarrollo chatbot empresarial"
        canonicalUrl="https://www.rcwinnovation.com/creacion-agentes-ia-inteligencia-calgary"
        heroImage={serviceAgentsAi}
        heroImageAlt="Desarrollo de agentes de inteligencia artificial y chatbots en Calgary - Cerebro neural con burbujas de conversación representando asistentes virtuales 24/7"
        tag="Inteligencia"
        icon={Brain}
        shortDescription="Desarrollo de agentes conversacionales y de back-end que aprenden de tus datos empresariales para automatizar tareas complejas."
        problemTitle="Problema: atención al cliente saturada"
        problemDescription="Los equipos humanos no pueden atender todas las consultas de manera inmediata, lo que afecta la experiencia del cliente y la reputación del negocio. Clientes frustrados por tiempos de espera largos y respuestas inconsistentes."
        solutionTitle="Solución: asistentes inteligentes personalizados"
        solutionDescription="Diseñamos chatbots y agentes conversacionales adaptados a tu industria. Integran FAQs, reservas, pagos y base de conocimientos. Soportan español e inglés y se integran con tus sistemas (CRM, e-commerce) para respuestas instantáneas y precisas."
        features={[
          {
            title: 'Respuestas Instantáneas',
            description: 'Atención inmediata a consultas en cualquier momento del día, los 7 días de la semana.',
            icon: Clock,
          },
          {
            title: 'Reducción de Costos',
            description: 'Disminuye significativamente los costos de atención al cliente sin sacrificar calidad.',
            icon: DollarSign,
          },
          {
            title: 'Mejor Experiencia',
            description: 'Usuarios satisfechos con respuestas rápidas, precisas y personalizadas.',
            icon: Users,
          },
          {
            title: 'Escalabilidad',
            description: 'Atiende miles de conversaciones simultáneas sin contratar más personal.',
            icon: TrendingUp,
          },
          {
            title: 'Aprendizaje Continuo',
            description: 'Algoritmos que mejoran automáticamente basándose en las interacciones y feedback.',
            icon: Brain,
          },
          {
            title: 'Conversaciones Naturales',
            description: 'Procesamiento de lenguaje natural para conversaciones fluidas y contextuales.',
            icon: MessageSquare,
          },
        ]}
        benefitsTitle="Beneficios de implementar agentes IA"
        benefits={[
          'Respuestas instantáneas en cualquier momento',
          'Reducción de costos operativos',
          'Mejor experiencia de usuario',
          'Escalabilidad y aprendizaje continuo',
          'Integración con CRM, e-commerce y sistemas existentes',
          'Soporte en español e inglés',
          'Transferencia fluida a agentes humanos cuando es necesario',
          'Analytics detallados de conversaciones',
        ]}
        ctaText="Desarrolla tu agente de IA y multiplica tu capacidad de servicio"
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
          { title: 'Automatizaciones con IA', href: '/automatizaciones-ia-operaciones-calgary', icon: Bot },
          { title: 'Sistemas de Gestión', href: '/sistemas-gestion-operaciones-calgary', icon: Database },
          { title: 'Software a Medida', href: '/diseno-software-medida-premium-calgary', icon: Code2 },
        ]}
      />
    </div>
  );
});

AgentesIA.displayName = 'AgentesIA';

export default AgentesIA;