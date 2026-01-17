import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.whyUs': '¿Por qué elegirnos?',
    'nav.process': 'Proceso',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agenda tu Asesoría',
    
    // Hero
    'hero.title.line1': 'Impulsamos la',
    'hero.title.highlight': 'innovación',
    'hero.title.line2': 'el diseño web y la automatización inteligente en Calgary',
    'hero.subtitle': 'Somos el aliado estratégico que transforma tu negocio con tecnología de vanguardia, soluciones personalizadas y resultados medibles.',
    'hero.cta.diagnostic': 'Generar Diagnóstico 5.0',
    'hero.cta.consultation': 'Agenda tu Asesoría',
    'hero.value.innovation': 'Innovación Continua',
    'hero.value.innovationDesc': 'Tecnología de punta',
    'hero.value.quality': 'Calidad Premium',
    'hero.value.qualityDesc': 'Estándares ISO',
    'hero.value.support': 'Soporte 24/7',
    'hero.value.supportDesc': 'Siempre disponibles',
    
    // Clients
    'clients.title': 'Confían en Nosotros',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones tecnológicas integrales para impulsar tu negocio',
    
    // Metrics
    'metrics.projects': 'Proyectos Completados',
    'metrics.clients': 'Clientes Satisfechos',
    'metrics.experience': 'Años de Experiencia',
    'metrics.countries': 'Países',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Conoce algunos de nuestros trabajos más recientes',
    
    // Why Us
    'whyUs.title': '¿Por qué elegirnos?',
    'whyUs.subtitle': 'Nuestra propuesta de valor',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Conoce al equipo detrás de RCW Innovation',
    
    // Join Team
    'joinTeam.title': 'Únete a Nuestro Equipo',
    'joinTeam.subtitle': 'Sé parte de la innovación',
    'joinTeam.professional': 'Únete al equipo',
    'joinTeam.professionalDesc': '¿Buscas una oportunidad profesional? Envíanos tu CV y te contactaremos cuando haya una posición para ti.',
    'joinTeam.volunteer': 'Voluntariado',
    'joinTeam.volunteerDesc': '¿Quieres ganar experiencia y contribuir a proyectos innovadores? Únete como voluntario y aprende con nosotros.',
    'joinTeam.applyProfessional': 'Enviar aplicación',
    'joinTeam.applyVolunteer': 'Aplicar como voluntario',
    
    // Process
    'process.title': 'Nuestro Proceso',
    'process.subtitle': 'Cómo trabajamos contigo',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Respuestas a las dudas más comunes',
    
    // CTA
    'cta.title': '¿Listo para transformar tu negocio?',
    'cta.subtitle': 'Agenda una consulta y descubre cómo podemos ayudarte',
    'cta.button': 'Generar Diagnóstico 5.0',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    
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
    
    // SEO
    'seo.title': 'Diseño de Páginas Web en Calgary | RCW Innovation Canadá',
    'seo.description': 'Líder en desarrollo web en Calgary y Colombia. Servicios de software a medida, automatización con IA, diseño web profesional y transformación digital con visión global e innovación.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.whyUs': 'Why Choose Us?',
    'nav.process': 'Process',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Book Consultation',
    
    // Hero
    'hero.title.line1': 'We drive',
    'hero.title.highlight': 'innovation',
    'hero.title.line2': 'web design and intelligent automation in Calgary',
    'hero.subtitle': 'We are your strategic partner that transforms your business with cutting-edge technology, customized solutions, and measurable results.',
    'hero.cta.diagnostic': 'Generate Diagnostic 5.0',
    'hero.cta.consultation': 'Book Consultation',
    'hero.value.innovation': 'Continuous Innovation',
    'hero.value.innovationDesc': 'Cutting-edge technology',
    'hero.value.quality': 'Premium Quality',
    'hero.value.qualityDesc': 'ISO Standards',
    'hero.value.support': '24/7 Support',
    'hero.value.supportDesc': 'Always available',
    
    // Clients
    'clients.title': 'They Trust Us',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive technology solutions to boost your business',
    
    // Metrics
    'metrics.projects': 'Completed Projects',
    'metrics.clients': 'Satisfied Clients',
    'metrics.experience': 'Years of Experience',
    'metrics.countries': 'Countries',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Discover some of our most recent work',
    
    // Why Us
    'whyUs.title': 'Why Choose Us?',
    'whyUs.subtitle': 'Our value proposition',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Meet the team behind RCW Innovation',
    
    // Join Team
    'joinTeam.title': 'Join Our Team',
    'joinTeam.subtitle': 'Be part of the innovation',
    'joinTeam.professional': 'Join the team',
    'joinTeam.professionalDesc': 'Looking for a professional opportunity? Send us your CV and we\'ll contact you when there\'s a position for you.',
    'joinTeam.volunteer': 'Volunteering',
    'joinTeam.volunteerDesc': 'Want to gain experience and contribute to innovative projects? Join as a volunteer and learn with us.',
    'joinTeam.applyProfessional': 'Send application',
    'joinTeam.applyVolunteer': 'Apply as volunteer',
    
    // Process
    'process.title': 'Our Process',
    'process.subtitle': 'How we work with you',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to common questions',
    
    // CTA
    'cta.title': 'Ready to transform your business?',
    'cta.subtitle': 'Book a consultation and discover how we can help you',
    'cta.button': 'Generate Diagnostic 5.0',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    
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
    
    // SEO
    'seo.title': 'Web Design in Calgary | RCW Innovation Canada',
    'seo.description': 'Leader in web development in Calgary and Colombia. Custom software services, AI automation, professional web design and digital transformation with global vision and innovation.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
