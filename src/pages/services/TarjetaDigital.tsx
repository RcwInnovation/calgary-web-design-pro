import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  CreditCard, 
  QrCode, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Share2,
  Globe,
  GraduationCap,
  Code2
} from 'lucide-react';
import serviceLandingPage from '@/assets/service-landing-page.jpg';

const TarjetaDigital = () => {
  return (
    <ServicePageLayout
      title="Tarjeta Digital Profesional"
      metaTitle="Tarjeta Digital Profesional NFC QR Calgary | RCW Innovation"
      metaDescription="Tarjeta digital con QR/NFC, vCard y analíticas para networking profesional. Moderniza tu networking en Calgary con tecnología de punta."
      keywords="tarjeta digital Calgary, tarjeta NFC Calgary, tarjeta QR negocios, networking digital, vCard digital, tarjeta profesional Calgary"
      heroImage={serviceLandingPage}
      heroImageAlt="Tarjeta digital profesional NFC en Calgary - RCW Innovation"
      tag="Smart"
      icon={CreditCard}
      shortDescription="Tarjeta digital con QR/NFC, vCard y analíticas para networking profesional que impresiona y convierte contactos en oportunidades."
      longDescription="Moderniza tu networking con tarjetas digitales profesionales que destacan y generan impacto. Nuestra solución combina diseño premium con tecnología NFC/QR para compartir tu información de contacto con un simple toque, mientras obtienes analíticas detalladas de cada interacción para maximizar tus oportunidades de negocio."
      features={[
        {
          title: 'Tecnología QR/NFC',
          description: 'Comparte tu información con un simple escaneo o toque, compatible con todos los smartphones.',
          icon: QrCode,
        },
        {
          title: 'vCard Automática',
          description: 'Los contactos se guardan directamente en el teléfono del receptor sin necesidad de escribir.',
          icon: Smartphone,
        },
        {
          title: 'Analytics de Contactos',
          description: 'Rastrea quién escaneó tu tarjeta, cuándo y desde dónde para seguimiento efectivo.',
          icon: BarChart3,
        },
        {
          title: 'Diseño Personalizado',
          description: 'Diseño 100% alineado con tu marca personal o empresarial para máximo impacto.',
          icon: Palette,
        },
        {
          title: 'Múltiples Perfiles',
          description: 'Gestiona diferentes tarjetas para distintos contextos o miembros del equipo.',
          icon: Share2,
        },
        {
          title: 'Actualización en Tiempo Real',
          description: 'Modifica tu información cuando quieras sin necesidad de reimprimir tarjetas.',
          icon: CreditCard,
        },
      ]}
      benefits={[
        'Compartir contacto con un toque o escaneo',
        'Seguimiento analítico de cada interacción',
        'Diseño 100% personalizable y premium',
        'Actualización de información en tiempo real',
        'Compatible con todos los dispositivos móviles',
        'Integración con CRM para seguimiento',
        'Impresión de tarjetas físicas NFC incluida',
        'Panel de administración para equipos',
      ]}
      processSteps={[
        {
          title: 'Definición de Perfil',
          description: 'Recopilamos tu información de contacto, redes sociales, sitio web y elementos a destacar.',
        },
        {
          title: 'Diseño Visual',
          description: 'Creamos el diseño de tu tarjeta digital alineado con tu identidad de marca.',
        },
        {
          title: 'Configuración Técnica',
          description: 'Configuramos el perfil digital, QR dinámico y opciones de tarjeta NFC física.',
        },
        {
          title: 'Pruebas',
          description: 'Verificamos que todo funcione correctamente en diferentes dispositivos y escenarios.',
        },
        {
          title: 'Entrega y Capacitación',
          description: 'Entregamos las tarjetas y te capacitamos en el uso del panel de analytics.',
        },
      ]}
      faqs={[
        {
          question: '¿Necesito una app para usar la tarjeta?',
          answer: 'No, la tarjeta funciona con cualquier smartphone moderno. El receptor solo necesita escanear el QR o acercar su teléfono a la tarjeta NFC.',
        },
        {
          question: '¿Qué información puedo incluir en la tarjeta?',
          answer: 'Puedes incluir nombre, cargo, empresa, teléfonos, emails, redes sociales, sitio web, ubicación, y hasta videos o presentaciones.',
        },
        {
          question: '¿Puedo ver quién escaneó mi tarjeta?',
          answer: 'Sí, el panel de analytics te muestra fecha, hora, ubicación aproximada y dispositivo de cada escaneo.',
        },
        {
          question: '¿La tarjeta física está incluida?',
          answer: 'Sí, incluimos tarjetas físicas premium con chip NFC. El número de tarjetas depende del plan seleccionado.',
        },
        {
          question: '¿Puedo crear tarjetas para todo mi equipo?',
          answer: 'Sí, ofrecemos planes empresariales donde puedes gestionar tarjetas de todos los miembros de tu equipo desde un solo panel.',
        },
      ]}
      relatedServices={[
        { title: 'Diseño Web – App Móvil', href: '/servicios/diseno-web-app', icon: Globe },
        { title: 'Branding y Redes Sociales', href: '/servicios/branding-redes', icon: Share2 },
        { title: 'Software a Medida', href: '/servicios/software-medida', icon: Code2 },
      ]}
    />
  );
};

export default TarjetaDigital;