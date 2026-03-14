import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import Magnetic from './Magnetic';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">
            {t('contact_title')}
          </h2>
          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            Let's build <span className="text-gradient">the future.</span>
          </h3>
          <p className="text-lg opacity-50 max-w-xl mx-auto font-light leading-relaxed">
            Have a revolutionary idea? Let's collaborate and bring it to life with 
            cutting-edge technology and premium design.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="glass rounded-[3rem] p-8 md:p-16 border border-foreground/5 shadow-2xl"
        >
          <form className="grid gap-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ml-6">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-8 py-5 outline-none focus:border-accent transition-all focus:bg-foreground/[0.08]"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ml-6">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-8 py-5 outline-none focus:border-accent transition-all focus:bg-foreground/[0.08]"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ml-6">Message</label>
              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-8 py-5 outline-none focus:border-accent transition-all focus:bg-foreground/[0.08] resize-none"
              />
            </div>
            <Magnetic>
              <button className="group relative w-full bg-foreground text-background rounded-2xl py-6 font-bold overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-accent/10">
                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </Magnetic>
          </form>
        </motion.div>

        <div className="mt-24 flex flex-wrap justify-center gap-16">
          <Magnetic>
            <a href="mailto:hello@alexrivera.dev" className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">sarojpandey2069@gmail.com</span>
            </a>
          </Magnetic>
          <div className="flex items-center gap-4 opacity-40">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold tracking-widest uppercase">Available for Freelance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
