import { motion } from 'motion/react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import { useTheme } from '@/src/context/ThemeContext';
import { useLanguage } from '@/src/context/LanguageContext';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_experience'), href: '#experience' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  const languages: { code: 'en' | 'ne'; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ne', label: 'NE' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-6',
        isScrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Magnetic>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-2xl font-bold tracking-tighter group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-foreground/10 group-hover:scale-110 transition-transform duration-500">
              <img 
                src="/images/logo.jpg"
                alt="saroj" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <span>Saroj Pandey<span className="opacity-30">.</span></span>
          </motion.a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <div className={cn(
            "flex items-center gap-2 px-2 py-1.5 rounded-full transition-all duration-500",
            isScrolled ? "glass" : "bg-transparent"
          )}>
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
          </div>
          
          <div className="flex items-center gap-2 glass px-2 py-1.5 rounded-full">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={cn(
                  "px-2 py-1 text-[10px] font-bold rounded-full transition-all",
                  language === lang.code ? "bg-foreground text-background" : "opacity-40 hover:opacity-100"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <Magnetic>
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center glass rounded-full hover:scale-110 transition-transform"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center glass rounded-full"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center glass rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={cn(
          "absolute top-full left-0 w-full glass-dark p-6 md:hidden pointer-events-none",
          isMobileMenuOpen && "pointer-events-auto"
        )}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-4 bg-white text-black rounded-2xl font-bold uppercase tracking-widest">
            Start a Project
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
