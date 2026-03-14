import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import Magnetic from './Magnetic';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-60">
            Full Stack Developer || Frontend Experience Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.3 
            }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter mb-8 leading-[0.85] select-none"
          >
            <motion.span 
              className="block"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Saroj
            </motion.span>
            <motion.span 
              className="block"
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Pandey
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl opacity-50 max-w-xl mb-12 font-light leading-relaxed"
          >
            Entry Level Full Stack Developer basically with a foundation in [frontend technologies]. Proficient in building responsive web applications using [frameworks]. Continuing in a project during [Internship], including a [CRM project] that [serves as customer resource management]. Demonstrated ability to quickly learn new technologies and collaborate effectively in every environments. Seeking to leverage technical skills and passion for innovation to contribute to cutting-edge web solutions at a [Targeted Company].
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Magnetic>
              <button className="group relative px-10 py-5 bg-foreground text-background rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Magnetic>
            
            <Magnetic>
              <button className="px-10 py-5 glass rounded-full font-bold transition-all hover:bg-foreground/5 hover:scale-105 active:scale-95">
                Hire Me
              </button>
            </Magnetic>
          </motion.div>
          
        </div>

        <div className="relative lg:block">
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="relative aspect-[4/5] max-w-md mx-auto"
          >
            {/* Background Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-transparent rounded-[3rem] blur-2xl -z-10 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-foreground/5 rounded-full -z-10" />
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden glass border border-foreground/10 group">
              <motion.img
                initial={{ scale: 1.3 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                src="../public/images/saroj-p.jpg"
                alt="saroj-p"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Info Overlays */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 glass p-4 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">Fresher</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Experience in Web Development</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-10 glass p-4 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Available</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8"
      >
        {[
          { icon: Github, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Facebook, href: "https://www.facebook.com/i.am.saroj39/" },
          { icon: Instagram, href: "https://www.instagram.com/i_am_sarojp/" },

        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="text-orange-700 hover:text-white transition-colors"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
      />
    </section>
  );
}
