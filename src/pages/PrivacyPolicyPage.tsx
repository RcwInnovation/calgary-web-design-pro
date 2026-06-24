import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';
import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  es: {
    title: 'Política de Privacidad | RCW Innovation Inc',
    description: 'Política de privacidad de RCW Innovation Inc. Conoce cómo recopilamos, usamos y protegemos tus datos personales en nuestros servicios de desarrollo, IA y automatización.',
    canonical: 'https://www.rcwinnovation.com/es/politica-privacidad',
    altEn: 'https://www.rcwinnovation.com/en/privacy-policy',
    back: 'Volver al inicio',
    badge: 'Política de Privacidad',
    heading: 'Política de Privacidad',
    updated: 'Última actualización: 24 de junio de 2026',
    intro: 'En RCW Innovation Inc ("RCW", "nosotros", "nuestro") respetamos tu privacidad y nos comprometemos a proteger los datos personales que compartes con nosotros a través de www.rcwinnovation.com y de los servicios que ofrecemos (desarrollo de software a medida, branding y redes sociales, automatizaciones con IA, agentes de IA, sistemas de gestión, tarjeta digital, diseño web/app y mentoría).',
    sections: [
      {
        title: '1. Responsable del tratamiento',
        body: 'RCW Innovation Inc, con sede en Calgary, Alberta, Canadá. Contacto: info@rcwinnovation.com — Tel. +1 (587) 896-1997. Los leads y solicitudes comerciales se enrutan a ceo@rcwinnovation.com a través de FormSubmit.co.'
      },
      {
        title: '2. Datos que recopilamos',
        body: 'Recopilamos únicamente los datos que tú nos proporcionas o que son necesarios para prestar el servicio: nombre, correo electrónico, teléfono, nombre de empresa, sector, descripción del proyecto, y la información que compartas durante reuniones, formularios, chatbot o el widget de voz de ElevenLabs. Datos técnicos básicos (dirección IP, tipo de navegador, páginas visitadas) se recogen vía cookies y analítica para mejorar el sitio.'
      },
      {
        title: '3. Finalidades del tratamiento',
        body: 'Usamos tus datos para: (i) responder a consultas y enviar propuestas; (ii) prestar los servicios contratados (desarrollo, IA, branding, mentoría, etc.); (iii) gestionar la facturación y obligaciones contractuales; (iv) enviar comunicaciones operativas y, sólo con tu consentimiento, comunicaciones comerciales; (v) cumplir obligaciones legales aplicables en Canadá.'
      },
      {
        title: '4. Base legal',
        body: 'Tratamos tus datos en base a: tu consentimiento (formularios, chatbot, newsletter), la ejecución de un contrato, el interés legítimo (mejora del servicio y seguridad) y el cumplimiento de obligaciones legales bajo PIPEDA (Personal Information Protection and Electronic Documents Act) y la legislación de Alberta.'
      },
      {
        title: '5. Conservación',
        body: 'Conservamos tus datos mientras exista una relación comercial activa y, posteriormente, durante los plazos legales aplicables (fiscales, contables y de defensa de reclamaciones). Los leads sin contratación se conservan máximo 24 meses salvo que solicites su eliminación antes.'
      },
      {
        title: '6. Encargados y terceros',
        body: 'Compartimos datos sólo con proveedores necesarios para operar: FormSubmit.co (enrutamiento de formularios), ElevenLabs (widget de voz), proveedores de hosting y cloud, herramientas analíticas, Stripe (pagos del diagnóstico inicial) y plataformas de IA utilizadas en los servicios contratados. Todos los proveedores están obligados contractualmente a confidencialidad y seguridad.'
      },
      {
        title: '7. Transferencias internacionales',
        body: 'Algunos proveedores procesan datos fuera de Canadá (principalmente EE. UU. y la UE). En esos casos exigimos garantías adecuadas equivalentes al estándar canadiense de protección de datos.'
      },
      {
        title: '8. Cookies',
        body: 'El sitio utiliza cookies técnicas necesarias para el funcionamiento, cookies de preferencias (idioma ES/EN) y, opcionalmente, cookies analíticas. Puedes desactivarlas desde la configuración de tu navegador.'
      },
      {
        title: '9. Seguridad',
        body: 'Aplicamos medidas técnicas y organizativas razonables: cifrado en tránsito (HTTPS), control de accesos, copias de seguridad, principio de mínimo privilegio y revisión periódica de proveedores.'
      },
      {
        title: '10. Tus derechos',
        body: 'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación, así como retirar tu consentimiento. Escríbenos a info@rcwinnovation.com indicando "Privacidad" en el asunto. Tienes derecho a presentar una queja ante la Office of the Privacy Commissioner of Canada (OPC).'
      },
      {
        title: '11. Menores',
        body: 'Nuestros servicios están dirigidos a empresas y profesionales mayores de edad. No recopilamos conscientemente datos de menores de 16 años.'
      },
      {
        title: '12. Cambios en esta política',
        body: 'Podemos actualizar esta política para reflejar cambios legales o de servicio. Publicaremos la fecha de la nueva versión en esta misma página.'
      }
    ]
  },
  en: {
    title: 'Privacy Policy | RCW Innovation Inc',
    description: 'RCW Innovation Inc privacy policy. Learn how we collect, use, and protect your personal data across our software, AI, automation, and branding services.',
    canonical: 'https://www.rcwinnovation.com/en/privacy-policy',
    altEn: 'https://www.rcwinnovation.com/en/privacy-policy',
    back: 'Back to home',
    badge: 'Privacy Policy',
    heading: 'Privacy Policy',
    updated: 'Last updated: June 24, 2026',
    intro: 'At RCW Innovation Inc ("RCW", "we", "our") we respect your privacy and are committed to protecting the personal data you share with us through www.rcwinnovation.com and the services we offer (custom software development, branding and social media, AI automations, AI agents, management systems, digital business card, web/app design, and mentoring).',
    sections: [
      {
        title: '1. Data controller',
        body: 'RCW Innovation Inc, based in Calgary, Alberta, Canada. Contact: info@rcwinnovation.com — Phone +1 (587) 896-1997. Leads and commercial inquiries are routed to ceo@rcwinnovation.com via FormSubmit.co.'
      },
      {
        title: '2. Data we collect',
        body: 'We only collect data you provide or that is required to deliver the service: name, email, phone, company name, industry, project description, and any information shared during meetings, forms, chatbot, or the ElevenLabs voice widget. Basic technical data (IP address, browser type, visited pages) is collected via cookies and analytics to improve the site.'
      },
      {
        title: '3. Purposes of processing',
        body: 'We use your data to: (i) respond to inquiries and send proposals; (ii) deliver contracted services (development, AI, branding, mentoring, etc.); (iii) manage billing and contractual obligations; (iv) send operational communications and, only with your consent, commercial communications; (v) comply with applicable laws in Canada.'
      },
      {
        title: '4. Legal basis',
        body: 'We process your data based on: your consent (forms, chatbot, newsletter), contract performance, legitimate interest (service improvement and security), and compliance with legal obligations under PIPEDA (Personal Information Protection and Electronic Documents Act) and Alberta law.'
      },
      {
        title: '5. Retention',
        body: 'We keep your data while an active commercial relationship exists and, afterwards, for the applicable legal periods (tax, accounting, and claim defense). Leads without engagement are kept for a maximum of 24 months unless you request earlier deletion.'
      },
      {
        title: '6. Processors and third parties',
        body: 'We share data only with providers required to operate: FormSubmit.co (form routing), ElevenLabs (voice widget), hosting and cloud providers, analytics tools, Stripe (initial diagnostic payments), and AI platforms used in contracted services. All providers are contractually bound to confidentiality and security.'
      },
      {
        title: '7. International transfers',
        body: 'Some providers process data outside Canada (mainly the US and EU). In those cases we require safeguards equivalent to Canadian data protection standards.'
      },
      {
        title: '8. Cookies',
        body: 'The site uses technical cookies required for operation, preference cookies (ES/EN language), and optionally analytics cookies. You can disable them from your browser settings.'
      },
      {
        title: '9. Security',
        body: 'We apply reasonable technical and organizational measures: encryption in transit (HTTPS), access control, backups, principle of least privilege, and periodic vendor review.'
      },
      {
        title: '10. Your rights',
        body: 'You may exercise your rights of access, rectification, deletion, objection, portability, and limitation, and withdraw your consent at any time. Write to info@rcwinnovation.com with "Privacy" in the subject. You have the right to file a complaint with the Office of the Privacy Commissioner of Canada (OPC).'
      },
      {
        title: '11. Minors',
        body: 'Our services are aimed at businesses and professionals of legal age. We do not knowingly collect data from minors under 16.'
      },
      {
        title: '12. Changes to this policy',
        body: 'We may update this policy to reflect legal or service changes. The new version date will be published on this same page.'
      }
    ]
  }
};

const PrivacyPolicyPage = () => {
  const { language, basePath } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const c = content[language];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{c.title}</title>
        <meta name="description" content={c.description} />
        <link rel="canonical" href={c.canonical} />
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es/politica-privacidad" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en/privacy-policy" />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={c.canonical} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

        <main className="pt-32 pb-20">
          <section className="container-custom max-w-4xl">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {c.back}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                {c.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">{c.heading}</h1>
            <p className="text-sm text-muted-foreground mb-10">{c.updated}</p>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">{c.intro}</p>

            <div className="space-y-8">
              {c.sections.map((s) => (
                <article
                  key={s.title}
                  className="p-6 rounded-xl bg-card/50 border border-border/30"
                >
                  <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
        <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;