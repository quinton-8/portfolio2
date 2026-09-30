import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { Zone01Terminal } from './components/Zone01Terminal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-paper-50 dark:bg-carbon-900 text-paper-900 dark:text-carbon-100 selection:bg-brand-emerald selection:text-carbon-950 font-sans transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <ProjectsSection />
          <Zone01Terminal />
          <SkillsMatrix />
          <ExperienceTimeline />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
