import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Chatbot } from '@/components/Chatbot';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServicePageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroImage: string;
  heroImageAlt: string;
  tag: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string;
  features: ServiceFeature[];
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; href: string; icon: LucideIcon }[];
}

export const ServicePageLayout = ({
  title,
  metaTitle,
  metaDescription,
  keywords,
  heroImage,
  heroImageAlt,
  tag,
  icon: Icon,
  shortDescription,
  longDescription,
  features,
  benefits,
  processSteps,
  faqs,
  relatedServices,
}: ServicePageLayoutProps) => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="RCW Innovation Inc" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:locale" content="es_CA" />
        <meta property="og:site_name" content="RCW Innovation Inc" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="container-custom relative z-10">
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al inicio
                </Link>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-6">
                    {tag}
                  </span>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    {title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8">
                    {shortDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => setIsConsultationOpen(true)}
                      className="btn-gold gap-2 text-lg py-6"
                    >
                      <Calendar className="w-5 h-5" />
                      Solicitar Asesoría 5.0
                    </Button>
                    <Button 
                      onClick={() => setIsDiagnosticOpen(true)}
                      variant="outline"
                      className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6"
                    >
                      <Zap className="w-5 h-5" />
                      Consultoría 5.0
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={heroImage} 
                      alt={heroImageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Long Description */}
          <section className="py-20 bg-card/30">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  ¿Qué ofrecemos?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {longDescription}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  Características
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  Lo que incluye este servicio
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-strong p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-card/30">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    Ventajas
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">
                    Beneficios para tu negocio
                  </h2>
                  
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-strong p-8 rounded-3xl"
                >
                  <h3 className="text-2xl font-bold mb-6">¿Listo para empezar?</h3>
                  <p className="text-muted-foreground mb-8">
                    Agenda una sesión de asesoría gratuita y descubre cómo podemos transformar tu negocio con soluciones a medida.
                  </p>
                  <Button 
                    onClick={() => setIsConsultationOpen(true)}
                    className="w-full btn-gold gap-2 py-6"
                  >
                    Agendar Asesoría Gratuita
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  Metodología
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  Cómo lo hacemos
                </h2>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-2" />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-card/30">
            <div className="container-custom max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  Preguntas frecuentes
                </h2>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-card/40 transition-colors"
                    >
                      <h3 className="font-semibold pr-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaqIndex === index ? 'auto' : 0,
                        opacity: openFaqIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Servicios relacionados
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={service.href}
                      className="block glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-primary mt-2 inline-flex items-center gap-1">
                        Ver más <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Listo para transformar tu negocio?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Agenda una asesoría gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => setIsConsultationOpen(true)}
                    className="btn-gold gap-2 text-lg py-6 px-8"
                  >
                    Solicitar Asesoría 5.0
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button 
                    onClick={() => setIsDiagnosticOpen(true)}
                    variant="outline"
                    className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 px-8"
                  >
                    <Zap className="w-5 h-5" />
                    Consultoría 5.0
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        <WhatsAppButton />
        <Chatbot />
        
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