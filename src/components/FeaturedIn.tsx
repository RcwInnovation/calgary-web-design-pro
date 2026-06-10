import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Newspaper } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import canadaOneClickAsset from '@/assets/canada-one-click-logo.png.asset.json';
import latinosCalgaryAsset from '@/assets/latinos-calgary-logo.png.asset.json';

interface Feature {
  name: string;
  logo: string;
  url: string;
  descriptionKey: string;
  tagKey: string;
}

const features: Feature[] = [
  {
    name: 'Canada One Click',
    logo: canadaOneClickAsset.url,
    url: 'https://canadaoneclick.ca/',
    descriptionKey: 'featured.canadaOneClick.description',
    tagKey: 'featured.tag.directory',
  },
  {
    name: 'Latinos Calgary',
    logo: latinosCalgaryAsset.url,
    url: 'https://servicioslatinoscanada.com/',
    descriptionKey: 'featured.latinosCalgary.description',
    tagKey: 'featured.tag.marketplace',
  },
];

export const FeaturedIn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section id="featured-in" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Newspaper className="w-4 h-4" />
            {t('featured.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4">
            {t('featured.title')}{' '}
            <span className="text-gradient-blue">{t('featured.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {t('featured.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.a
              key={feature.name}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-strong group p-6 rounded-2xl hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="bg-white rounded-xl p-3 flex items-center justify-center w-24 h-24 shrink-0 shadow-lg">
                  <img
                    src={feature.logo}
                    alt={`${feature.name} - ${t('featured.altSuffix')}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    width={96}
                    height={96}
                  />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {t(feature.tagKey)}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.name}
              </h3>
              <p className="text-sm text-muted-foreground flex-1">
                {t(feature.descriptionKey)}
              </p>

              <span className="mt-4 text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {t('featured.visit')} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
