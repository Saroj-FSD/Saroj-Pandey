import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const projects = [
  {
    title: 'Web App',
    category: '',
    image: '/images/web-app.avif',
    description: '',
    tags: [],
  },
  {
    title: 'Web App',
    category: '',
    image: '/images/web-app.avif',
    description: '',
    tags: [],
  },
  {
    title: 'Web App',
    category: '',
    image: '/images/web-app.avif',
    description: '',
    tags: [],
  },
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1 
      }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] glass mb-8">
        <motion.img
          style={{ scale: 1.2, y }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-sm">
          <Magnetic>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl"
            >
              <ExternalLink className="w-6 h-6" />
            </motion.button>
          </Magnetic>
          <Magnetic>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full glass flex items-center justify-center shadow-xl"
            >
              <Github className="w-6 h-6" />
            </motion.button>
          </Magnetic>
        </div>
      </div>
      
      <div className="px-4">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 mb-3">
          {project.category}
        </p>
        <h4 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors tracking-tight">
          {project.title}
        </h4>
        <p className="text-base opacity-50 mb-8 line-clamp-2 font-light leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag: string, j: number) => (
            <span key={j} className="text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-foreground/5 opacity-40 group-hover:opacity-100 transition-opacity">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">
              {t('nav_projects')}
            </h2>
            <h3 className="text-2xl md:text-7xl font-bold tracking-tight">
              Crafting digital excellence.
            </h3>
          </div>
          <Magnetic>
            <button className="text-xs font-bold tracking-[0.2em] uppercase border-b border-foreground/20 pb-2 hover:border-foreground transition-all hover:tracking-[0.3em]">
              View All Projects
            </button>
          </Magnetic>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
