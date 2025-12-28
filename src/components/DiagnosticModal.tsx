import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Send, AlertCircle } from 'lucide-react';
import { z } from 'zod';

const diagnosticSchema = z.object({
  nombre: z.string().trim().min(2, 'Nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  telefono: z.string().trim().min(10, 'Teléfono debe tener al menos 10 dígitos').max(20),
  negocio: z.string().trim().min(2, 'Nombre del negocio requerido').max(100),
  sitioActual: z.string().max(255).optional(),
  objetivo: z.string().min(1, 'Selecciona un objetivo'),
  presupuesto: z.string().min(1, 'Selecciona un rango de presupuesto'),
  notas: z.string().max(1000).optional(),
});

type DiagnosticFormData = z.infer<typeof diagnosticSchema>;

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const objetivos = [
  'Generar más leads',
  'Aumentar ventas',
  'Mejorar presencia online',
  'Rediseñar sitio existente',
  'Crear tienda online',
  'Otro',
];

const presupuestos = [
  'Menos de $1,500 CAD',
  '$1,500 - $3,000 CAD',
  '$3,000 - $5,000 CAD',
  '$5,000 - $10,000 CAD',
  'Más de $10,000 CAD',
];

export const DiagnosticModal = ({ isOpen, onClose }: DiagnosticModalProps) => {
  const [formData, setFormData] = useState<DiagnosticFormData>({
    nombre: '',
    email: '',
    telefono: '',
    negocio: '',
    sitioActual: '',
    objetivo: '',
    presupuesto: '',
    notas: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof DiagnosticFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof DiagnosticFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = diagnosticSchema.parse(formData);
      
      // Save to localStorage
      const diagnosticData = {
        ...validatedData,
        timestamp: new Date().toISOString(),
        destinationEmail: 'rcwluna@gmail.com',
      };
      localStorage.setItem('rcw_diagnostic', JSON.stringify(diagnosticData));
      
      // Redirect to Stripe
      window.location.href = 'https://buy.stripe.com/5kQbJ09pWcAf3kO56D6sw01';
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof DiagnosticFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof DiagnosticFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg glass-strong rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-primary-foreground">Generar Diagnóstico 5.0</h2>
                  <p className="text-sm text-primary-foreground/70">Análisis personalizado de tu proyecto</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full bg-muted rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.nombre ? 'ring-2 ring-destructive' : ''
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="text-xs text-destructive mt-1">{errors.nombre}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-muted rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.email ? 'ring-2 ring-destructive' : ''
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full bg-muted rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.telefono ? 'ring-2 ring-destructive' : ''
                  }`}
                  placeholder="+1 (587) 896-1997"
                />
                {errors.telefono && (
                  <p className="text-xs text-destructive mt-1">{errors.telefono}</p>
                )}
              </div>

              {/* Nombre del Negocio */}
              <div>
                <label htmlFor="negocio" className="block text-sm font-medium mb-2">
                  Nombre del negocio *
                </label>
                <input
                  type="text"
                  id="negocio"
                  name="negocio"
                  value={formData.negocio}
                  onChange={handleChange}
                  className={`w-full bg-muted rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.negocio ? 'ring-2 ring-destructive' : ''
                  }`}
                  placeholder="Nombre de tu empresa"
                />
                {errors.negocio && (
                  <p className="text-xs text-destructive mt-1">{errors.negocio}</p>
                )}
              </div>

              {/* Sitio Actual */}
              <div>
                <label htmlFor="sitioActual" className="block text-sm font-medium mb-2">
                  Sitio web actual (opcional)
                </label>
                <input
                  type="url"
                  id="sitioActual"
                  name="sitioActual"
                  value={formData.sitioActual}
                  onChange={handleChange}
                  className="w-full bg-muted rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="https://tusitio.com"
                />
              </div>

              {/* Objetivo */}
              <div>
                <label htmlFor="objetivo" className="block text-sm font-medium mb-2">
                  Objetivo principal *
                </label>
                <select
                  id="objetivo"
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleChange}
                  className={`w-full bg-muted rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.objetivo ? 'ring-2 ring-destructive' : ''
                  }`}
                >
                  <option value="">Selecciona un objetivo</option>
                  {objetivos.map((obj) => (
                    <option key={obj} value={obj}>
                      {obj}
                    </option>
                  ))}
                </select>
                {errors.objetivo && (
                  <p className="text-xs text-destructive mt-1">{errors.objetivo}</p>
                )}
              </div>

              {/* Presupuesto */}
              <div>
                <label htmlFor="presupuesto" className="block text-sm font-medium mb-2">
                  Rango de presupuesto *
                </label>
                <select
                  id="presupuesto"
                  name="presupuesto"
                  value={formData.presupuesto}
                  onChange={handleChange}
                  className={`w-full bg-muted rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.presupuesto ? 'ring-2 ring-destructive' : ''
                  }`}
                >
                  <option value="">Selecciona un rango</option>
                  {presupuestos.map((pres) => (
                    <option key={pres} value={pres}>
                      {pres}
                    </option>
                  ))}
                </select>
                {errors.presupuesto && (
                  <p className="text-xs text-destructive mt-1">{errors.presupuesto}</p>
                )}
              </div>

              {/* Notas */}
              <div>
                <label htmlFor="notas" className="block text-sm font-medium mb-2">
                  Notas adicionales (opcional)
                </label>
                <textarea
                  id="notas"
                  name="notas"
                  value={formData.notas}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-muted rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>

              {/* Note before submit */}
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 flex gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> Al hacer clic en "Enviar y continuar al pago", 
                  serás redirigido a nuestra plataforma segura de pago. Tu información será enviada a nuestro equipo para 
                  contactarte y preparar tu diagnóstico personalizado.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar y continuar al pago
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                Al enviar, aceptas que guardemos tus datos para contactarte.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
