import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogPosts';

const BlogPage = () => {
  const { language, t, basePath } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const seo = {
    es: {
      title: 'Blog RCW Innovation | Casos de éxito, IA y desarrollo web en Calgary',
      description: 'Artículos, casos de éxito y noticias sobre desarrollo de software, agentes de IA, automatización y transformación digital en Calgary y Canadá.',
      canonical: 'https://www.rcwinnovation.com/es/blog',
    },
    en: {
      title: 'RCW Innovation Blog | Case studies, AI and web development in Calgary',
      description: 'Articles, case studies and news on software development, AI agents, automation and digital transformation in Calgary and Canada.',
      canonical: 'https://www.rcwinnovation.com/en/blog',
    },
  }[language];

  const blogPath = language === 'es' ? '/es/blog' : '/en/blog';

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es/blog" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: seo.title,
          url: seo.canonical,
          inLanguage: language,
          publisher: { '@type': 'Organization', name: 'RCW Innovation Inc' },
          blogPost: blogPosts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title[language],
            description: p.excerpt[language],
            datePublished: p.publishedAt,
            author: { '@type': 'Person', name: p.author },
            url: `https://www.rcwinnovation.com/${language}/blog/${p.slug[language]}`,
          })),
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

        <main className="pt-32 pb-20">
          <section className="container-custom mb-12">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'es' ? 'Volver al inicio' : 'Back to home'}
            </Link>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                {t('blog.badge')}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                {language === 'es'
                  ? 'Blog, casos de éxito y prensa de RCW Innovation'
                  : 'RCW Innovation blog, case studies and press'}
              </h1>
              <p className="text-muted-foreground text-lg">
                {language === 'es'
                  ? 'Insights de desarrollo, IA y transformación digital, además de artículos donde RCW Innovation ha sido mencionada.'
                  : 'Insights on development, AI and digital transformation, plus articles where RCW Innovation has been featured.'}
              </p>
            </div>
          </section>

          <section className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug.en}
                  className="glass-strong rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col"
                >
                  <Link to={`${blogPath}/${post.slug[language]}`} className="flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.cover}
                        alt={post.coverAlt[language]}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
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
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title[language]}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                        {post.excerpt[language]}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                        {t('blog.readMore')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
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

export default BlogPage;
