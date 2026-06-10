import projectServiciosLatinos from '@/assets/project-servicios-latinos.jpg';
import projectAiChatbot from '@/assets/project-ai-chatbot.jpg';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectErpDashboard from '@/assets/project-erp-dashboard.jpg';

export type BlogCategory = 'case-study' | 'ai' | 'web-development' | 'press';

export interface BlogPost {
  slug: { es: string; en: string };
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  cover: string;
  coverAlt: { es: string; en: string };
  category: BlogCategory;
  publishedAt: string; // ISO
  readingMinutes: number;
  author: string;
  keywords: { es: string; en: string };
  externalUrl?: string; // optional: outlet that published the article
  externalSource?: string; // e.g. "Canada One Click"
  content: { es: string[]; en: string[] }; // paragraphs
}

export const blogPosts: BlogPost[] = [
  {
    slug: {
      es: 'caso-exito-servicios-latinos-marketplace-calgary',
      en: 'case-study-servicios-latinos-marketplace-calgary',
    },
    title: {
      es: 'Caso de éxito: Servicios Latinos Calgary, el primer marketplace hispano de Canadá',
      en: 'Case study: Servicios Latinos Calgary, the first Hispanic marketplace in Canada',
    },
    excerpt: {
      es: 'Cómo RCW Innovation diseñó, desarrolló y posicionó la primera plataforma para la comunidad hispana en Calgary, logrando el ranking #1 en Google en menos de 6 meses.',
      en: 'How RCW Innovation designed, developed and positioned the first platform for the Hispanic community in Calgary, reaching #1 on Google in under 6 months.',
    },
    cover: projectServiciosLatinos,
    coverAlt: {
      es: 'Marketplace Servicios Latinos Canadá - Caso de éxito RCW Innovation Calgary',
      en: 'Servicios Latinos Canada Marketplace - RCW Innovation Calgary success story',
    },
    category: 'case-study',
    publishedAt: '2025-09-12',
    readingMinutes: 6,
    author: 'Ricardo C. Wilches',
    keywords: {
      es: 'marketplace hispano Calgary, comunidad latina Canadá, SEO local, desarrollo web Calgary, e-commerce Canadá',
      en: 'Hispanic marketplace Calgary, Latin community Canada, local SEO, web development Calgary, e-commerce Canada',
    },
    externalUrl: 'https://servicioslatinoscanada.com/',
    externalSource: 'Servicios Latinos Canadá',
    content: {
      es: [
        'Cuando la comunidad hispana en Calgary necesitaba un punto de encuentro digital, RCW Innovation asumió el reto de construir el primer marketplace bilingüe diseñado específicamente para conectar negocios latinos con clientes en toda Alberta.',
        'El proyecto combinó investigación de mercado, arquitectura headless, SEO técnico y un plan de contenido orientado a palabras clave de alto valor como "servicios latinos Calgary", "comunidad hispana Canadá" y "negocios latinos Alberta".',
        'Resultados en 6 meses: #1 en Google para términos clave, +180% de tráfico orgánico mensual y más de 320 negocios latinos registrados en la plataforma.',
        'La clave fue combinar un diseño accesible, un backend escalable sobre Supabase, integración con WhatsApp Business y una estrategia de contenido bilingüe que priorizó autoridad temática y enlaces locales de calidad.',
      ],
      en: [
        'When the Hispanic community in Calgary needed a digital meeting point, RCW Innovation took on the challenge of building the first bilingual marketplace designed specifically to connect Latin businesses with customers across Alberta.',
        'The project combined market research, headless architecture, technical SEO and a content plan targeting high-value keywords such as "Latin services Calgary", "Hispanic community Canada" and "Latino businesses Alberta".',
        'Six-month results: #1 on Google for key terms, +180% monthly organic traffic and over 320 Latin businesses registered on the platform.',
        'The key was combining accessible design, a scalable Supabase backend, WhatsApp Business integration and a bilingual content strategy that prioritized topical authority and quality local backlinks.',
      ],
    },
  },
  {
    slug: {
      es: 'agentes-ia-conversacionales-empresas-calgary',
      en: 'conversational-ai-agents-calgary-businesses',
    },
    title: {
      es: 'Agentes de IA conversacionales: cómo automatizan ventas y atención al cliente en Calgary',
      en: 'Conversational AI agents: how they automate sales and customer service in Calgary',
    },
    excerpt: {
      es: 'Implementamos agentes de IA con OpenAI, Claude y ElevenLabs que responden 24/7, califican leads y aumentan las conversiones hasta 3.2x en empresas canadienses.',
      en: 'We deploy AI agents with OpenAI, Claude and ElevenLabs that respond 24/7, qualify leads and boost conversions up to 3.2x in Canadian companies.',
    },
    cover: projectAiChatbot,
    coverAlt: {
      es: 'Agentes IA conversacionales para empresas en Calgary - RCW Innovation',
      en: 'Conversational AI agents for Calgary businesses - RCW Innovation',
    },
    category: 'ai',
    publishedAt: '2025-10-04',
    readingMinutes: 5,
    author: 'Ricardo C. Wilches',
    keywords: {
      es: 'agentes IA Calgary, inteligencia artificial empresas Canadá, ChatGPT empresas, ElevenLabs voz, automatización ventas',
      en: 'AI agents Calgary, artificial intelligence Canada businesses, ChatGPT for companies, ElevenLabs voice, sales automation',
    },
    content: {
      es: [
        'Los agentes de IA dejaron de ser un experimento para convertirse en un canal de ventas medible. En RCW Innovation diseñamos agentes que entienden contexto, califican leads y agendan reuniones sin intervención humana.',
        'Nuestra arquitectura combina modelos como GPT-4, Claude y Gemini con una capa de orquestación propia, voz natural de ElevenLabs y conexión directa a tu CRM (HubSpot, Pipedrive o uno custom).',
        'Casos reales en Calgary: +45% de eficiencia operativa, -35% de costos de atención y un aumento de conversión de 3.2x en empresas de servicios profesionales.',
        'Si tu negocio recibe consultas repetitivas, pierde leads fuera de horario o necesita escalar sin contratar más personal, un agente IA bien entrenado es la próxima decisión obvia.',
      ],
      en: [
        'AI agents are no longer an experiment — they are a measurable sales channel. At RCW Innovation we design agents that understand context, qualify leads and book meetings without human intervention.',
        'Our architecture combines models like GPT-4, Claude and Gemini with our own orchestration layer, natural ElevenLabs voice and a direct connection to your CRM (HubSpot, Pipedrive or a custom one).',
        'Real Calgary cases: +45% operational efficiency, -35% support costs and a 3.2x conversion lift in professional-services companies.',
        'If your business gets repetitive inquiries, loses leads after hours or needs to scale without hiring more staff, a well-trained AI agent is the obvious next step.',
      ],
    },
  },
  {
    slug: {
      es: 'transformacion-digital-pymes-canada-2026',
      en: 'digital-transformation-canadian-smbs-2026',
    },
    title: {
      es: 'Transformación digital para PyMEs en Canadá: la guía 2026',
      en: 'Digital transformation for Canadian SMBs: the 2026 guide',
    },
    excerpt: {
      es: 'Un mapa práctico para que las pequeñas y medianas empresas en Canadá adopten IA, automatización y software a medida sin romper su flujo operativo.',
      en: 'A practical roadmap for Canadian small and mid-sized businesses to adopt AI, automation and custom software without breaking their operations.',
    },
    cover: projectErpDashboard,
    coverAlt: {
      es: 'Transformación digital PyMEs Canadá - Dashboard ERP RCW Innovation',
      en: 'Digital transformation Canadian SMBs - ERP Dashboard RCW Innovation',
    },
    category: 'web-development',
    publishedAt: '2025-11-18',
    readingMinutes: 7,
    author: 'Ricardo C. Wilches',
    keywords: {
      es: 'transformación digital Canadá, PyMEs Calgary, software a medida, ERP CRM, automatización empresarial',
      en: 'digital transformation Canada, SMBs Calgary, custom software, ERP CRM, business automation',
    },
    content: {
      es: [
        'La transformación digital ya no es opcional para las PyMEs canadienses. En 2026 la pregunta no es "si" sino "cómo" hacerlo sin frenar la operación diaria.',
        'Recomendamos un enfoque por capas: primero auditar procesos, después automatizar lo repetitivo, luego implementar dashboards en tiempo real y finalmente desplegar IA donde aporte valor medible.',
        'En RCW Innovation acompañamos este proceso con una metodología ágil de 5 fases, entregables cada 2 semanas y KPIs definidos desde el día uno.',
        'El error más común es comprar herramientas sin estrategia. La transformación real ocurre cuando tecnología, equipo y procesos se alinean alrededor de objetivos de negocio claros.',
      ],
      en: [
        'Digital transformation is no longer optional for Canadian SMBs. In 2026 the question is not "if" but "how" to do it without slowing daily operations.',
        'We recommend a layered approach: audit processes first, then automate the repetitive, deploy real-time dashboards, and finally introduce AI where it delivers measurable value.',
        'At RCW Innovation we guide this process with a 5-phase agile methodology, deliverables every 2 weeks and KPIs defined from day one.',
        'The most common mistake is buying tools without a strategy. Real transformation happens when technology, team and processes align around clear business goals.',
      ],
    },
  },
  {
    slug: {
      es: 'rcw-innovation-listado-canada-one-click',
      en: 'rcw-innovation-featured-canada-one-click',
    },
    title: {
      es: 'RCW Innovation, listada en Canada One Click como agencia de IA y desarrollo en Calgary',
      en: 'RCW Innovation featured on Canada One Click as an AI and development agency in Calgary',
    },
    excerpt: {
      es: 'Nuestra empresa fue incluida en el directorio nacional Canada One Click como referente en desarrollo de software, IA y transformación digital con base en Calgary.',
      en: 'Our company was featured on the Canada One Click national directory as a reference in software development, AI and digital transformation based in Calgary.',
    },
    cover: projectEcommerce,
    coverAlt: {
      es: 'RCW Innovation mencionada en Canada One Click - directorio nacional Canadá',
      en: 'RCW Innovation featured on Canada One Click - Canadian national directory',
    },
    category: 'press',
    publishedAt: '2026-01-22',
    readingMinutes: 3,
    author: 'RCW Innovation Team',
    keywords: {
      es: 'RCW Innovation prensa, Canada One Click, agencia desarrollo Calgary, directorio Canadá',
      en: 'RCW Innovation press, Canada One Click, Calgary development agency, Canadian directory',
    },
    externalUrl: 'https://canadaoneclick.ca/',
    externalSource: 'Canada One Click',
    content: {
      es: [
        'RCW Innovation fue seleccionada por Canada One Click, uno de los directorios empresariales más visitados de Canadá, como referente regional en desarrollo de software, agentes de IA y transformación digital.',
        'La mención refuerza nuestro posicionamiento nacional y nos conecta con empresas de todas las provincias que buscan soluciones bilingües, seguras y escalables.',
        'Para nuestros clientes esto se traduce en mayor visibilidad, confianza institucional y un canal adicional para descubrir nuestros servicios desde cualquier ciudad de Canadá.',
      ],
      en: [
        'RCW Innovation was selected by Canada One Click, one of Canada’s most visited business directories, as a regional reference in software development, AI agents and digital transformation.',
        'The mention strengthens our national positioning and connects us with companies across every province looking for bilingual, secure and scalable solutions.',
        'For our clients this means greater visibility, institutional trust and an additional channel to discover our services from any city in Canada.',
      ],
    },
  },
];

export const getPostBySlug = (slug: string, lang: 'es' | 'en'): BlogPost | undefined =>
  blogPosts.find((p) => p.slug[lang] === slug);
