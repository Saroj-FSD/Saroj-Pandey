import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ne';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  hero_role: {
    en: 'Full-Stack Developer | Frontend Experience Engineer',
    ne: 'फुल-स्ट्याक डेभलपर | फ्रन्टइन्ड एक्सपिरियन्स इन्जिनियर',
  },
  hero_tagline: {
    en: 'crafting immersive digital environments with precision and performance.',
    ne: 'सटीकता र प्रदर्शनका साथ इमर्सिभ डिजिटल वातावरणहरू निर्माण गर्दै।',
  },
  nav_about: { en: 'About', ne: 'मेरो बारेमा' },
  nav_projects: { en: 'Projects', ne: 'परियोजनाहरू' },
  nav_experience: { en: 'Experience', ne: 'अनुभव' },
  nav_contact: { en: 'Contact', ne: 'सम्पर्क' },
  btn_view_projects: { en: 'View Projects', ne: 'परियोजनाहरू हेर्नुहोस्' },
  btn_hire_me: { en: 'Hire Me', ne: 'मलाई काममा लिनुहोस्' },
  about_title: { en: 'About Me', ne: 'मेरो बारेमा' },
  about_h3: {
    en: 'Bridging the gap between design and engineering.',
    ne: 'डिजाइन र इन्जिनियरिङ बीचको दूरी मेटाउँदै।',
  },
  tech_title: { en: 'Technical Arsenal', ne: 'प्राविधिक हतियार' },
  gallery_title: { en: 'Creative Playground', ne: 'रचनात्मक खेल मैदान' },
  contact_title: { en: 'Get In Touch', ne: 'सम्पर्कमा रहनुहोस्' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
