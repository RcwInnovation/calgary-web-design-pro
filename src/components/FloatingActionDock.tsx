import { AudioLines, Bot, CalendarCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDiscoveryConsultationCopy } from '@/config/discoveryConsultation';

interface FloatingActionDockProps {
  onOpenVoice: () => void;
  onOpenChat: () => void;
  onOpenConsultation: () => void;
  hidden: boolean;
}

export const FloatingActionDock = ({ onOpenVoice, onOpenChat, onOpenConsultation, hidden }: FloatingActionDockProps) => {
  const { language } = useLanguage();
  const copy = getDiscoveryConsultationCopy(language);
  if (hidden) return null;

  return (
    <nav aria-label={language === 'es' ? 'Contacto rápido' : 'Quick contact'} className="action-dock fixed left-1/2 -translate-x-1/2 z-50 rounded-full p-2 flex items-center gap-2.5 md:hidden">
      <Button variant="ghost" size="icon" onClick={onOpenVoice} className="dock-icon relative w-12 h-12 rounded-full shrink-0" aria-label={language === 'es' ? 'Iniciar llamada con agente de voz IA' : 'Start AI voice call'} title={language === 'es' ? 'Agente de voz IA' : 'AI voice agent'}>
        <AudioLines className="!w-5 !h-5" />
        <Sparkles className="dock-sparkle absolute top-1 right-1 !w-3 !h-3" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onOpenChat} className="dock-icon w-12 h-12 rounded-full shrink-0" aria-label={language === 'es' ? 'Abrir chatbot' : 'Open chatbot'} title={language === 'es' ? 'Chatbot IA' : 'AI chatbot'}>
        <Bot className="!w-5 !h-5" />
      </Button>
      <div className="relative min-w-0">
        <Button onClick={onOpenConsultation} className="dock-consultation h-12 px-5 rounded-full font-bold gap-2 text-sm" aria-label={copy.dock}>
          <CalendarCheck className="w-4 h-4" />
          {copy.dock}
        </Button>
        <span aria-hidden="true" className="dock-free absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase shadow-md pointer-events-none">{copy.badge}</span>
      </div>
    </nav>
  );
};