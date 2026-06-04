import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Brain } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'code' | 'ai';
  color: string;
  borderColor: string;
  bgColor: string;
  slug: string;
}

const techItems: TechItem[] = [
  // Code / Development
  { name: 'React', category: 'code', color: '#61DAFB', borderColor: 'rgba(97, 218, 251, 0.3)', bgColor: 'rgba(97, 218, 251, 0.08)', slug: 'react' },
  { name: 'TypeScript', category: 'code', color: '#3178C6', borderColor: 'rgba(49, 120, 198, 0.3)', bgColor: 'rgba(49, 120, 198, 0.08)', slug: 'typescript' },
  { name: 'Node.js', category: 'code', color: '#5FA04E', borderColor: 'rgba(95, 160, 78, 0.3)', bgColor: 'rgba(95, 160, 78, 0.08)', slug: 'nodedotjs' },
  { name: 'Python', category: 'code', color: '#FFD43B', borderColor: 'rgba(255, 212, 59, 0.3)', bgColor: 'rgba(255, 212, 59, 0.08)', slug: 'python' },
  { name: 'Next.js', category: 'code', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)', bgColor: 'rgba(255, 255, 255, 0.06)', slug: 'nextdotjs' },
  { name: 'Tailwind CSS', category: 'code', color: '#38BDF8', borderColor: 'rgba(56, 189, 248, 0.3)', bgColor: 'rgba(56, 189, 248, 0.08)', slug: 'tailwindcss' },
  { name: 'PostgreSQL', category: 'code', color: '#4169E1', borderColor: 'rgba(65, 105, 225, 0.3)', bgColor: 'rgba(65, 105, 225, 0.08)', slug: 'postgresql' },
  { name: 'Supabase', category: 'code', color: '#3ECF8E', borderColor: 'rgba(62, 207, 142, 0.3)', bgColor: 'rgba(62, 207, 142, 0.08)', slug: 'supabase' },
  { name: 'Vite', category: 'code', color: '#646CFF', borderColor: 'rgba(100, 108, 255, 0.3)', bgColor: 'rgba(100, 108, 255, 0.08)', slug: 'vite' },
  { name: 'Git', category: 'code', color: '#F05032', borderColor: 'rgba(240, 80, 50, 0.3)', bgColor: 'rgba(240, 80, 50, 0.08)', slug: 'git' },
  // AI / Automation
  { name: 'OpenAI', category: 'ai', color: '#10A37F', borderColor: 'rgba(16, 163, 127, 0.3)', bgColor: 'rgba(16, 163, 127, 0.08)', slug: 'openai' },
  { name: 'ElevenLabs', category: 'ai', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)', bgColor: 'rgba(255, 255, 255, 0.06)', slug: 'elevenlabs' },
  { name: 'Claude', category: 'ai', color: '#D97757', borderColor: 'rgba(217, 119, 87, 0.3)', bgColor: 'rgba(217, 119, 87, 0.08)', slug: 'claude' },
  { name: 'Gemini', category: 'ai', color: '#4796E3', borderColor: 'rgba(71, 150, 227, 0.3)', bgColor: 'rgba(71, 150, 227, 0.08)', slug: 'googlegemini' },
  { name: 'Make', category: 'ai', color: '#6D00CC', borderColor: 'rgba(109, 0, 204, 0.3)', bgColor: 'rgba(109, 0, 204, 0.08)', slug: 'make' },
  { name: 'n8n', category: 'ai', color: '#EA4B71', borderColor: 'rgba(234, 75, 113, 0.3)', bgColor: 'rgba(234, 75, 113, 0.08)', slug: 'n8n' },
  { name: 'Zapier', category: 'ai', color: '#FF4F00', borderColor: 'rgba(255, 79, 0, 0.3)', bgColor: 'rgba(255, 79, 0, 0.08)', slug: 'zapier' },
];

const codeTechs = techItems.filter(t => t.category === 'code');
const aiTechs = techItems.filter(t => t.category === 'ai');

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  // Calculate widths for animation
  const itemWidth = 160;
  const gap = 16;
  const row1Width = codeTechs.length * (itemWidth + gap);
  const row2Width = aiTechs.length * (itemWidth + gap);

  const renderTechBadge = (tech: TechItem, index: number, prefix: string) => (
    <div
      key={`${prefix}-${tech.name}-${index}`}
      className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-xl border transition-all duration-300 hover:scale-105 cursor-default"
      style={{
        borderColor: tech.borderColor,
        backgroundColor: tech.bgColor,
        width: itemWidth,
      }}
    >
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
        alt={`${tech.name} logo`}
        className="w-5 h-5 shrink-0"
        loading="lazy"
        decoding="async"
        // @ts-expect-error fetchpriority not in React types yet
        fetchpriority="low"
        width={20}
        height={20}
      />
      <span
        className="font-semibold text-sm whitespace-nowrap"
        style={{ color: tech.color }}
      >
        {tech.name}
      </span>
    </div>
  );

  return (
    <section id="tech-stack" className="py-16 md:py-24 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm text-primary font-medium tracking-wider uppercase mb-3 sm:mb-4 block">
            {t('techStack.badge')}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            {t('techStack.title')}{' '}
            <span className="text-gradient-blue">{t('techStack.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            {t('techStack.subtitle')}
          </p>
        </motion.div>

        {/* Code row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5"
        >
          <div className="flex items-center gap-2 mb-3 px-1">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {t('techStack.codeLabel')}
            </span>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsPausedRow1(true)}
            onMouseLeave={() => setIsPausedRow1(false)}
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4"
              animate={{ x: isPausedRow1 ? undefined : [0, -row1Width] }}
              transition={{ x: { duration: 25, repeat: Infinity, ease: 'linear' } }}
            >
              {[...codeTechs, ...codeTechs, ...codeTechs].map((tech, index) =>
                renderTechBadge(tech, index, 'code')
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* AI row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-3 px-1">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {t('techStack.aiLabel')}
            </span>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsPausedRow2(true)}
            onMouseLeave={() => setIsPausedRow2(false)}
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4"
              animate={{ x: isPausedRow2 ? undefined : [-row2Width, 0] }}
              transition={{ x: { duration: 20, repeat: Infinity, ease: 'linear' } }}
            >
              {[...aiTechs, ...aiTechs, ...aiTechs].map((tech, index) =>
                renderTechBadge(tech, index, 'ai')
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
