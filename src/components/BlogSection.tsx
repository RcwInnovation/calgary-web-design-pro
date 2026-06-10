import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogPosts';

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { language, t } = useLanguage();

  const featured = blogPosts.slice(0, 3);
  const blogPath = language === 'es' ? '/es/blog' : '/en/blog';

  return (
    <section id="blog" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <BookOpen className="w-4 h-4" />
            {t('blog.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            {t('blog.title')}{' '}
            <span className="text-gradient-blue">{t('blog.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((post, index) => (
            <motion.article
              key={post.slug.en}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass-strong rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              <Link to={`${blogPath}/${post.slug[language]}`} className="flex flex-col h-full">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.coverAlt[language]}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                    {t(`blog.category.${post.category}`)}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString(language === 'es' ? 'es-CA' : 'en-CA', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingMinutes} min
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                    {post.excerpt[language]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    {t('blog.readMore')} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to={blogPath}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            {t('blog.viewAll')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
