import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { serviceRoutes, pageRoutes } from '@/config/routes';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
  basePath: string;
}

const translations = {
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.whyUs': '¿Por qué elegirnos?',
    'nav.process': 'Proceso',
    'nav.founder': 'Fundador',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agenda tu Asesoría',
    
    // Hero
    'hero.badge': 'Innovación, Ingeniería y Automatización 5.0',
    'hero.title.words1': 'Impulsamos,la,innovación,,el',
    'hero.title.highlight': 'diseño web',
    'hero.title.words2': 'y,la,automatización,inteligente,en,Canadá',
    'hero.subtitle': 'Diseñamos soluciones de ingeniería, IA y automatización 5.0 desde Calgary para empresas en todo Canadá.',
    'hero.cta.consultation': 'Solicitar Asesoría',
    'hero.cta.diagnostic': 'Consultoría 5.0',
    'hero.card.innovation': 'Innovación',
    'hero.card.innovationDesc': 'Tecnología de vanguardia, arquitecturas modernas y agentes de IA que aprenden de tus datos.',
    'hero.card.strategy': 'Estrategia',
    'hero.card.strategyDesc': 'Detectamos oportunidades, creamos roadmaps accionables y maximizamos tu retorno de inversión.',
    'hero.card.results': 'Resultados',
    'hero.card.resultsDesc': 'KPIs claros, optimización continua y entregables que impactan ventas, procesos y experiencia.',
    
    // Clients
    'clients.badge': 'Clientes que confían en nosotros',
    'clients.title': 'Empresas que han crecido con',
    'clients.titleHighlight': 'RCW Innovation',
    
    // Tech Stack
    'techStack.badge': 'Tecnologías que dominamos',
    'techStack.title': 'Stack tecnológico y herramientas',
    'techStack.titleHighlight': 'de IA',
    'techStack.subtitle': 'Trabajamos con las tecnologías de desarrollo y las plataformas de inteligencia artificial más avanzadas del mercado para entregar soluciones robustas, escalables y futuristas.',
    'techStack.codeLabel': 'Desarrollo',
    'techStack.aiLabel': 'Inteligencia Artificial & Automatización',

    // Featured In / Press
    'featured.badge': 'Presencia y colaboraciones',
    'featured.title': 'Empresas y plataformas donde',
    'featured.titleHighlight': 'hemos colaborado',
    'featured.subtitle': 'Plataformas, directorios y medios donde nuestros proyectos han sido publicados, referenciados o desarrollados por RCW Innovation.',
    'featured.visit': 'Visitar plataforma',
    'featured.altSuffix': 'plataforma donde RCW Innovation ha colaborado',
    'featured.tag.directory': 'Directorio Nacional',
    'featured.tag.marketplace': 'Marketplace Hispano',
    'featured.canadaOneClick.description': 'Directorio nacional canadiense donde RCW Innovation aparece referenciado como empresa de desarrollo tecnológico, IA y transformación digital con sede en Calgary.',
    'featured.latinosCalgary.description': 'Primer marketplace para la comunidad hispana en Calgary, desarrollado por RCW Innovation. Caso de éxito en e-commerce, SEO local y posicionamiento orgánico.',

    // Blog
    'blog.badge': 'Blog & Prensa',
    'blog.title': 'Insights, casos de éxito y',
    'blog.titleHighlight': 'menciones en prensa',
    'blog.subtitle': 'Artículos sobre desarrollo, IA y transformación digital, y publicaciones donde RCW Innovation ha sido mencionada.',
    'blog.readMore': 'Leer artículo',
    'blog.viewAll': 'Ver todos los artículos',
    'blog.category.case-study': 'Caso de éxito',
    'blog.category.ai': 'Inteligencia Artificial',
    'blog.category.web-development': 'Desarrollo Web',
    'blog.category.press': 'Prensa',
    
    // Services
    'services.badge': 'Servicios principales',
    'services.title': 'Soluciones que impulsan tu negocio',
    'services.subtitle': 'Ofrecemos ocho categorías de servicio especializadas, cada una diseñada para maximizar el impacto en tu negocio con tecnología de vanguardia.',
    'services.viewMore': 'Ver más detalles',
    'service.1.title': 'Diseño de Software a la Medida',
    'service.1.tag': 'Premium',
    'service.1.description': 'Desarrollo de MVPs y plataformas escalables con arquitecturas modulares, APIs seguras y dashboards intuitivos.',
    'service.1.features': 'Arquitecturas modulares,APIs seguras,Dashboards intuitivos',
    'service.2.title': 'Branding y Redes Sociales',
    'service.2.tag': 'Estrategia',
    'service.2.description': 'Construcción de identidad visual y contenidos de alto impacto. Combinamos marketing orgánico y de pago.',
    'service.2.features': 'Identidad visual,Marketing orgánico,Campañas de pago',
    'service.3.title': 'Automatizaciones con IA',
    'service.3.tag': 'Operación',
    'service.3.description': 'Workflows inteligentes para atención, ventas y operaciones, integrados con CRM/ERP.',
    'service.3.features': 'Workflows inteligentes,Integración CRM/ERP,Atención 24/7',
    'service.4.title': 'Creación de Agentes IA',
    'service.4.tag': 'Inteligencia',
    'service.4.description': 'Desarrollo de agentes conversacionales y de back-end que aprenden de tus datos empresariales.',
    'service.4.features': 'Agentes conversacionales,Aprendizaje continuo,Integración backend',
    'service.5.title': 'Sistemas de Gestión',
    'service.5.tag': 'Operaciones',
    'service.5.description': 'Diseño e implementación de ERP/CRM/SGC con dashboards y automatización.',
    'service.5.features': 'ERP/CRM personalizado,Dashboards en tiempo real,Automatización',
    'service.6.title': 'Tarjeta Digital Profesional',
    'service.6.tag': 'Smart',
    'service.6.description': 'Tarjeta digital con QR/NFC, vCard y analíticas para networking profesional.',
    'service.6.features': 'QR/NFC integrado,vCard automática,Analytics de contactos',
    'service.7.title': 'Diseño Web – App Móvil',
    'service.7.tag': 'Web Pro',
    'service.7.description': 'Sitios orientados a conversión con SEO técnico, e-commerce y apps PWA.',
    'service.7.features': 'SEO desde arquitectura,E-commerce seguro,Apps móviles/PWA',
    'service.8.title': 'Mentoría & Capacitación',
    'service.8.tag': 'Upskilling',
    'service.8.description': 'Programas 1:1 y para equipos sobre IA, productividad, automatización, UX y analítica.',
    'service.8.features': 'Planes personalizados,Workshops prácticos,Seguimiento continuo',
    
    // Metrics
    'metrics.badge': 'Resultados comprobados',
    'metrics.title': 'Beneficios medibles',
    'metrics.subtitle': 'Métricas de referencia típicas de nuestros proyectos que demuestran el impacto real en los negocios.',
    'metric.1.value': '+45%',
    'metric.1.label': 'Eficiencia Operativa',
    'metric.1.description': 'Mejora promedio en procesos automatizados',
    'metric.2.value': '3.2x',
    'metric.2.label': 'Mejora en Conversión',
    'metric.2.description': 'Incremento en tasas de conversión',
    'metric.3.value': '-35%',
    'metric.3.label': 'Reducción de Costos',
    'metric.3.description': 'Ahorro gracias a automatización',
    'metric.4.value': '99.9%',
    'metric.4.label': 'Disponibilidad',
    'metric.4.description': 'Uptime en nuestras plataformas',
    
    // Projects
    'projects.badge': 'Casos de éxito',
    'projects.title': 'Proyectos destacados',
    'projects.subtitle': 'Soluciones reales que hemos implementado para empresas que buscaban resultados tangibles.',
    'project.1.title': 'Servicios Latinos Canadá',
    'project.1.description': 'Primera aplicación web y marketplace de servicios para latinos en Canadá. Conectamos a la comunidad hispanohablante con profesionales y negocios locales.',
    'project.1.resultLabel': 'marketplace latino en Canadá',
    'project.1.tags': 'Marketplace,Comunidad Latina,Web App',
    'project.2.title': 'Suite de Automatización',
    'project.2.description': 'Para atención y ventas, integrando CRM y agentes de IA.',
    'project.2.resultLabel': 'velocidad de respuesta',
    'project.2.tags': 'CRM,Agentes IA,Automatización',
    'project.3.title': 'E-commerce Headless',
    'project.3.description': 'Con SEO técnico y analítica avanzada para maximizar ventas orgánicas.',
    'project.3.resultLabel': 'ingresos orgánicos',
    'project.3.tags': 'E-commerce,SEO,Analytics',
    'project.4.title': 'Plataforma de Gestión',
    'project.4.description': 'Con dashboards en tiempo real y permisos por rol para control total.',
    'project.4.resultLabel': 'tiempos operativos',
    'project.4.tags': 'Dashboard,ERP,Permisos',
    
    // Why Us
    'whyUs.badge': 'Nuestra diferencia',
    'whyUs.title': '¿Por qué elegirnos en Calgary?',
    'whyUs.subtitle': 'Somos la agencia de diseño web de confianza para la comunidad hispana en Calgary.',
    'whyUs.descriptionDesktop': 'No solo desarrollamos páginas web o software. Diseñamos sistemas digitales que generan resultados reales.\n\nEn RCW Innovation combinamos ingeniería, estrategia, automatización con IA y visión de negocio para ayudar a empresas y emprendedores a crecer de forma sostenible en un entorno digital cada vez más competitivo.\n\nTrabajamos con un enfoque orientado a objetivos, no a entregables aislados. Cada proyecto se diseña pensando en eficiencia, escalabilidad y retorno de inversión, integrando tecnología moderna, procesos claros y métricas medibles desde el inicio.\n\nNos diferenciamos porque entendemos tanto la parte técnica como la realidad del negocio. Esto nos permite crear soluciones a medida —desde diseño web profesional hasta automatización con inteligencia artificial— que realmente se adaptan a tus necesidades, a tu mercado y a tu etapa de crecimiento.\n\nAdemás, ofrecemos una visión global con ejecución local: acompañamos a empresas en Calgary y a nivel internacional, aplicando buenas prácticas de innovación, transformación digital y automatización que hoy valoran los buscadores y los motores de IA.',
    'whyUs.descriptionMobile': 'Somos un equipo de ingenieros que diseña soluciones digitales a medida, orientadas a resultados reales.\n\nDesarrollo web, software personalizado y automatización con IA para empresas que buscan crecer de forma escalable y medible.',
    'whyUs.reason.1.title': 'Atención en Español',
    'whyUs.reason.1.description': 'Comunicación clara y directa en tu idioma. Sin barreras, sin malentendidos.',
    'whyUs.reason.2.title': 'Calidad Premium',
    'whyUs.reason.2.description': 'Diseños de alta gama que compiten con las mejores agencias del mercado.',
    'whyUs.reason.3.title': 'Entrega Rápida',
    'whyUs.reason.3.description': 'Proyectos entregados en 2-4 semanas sin sacrificar calidad.',
    'whyUs.reason.4.title': 'Soporte Local',
    'whyUs.reason.4.description': 'Estamos en Calgary, listos para reunirnos contigo cuando lo necesites.',
    'whyUs.reason.5.title': 'Experiencia Comprobada',
    'whyUs.reason.5.description': 'Más de 50 proyectos exitosos para emprendedores y empresas.',
    'whyUs.reason.6.title': 'Resultados Medibles',
    'whyUs.reason.6.description': 'Enfocados en generar leads y conversiones reales para tu negocio.',
    'whyUs.testimonials.title': 'Lo que dicen nuestros clientes',
    'whyUs.testimonial.1.name': 'María García',
    'whyUs.testimonial.1.company': 'Restaurante El Sol',
    'whyUs.testimonial.1.text': 'RCW Innovation transformó nuestra presencia online. Ahora recibimos el doble de reservas.',
    'whyUs.testimonial.2.name': 'Carlos Mendoza',
    'whyUs.testimonial.2.company': 'CM Construcciones',
    'whyUs.testimonial.2.text': 'Profesionales, puntuales y excelente comunicación. Nuestra web genera leads cada semana.',
    'whyUs.testimonial.3.name': 'Ana Torres',
    'whyUs.testimonial.3.company': 'Torres Legal Services',
    'whyUs.testimonial.3.text': 'El mejor equipo de diseño web en Calgary. Atención personalizada y resultados increíbles.',
    
    // About Us
    'about.badge': 'Sobre Nosotros',
    'about.title': 'Más de',
    'about.titleHighlight': '10 años',
    'about.titleEnd': 'transformando empresas',
    'about.subtitle': 'Somos un equipo de profesionales con amplia experiencia en ingeniería, nuevas tecnologías y diseño de software, dedicados a impulsar la transformación digital de empresas en Canadá y Latinoamérica.',
    'about.stat.1.number': '10+',
    'about.stat.1.label': 'Años de experiencia',
    'about.stat.2.number': '100+',
    'about.stat.2.label': 'Proyectos entregados',
    'about.stat.3.number': '50+',
    'about.stat.3.label': 'Clientes satisfechos',
    'about.stat.4.number': '5',
    'about.stat.4.label': 'Países atendidos',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.text': 'Impulsar la transformación digital de organizaciones en Canadá y Colombia mediante el diseño, implementación y evolución de soluciones tecnológicas avanzadas, integrando estrategia empresarial, ingeniería de software e inteligencia artificial para generar eficiencia operativa, ventaja competitiva y crecimiento sostenible en entornos altamente dinámicos y regulados.',
    'about.vision.title': 'Nuestra Visión',
    'about.vision.text': 'Ser una firma de referencia en innovación y transformación digital en América, con presencia consolidada en Canadá y Colombia, reconocida por su enfoque estratégico, excelencia técnica y capacidad de ejecución, y por crear ecosistemas tecnológicos escalables que fortalecen la toma de decisiones, optimizan la operación y elevan el desempeño empresarial de nuestros clientes a largo plazo.',
    'about.values.title': 'Nuestros Valores',
    'about.value.1.title': 'Innovación continua',
    'about.value.1.description': 'Siempre adoptamos lo último en IA, software y diseño para ofrecer resultados diferenciados.',
    'about.value.2.title': 'Profesionalismo y calidad',
    'about.value.2.description': 'Nos comprometemos con estándares altos y estrategias basadas en normativas y buenas prácticas.',
    'about.value.3.title': 'Claridad y cercanía',
    'about.value.3.description': 'Comunicamos cada paso con transparencia y acompañamos al cliente en su idioma (español o inglés).',
    'about.value.4.title': 'Orientación al cliente',
    'about.value.4.description': 'Ponemos las necesidades de cada proyecto al centro, respetando su contexto y cultura.',
    'about.value.5.title': 'Orgullo latino',
    'about.value.5.description': 'Celebramos nuestras raíces y trabajamos para abrir oportunidades a la comunidad hispanohablante en Canadá.',
    
    // Founder
    'founder.badge': 'Quién está detrás',
    'founder.title': 'Quién está detrás de',
    'founder.titleHighlight': 'RCW Innovation',
    'founder.subtitle': 'Liderazgo, ingeniería y estrategia para impulsar la transformación digital en Canadá y Latinoamérica.',
    'founder.name': 'Ricardo Luna Becerra',
    'founder.role': 'CEO & Fundador · Ingeniero Industrial y de Proyectos',
    'founder.bio1': 'RCW Innovation Inc. es liderada por Ricardo Luna Becerra, Ingeniero Industrial y de Proyectos especializado en innovación, transformación digital y soluciones tecnológicas aplicadas a negocios.',
    'founder.bio2': 'A lo largo de su trayectoria ha combinado ingeniería, estrategia y tecnología para diseñar e implementar sistemas inteligentes que optimizan procesos, automatizan operaciones y mejoran el rendimiento organizacional en empresas de Canadá y Latinoamérica.',
    'founder.bio3': 'Su experiencia incluye liderazgo de proyectos bajo estándares internacionales como ISO y HSEQ, gestión de equipos multidisciplinarios y desarrollo de soluciones a medida como CRM, ERP y plataformas de automatización.',
    'founder.connect': 'Conecta con el fundador',
    'founder.team.title': 'Liderazgo y equipo especializado',
    'founder.team.text': 'Como CEO y fundador, Ricardo lidera un equipo multidisciplinario de ingenieros, desarrolladores, estrategas y especialistas digitales con experiencia avanzada en:',
    'founder.team.skill1': 'Marketing digital y SEO',
    'founder.team.skill2': 'Branding y estrategia de marca',
    'founder.team.skill3': 'Desarrollo de software a medida',
    'founder.team.skill4': 'Automatización e inteligencia artificial',
    'founder.team.skill5': 'Sistemas ERP y CRM',
    'founder.team.skill6': 'Optimización de procesos empresariales',
    'founder.strategy.title': 'Pensamiento estratégico y valor empresarial',
    'founder.strategy.text': 'Ricardo identifica rápidamente oportunidades de negocio, ineficiencias y cuellos de botella operativos, permitiendo a las organizaciones tomar decisiones más rápidas, precisas y basadas en datos.',
    'founder.engineering.title': 'Ingeniería, consultoría y transformación digital',
    'founder.engineering.text': 'Combinando experiencia en transformación digital empresarial con consultoría y diseño de sistemas de ingeniería, RCW Innovation desarrolla ecosistemas tecnológicos escalables que integran la tecnología de manera precisa en los procesos empresariales.',
    'founder.platforms.title': 'Plataformas propias e innovación',
    'founder.platforms.text': 'No solo desarrollamos soluciones para clientes: también creamos plataformas digitales propias con impacto real en la comunidad.',
    'founder.platform1.name': 'Servicios Latinos Canada',
    'founder.platform1.desc': 'Plataforma digital que conecta a la comunidad hispana con servicios, empleos y negocios verificados en Calgary, Toronto y Vancouver. Posicionada en los primeros resultados de Google.',
    'founder.platform1.cta': 'Visitar plataforma',
    'founder.platform2.name': 'Canada One Click',
    'founder.platform2.desc': 'Plataforma impulsada por IA enfocada en comunidades y networking, diseñada para conectar inmigrantes, profesionales y empresas en todo Canadá mediante interacciones inteligentes basadas en datos.',
    'founder.platform2.cta': 'Visitar plataforma',

    // Join Team
    'joinTeam.badge': 'Únete al Equipo',
    'joinTeam.title': '¿Quieres ser parte de',
    'joinTeam.titleHighlight': 'RCW Innovation',
    'joinTeam.titleEnd': '?',
    'joinTeam.subtitle': 'Buscamos profesionales apasionados por la tecnología y la innovación. Con más de 10 años de experiencia, nuestro equipo está compuesto por ingenieros, diseñadores y estrategas que transforman ideas en soluciones de impacto.',
    'joinTeam.benefit.1.title': 'Proyectos Innovadores',
    'joinTeam.benefit.1.description': 'Trabaja con tecnologías de vanguardia como IA, automatización y cloud computing.',
    'joinTeam.benefit.2.title': 'Equipo Global',
    'joinTeam.benefit.2.description': 'Colabora con profesionales en Canadá, Colombia y otros países de Latinoamérica.',
    'joinTeam.benefit.3.title': 'Crecimiento Profesional',
    'joinTeam.benefit.3.description': 'Capacitación continua, mentorías y oportunidades de desarrollo.',
    'joinTeam.benefit.4.title': 'Cultura de Innovación',
    'joinTeam.benefit.4.description': 'Un ambiente donde tus ideas son valoradas y pueden convertirse en realidad.',
    'joinTeam.professional': 'Únete al equipo',
    'joinTeam.professionalDesc': '¿Buscas una oportunidad profesional? Envíanos tu CV y te contactaremos cuando haya una posición para ti.',
    'joinTeam.applyProfessional': 'Enviar aplicación',
    'joinTeam.volunteer': 'Voluntariado',
    'joinTeam.volunteerDesc': '¿Quieres ganar experiencia y contribuir a proyectos innovadores? Únete como voluntario y aprende con nosotros.',
    'joinTeam.applyVolunteer': 'Aplicar como voluntario',
    'joinTeam.modal.title': 'Aplicar a:',
    'joinTeam.modal.subtitle': 'Completa el formulario y nos pondremos en contacto contigo.',
    'joinTeam.form.name': 'Nombre completo',
    'joinTeam.form.namePlaceholder': 'Tu nombre',
    'joinTeam.form.email': 'Email',
    'joinTeam.form.emailPlaceholder': 'tu@email.com',
    'joinTeam.form.phone': 'Número de teléfono',
    'joinTeam.form.phonePlaceholder': '+1 (555) 123-4567',
    'joinTeam.form.city': 'Ciudad',
    'joinTeam.form.cityPlaceholder': 'Ej: Calgary, Toronto, Bogotá...',
    'joinTeam.form.linkedin': 'LinkedIn / Portafolio',
    'joinTeam.form.linkedinPlaceholder': 'https://linkedin.com/in/tu-perfil',
    'joinTeam.form.message': '¿Por qué quieres unirte a RCW Innovation?',
    'joinTeam.form.messagePlaceholder': 'Cuéntanos sobre ti y tu motivación...',
    'joinTeam.form.submit': 'Enviar aplicación',
    'joinTeam.toast.title': '¡Aplicación enviada!',
    'joinTeam.toast.description': 'Revisaremos tu perfil y te contactaremos pronto.',
    
    // Process
    'process.badge': 'Cómo trabajamos',
    'process.title': 'Nuestro proceso',
    'process.subtitle': 'Un proceso transparente y eficiente que garantiza resultados medibles en cada etapa.',
    'process.step.1.title': 'Descubrimiento',
    'process.step.1.description': 'Definición de objetivos, audiencias y métricas. Diagnóstico de oportunidades.',
    'process.step.2.title': 'Diseño',
    'process.step.2.description': 'UX/UI premium, arquitectura técnica y roadmap de entregas.',
    'process.step.3.title': 'Desarrollo',
    'process.step.3.description': 'Implementación ágil con seguridad y pruebas automatizadas.',
    'process.step.4.title': 'Implementación',
    'process.step.4.description': 'Despliegue escalable, monitoreo y entrenamiento de equipos.',
    'process.step.5.title': 'Optimización',
    'process.step.5.description': 'Medición de KPIs e iteración para crecimiento sostenido.',
    
    // FAQ
    'faq.badge': 'Resuelve tus dudas',
    'faq.title': 'Preguntas frecuentes',
    'faq.subtitle': 'Respuestas claras a las preguntas más comunes sobre nuestros servicios.',
    'faq.1.question': '¿Cuál es la diferencia entre Asesoría 5.0 y Consultoría 5.0?',
    'faq.1.answer': 'La Asesoría 5.0 son sesiones rápidas (30-90 días) enfocadas en diagnóstico y plan de acción inmediato. La Consultoría 5.0 es un proyecto integral que incluye roadmap completo, implementación y optimización continua.',
    'faq.2.question': '¿Cómo pueden ayudar a mi negocio?',
    'faq.2.answer': 'Unimos tecnología, automatización y estrategia para eliminar tareas repetitivas, fortalecer tu marca y convertir más leads en clientes. Todo respaldado por métricas y resultados medibles.',
    'faq.3.question': '¿Se integran con sistemas existentes?',
    'faq.3.answer': 'Sí, nos integramos con CRM, ERP y otras suites como Kommo, HubSpot, Odoo, Zoho y SAP. Nuestro enfoque es potenciar lo que ya funciona, no reemplazarlo.',
    'faq.4.question': '¿Cuánto tiempo toma ver resultados?',
    'faq.4.answer': 'Prometemos "quick wins" en 2-3 semanas, un MVP funcional en 4-8 semanas y despliegues completos en 8-12 semanas, dependiendo de la complejidad del proyecto.',
    'faq.5.question': '¿Cómo manejan la seguridad de la información?',
    'faq.5.answer': 'Usamos NDA, cifrado de datos, control de acceso estricto y nunca utilizamos los datos de clientes para entrenar modelos sin permiso expreso.',
    'faq.6.question': '¿Cuáles son las opciones de inversión y pago?',
    'faq.6.answer': 'Ofrecemos proyectos por hitos o "retainers" mensuales, con opciones de financiamiento disponibles para proyectos de mayor envergadura.',
    'faq.7.question': '¿Quién es dueño del código al finalizar?',
    'faq.7.answer': 'El cliente conserva la propiedad total del proyecto y todo el código desarrollado. La empresa retiene únicamente la autoría técnica y metodológica.',
    'faq.8.question': '¿Qué los diferencia de otras agencias?',
    'faq.8.answer': 'No vendemos servicios, diseñamos sistemas que generan resultados reales. Combinamos branding, tecnología de punta e innovación con un enfoque 100% orientado a métricas.',
    'faq.9.question': '¿Cómo puedo empezar?',
    'faq.9.answer': 'Agenda una Asesoría o Consultoría 5.0. Analizaremos tus objetivos, identificaremos oportunidades y crearemos un roadmap personalizado para tu negocio.',
    
    // CTA
    'cta.badge': 'Empieza hoy',
    'cta.title': 'Agenda tu asesoría estratégica',
    'cta.subtitle': 'Da el primer paso hacia una presencia digital profesional. Agenda una consulta y descubre cómo podemos ayudarte a crecer tu negocio en Calgary.',
    'cta.button': 'Agenda tu asesoría estratégica',
    'cta.diagnostic': 'Generar Diagnóstico 5.0',
    'cta.whatsapp': 'Hola, me interesa una asesoría estratégica para mi sitio web',
    'cta.diagnosis.title': '¿Qué incluye el diagnóstico?',
    'cta.diagnosis.item1': 'Análisis de tu situación actual online',
    'cta.diagnosis.item2': 'Revisión de tu competencia en Calgary',
    'cta.diagnosis.item3': 'Recomendaciones personalizadas',
    'cta.diagnosis.item4': 'Presupuesto sin compromiso',
    'cta.diagnosis.item5': 'Respuestas a todas tus preguntas',
    'cta.noCommitment': '100% sin compromiso.',
    'cta.noCommitmentText': 'No tienes que pagar nada para obtener nuestra opinión profesional sobre tu proyecto.',
    'cta.closingPhrase': '"Si estás aquí, no es casualidad. El siguiente paso define tu crecimiento."',
    
    // Footer
    'footer.description': 'Expertos en diseño y desarrollo de páginas web en español para negocios en Calgary, Alberta.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.service.1': 'Software a Medida',
    'footer.service.2': 'Diseño Web & App',
    'footer.service.3': 'Automatizaciones IA',
    'footer.service.4': 'Agentes de IA',
    'footer.link.about': 'Sobre Nosotros',
    'footer.link.process': 'Proceso',
    'footer.link.faq': 'FAQ',
    'footer.link.contact': 'Contacto',
    'footer.link.privacy': 'Política de Privacidad',
    'footer.link.terms': 'Términos de Servicio',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.tagline': 'Diseño web profesional en Calgary, Alberta',
    
    // Chatbot
    'chatbot.greeting': '¡Hola! 👋 Soy el asistente virtual de RCW Innovation. ¿En qué puedo ayudarte hoy?',
    'chatbot.title': 'Asistente RCW',
    'chatbot.status': 'En línea • Respuestas instantáneas',
    'chatbot.placeholder': 'Escribe tu pregunta...',
    'chatbot.moreInfo': '📋 Más información',
    'chatbot.prices': '💰 Precios',
    'chatbot.time': '⏱️ Tiempo de entrega',
    'chatbot.contact': '📞 Contacto',
    'chatbot.services': '🛠️ Servicios',
    
    // Service Page Layout
    'servicePage.backToHome': 'Volver al inicio',
    'servicePage.requestAdvisory': 'Solicitar Asesoría 5.0',
    'servicePage.consulting': 'Consultoría 5.0',
    'servicePage.capabilities': 'Capacidades',
    'servicePage.aiCapabilities': 'Capacidades de IA',
    'servicePage.applications': 'Aplicaciones',
    'servicePage.aiApplications': 'Aplicaciones de IA',
    'servicePage.features': 'Características',
    'servicePage.featuresTitle': 'Lo que incluye este servicio',
    'servicePage.advantages': 'Ventajas',
    'servicePage.readyToStart': '¿Listo para empezar?',
    'servicePage.scheduleAdvisory': 'Agendar Asesoría',
    'servicePage.plans': 'Planes',
    'servicePage.aiAgentsPlans': 'Planes de Agentes de IA',
    'servicePage.mostPopular': 'Más Popular',
    'servicePage.perMonth': '/mes',
    'servicePage.capacity': 'Capacidad',
    'servicePage.setup': 'Configuración',
    'servicePage.extraLanguage': 'Idioma extra',
    'servicePage.selectPlan': 'Seleccionar Plan',
    'servicePage.techStack': 'Stack Tecnológico',
    'servicePage.techUsed': 'Tecnologías utilizadas',
    'servicePage.methodology': 'Metodología',
    'servicePage.howWeDoIt': 'Cómo lo hacemos',
    'servicePage.faq': 'FAQ',
    'servicePage.faqTitle': 'Preguntas frecuentes',
    'servicePage.relatedServices': 'Servicios relacionados',
    'servicePage.viewMore': 'Ver más',
    'servicePage.ctaDescription': 'Agenda una sesión y descubre cómo podemos transformar tu negocio con soluciones a medida.',
    'servicePage.diagnosticExpress': 'Diagnóstico Express',
    'servicePage.problemSolution.step1': 'Situación Actual',
    'servicePage.problemSolution.step2': 'El Desafío',
    'servicePage.problemSolution.step3': 'Nuestra Solución',
    'servicePage.problemSolution.step4': 'Tu Transformación',
    'servicePage.problemSolution.clickToExplore': 'Haz clic para explorar cada paso',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.whyUs': 'Why Choose Us?',
    'nav.process': 'Process',
    'nav.founder': 'Founder',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Book Consultation',
    
    // Hero
    'hero.badge': 'Innovation, Engineering & Automation 5.0',
    'hero.title.words1': 'AI,Automation,,Custom,Software,&',
    'hero.title.highlight': 'Web Design',
    'hero.title.words2': 'Solutions,in,Canada',
    'hero.subtitle': 'We design engineering, AI and automation 5.0 solutions from Calgary for businesses across Canada.',
    'hero.cta.consultation': 'Request Consultation',
    'hero.cta.diagnostic': 'Consulting 5.0',
    'hero.card.innovation': 'Innovation',
    'hero.card.innovationDesc': 'Cutting-edge technology, modern architectures and AI agents that learn from your data.',
    'hero.card.strategy': 'Strategy',
    'hero.card.strategyDesc': 'We identify opportunities, create actionable roadmaps and maximize your return on investment.',
    'hero.card.results': 'Results',
    'hero.card.resultsDesc': 'Clear KPIs, continuous optimization and deliverables that impact sales, processes and experience.',
    
    // Clients
    'clients.badge': 'Clients who trust us',
    'clients.title': 'Companies that have grown with',
    'clients.titleHighlight': 'RCW Innovation',
    
    // Tech Stack
    'techStack.badge': 'Technologies we master',
    'techStack.title': 'Tech stack and',
    'techStack.titleHighlight': 'AI tools',
    'techStack.subtitle': 'We work with the most advanced development technologies and artificial intelligence platforms on the market to deliver robust, scalable and future-proof solutions.',
    'techStack.codeLabel': 'Development',
    'techStack.aiLabel': 'Artificial Intelligence & Automation',

    // Featured In / Press
    'featured.badge': 'Featured in & collaborations',
    'featured.title': 'Platforms where',
    'featured.titleHighlight': 'we have collaborated',
    'featured.subtitle': 'Platforms, directories and media where our projects have been published, referenced or built by RCW Innovation.',
    'featured.visit': 'Visit platform',
    'featured.altSuffix': 'platform where RCW Innovation has collaborated',
    'featured.tag.directory': 'National Directory',
    'featured.tag.marketplace': 'Hispanic Marketplace',
    'featured.canadaOneClick.description': 'Canadian national directory where RCW Innovation is listed as a technology, AI and digital transformation company based in Calgary.',
    'featured.latinosCalgary.description': 'First marketplace for the Hispanic community in Calgary, built by RCW Innovation. A success case in e-commerce, local SEO and organic positioning.',

    // Blog
    'blog.badge': 'Blog & Press',
    'blog.title': 'Insights, case studies and',
    'blog.titleHighlight': 'press mentions',
    'blog.subtitle': 'Articles on development, AI and digital transformation, plus publications where RCW Innovation has been featured.',
    'blog.readMore': 'Read article',
    'blog.viewAll': 'View all articles',
    'blog.category.case-study': 'Case Study',
    'blog.category.ai': 'Artificial Intelligence',
    'blog.category.web-development': 'Web Development',
    'blog.category.press': 'Press',
    
    // Services
    'services.badge': 'Main Services',
    'services.title': 'Solutions that drive your business',
    'services.subtitle': 'We offer eight specialized service categories, each designed to maximize impact on your business with cutting-edge technology.',
    'services.viewMore': 'View more details',
    'service.1.title': 'Custom Software Design',
    'service.1.tag': 'Premium',
    'service.1.description': 'Development of MVPs and scalable platforms with modular architectures, secure APIs and intuitive dashboards.',
    'service.1.features': 'Modular architectures,Secure APIs,Intuitive dashboards',
    'service.2.title': 'Branding & Social Media',
    'service.2.tag': 'Strategy',
    'service.2.description': 'Building visual identity and high-impact content. We combine organic and paid marketing.',
    'service.2.features': 'Visual identity,Organic marketing,Paid campaigns',
    'service.3.title': 'AI Automations',
    'service.3.tag': 'Operations',
    'service.3.description': 'Intelligent workflows for customer service, sales and operations, integrated with CRM/ERP.',
    'service.3.features': 'Intelligent workflows,CRM/ERP integration,24/7 support',
    'service.4.title': 'AI Agents Creation',
    'service.4.tag': 'Intelligence',
    'service.4.description': 'Development of conversational and back-end agents that learn from your business data.',
    'service.4.features': 'Conversational agents,Continuous learning,Backend integration',
    'service.5.title': 'Management Systems',
    'service.5.tag': 'Operations',
    'service.5.description': 'Design and implementation of ERP/CRM/SGC with dashboards and automation.',
    'service.5.features': 'Custom ERP/CRM,Real-time dashboards,Automation',
    'service.6.title': 'Professional Digital Card',
    'service.6.tag': 'Smart',
    'service.6.description': 'Digital card with QR/NFC, vCard and analytics for professional networking.',
    'service.6.features': 'Integrated QR/NFC,Automatic vCard,Contact analytics',
    'service.7.title': 'Web Design – Mobile App',
    'service.7.tag': 'Web Pro',
    'service.7.description': 'Conversion-oriented sites with technical SEO, e-commerce and PWA apps.',
    'service.7.features': 'SEO from architecture,Secure e-commerce,Mobile/PWA apps',
    'service.8.title': 'Mentoring & Training',
    'service.8.tag': 'Upskilling',
    'service.8.description': '1:1 and team programs on AI, productivity, automation, UX and analytics.',
    'service.8.features': 'Personalized plans,Practical workshops,Continuous follow-up',
    
    // Metrics
    'metrics.badge': 'Proven Results',
    'metrics.title': 'Measurable Benefits',
    'metrics.subtitle': 'Typical benchmark metrics from our projects that demonstrate real business impact.',
    'metric.1.value': '+45%',
    'metric.1.label': 'Operational Efficiency',
    'metric.1.description': 'Average improvement in automated processes',
    'metric.2.value': '3.2x',
    'metric.2.label': 'Conversion Improvement',
    'metric.2.description': 'Increase in conversion rates',
    'metric.3.value': '-35%',
    'metric.3.label': 'Cost Reduction',
    'metric.3.description': 'Savings through automation',
    'metric.4.value': '99.9%',
    'metric.4.label': 'Availability',
    'metric.4.description': 'Uptime on our platforms',
    
    // Projects
    'projects.badge': 'Success Stories',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Real solutions we have implemented for companies looking for tangible results.',
    'project.1.title': 'Servicios Latinos Canadá',
    'project.1.description': 'First web application and marketplace of services for Latinos in Canada. We connect the Spanish-speaking community with local professionals and businesses.',
    'project.1.resultLabel': 'Latino marketplace in Canada',
    'project.1.tags': 'Marketplace,Latino Community,Web App',
    'project.2.title': 'Automation Suite',
    'project.2.description': 'For customer service and sales, integrating CRM and AI agents.',
    'project.2.resultLabel': 'response speed',
    'project.2.tags': 'CRM,AI Agents,Automation',
    'project.3.title': 'Headless E-commerce',
    'project.3.description': 'With technical SEO and advanced analytics to maximize organic sales.',
    'project.3.resultLabel': 'organic revenue',
    'project.3.tags': 'E-commerce,SEO,Analytics',
    'project.4.title': 'Management Platform',
    'project.4.description': 'With real-time dashboards and role-based permissions for full control.',
    'project.4.resultLabel': 'operational times',
    'project.4.tags': 'Dashboard,ERP,Permissions',
    
    // Why Us
    'whyUs.badge': 'Our Difference',
    'whyUs.title': 'Why choose us in Calgary?',
    'whyUs.subtitle': 'We are the trusted web design agency for the Hispanic community in Calgary.',
    'whyUs.descriptionDesktop': 'We don\'t just build websites or software. We design digital systems that deliver real results.\n\nAt RCW Innovation, we combine engineering, strategy, AI automation, and business vision to help companies and entrepreneurs grow sustainably in an increasingly competitive digital environment.\n\nWe work with a goal-oriented approach, not isolated deliverables. Every project is designed with efficiency, scalability, and ROI in mind, integrating modern technology, clear processes, and measurable metrics from the start.\n\nWe stand out because we understand both the technical side and business reality. This allows us to create tailored solutions—from professional web design to AI automation—that truly adapt to your needs, your market, and your growth stage.\n\nAdditionally, we offer a global vision with local execution: we support companies in Calgary and internationally, applying best practices in innovation, digital transformation, and automation that search engines and AI engines value today.',
    'whyUs.descriptionMobile': 'We are a team of engineers who design custom digital solutions, focused on real results.\n\nWeb development, custom software, and AI automation for companies looking to grow in a scalable and measurable way.',
    'whyUs.reason.1.title': 'Spanish Support',
    'whyUs.reason.1.description': 'Clear and direct communication in your language. No barriers, no misunderstandings.',
    'whyUs.reason.2.title': 'Premium Quality',
    'whyUs.reason.2.description': 'High-end designs that compete with the best agencies in the market.',
    'whyUs.reason.3.title': 'Fast Delivery',
    'whyUs.reason.3.description': 'Projects delivered in 2-4 weeks without sacrificing quality.',
    'whyUs.reason.4.title': 'Local Support',
    'whyUs.reason.4.description': 'We are in Calgary, ready to meet with you when you need it.',
    'whyUs.reason.5.title': 'Proven Experience',
    'whyUs.reason.5.description': 'More than 50 successful projects for Hispanic businesses in Alberta.',
    'whyUs.reason.6.title': 'Measurable Results',
    'whyUs.reason.6.description': 'Focused on generating real leads and conversions for your business.',
    'whyUs.testimonials.title': 'What our clients say',
    'whyUs.testimonial.1.name': 'María García',
    'whyUs.testimonial.1.company': 'El Sol Restaurant',
    'whyUs.testimonial.1.text': 'RCW Innovation transformed our online presence. Now we receive twice as many reservations.',
    'whyUs.testimonial.2.name': 'Carlos Mendoza',
    'whyUs.testimonial.2.company': 'CM Construction',
    'whyUs.testimonial.2.text': 'Professional, punctual and excellent communication. Our website generates leads every week.',
    'whyUs.testimonial.3.name': 'Ana Torres',
    'whyUs.testimonial.3.company': 'Torres Legal Services',
    'whyUs.testimonial.3.text': 'The best web design team in Calgary. Personalized attention and incredible results.',
    
    // About Us
    'about.badge': 'About Us',
    'about.title': 'More than',
    'about.titleHighlight': '10 years',
    'about.titleEnd': 'transforming businesses',
    'about.subtitle': 'We are a team of professionals with extensive experience in engineering, new technologies and software design, dedicated to driving the digital transformation of companies in Canada and Latin America.',
    'about.stat.1.number': '10+',
    'about.stat.1.label': 'Years of experience',
    'about.stat.2.number': '100+',
    'about.stat.2.label': 'Projects delivered',
    'about.stat.3.number': '50+',
    'about.stat.3.label': 'Satisfied clients',
    'about.stat.4.number': '5',
    'about.stat.4.label': 'Countries served',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To drive the digital transformation of organizations in Canada and Colombia through the design, implementation and evolution of advanced technological solutions, integrating business strategy, software engineering and artificial intelligence to generate operational efficiency, competitive advantage and sustainable growth in highly dynamic and regulated environments.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be a reference firm in innovation and digital transformation in the Americas, with consolidated presence in Canada and Colombia, recognized for its strategic approach, technical excellence and execution capability, and for creating scalable technological ecosystems that strengthen decision-making, optimize operations and elevate the long-term business performance of our clients.',
    'about.values.title': 'Our Values',
    'about.value.1.title': 'Continuous innovation',
    'about.value.1.description': 'We always adopt the latest in AI, software and design to deliver differentiated results.',
    'about.value.2.title': 'Professionalism and quality',
    'about.value.2.description': 'We commit to high standards and strategies based on regulations and best practices.',
    'about.value.3.title': 'Clarity and closeness',
    'about.value.3.description': 'We communicate every step with transparency and accompany the client in their language (Spanish or English).',
    'about.value.4.title': 'Customer orientation',
    'about.value.4.description': 'We put the needs of each project at the center, respecting their context and culture.',
    'about.value.5.title': 'Latino pride',
    'about.value.5.description': 'We celebrate our roots and work to open opportunities for the Spanish-speaking community in Canada.',
    
    // Founder
    'founder.badge': 'Who is behind',
    'founder.title': 'Who is behind',
    'founder.titleHighlight': 'RCW Innovation',
    'founder.subtitle': 'Leadership, engineering and strategy to drive digital transformation across Canada and Latin America.',
    'founder.name': 'Ricardo Luna Becerra',
    'founder.role': 'CEO & Founder · Industrial and Project Engineer',
    'founder.bio1': 'RCW Innovation Inc. is led by Ricardo Luna Becerra, an Industrial and Project Engineer specialized in innovation, digital transformation and technology solutions applied to business.',
    'founder.bio2': 'Throughout his career he has combined engineering, strategy and technology to design and implement intelligent systems that optimize processes, automate operations and improve organizational performance for companies in Canada and Latin America.',
    'founder.bio3': 'His experience includes leading projects under international standards like ISO and HSEQ, managing multidisciplinary teams and developing custom solutions such as CRM, ERP and automation platforms.',
    'founder.connect': 'Connect with the Founder',
    'founder.team.title': 'Leadership and specialized team',
    'founder.team.text': 'As CEO and founder, Ricardo leads a multidisciplinary team of engineers, developers, strategists and digital specialists with advanced expertise in:',
    'founder.team.skill1': 'Digital marketing and SEO',
    'founder.team.skill2': 'Branding and brand strategy',
    'founder.team.skill3': 'Custom software development',
    'founder.team.skill4': 'Automation and artificial intelligence',
    'founder.team.skill5': 'ERP and CRM systems',
    'founder.team.skill6': 'Business process optimization',
    'founder.strategy.title': 'Strategic thinking and business value',
    'founder.strategy.text': 'Ricardo quickly identifies business opportunities, inefficiencies and operational bottlenecks, enabling organizations to make faster, more accurate and data-driven decisions.',
    'founder.engineering.title': 'Engineering, consulting and digital transformation',
    'founder.engineering.text': 'Combining expertise in enterprise digital transformation with consulting and engineering systems design, RCW Innovation builds scalable technology ecosystems that integrate technology precisely into business processes.',
    'founder.platforms.title': 'Proprietary platforms and innovation',
    'founder.platforms.text': 'We not only build solutions for clients — we also create our own digital platforms with real community impact.',
    'founder.platform1.name': 'Servicios Latinos Canada',
    'founder.platform1.desc': 'Digital platform connecting the Hispanic community with verified services, jobs and businesses in Calgary, Toronto and Vancouver. Ranked at the top of Google for high-intent searches.',
    'founder.platform1.cta': 'Visit platform',
    'founder.platform2.name': 'Canada One Click',
    'founder.platform2.desc': 'AI-powered platform focused on community and networking, designed to connect immigrants, professionals and businesses across Canada through smart, data-driven interactions.',
    'founder.platform2.cta': 'Visit platform',

    // Join Team
    'joinTeam.badge': 'Join the Team',
    'joinTeam.title': 'Do you want to be part of',
    'joinTeam.titleHighlight': 'RCW Innovation',
    'joinTeam.titleEnd': '?',
    'joinTeam.subtitle': 'We are looking for professionals passionate about technology and innovation. With over 10 years of experience, our team is made up of engineers, designers and strategists who transform ideas into impactful solutions.',
    'joinTeam.benefit.1.title': 'Innovative Projects',
    'joinTeam.benefit.1.description': 'Work with cutting-edge technologies like AI, automation and cloud computing.',
    'joinTeam.benefit.2.title': 'Global Team',
    'joinTeam.benefit.2.description': 'Collaborate with professionals in Canada, Colombia and other Latin American countries.',
    'joinTeam.benefit.3.title': 'Professional Growth',
    'joinTeam.benefit.3.description': 'Continuous training, mentoring and development opportunities.',
    'joinTeam.benefit.4.title': 'Innovation Culture',
    'joinTeam.benefit.4.description': 'An environment where your ideas are valued and can become reality.',
    'joinTeam.professional': 'Join the team',
    'joinTeam.professionalDesc': 'Looking for a professional opportunity? Send us your CV and we\'ll contact you when there\'s a position for you.',
    'joinTeam.applyProfessional': 'Send application',
    'joinTeam.volunteer': 'Volunteering',
    'joinTeam.volunteerDesc': 'Want to gain experience and contribute to innovative projects? Join as a volunteer and learn with us.',
    'joinTeam.applyVolunteer': 'Apply as volunteer',
    'joinTeam.modal.title': 'Apply to:',
    'joinTeam.modal.subtitle': 'Complete the form and we will contact you.',
    'joinTeam.form.name': 'Full name',
    'joinTeam.form.namePlaceholder': 'Your name',
    'joinTeam.form.email': 'Email',
    'joinTeam.form.emailPlaceholder': 'you@email.com',
    'joinTeam.form.phone': 'Phone number',
    'joinTeam.form.phonePlaceholder': '+1 (555) 123-4567',
    'joinTeam.form.city': 'City',
    'joinTeam.form.cityPlaceholder': 'E.g.: Calgary, Toronto, Bogotá...',
    'joinTeam.form.linkedin': 'LinkedIn / Portfolio',
    'joinTeam.form.linkedinPlaceholder': 'https://linkedin.com/in/your-profile',
    'joinTeam.form.message': 'Why do you want to join RCW Innovation?',
    'joinTeam.form.messagePlaceholder': 'Tell us about yourself and your motivation...',
    'joinTeam.form.submit': 'Send application',
    'joinTeam.toast.title': 'Application sent!',
    'joinTeam.toast.description': 'We will review your profile and contact you soon.',
    
    // Process
    'process.badge': 'How we work',
    'process.title': 'Our Process',
    'process.subtitle': 'A transparent and efficient process that guarantees measurable results at every stage.',
    'process.step.1.title': 'Discovery',
    'process.step.1.description': 'Definition of objectives, audiences and metrics. Opportunity diagnosis.',
    'process.step.2.title': 'Design',
    'process.step.2.description': 'Premium UX/UI, technical architecture and delivery roadmap.',
    'process.step.3.title': 'Development',
    'process.step.3.description': 'Agile implementation with security and automated testing.',
    'process.step.4.title': 'Implementation',
    'process.step.4.description': 'Scalable deployment, monitoring and team training.',
    'process.step.5.title': 'Optimization',
    'process.step.5.description': 'KPI measurement and iteration for sustained growth.',
    
    // FAQ
    'faq.badge': 'Resolve your doubts',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Clear answers to the most common questions about our services.',
    'faq.1.question': 'What is the difference between Advisory 5.0 and Consulting 5.0?',
    'faq.1.answer': 'Advisory 5.0 are quick sessions (30-90 days) focused on diagnosis and immediate action plan. Consulting 5.0 is a comprehensive project that includes complete roadmap, implementation and continuous optimization.',
    'faq.2.question': 'How can you help my business?',
    'faq.2.answer': 'We combine technology, automation and strategy to eliminate repetitive tasks, strengthen your brand and convert more leads into customers. All backed by metrics and measurable results.',
    'faq.3.question': 'Do you integrate with existing systems?',
    'faq.3.answer': 'Yes, we integrate with CRM, ERP and other suites like Kommo, HubSpot, Odoo, Zoho and SAP. Our approach is to enhance what already works, not replace it.',
    'faq.4.question': 'How long does it take to see results?',
    'faq.4.answer': 'We promise "quick wins" in 2-3 weeks, a functional MVP in 4-8 weeks and complete deployments in 8-12 weeks, depending on project complexity.',
    'faq.5.question': 'How do you handle information security?',
    'faq.5.answer': 'We use NDA, data encryption, strict access control and never use client data to train models without express permission.',
    'faq.6.question': 'What are the investment and payment options?',
    'faq.6.answer': 'We offer milestone-based projects or monthly retainers, with financing options available for larger projects.',
    'faq.7.question': 'Who owns the code at the end?',
    'faq.7.answer': 'The client retains full ownership of the project and all developed code. The company retains only technical and methodological authorship.',
    'faq.8.question': 'What differentiates you from other agencies?',
    'faq.8.answer': 'We don\'t sell services, we design systems that generate real results. We combine branding, cutting-edge technology and innovation with a 100% metrics-oriented approach.',
    'faq.9.question': 'How can I get started?',
    'faq.9.answer': 'Schedule an Advisory or Consulting 5.0. We will analyze your objectives, identify opportunities and create a personalized roadmap for your business.',
    
    // CTA
    'cta.badge': 'Start today',
    'cta.title': 'Schedule your strategic consultation',
    'cta.subtitle': 'Take the first step towards a professional digital presence. Schedule a consultation and discover how we can help you grow your business in Calgary.',
    'cta.button': 'Schedule your strategic consultation',
    'cta.diagnostic': 'Generate Diagnostic 5.0',
    'cta.whatsapp': 'Hello, I\'m interested in a strategic consultation for my website',
    'cta.diagnosis.title': 'What does the diagnosis include?',
    'cta.diagnosis.item1': 'Analysis of your current online situation',
    'cta.diagnosis.item2': 'Review of your competition in Calgary',
    'cta.diagnosis.item3': 'Personalized recommendations',
    'cta.diagnosis.item4': 'No-obligation quote',
    'cta.diagnosis.item5': 'Answers to all your questions',
    'cta.noCommitment': '100% no commitment.',
    'cta.noCommitmentText': 'You don\'t have to pay anything to get our professional opinion on your project.',
    'cta.closingPhrase': '"If you\'re here, it\'s not by chance. The next step defines your growth."',
    
    // Footer
    'footer.description': 'Experts in web design and development in Spanish for businesses in Calgary, Alberta.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.service.1': 'Custom Software',
    'footer.service.2': 'Web Design & App',
    'footer.service.3': 'AI Automations',
    'footer.service.4': 'AI Agents',
    'footer.link.about': 'About Us',
    'footer.link.process': 'Process',
    'footer.link.faq': 'FAQ',
    'footer.link.contact': 'Contact',
    'footer.link.privacy': 'Privacy Policy',
    'footer.link.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Professional web design in Calgary, Alberta',
    
    // Chatbot
    'chatbot.greeting': 'Hello! 👋 I\'m the virtual assistant of RCW Innovation. How can I help you today?',
    'chatbot.title': 'RCW Assistant',
    'chatbot.status': 'Online • Instant responses',
    'chatbot.placeholder': 'Type your question...',
    'chatbot.moreInfo': '📋 More info',
    'chatbot.prices': '💰 Pricing',
    'chatbot.time': '⏱️ Delivery time',
    'chatbot.contact': '📞 Contact',
    'chatbot.services': '🛠️ Services',
    
    // Service Page Layout
    'servicePage.backToHome': 'Back to home',
    'servicePage.requestAdvisory': 'Request Advisory 5.0',
    'servicePage.consulting': 'Consulting 5.0',
    'servicePage.capabilities': 'Capabilities',
    'servicePage.aiCapabilities': 'AI Capabilities',
    'servicePage.applications': 'Applications',
    'servicePage.aiApplications': 'AI Applications',
    'servicePage.features': 'Features',
    'servicePage.featuresTitle': 'What this service includes',
    'servicePage.advantages': 'Advantages',
    'servicePage.readyToStart': 'Ready to start?',
    'servicePage.scheduleAdvisory': 'Schedule Advisory',
    'servicePage.plans': 'Plans',
    'servicePage.aiAgentsPlans': 'AI Agents Plans',
    'servicePage.mostPopular': 'Most Popular',
    'servicePage.perMonth': '/month',
    'servicePage.capacity': 'Capacity',
    'servicePage.setup': 'Setup',
    'servicePage.extraLanguage': 'Extra language',
    'servicePage.selectPlan': 'Select Plan',
    'servicePage.techStack': 'Tech Stack',
    'servicePage.techUsed': 'Technologies used',
    'servicePage.methodology': 'Methodology',
    'servicePage.howWeDoIt': 'How we do it',
    'servicePage.faq': 'FAQ',
    'servicePage.faqTitle': 'Frequently Asked Questions',
    'servicePage.relatedServices': 'Related Services',
    'servicePage.viewMore': 'View more',
    'servicePage.ctaDescription': 'Schedule a session and discover how we can transform your business with custom solutions.',
    'servicePage.diagnosticExpress': 'Express Diagnostic',
    'servicePage.problemSolution.step1': 'Current Situation',
    'servicePage.problemSolution.step2': 'The Challenge',
    'servicePage.problemSolution.step3': 'Our Solution',
    'servicePage.problemSolution.step4': 'Your Transformation',
    'servicePage.problemSolution.clickToExplore': 'Click to explore each step',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to extract language from path
const getLanguageFromPath = (pathname: string): Language => {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/es')) return 'es';
  return 'es'; // default
};

// Helper to get base path for current language
const getBasePath = (lang: Language): string => {
  return `/${lang}`;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [language, setLanguageState] = useState<Language>(() => {
    return getLanguageFromPath(location.pathname);
  });

  // Sync language with URL on mount and path changes
  useEffect(() => {
    const pathLang = getLanguageFromPath(location.pathname);
    if (pathLang !== language) {
      setLanguageState(pathLang);
    }
    document.documentElement.lang = pathLang;
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    setLanguageState(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    
    // Navigate to the translated page path
    const currentPath = location.pathname;
    let newPath: string;
    
    // Extract the path without language prefix
    let pathWithoutLang = currentPath;
    if (currentPath.startsWith('/es/')) {
      pathWithoutLang = currentPath.substring(3); // Remove /es
    } else if (currentPath.startsWith('/en/')) {
      pathWithoutLang = currentPath.substring(3); // Remove /en
    } else if (currentPath === '/es' || currentPath === '/en') {
      pathWithoutLang = ''; // Home page
    }
    
    // Try to find the translated path for service routes
    const serviceRoute = serviceRoutes.find(
      r => `/${r.es}` === pathWithoutLang || `/${r.en}` === pathWithoutLang
    );
    
    if (serviceRoute) {
      newPath = `/${lang}/${serviceRoute[lang]}`;
    } else {
      // Try to find the translated path for page routes
      const pageRoute = pageRoutes.find(
        r => `/${r.es}` === pathWithoutLang || `/${r.en}` === pathWithoutLang
      );
      
      if (pageRoute) {
        newPath = `/${lang}/${pageRoute[lang]}`;
      } else {
        // Default: just replace the language prefix (for home or unknown routes)
        newPath = `/${lang}${pathWithoutLang}`;
      }
    }
    
    navigate(newPath, { replace: true });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  const getLocalizedPath = (path: string): string => {
    // Remove any existing language prefix
    let cleanPath = path;
    if (path.startsWith('/es') || path.startsWith('/en')) {
      cleanPath = path.substring(3) || '/';
    }
    
    // Handle hash links for home page
    if (cleanPath.startsWith('/#')) {
      return `/${language}${cleanPath.substring(1)}`;
    }
    
    return `/${language}${cleanPath === '/' ? '' : cleanPath}`;
  };

  const basePath = getBasePath(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath, basePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { getLanguageFromPath };
