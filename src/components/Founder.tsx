import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, ExternalLink, Brain, Cog, Rocket, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import founderImage from '@/assets/founder-ricardo.jpg';

const LINKEDIN_URL = 'https://www.linkedin.com/in/consultoricardolunab/';
const PLATFORM_1_URL = 'https://servicioslatinoscanada.com/';
const PLATFORM_2_URL = 'https://canadaoneclick.ca/';

export const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, basePath } = useLanguage();

  const skills = [1, 2, 3, 4, 5, 6].map((n) => t(`founder.team.skill${n}`));

  const pillars = [
    { icon: Brain, title: t('founder.strategy.title'), text: t('founder.strategy.text') },
    { icon: Cog, title: t('founder.engineering.title'), text: t('founder.engineering.text') },
  ];

  return (
    <section id="founder" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/3 -right-32 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            👤 {t('founder.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t('founder.title')}{' '}
            <Link
              to={basePath || '/'}
              className="text-primary hover:text-accent transition-colors underline-offset-4 hover:underline"
              aria-label="RCW Innovation Inc."
            >
              {t('founder.titleHighlight')}
            </Link>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('founder.subtitle')}
          </p>
        </motion.div>

        {/* Founder card */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm">
              <img
                src={founderImage}
                alt={`${t('founder.name')} — ${t('founder.role')}`}
                width={768}
                height={896}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-foreground">{t('founder.name')}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t('founder.role')}</p>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors min-h-[40px]"
                  aria-label={`LinkedIn — ${t('founder.name')}`}
                >
                  <Linkedin className="w-4 h-4" />
                  {t('founder.connect')}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-accent transition-colors"
              >
                {t('founder.name')}
              </a>
              {' — '}
              {t('founder.bio1').replace(t('founder.name') + ', ', '')}
            </p>
            <p className="text-muted-foreground leading-relaxed">{t('founder.bio2')}</p>
            <p className="text-muted-foreground leading-relaxed">{t('founder.bio3')}</p>

            {/* Team skills */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-accent" />
                <h4 className="font-semibold">{t('founder.team.title')}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{t('founder.team.text')}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Strategic + Engineering pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{pillar.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">🌎 {t('founder.platforms.title')}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('founder.platforms.text')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: t('founder.platform1.name'), desc: t('founder.platform1.desc'), cta: t('founder.platform1.cta'), url: PLATFORM_1_URL },
              { name: t('founder.platform2.name'), desc: t('founder.platform2.desc'), cta: t('founder.platform2.cta'), url: PLATFORM_2_URL },
            ].map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/40 hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {p.name}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  {p.cta} →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};