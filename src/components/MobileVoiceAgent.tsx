import { useEffect, useRef, useState } from 'react';
import { AudioLines, Loader2, PhoneOff, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const MobileVoiceAgent = ({ onClose }: { onClose: () => void }) => {
  const { language } = useLanguage();
  const sessionRef = useRef<{ endSession: () => Promise<void> } | null>(null);
  const [status, setStatus] = useState<'connecting' | 'connected' | 'ended' | 'error'>('connecting');
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    const start = async () => {
      try {
        const { Conversation } = await import('@elevenlabs/client');
        if (cancelled) return;
        const session = await Conversation.startSession({
          agentId: 'agent_5001kax1zp55fm0bzxn7s77rtrdr',
          connectionType: 'webrtc',
          overrides: { agent: { language } },
          onConnect: () => { if (!cancelled) setStatus('connected'); },
          onDisconnect: () => { if (!cancelled) setStatus('ended'); },
          onError: () => {
            if (!cancelled) {
              setStatus('error');
              setError(language === 'es' ? 'No se pudo conectar la llamada. Inténtalo de nuevo o utiliza el chat.' : 'The call could not connect. Try again or use the chat.');
            }
          },
        });
        if (cancelled) await session.endSession();
        else sessionRef.current = session;
      } catch (cause) {
        if (cancelled) return;
        setStatus('error');
        const denied = cause instanceof Error && (cause.name === 'NotAllowedError' || cause.name === 'NotFoundError');
        setError(denied
          ? (language === 'es' ? 'Permite el acceso al micrófono para hablar con el agente.' : 'Allow microphone access to speak with the agent.')
          : (language === 'es' ? 'No se pudo iniciar la llamada. Inténtalo de nuevo o utiliza el chat.' : 'The call could not start. Try again or use the chat.'));
      }
    };
    void start();
    return () => {
      cancelled = true;
      const session = sessionRef.current;
      sessionRef.current = null;
      if (session) void session.endSession().catch(() => undefined);
    };
  }, [language]);

  const label = language === 'es' ? 'Agente de voz IA' : 'AI voice agent';
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <section role="dialog" aria-modal="true" aria-label={label} className="relative glass-strong rounded-lg w-full max-w-sm p-6 text-center" onClick={(event) => event.stopPropagation()}>
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={onClose} aria-label={language === 'es' ? 'Cerrar llamada' : 'Close call'}><X /></Button>
        <AudioLines className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-3">{label}</h2>
        <p role="status" className="text-sm text-muted-foreground mb-5">{status === 'error' ? error : status === 'connected' ? (language === 'es' ? 'Llamada conectada' : 'Call connected') : status === 'ended' ? (language === 'es' ? 'Llamada finalizada' : 'Call ended') : (language === 'es' ? 'Conectando · Se requiere acceso al micrófono' : 'Connecting · Microphone access required')}</p>
        {status === 'connecting' && <Loader2 className="w-5 h-5 animate-spin motion-reduce:animate-none mx-auto mb-4 text-accent" />}
        <Button variant={status === 'connected' ? 'destructive' : 'secondary'} className="min-h-12" onClick={onClose}><PhoneOff />{language === 'es' ? 'Cerrar llamada' : 'Close call'}</Button>
      </section>
    </div>
  );
};