import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Clients } from '@/components/Clients';
import { Services } from '@/components/Services';
import { Metrics } from '@/components/Metrics';
import { Projects } from '@/components/Projects';
import { WhyUs } from '@/components/WhyUs';
import { AboutUs } from '@/components/AboutUs';
import { JoinTeam } from '@/components/JoinTeam';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ElevenLabsWidget } from '@/components/ElevenLabsWidget';
import { Chatbot } from '@/components/Chatbot';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const Index = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Diseño de Páginas Web en Calgary | RCW Innovation Canadá</title>
        <meta 
          name="description" 
          content="Líder en desarrollo web en Calgary y Colombia. Servicios de software a medida, automatización con IA, diseño web profesional y transformación digital con visión global e innovación." 
        />
        <meta name="keywords" content="diseño web Calgary, marketing digital Calgary, desarrollo de software Calgary, automatización con IA, ERP CRM Calgary, transformación digital, RCW Innovation, páginas web Calgary, landing pages Calgary, agentes IA Calgary" />
        <meta name="author" content="RCW Innovation Inc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rcwinnovation.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Diseño de Páginas Web en Calgary | RCW Innovation Canadá" />
        <meta property="og:description" content="Líder en desarrollo web, software a medida y automatización con IA en Calgary. Transformación digital con visión global e innovación." />
        <meta property="og:url" content="https://www.rcwinnovation.com/" />
        <meta property="og:locale" content="es_CA" />
        <meta property="og:site_name" content="RCW Innovation Inc" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diseño de Páginas Web en Calgary | RCW Innovation" />
        <meta name="twitter:description" content="Desarrollo web, software a medida y automatización con IA en Calgary. Transformación digital con visión global." />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0d14" />
      </Helmet>

      <SchemaMarkup />

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />
        
        <main>
          <Hero 
            onOpenDiagnostic={() => setIsDiagnosticOpen(true)} 
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
          <Clients />
          <Services onOpenConsultation={() => setIsConsultationOpen(true)} onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
          <Metrics />
          <Projects />
          <WhyUs />
          <AboutUs />
          <JoinTeam />
          <Process />
          <FAQ />
          <CTA onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        </main>

        <Footer />

        {/* Floating Elements */}
        <WhatsAppButton />
        <ElevenLabsWidget />
        <Chatbot />
        
        {/* Modals */}
        <DiagnosticModal 
          isOpen={isDiagnosticOpen} 
          onClose={() => setIsDiagnosticOpen(false)} 
        />
        <ConsultationModal 
          isOpen={isConsultationOpen} 
          onClose={() => setIsConsultationOpen(false)} 
        />
      </div>
    </>
  );
};

export default Index;