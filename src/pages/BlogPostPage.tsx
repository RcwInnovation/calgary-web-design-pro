import { Helmet } from 'react-helmet';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, ExternalLink, User } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { ConsultationModal } from '@/components/ConsultationModal';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, getPostBySlug } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const post = getPostBySlug(slug, language);
  if (!post) return <Navigate to={`/${language}/blog`} replace />;

  const url = `https://www.rcwinnovation.com/${language}/blog/${post.slug[language]}`;
  const altLang = language === 'es' ? 'en' : 'es';
  const altUrl = `https://www.rcwinnovation.com/${altLang}/blog/${post.slug[altLang]}`;
  const blogPath = language === 'es' ? '/es/blog' : '/en/blog';

  const related = blogPosts.filter((p) => p.slug.en !== post.slug.en).slice(0, 2);

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{`${post.title[language]} | RCW Innovation`}</title>
        <meta name="description" content={post.excerpt[language]} />
        <meta name="keywords" content={post.keywords[language]} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang={language} href={url} />
        <link rel="alternate" hrefLang={altLang} href={altUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title[language]} />
        <meta property="og:description" content={post.excerpt[language]} />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title[language],
          description: post.excerpt[language],
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          inLanguage: language,
          keywords: post.keywords[language],
          author: { '@type': 'Person', name: post.author },
          publisher: {
            '@type': 'Organization',
            name: 'RCW Innovation Inc',
            url: 'https://www.rcwinnovation.com',
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: language === 'es' ? 'Inicio' : 'Home', item: `https://www.rcwinnovation.com/${language}` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://www.rcwinnovation.com/${language}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title[language], item: url },
          ],
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

        <main className="pt-32 pb-16">
          <article className="container-custom max-w-3xl">
            <Link
              to={blogPath}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'es' ? 'Volver al blog' : 'Back to blog'}
            </Link>

            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
              {t(`blog.category.${post.category}`)}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title[language]}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-1">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString(language === 'es' ? 'es-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readingMinutes} min
              </span>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden mb-10 aspect-[16/9]">
              <img
                src={post.cover}
                alt={post.coverAlt[language]}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8 italic border-l-2 border-primary pl-4">
                {post.excerpt[language]}
              </p>
              {post.content[language].map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {post.externalUrl && (
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong hover:border-primary/40 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-primary" />
                <span className="text-sm">
                  {language === 'es' ? 'Ver publicación original en' : 'Read original publication on'}{' '}
                  <strong className="text-primary">{post.externalSource}</strong>
                </span>
              </a>
            )}
          </article>

          {related.length > 0 && (
            <section className="container-custom max-w-5xl mt-20">
              <h2 className="text-2xl font-bold mb-6">
                {language === 'es' ? 'También te puede interesar' : 'You may also like'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug.en}
                    to={`${blogPath}/${p.slug[language]}`}
                    className="glass-strong rounded-2xl overflow-hidden group hover:border-primary/40 transition-all flex"
                  >
                    <img
                      src={p.cover}
                      alt={p.coverAlt[language]}
                      loading="lazy"
                      decoding="async"
                      className="w-32 h-32 object-cover flex-shrink-0"
                    />
                    <div className="p-4 flex-1">
                      <span className="text-xs text-primary font-semibold uppercase">
                        {t(`blog.category.${p.category}`)}
                      </span>
                      <h3 className="font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {p.title[language]}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16">
            <CTA onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
          </div>
        </main>

        <Footer />
        <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
        <DiagnosticModal isOpen={isDiagnosticOpen} onClose={() => setIsDiagnosticOpen(false)} />
      </div>
    </>
  );
};

export default BlogPostPage;
