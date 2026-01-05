import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = '5878961997';

export const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    'Página web nueva',
    'Rediseño de sitio existente',
    'Landing page',
    'Tienda en línea',
    'SEO y marketing digital',
    'Otro',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.interest) {
      toast.error('Por favor completa los campos requeridos');
      setIsSubmitting(false);
      return;
    }

    // Build WhatsApp message
    const message = encodeURIComponent(
      `Hola, quiero agendar una asesoría estratégica para mi proyecto web.\n\n` +
      `👤 Nombre: ${formData.name}\n` +
      `📧 Email: ${formData.email || 'No proporcionado'}\n` +
      `📱 Teléfono: ${formData.phone}\n` +
      `🏢 Negocio: ${formData.business || 'No especificado'}\n` +
      `💡 Interés: ${formData.interest}`
    );

    // Use intent:// for Android, whatsapp:// for iOS, fallback to wa.me for desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    let whatsappUrl: string;
    if (isMobile) {
      if (isAndroid) {
        whatsappUrl = `intent://send?phone=${WHATSAPP_NUMBER}&text=${message}#Intent;scheme=whatsapp;package=com.whatsapp;end`;
      } else {
        whatsappUrl = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${message}`;
      }
    } else {
      whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    }

    // Save to localStorage
    localStorage.setItem('rcw_consultation_data', JSON.stringify({
      ...formData,
      submittedAt: new Date().toISOString(),
    }));

    toast.success('¡Redirigiendo a WhatsApp!');

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', business: '', interest: '' });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md glass-strong rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-border/30">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl md:text-2xl font-bold pr-8">
                Agenda tu <span className="text-gradient-gold">Asesoría</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Completa tus datos y te contactaremos por WhatsApp
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-primary" />
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (587) 000-0000"
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
              </div>

              {/* Business */}
              <div className="space-y-2">
                <Label htmlFor="business" className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-primary" />
                  Nombre del negocio
                </Label>
                <Input
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Tu empresa o negocio"
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <Label className="text-sm">¿En qué estás interesado? *</Label>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, interest: option }))}
                      className={`p-2 text-xs rounded-lg border transition-all ${
                        formData.interest === option
                          ? 'border-primary bg-primary/20 text-foreground'
                          : 'border-border/50 bg-muted/20 text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold py-6 text-base font-semibold mt-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    Procesando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Continuar a WhatsApp
                  </span>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Al enviar, serás redirigido a WhatsApp para confirmar tu asesoría
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
