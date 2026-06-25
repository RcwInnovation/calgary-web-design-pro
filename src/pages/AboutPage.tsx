import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About RCW Innovation — Calgary Technology Consulting | Ricardo Luna Becerra</title>
        <meta
          name="description"
          content="About RCW Innovation Inc., a Calgary-based technology and engineering consulting firm led by Ricardo Luna Becerra (PhD, MBA). Custom software, AI automation, CRM/ERP, and bilingual web design."
        />
        <link rel="canonical" href="https://rcwinnovation.com/about" />
        <link rel="alternate" hrefLang="en-CA" href="https://rcwinnovation.com/about" />
        <link rel="alternate" hrefLang="es-CA" href="https://rcwinnovation.com/about" />
        <link rel="alternate" hrefLang="x-default" href="https://rcwinnovation.com/about" />
        <meta property="og:title" content="About RCW Innovation — Calgary Technology Consulting" />
        <meta property="og:description" content="Led by Ricardo Luna Becerra (PhD, MBA). Custom software, AI automation, CRM/ERP, and bilingual web design in Calgary, Alberta, Canada." />
        <meta property="og:url" content="https://rcwinnovation.com/about" />
        <meta property="og:type" content="profile" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          url: 'https://rcwinnovation.com/about',
          mainEntity: {
            '@type': 'Person',
            '@id': 'https://rcwinnovation.com/about#founder',
            name: 'Ricardo Luna Becerra',
            jobTitle: 'CEO and Founder',
            description: 'CEO and Founder of RCW Innovation Inc. PhD in Computer Engineering, MBA. Expert in AI systems, software architecture, and digital transformation.',
            sameAs: 'https://www.linkedin.com/in/ricardolunabecerra',
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
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home / Volver al inicio
          </Link>

          <header className="mb-12">
            <span className="text-xs sm:text-sm text-primary font-medium tracking-wider uppercase mb-3 block">
              About / Sobre nosotros
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About RCW Innovation <span className="text-muted-foreground font-normal">/ Sobre RCW Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Technology and engineering consulting from Calgary, Alberta — bilingual (EN / ES) for businesses across Canada and Colombia.
            </p>
          </header>

          <section className="mb-16 rounded-2xl border border-border bg-card/40 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Founder / Nuestro Fundador</h2>

            <div className="space-y-3 mb-6">
              <p className="text-xl font-semibold">Ricardo Luna Becerra</p>
              <p className="text-primary font-medium">CEO and Founder, RCW Innovation Inc.</p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4" /> PhD in Computer Engineering · MBA
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" /> Calgary, Alberta, Canada
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Ricardo Luna Becerra is the CEO and Founder of RCW Innovation Inc., a technology and engineering consulting firm based in Calgary, Alberta. With a PhD in Computer Engineering and an MBA, Ricardo leads a team delivering custom software, AI automation, CRM/ERP systems, and bilingual web design for businesses across Canada and Colombia.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6">
              Ricardo Luna Becerra es el CEO y Fundador de RCW Innovation Inc., una firma de consultoría tecnológica y de ingeniería con sede en Calgary, Alberta. Con un PhD en Ingeniería de Computación y un MBA, Ricardo lidera un equipo que entrega software a medida, automatización con IA, sistemas CRM/ERP y diseño web bilingüe para empresas en Canadá y Colombia.
            </p>

            <a
              href="https://www.linkedin.com/in/ricardolunabecerra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Linkedin className="w-4 h-4" /> linkedin.com/in/ricardolunabecerra
            </a>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Company / Nuestra Empresa</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              RCW Innovation Inc. is incorporated in Calgary, Alberta, Canada. We serve businesses in English and Spanish across Canada and Colombia. Our services include web design, custom software development, AI automation, and digital transformation consulting.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-8">
              RCW Innovation Inc. está constituida en Calgary, Alberta, Canadá. Atendemos empresas en inglés y español en Canadá y Colombia. Nuestros servicios incluyen diseño web, desarrollo de software a medida, automatización con IA y consultoría en transformación digital.
            </p>

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
                Calgary, Alberta, Canada
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