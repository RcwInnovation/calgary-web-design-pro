import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, basePath } = useLanguage();
  const isSpanish = language === 'es';
  const canonical = `https://rcwinnovation.com/${language}/about`;
  const seo = isSpanish
    ? {
        title: 'Sobre RCW Innovation | Tecnología en español en Calgary',
        description: 'Conoce a RCW Innovation y a su fundador Ricardo Luna Becerra. Desarrollo web, software a medida y automatización con IA en Calgary.',
        heading: 'Sobre RCW Innovation',
        summary: 'RCW Innovation Inc. presta servicios de desarrollo web, software y automatización desde Calgary, Alberta, para empresas de Canadá y Colombia.',
      }
    : {
        title: 'About RCW Innovation | Calgary Technology Consulting',
        description: 'Meet RCW Innovation and founder Ricardo Luna Becerra. Custom software, AI automation, CRM/ERP, and bilingual web design in Calgary.',
        heading: 'About RCW Innovation',
        summary: 'Technology and engineering consulting from Calgary, Alberta, for businesses across Canada and Colombia.',
      };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="es-CA" href="https://rcwinnovation.com/es/about" />
        <link rel="alternate" hrefLang="en-CA" href="https://rcwinnovation.com/en/about" />
        <link rel="alternate" hrefLang="x-default" href="https://rcwinnovation.com/es/about" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content={isSpanish ? 'es_CA' : 'en_CA'} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          url: canonical,
          inLanguage: language,
          mainEntity: {
            '@type': 'Person',
            '@id': `${canonical}#founder`,
            name: 'Ricardo Luna Becerra',
            jobTitle: isSpanish ? 'Director ejecutivo y fundador' : 'CEO and Founder',
            description: isSpanish
              ? 'Fundador de RCW Innovation Inc. e ingeniero especializado en innovación, transformación digital y soluciones tecnológicas para negocios.'
              : 'Founder of RCW Innovation Inc. and engineer specializing in innovation, digital transformation, and technology solutions for businesses.',
            sameAs: 'https://www.linkedin.com/in/consultoricardolunab/',
            worksFor: { '@id': 'https://rcwinnovation.com/#organization' },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Calgary',
              addressRegion: 'AB',
              addressCountry: 'CA',
            },
          },
        })}</script>
      </Helmet>

      <Header onOpenConsultation={() => setIsModalOpen(true)} />

      <main className="min-h-screen bg-background pt-28 pb-20">
        <article className="container-custom max-w-4xl">
          <Link
            to={basePath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {isSpanish ? 'Volver al inicio' : 'Back to home'}
          </Link>

          <header className="mb-12">
            <span className="text-xs sm:text-sm text-primary font-medium tracking-wider uppercase mb-3 block">
              {isSpanish ? 'Sobre nosotros' : 'About us'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {seo.heading}
            </h1>
            <p className="text-lg text-muted-foreground">
              {seo.summary}
            </p>
          </header>

          <section className="mb-16 rounded-2xl border border-border bg-card/40 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{isSpanish ? 'Nuestro fundador' : 'Our founder'}</h2>

            <div className="space-y-3 mb-6">
              <p className="text-xl font-semibold">Ricardo Luna Becerra</p>
              <p className="text-primary font-medium">{isSpanish ? 'Director ejecutivo y fundador de RCW Innovation Inc.' : 'CEO and Founder, RCW Innovation Inc.'}</p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4" /> {isSpanish ? 'Ingeniero Industrial y de Proyectos' : 'Industrial and Project Engineer'}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" /> Calgary, Alberta, {isSpanish ? 'Canadá' : 'Canada'}
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6">
              {isSpanish
                ? 'Ricardo Luna Becerra lidera RCW Innovation Inc., una firma de consultoría tecnológica y de ingeniería con sede en Calgary. Su experiencia integra innovación, transformación digital, dirección de proyectos y soluciones tecnológicas aplicadas a negocios en Canadá y Colombia.'
                : 'Ricardo Luna Becerra leads RCW Innovation Inc., a technology and engineering consulting firm based in Calgary. His experience combines innovation, digital transformation, project leadership, and technology solutions for businesses in Canada and Colombia.'}
            </p>

            <a
              href="https://www.linkedin.com/in/consultoricardolunab/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Linkedin className="w-4 h-4" /> {isSpanish ? 'Conecta con el fundador en LinkedIn' : 'Connect with the founder on LinkedIn'}
            </a>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{isSpanish ? 'Nuestra empresa' : 'Our company'}</h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-8">
              {isSpanish
                ? 'RCW Innovation Inc. está constituida en Calgary, Alberta, Canadá. Atendemos empresas en español e inglés en Canadá y Colombia. Nuestros servicios incluyen diseño web, desarrollo de software a medida, automatización con IA y consultoría en transformación digital.'
                : 'RCW Innovation Inc. is incorporated in Calgary, Alberta, Canada. We serve businesses in English and Spanish across Canada and Colombia. Our services include web design, custom software development, AI automation, and digital transformation consulting.'}
            </p>

            {isSpanish && (
              <p className="text-sm text-muted-foreground mb-8">
                Proyectos públicos desarrollados:{' '}
                <a href="https://servicioslatinoscanada.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Servicios Latinos Canada
                </a>
                {' y '}
                <a href="https://canadaoneclick.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Canada One Click
                </a>.
              </p>
            )}

            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+15878961997" className="hover:text-primary transition-colors">+1 (587) 896-1997</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@rcwinnovation.com" className="hover:text-primary transition-colors">info@rcwinnovation.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                Calgary, Alberta, {isSpanish ? 'Canadá' : 'Canada'}
              </li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AboutPage;