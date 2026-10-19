import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { EducationLevels } from './components/EducationLevels';
import { SchoolRules } from './components/SchoolRules';
import { InteractiveMap } from './components/InteractiveMap';
import { PhotoGallery } from './components/PhotoGallery';
import { VkIntegration } from './components/VkIntegration';
import { Administration } from './components/Administration';
import { StudentParentHub } from './components/StudentParentHub';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';

export default function App() {
  // Light theme by default
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return false;
    }
    return false;
  });

  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('Запись в школу');

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isDarkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      body.classList.add('dark');
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.removeAttribute('data-theme');
      body.classList.remove('dark');
      body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenConsult = (topic = 'Запись в школу') => {
    setModalTopic(topic);
    setIsConsultModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? 'dark bg-[#0a0a0c] text-[#f5f5f7] selection:bg-neutral-700 selection:text-white'
          : 'bg-[#fafafc] text-[#1d1d1f] selection:bg-sky-500 selection:text-white'
      }`}
      data-theme={isDarkMode ? 'dark' : 'light'}
    >
      {/* Top Bar Navigation with theme switch & quick admission */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenConsultModal={() => handleOpenConsult('Запись в школу')}
      />

      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          onOpenConsultModal={() => handleOpenConsult('Подача документов')}
          onExploreClick={() => handleScrollToSection('rules')}
        />

        {/* Bento Grid: Infrastructure & Highlights (25m pool, IT labs, outdoor PE grounds) */}
        <BentoFeatures
          onLearnMore={() => handleScrollToSection('parents')}
        />

        {/* Education Levels & Profiles */}
        <EducationLevels
          onOpenConsultModal={(prog) => handleOpenConsult(`Запись в ${prog}`)}
        />

        {/* School Rules & Charter: Uniform, Absences, Phones, Pool rules */}
        <SchoolRules />

        {/* Open-Source OpenStreetMap & Route Navigation to School 25 in Abakan */}
        <InteractiveMap />

        {/* Photo Gallery with school spaces and campus */}
        <PhotoGallery />

        {/* VK Community Live Integration & Photo Albums Window */}
        <VkIntegration />

        {/* Administration & Staff */}
        <Administration />

        {/* Parent & Student Hub: Schedules, Hot Meals, Documents, Dnevnik.ru */}
        <StudentParentHub
          onOpenConsultModal={() => handleOpenConsult('Консультация для родителей')}
        />

        {/* Contacts & Interactive Feedback Form */}
        <Contacts />
      </main>

      {/* Clean Apple-style Footer */}
      <Footer />

      {/* Interactive Registration / Consultation Modal */}
      <ConsultModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        initialTopic={modalTopic}
      />
    </div>
  );
}
