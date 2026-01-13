import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  CreditCard, 
  QrCode, 
  Smartphone, 
  RefreshCw, 
  Users, 
  Share2,
  Globe,
  Code2
} from 'lucide-react';
import serviceDigitalCard from '@/assets/service-digital-card.jpg';

const TarjetaDigital = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <ServicePageLayout
        title="Tarjeta digital profesional de negocios con QR inteligente – networking moderno en Calgary"
        metaTitle="Tarjeta Digital Profesional de Negocios con QR Inteligente en Calgary | RCW Innovation"
        metaDescription="Tarjetas digitales premium con QR y diseño personalizado. Actualiza tus datos al instante y enlaza tus redes."
        keywords="tarjeta digital Calgary, tarjeta NFC Calgary, tarjeta QR negocios, networking digital, tarjeta profesional Calgary, tarjeta smart negocios"
        canonicalUrl="https://www.rcwinnovation.com/tarjeta-digital-profesional-calgary"
        heroImage={serviceDigitalCard}
        heroImageAlt="Tarjeta digital profesional con QR y NFC en Calgary - Tarjetas de metal premium con chip NFC dorado y smartphone escaneando código QR"
        tag="Smart"
        icon={CreditCard}
        shortDescription="Tarjeta digital con QR/NFC, vCard y analíticas para networking profesional que impresiona y convierte contactos en oportunidades."
        problemTitle="Problema: tarjetas físicas que se pierden o quedan obsoletas"
        problemDescription="Las tarjetas tradicionales se dañan o se extravían y no permiten enlaces rápidos a redes sociales ni actualización de datos. Cada vez que cambias de número, email o cargo, debes reimprimir y distribuir nuevas tarjetas."
        solutionTitle="Solución: tarjeta digital smart"
        solutionDescription="Diseñamos tu tarjeta digital en español, con QR mejorado (funciona sin internet), enlaces a redes, contactos y sitio web. Puedes actualizarla cuando quieras. También ofrecemos una versión física de metal con NFC integrado para máximo impacto."
        features={[
          { title: 'QR Inteligente', description: 'Código QR optimizado que funciona incluso sin conexión a internet para compartir tu información.', icon: QrCode },
          { title: 'vCard Automática', description: 'Los contactos se guardan directamente en el teléfono del receptor con un solo toque.', icon: Smartphone },
          { title: 'Actualización en Tiempo Real', description: 'Modifica tu información cuando quieras sin necesidad de reimprimir tarjetas.', icon: RefreshCw },
          { title: 'Múltiples Perfiles', description: 'Gestiona diferentes tarjetas para distintos contextos o miembros del equipo.', icon: Users },
          { title: 'Enlaces a Redes', description: 'Conecta directamente a LinkedIn, Instagram, WhatsApp, sitio web y más.', icon: Share2 },
          { title: 'Compatibilidad Universal', description: 'Funciona perfectamente en iOS y Android sin necesidad de apps adicionales.', icon: Smartphone },
        ]}
        benefitsTitle="Beneficios de la tarjeta digital smart"
        benefits={['Imagen moderna y profesional que impresiona', 'Datos actualizables al instante desde tu celular', 'Mayor interacción con tus contactos', 'Compatibilidad en iOS y Android sin apps', 'Versión física en metal con NFC disponible', 'Analytics de escaneos y visitas', 'Diseño 100% personalizable con tu marca', 'Ilimitadas comparticiones sin costo adicional']}
        ctaText="Obtener mi tarjeta digital premium"
        processSteps={[
          { title: 'Definición de Perfil', description: 'Recopilamos tu información de contacto, redes sociales, sitio web y elementos a destacar.' },
          { title: 'Diseño Visual', description: 'Creamos el diseño de tu tarjeta digital alineado con tu identidad de marca.' },
          { title: 'Configuración Técnica', description: 'Configuramos el perfil digital, QR dinámico y opciones de tarjeta NFC física.' },
          { title: 'Pruebas', description: 'Verificamos que todo funcione correctamente en diferentes dispositivos y escenarios.' },
          { title: 'Entrega y Capacitación', description: 'Entregamos las tarjetas y te capacitamos en el uso del panel de analytics.' },
        ]}
        faqs={[
          { question: '¿Necesito una app para usar la tarjeta?', answer: 'No, la tarjeta funciona con cualquier smartphone moderno. El receptor solo necesita escanear el QR o acercar su teléfono a la tarjeta NFC.' },
          { question: '¿Qué información puedo incluir en la tarjeta?', answer: 'Puedes incluir nombre, cargo, empresa, teléfonos, emails, redes sociales, sitio web, ubicación, y hasta videos o presentaciones.' },
          { question: '¿Puedo ver quién escaneó mi tarjeta?', answer: 'Sí, el panel de analytics te muestra fecha, hora, ubicación aproximada y dispositivo de cada escaneo.' },
          { question: '¿La tarjeta física está incluida?', answer: 'Ofrecemos planes con tarjetas digitales únicamente y planes premium que incluyen tarjetas físicas de metal con chip NFC.' },
          { question: '¿Puedo crear tarjetas para todo mi equipo?', answer: 'Sí, ofrecemos planes empresariales donde puedes gestionar tarjetas de todos los miembros de tu equipo desde un solo panel.' },
        ]}
        relatedServices={[
          { title: 'Diseño Web – App Móvil', href: '/diseno-web-app-movil-calgary', icon: Globe },
          { title: 'Branding y Redes Sociales', href: '/branding-estrategia-redes-sociales-calgary', icon: Share2 },
          { title: 'Software a Medida', href: '/diseno-software-medida-premium-calgary', icon: Code2 },
        ]}
      />
    </div>
  );
});

TarjetaDigital.displayName = 'TarjetaDigital';

export default TarjetaDigital;