import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Cpu, Globe, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/src/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Years Experience', value: '5+', icon: Globe },
  { label: 'Projects Completed', value: '40+', icon: Zap },
  { label: 'Tech Stack', value: '12+', icon: Cpu },
  { label: 'Happy Clients', value: '25+', icon: Code2 },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden">
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">
              About Me
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Bridging the gap between design and engineering.
            </h3>
            <p className="text-lg opacity-60 mb-8 leading-relaxed font-light max-w-xl">
              I specialize in building high-performance, visually stunning web applications. 
              My approach combines clean architecture with cutting-edge frontend technologies 
              to create experiences that are not just functional, but memorable.
            </p>
            {/* <div className="grid grid-cols-2 gap-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-5 h-5 text-accent" />
                    <span className="text-4xl font-bold tracking-tighter">{stat.value}</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 group-hover:opacity-60 transition-opacity">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          <motion.div 
            style={{ y }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto group"
          >
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-foreground/10 shadow-2xl"
            >
              <motion.img 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                src="/images/annapurna.jpg" 
                alt="annapurna" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Animated Overlay Info */}
              <div className="absolute bottom-10 left-10 right-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <div className="glass p-6 rounded-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">Frontend Developer || Fullstack</p>
                  <h4 className="text-xl font-bold">Saroj Pandey</h4>
                </div>
              </div>
            </motion.div>

            {/* Advanced Animated Background for Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-transparent to-luxury-gold/20 blur-2xl rounded-[4rem] -z-10 animate-pulse" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 border border-dashed border-foreground/5 rounded-full -z-20"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-20 border border-dotted border-foreground/5 rounded-full -z-20"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
