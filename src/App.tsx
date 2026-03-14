/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Scene from './components/Scene';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { motion } from 'motion/react';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <SmoothScroll>
          <div className="relative min-h-screen selection:bg-luxury-gold/20">
            <CustomCursor />
            <Scene />
            <Navbar />
            
            <main>
              <Hero />
              
              <div id="about">
                <About />
              </div>
              
              <TechStack />

              <Gallery />
              
              <div id="projects">
                <Projects />
              </div>
          
          {/* Experience Section - Inline for brevity */}
          <section id="experience" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 mb-20 text-center">
                Experience
              </h2>
              <div className="space-y-12">
                {[
                  { company: 'SkillPrompt', role: 'Intern Frontend Engineer', period: '2025 (August-December)', desc: 'Contributing to the development of immersive major project of the company. Collaboration wuth the entire team members and working with dedication to perform every tasks and solve the bugs and provide the better solution' },
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group grid md:grid-cols-[1fr_2fr] gap-8 p-8 rounded-[2rem] hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                  >
                    <div>
                      <p className="text-xs font-bold text-accent-blue mb-2">{exp.period}</p>
                      <h4 className="text-2xl font-bold">{exp.company}</h4>
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold mb-4 text-white/80">{exp.role}</h5>
                      <p className="text-white/50 font-light leading-relaxed">{exp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xs font-bold tracking-widest uppercase text-white/20">
              © 2026 Saroj Pandey. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              {['Facebook', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-xs font-bold tracking-widest uppercase text-white/20 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  </ThemeProvider>
  </LanguageProvider>
  );
}
