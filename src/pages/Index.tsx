import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Chatbot } from '@/components/Chatbot';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const Index = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Empresa de Diseño Web en Calgary – Páginas Web y Landing Pages en Español</title>
        <meta 
          name="description" 
          content="Somos especialistas en diseño y desarrollo de páginas web, landing pages y sitios corporativos en español en Calgary. Diseños innovadores, soporte local y resultados profesionales." 
        />
        <meta name="keywords" content="diseño web Calgary, creación de páginas web Calgary, empresa de diseño web en Calgary, landing pages Calgary, sitios web corporativos Calgary, desarrollo web profesional Calgary, diseño de páginas web en español en Calgary, mejor empresa de diseño web para hispanos en Calgary" />
        <meta name="author" content="RCW Innovation Inc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rcwinnovation.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Empresa de Diseño Web en Calgary – RCW Innovation" />
        <meta property="og:description" content="Especialistas en diseño web en español en Calgary. Landing pages, sitios corporativos y desarrollo web profesional." />
        <meta property="og:url" content="https://rcwinnovation.com" />
        <meta property="og:locale" content="es_CA" />
        <meta property="og:site_name" content="RCW Innovation Inc" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diseño Web en Calgary - RCW Innovation" />
        <meta name="twitter:description" content="Diseño y desarrollo de páginas web en español para negocios en Calgary." />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0d14" />
      </Helmet>

      <SchemaMarkup />

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <Hero onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
          <Services />
          <WhyUs />
          <Process />
          <FAQ />
          <CTA onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        </main>

        <Footer />

        {/* Floating Elements */}
        <WhatsAppButton />
        <Chatbot />
        
        {/* Modals */}
        <DiagnosticModal 
          isOpen={isDiagnosticOpen} 
          onClose={() => setIsDiagnosticOpen(false)} 
        />
      </div>
    </>
  );
};

export default Index;
