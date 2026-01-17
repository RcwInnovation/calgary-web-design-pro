import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, ShoppingCart, LayoutDashboard, ArrowUpRight, Globe, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const projectIcons = [Globe, Bot, ShoppingCart, LayoutDashboard];
const projectResults = ['#1', '2.8×', '+38%', '-31%'];
const projectLinks = ['https://servicioslatinoscanada.com/', undefined, undefined, undefined];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const projects = Array.from({ length: 4 }, (_, i) => {
    const num = i + 1;
    return {
      icon: projectIcons[i],
      title: t(`project.${num}.title`),
      description: t(`project.${num}.description`),
      result: projectResults[i],
      resultLabel: t(`project.${num}.resultLabel`),
      tags: t(`project.${num}.tags`).split(','),
      link: projectLinks[i],
    };
  });

  return (
    <section id="proyectos" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {t('projects.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-strong p-6 rounded-2xl group hover:border-primary/30 transition-all duration-300 relative"
            >
              {/* Link badge for featured project */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-primary" />
                </a>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Result */}
              <div className="p-3 rounded-xl bg-accent/5 border border-accent/20 mb-4">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                  <span className="text-xl font-bold text-accent">{project.result}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{project.resultLabel}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-muted/50 text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
