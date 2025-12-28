import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const siteInfo = {
  servicios: 'Ofrecemos diseño web profesional, landing pages de alta conversión, sitios web corporativos, SEO y posicionamiento local, desarrollo a medida, y diseño mobile-first. Todos nuestros proyectos incluyen diseño responsive, optimización SEO básica, y soporte en español.',
  precios: 'Nuestros proyectos comienzan desde $1,500 CAD para landing pages y desde $3,000 CAD para sitios web corporativos completos. El precio final depende de las funcionalidades específicas. Ofrecemos una consulta gratuita para darte un presupuesto personalizado.',
  tiempo: 'Una landing page puede estar lista en 1-2 semanas. Un sitio web corporativo generalmente toma 3-4 semanas. Proyectos más complejos pueden tomar 6-8 semanas.',
  contacto: 'Puedes contactarnos por WhatsApp al +1 (403) 555-1234, por email a info@rcwinnovation.com, o solicitar una consulta gratuita directamente en nuestra web. Estamos ubicados en Calgary, Alberta.',
  empresa: 'RCW Innovation Inc es una empresa de diseño y desarrollo web en Calgary especializada en la comunidad hispana. Ofrecemos atención 100% en español, calidad premium, entrega rápida, y soporte local.',
  garantia: 'Ofrecemos garantía de satisfacción del 100%. Trabajamos contigo hasta que estés completamente satisfecho. Además, incluimos 30 días de ajustes gratuitos después del lanzamiento.',
  proceso: 'Nuestro proceso incluye: 1) Consulta inicial, 2) Estrategia personalizada, 3) Diseño y prototipos, 4) Desarrollo, 5) Lanzamiento, y 6) Soporte continuo.',
};

const quickResponses = [
  { label: '💰 Precios', keyword: 'precios' },
  { label: '⏱️ Tiempo de entrega', keyword: 'tiempo' },
  { label: '📞 Contacto', keyword: 'contacto' },
  { label: '🛠️ Servicios', keyword: 'servicios' },
];

const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('precio') || lowerInput.includes('costo') || lowerInput.includes('cuanto') || lowerInput.includes('cuánto')) {
    return siteInfo.precios;
  }
  if (lowerInput.includes('tiempo') || lowerInput.includes('demora') || lowerInput.includes('tarda') || lowerInput.includes('entrega')) {
    return siteInfo.tiempo;
  }
  if (lowerInput.includes('contacto') || lowerInput.includes('telefono') || lowerInput.includes('teléfono') || lowerInput.includes('email') || lowerInput.includes('whatsapp')) {
    return siteInfo.contacto;
  }
  if (lowerInput.includes('servicio') || lowerInput.includes('ofrecen') || lowerInput.includes('hacen')) {
    return siteInfo.servicios;
  }
  if (lowerInput.includes('empresa') || lowerInput.includes('quienes') || lowerInput.includes('quiénes') || lowerInput.includes('sobre')) {
    return siteInfo.empresa;
  }
  if (lowerInput.includes('garantia') || lowerInput.includes('garantía') || lowerInput.includes('satisfaccion') || lowerInput.includes('satisfacción')) {
    return siteInfo.garantia;
  }
  if (lowerInput.includes('proceso') || lowerInput.includes('como trabajan') || lowerInput.includes('cómo trabajan') || lowerInput.includes('pasos')) {
    return siteInfo.proceso;
  }
  if (lowerInput.includes('hola') || lowerInput.includes('buenas') || lowerInput.includes('hey')) {
    return '¡Hola! 👋 Soy el asistente virtual de RCW Innovation. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, precios, tiempos de entrega, o cómo contactarnos.';
  }
  
  return 'Gracias por tu mensaje. Para respuestas personalizadas, te recomiendo contactarnos directamente por WhatsApp o solicitar una consulta gratuita. ¿Te gustaría saber sobre nuestros servicios, precios o tiempos de entrega?';
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! 👋 Soy el asistente virtual de RCW Innovation. ¿En qué puedo ayudarte hoy?',
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-btn bottom-24 right-6 w-14 h-14 bg-primary flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Cerrar chatbot' : 'Abrir chatbot'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Bot className="w-7 h-7 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-44 right-6 w-[360px] max-w-[calc(100vw-48px)] glass-strong rounded-2xl overflow-hidden z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Asistente RCW</h3>
                <p className="text-xs text-primary-foreground/70">En línea • Respuestas instantáneas</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.isBot
                        ? 'bg-muted text-foreground rounded-tl-sm'
                        : 'bg-primary text-primary-foreground rounded-tr-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickResponses.map((qr) => (
                <button
                  key={qr.keyword}
                  onClick={() => handleSend(qr.keyword)}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  {qr.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Escribe tu mensaje"
                />
                <button
                  onClick={() => handleSend()}
                  className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
