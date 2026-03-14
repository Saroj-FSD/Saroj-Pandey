import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/src/context/LanguageContext';
import { 
  Figma, 
  Layout, 
  Layers, 
  Terminal, 
  Database, 
  Cloud,
  Code,
  Smartphone
} from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Layout, color: 'text-blue-400', items: ['HTML','CSS','React', 'Next.js', 'Flowbite', 'Tailwind'] },
  { name: 'Backend', icon: Database, color: 'text-emerald-400', items: ['Node.js', 'PostgreSQL','GraphQL'] },
  { name: 'Design', icon: Figma, color: 'text-purple-400', items: ['Figma'] },
  { name: 'Tools', icon: Terminal, color: 'text-orange-400', items: ['AWS', 'Git'] },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">
            Technical Tools and Frameworks
          </h2>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tight">
            Powered by <span className="text-gradient"></span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.1 
              }}
              className="group glass p-10 rounded-[3rem] hover:bg-foreground/5 transition-all duration-500 border border-foreground/5"
            >
              <div className={cn("w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner", skill.color)}>
                <skill.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-8 tracking-tight">{skill.name}</h4>
              <ul className="space-y-4">
                {skill.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm opacity-40 group-hover:opacity-80 transition-opacity font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
