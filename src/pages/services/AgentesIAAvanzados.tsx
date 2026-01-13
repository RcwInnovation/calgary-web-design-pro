import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  TrendingUp, 
  Shield, 
  Zap,
  Bot,
  Database,
  Code2
} from 'lucide-react';
import serviceAgentsAi from '@/assets/service-agents-ai.jpg';

const AgentesIAAvanzados = () => {
  return (
    <ServicePageLayout
      title="Agentes de inteligencia artificial avanzados para negocios en Calgary"
      metaTitle="Agentes de IA para Negocios en Calgary | RCW Innovation"
      metaDescription="Revoluciona tu negocio con agentes de IA avanzados. Chatbots, automatización, análisis predictivo y planes Starter, Growth y Enterprise."
      keywords="agentes IA avanzados Calgary, chatbots empresariales Calgary, machine learning Calgary, análisis predictivo, automatización inteligente, IA negocios Calgary"
      canonicalUrl="https://www.rcwinnovation.com/agentes-ia-avanzados-calgary"
      heroImage={serviceAgentsAi}
      heroImageAlt="Agentes de inteligencia artificial avanzados para negocios en Calgary - Cerebro neural con conversaciones de chatbot representando IA conversacional empresarial"
      tag="IA Avanzada"
      icon={Brain}
      shortDescription="Agentes de IA desarrollados en Canadá y Colombia, capaces de potenciar la atención al cliente, la eficiencia operativa y el análisis de datos."
      introSection={{
        title: "Revoluciona tu negocio con IA en español",
        description: "Presentamos agentes de IA desarrollados en Canadá y Colombia, capaces de potenciar la atención al cliente, la eficiencia operativa y el análisis de datos. Nuestras soluciones combinan tecnología de punta con atención personalizada en español para negocios latinos en Calgary."
      }}
      capabilities={[
        'Procesamiento de lenguaje natural',
        'Visión por computadora',
        'Machine Learning avanzado',
        'Análisis predictivo',
        'Automatización inteligente',
        'Chatbots conversacionales',
      ]}
      applications={[
        'Atención al cliente 24/7',
        'Análisis de datos masivos',
        'Optimización de procesos',
        'Detección de fraudes',
        'Recomendaciones personalizadas',
        'Mantenimiento predictivo',
      ]}
      features={[
        {
          title: 'Procesamiento de Lenguaje',
          description: 'Comprensión avanzada del español e inglés para conversaciones naturales y contextuales.',
          icon: MessageSquare,
        },
        {
          title: 'Visión por Computadora',
          description: 'Análisis de imágenes y video para control de calidad, seguridad y más.',
          icon: Eye,
        },
        {
          title: 'Análisis Predictivo',
          description: 'Algoritmos que anticipan tendencias, comportamientos y oportunidades de negocio.',
          icon: TrendingUp,
        },
        {
          title: 'Detección de Anomalías',
          description: 'Identificación automática de fraudes, errores y comportamientos inusuales.',
          icon: Shield,
        },
        {
          title: 'Automatización Inteligente',
          description: 'Workflows que aprenden y se adaptan para optimizar procesos continuamente.',
          icon: Zap,
        },
        {
          title: 'Aprendizaje Continuo',
          description: 'Modelos que mejoran con cada interacción y se adaptan a tu negocio.',
          icon: Brain,
        },
      ]}
      benefitsTitle="Ventajas de nuestros agentes IA"
      benefits={[
        'Atención instantánea en español e inglés 24/7',
        'Reducción de hasta 70% en costos de soporte',
        'Escalabilidad ilimitada según demanda',
        'Integración con cualquier sistema existente',
        'Análisis de datos en tiempo real',
        'Mejora continua con machine learning',
        'Dashboard ejecutivo con métricas clave',
        'Consultoría continua incluida',
      ]}
      ctaText="Empezar con mi agente de IA (Diagnóstico Express o Auditoría Pro)"
      pricingPlans={[
        {
          name: 'Plan Starter Business',
          description: 'Ideal para pequeños restaurantes, tiendas y negocios con un solo punto de atención.',
          price: 'CAD $499',
          features: [
            'Asistente virtual básico',
            'Soporte en español e inglés',
            'Reporte mensual de rendimiento',
            'Soporte estándar (48-72h)',
          ],
          capacity: '500 llamadas y ~1,000 minutos/mes',
          setup: 'CAD $1,000',
          extraLanguage: '+CAD $75/mes',
        },
        {
          name: 'Plan Growth Business',
          description: 'Para restaurantes con varias sedes y negocios medianos en crecimiento.',
          price: 'CAD $1,200',
          features: [
            'Todo del plan Starter',
            'Sistema de reservas/pedidos',
            'Integración CRM básica',
            'Actualizaciones mensuales de contenido',
            'Reportes de satisfacción',
            'Soporte prioritario (24-48h)',
          ],
          capacity: '1,500 llamadas y ~3,000 minutos/mes',
          setup: 'CAD $2,000',
          extraLanguage: '+CAD $150/mes',
          highlighted: true,
        },
        {
          name: 'Plan Enterprise Solutions',
          description: 'Para cadenas y empresas con alto volumen de interacciones.',
          price: 'CAD $2,500',
          features: [
            'Todo del plan Growth',
            'Integraciones completas (CRM, POS, pagos)',
            'Clonación de voz personalizada',
            'Multi-idioma avanzado',
            'Soporte 24/7 con monitoreo',
            'Dashboard ejecutivo',
            'Consultoría continua',
          ],
          capacity: '5,000 llamadas y ~10,000 minutos/mes',
          setup: 'CAD $4,000',
          extraLanguage: '+CAD $250/mes',
        },
      ]}
      technologies={[
        'Deep Learning',
        'Redes Neuronales',
        'TensorFlow',
        'PyTorch',
        'OpenAI GPT',
        'LangChain',
        'Vector Databases',
        'RAG Systems',
      ]}
      processSteps={[
        {
          title: 'Diagnóstico Express',
          description: 'Evaluamos tu negocio para identificar el agente ideal y el plan que mejor se adapta.',
        },
        {
          title: 'Diseño Personalizado',
          description: 'Definimos capacidades, flujos de conversación e integraciones necesarias.',
        },
        {
          title: 'Desarrollo y Entrenamiento',
          description: 'Construimos y entrenamos el agente con tu conocimiento empresarial.',
        },
        {
          title: 'Integración',
          description: 'Conectamos con tus sistemas (CRM, POS, pagos) y canales de comunicación.',
        },
        {
          title: 'Lanzamiento y Optimización',
          description: 'Desplegamos el agente y optimizamos continuamente basándonos en datos reales.',
        },
      ]}
      faqs={[
        {
          question: '¿Qué diferencia hay entre el plan Starter y Growth?',
          answer: 'El plan Growth incluye integración con CRM, sistema de reservas/pedidos, reportes de satisfacción y mayor capacidad de llamadas. Es ideal para negocios en crecimiento que necesitan automatizar más procesos.',
        },
        {
          question: '¿Puedo cambiar de plan después?',
          answer: 'Sí, puedes escalar a un plan superior en cualquier momento. La transición es fluida y mantenemos todo el entrenamiento previo del agente.',
        },
        {
          question: '¿Qué incluye la configuración inicial?',
          answer: 'Incluye análisis de tu negocio, diseño del agente, entrenamiento inicial, integración con hasta 2 sistemas, pruebas y capacitación de tu equipo.',
        },
        {
          question: '¿Los agentes pueden procesar pagos?',
          answer: 'Sí, en los planes Growth y Enterprise podemos integrar pasarelas de pago para que el agente procese transacciones de forma segura.',
        },
        {
          question: '¿Cómo funciona la clonación de voz?',
          answer: 'En el plan Enterprise, podemos crear una voz personalizada para tu agente que suene natural y represente la identidad de tu marca.',
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

export default AgentesIAAvanzados;
