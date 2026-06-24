import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';
import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  es: {
    title: 'Términos de Servicio | RCW Innovation Inc',
    description: 'Términos y condiciones de los servicios de desarrollo de software, IA, automatización, branding, mentoría y consultoría 5.0 de RCW Innovation Inc.',
    canonical: 'https://www.rcwinnovation.com/es/terminos-servicio',
    back: 'Volver al inicio',
    badge: 'Términos de Servicio',
    heading: 'Términos de Servicio',
    updated: 'Última actualización: 24 de junio de 2026',
    intro: 'Estos Términos regulan la relación entre RCW Innovation Inc ("RCW", "nosotros") y el cliente o usuario ("Cliente", "tú") que contrata o utiliza nuestros servicios profesionales: desarrollo de software a medida, branding y redes sociales, automatizaciones con IA, agentes de IA, sistemas de gestión (HSEQ/ISO), tarjeta digital, diseño web/app, mentoría y Consultoría 5.0.',
    sections: [
      {
        title: '1. Aceptación',
        body: 'Al solicitar una propuesta, firmar una orden de trabajo, abonar el diagnóstico inicial o utilizar el sitio www.rcwinnovation.com, aceptas estos Términos y nuestra Política de Privacidad.'
      },
      {
        title: '2. Servicios ofrecidos',
        body: 'RCW ofrece servicios profesionales de ingeniería e innovación. El alcance específico, entregables, tiempos y precio de cada proyecto se detallan en una propuesta y/o contrato firmado por ambas partes, que prevalecerá sobre estos Términos en caso de conflicto.'
      },
      {
        title: '3. Diagnóstico inicial (Consultoría 5.0)',
        body: 'El diagnóstico inicial tiene un costo de 150 CAD y se paga mediante Stripe. Incluye una sesión de análisis, hoja de ruta y recomendaciones. Este pago no constituye contratación del servicio posterior, que se formaliza con propuesta independiente.'
      },
      {
        title: '4. Precios y pagos',
        body: 'Los precios se expresan en dólares canadienses (CAD) salvo indicación contraria y no incluyen impuestos aplicables (GST). Los pagos se realizan según el calendario indicado en cada propuesta (típicamente anticipo + hitos). El retraso en pagos faculta a RCW a suspender los trabajos hasta su regularización.'
      },
      {
        title: '5. Plazos y entregables',
        body: 'Los plazos son estimaciones realizadas con base en la información disponible y el cumplimiento de los hitos del Cliente (entrega de contenidos, accesos, validaciones). Retrasos imputables al Cliente pueden afectar el cronograma sin responsabilidad para RCW.'
      },
      {
        title: '6. Propiedad intelectual',
        body: 'En proyectos de Consultoría 5.0 entregables (código fuente, diseños, identidad visual, configuraciones) se transfieren al Cliente tras el pago completo. En Asesoría 5.0, RCW conserva la titularidad del marco metodológico y herramientas reutilizables, otorgando licencia de uso al Cliente. El software de terceros y librerías open source se rigen por sus propias licencias.'
      },
      {
        title: '7. Confidencialidad',
        body: 'Ambas partes se obligan a mantener confidencialidad sobre la información técnica, comercial y estratégica intercambiada durante el proyecto, durante su vigencia y por 3 años posteriores.'
      },
      {
        title: '8. Uso de IA',
        body: 'Los servicios pueden incorporar modelos de IA de terceros (OpenAI, Anthropic, ElevenLabs, Google, etc.). RCW configura, prueba y optimiza estas tecnologías, pero no garantiza la exactitud absoluta de las salidas generadas por IA. El Cliente es responsable de revisar y validar los outputs antes de su uso operativo.'
      },
      {
        title: '9. Mantenimiento y soporte',
        body: 'El soporte post-lanzamiento durante el período de garantía (30 días) cubre corrección de errores. Soporte continuo, evoluciones funcionales y nuevas integraciones se contratan mediante planes de mantenimiento o nuevas órdenes de trabajo.'
      },
      {
        title: '10. Garantías y limitación de responsabilidad',
        body: 'RCW presta sus servicios con diligencia profesional. No garantiza resultados comerciales específicos (ventas, leads, posiciones SEO) ya que dependen de múltiples factores externos. La responsabilidad total de RCW frente al Cliente, por cualquier concepto, queda limitada al importe efectivamente pagado por el servicio que origina la reclamación en los 12 meses previos.'
      },
      {
        title: '11. Cancelación',
        body: 'El Cliente puede cancelar el proyecto en cualquier momento. RCW facturará el trabajo realizado hasta la fecha de cancelación más los costes de terceros ya comprometidos. Los anticipos no son reembolsables salvo incumplimiento grave imputable a RCW.'
      },
      {
        title: '12. Portfolio y referencias',
        body: 'Salvo solicitud expresa en contrario, RCW podrá incluir el proyecto y el logotipo del Cliente en su portfolio, casos de éxito y materiales comerciales una vez publicado.'
      },
      {
        title: '13. Ley aplicable y jurisdicción',
        body: 'Estos Términos se rigen por las leyes de la provincia de Alberta, Canadá. Cualquier disputa se someterá a los tribunales competentes de Calgary, Alberta.'
      },
      {
        title: '14. Contacto',
        body: 'Para cualquier consulta sobre estos Términos escribe a info@rcwinnovation.com o llama al +1 (587) 896-1997.'
      }
    ]
  },
  en: {
    title: 'Terms of Service | RCW Innovation Inc',
    description: 'Terms and conditions for RCW Innovation Inc software development, AI, automation, branding, mentoring, and Consultancy 5.0 services.',
    canonical: 'https://www.rcwinnovation.com/en/terms-of-service',
    back: 'Back to home',
    badge: 'Terms of Service',
    heading: 'Terms of Service',
    updated: 'Last updated: June 24, 2026',
    intro: 'These Terms govern the relationship between RCW Innovation Inc ("RCW", "we") and the client or user ("Client", "you") who contracts or uses our professional services: custom software development, branding and social media, AI automations, AI agents, management systems (HSEQ/ISO), digital business card, web/app design, mentoring, and Consultancy 5.0.',
    sections: [
      {
        title: '1. Acceptance',
        body: 'By requesting a proposal, signing a work order, paying for the initial diagnostic, or using the site www.rcwinnovation.com, you accept these Terms and our Privacy Policy.'
      },
      {
        title: '2. Services offered',
        body: 'RCW offers professional engineering and innovation services. The specific scope, deliverables, timelines, and price of each project are detailed in a proposal and/or contract signed by both parties, which prevails over these Terms in case of conflict.'
      },
      {
        title: '3. Initial diagnostic (Consultancy 5.0)',
        body: 'The initial diagnostic costs CAD 150 and is paid via Stripe. It includes an analysis session, roadmap, and recommendations. This payment does not constitute engagement for the subsequent service, which is formalized through a separate proposal.'
      },
      {
        title: '4. Pricing and payments',
        body: 'Prices are in Canadian dollars (CAD) unless otherwise stated and do not include applicable taxes (GST). Payments follow the schedule indicated in each proposal (typically deposit + milestones). Late payments entitle RCW to suspend work until cleared.'
      },
      {
        title: '5. Timelines and deliverables',
        body: 'Timelines are estimates based on available information and the Client meeting their milestones (content delivery, access, approvals). Delays attributable to the Client may affect the schedule with no liability for RCW.'
      },
      {
        title: '6. Intellectual property',
        body: 'In Consultancy 5.0 projects, deliverables (source code, designs, visual identity, configurations) are transferred to the Client upon full payment. In Advisory 5.0, RCW retains ownership of its methodological framework and reusable tools, granting the Client a usage license. Third-party software and open-source libraries are governed by their own licenses.'
      },
      {
        title: '7. Confidentiality',
        body: 'Both parties undertake to keep confidential the technical, commercial, and strategic information exchanged during the project, during its term and for 3 years afterwards.'
      },
      {
        title: '8. Use of AI',
        body: 'Services may incorporate third-party AI models (OpenAI, Anthropic, ElevenLabs, Google, etc.). RCW configures, tests, and optimizes these technologies but does not guarantee absolute accuracy of AI-generated outputs. The Client is responsible for reviewing and validating outputs before operational use.'
      },
      {
        title: '9. Maintenance and support',
        body: 'Post-launch support during the warranty period (30 days) covers bug fixes. Ongoing support, functional evolutions, and new integrations are contracted through maintenance plans or new work orders.'
      },
      {
        title: '10. Warranties and limitation of liability',
        body: 'RCW provides its services with professional diligence. It does not guarantee specific commercial results (sales, leads, SEO rankings) as these depend on multiple external factors. RCW\'s total liability towards the Client, for any reason, is limited to the amount actually paid for the service giving rise to the claim in the previous 12 months.'
      },
      {
        title: '11. Cancellation',
        body: 'The Client may cancel the project at any time. RCW will invoice work completed up to the cancellation date plus any third-party costs already committed. Deposits are non-refundable except in case of serious breach attributable to RCW.'
      },
      {
        title: '12. Portfolio and references',
        body: 'Unless expressly requested otherwise, RCW may include the project and the Client\'s logo in its portfolio, case studies, and commercial materials once published.'
      },
      {
        title: '13. Governing law and jurisdiction',
        body: 'These Terms are governed by the laws of the Province of Alberta, Canada. Any dispute shall be submitted to the competent courts of Calgary, Alberta.'
      },
      {
        title: '14. Contact',
        body: 'For any question about these Terms, write to info@rcwinnovation.com or call +1 (587) 896-1997.'
      }
    ]
  }
};

const TermsOfServicePage = () => {
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
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es/terminos-servicio" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en/terms-of-service" />
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
              <FileText className="w-6 h-6 text-primary" />
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

export default TermsOfServicePage;