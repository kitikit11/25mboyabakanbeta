import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenConsultModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  onOpenConsultModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'О школе', href: '#about' },
    { label: 'Образование', href: '#education' },
    { label: 'Инфраструктура', href: '#infrastructure' },
    { label: 'Правила', href: '#rules' },
    { label: 'Маршрут', href: '#map' },
    { label: 'ВКонтакте', href: '#vk' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-black/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-white/10 shadow-2xs'
          : 'bg-white/70 dark:bg-black/70 backdrop-blur-sm border-b border-neutral-200/50 dark:border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-14 sm:h-16">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            МБОУ СОШ №25
          </a>

          {/* Zone 2: Navigation links on desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-xs lg:text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-sky-600 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Theme Toggle + Dnevnik.ru + Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
              title={isDarkMode ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
              aria-label={isDarkMode ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700" />
              )}
            </button>

            {/* Dnevnik.ru link */}
            <a
              href={SCHOOL_INFO.dnevnikUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200/80 dark:border-sky-800 rounded-full transition-colors whitespace-nowrap shrink-0"
              title="Перейти в электронный дневник на Dnevnik.ru"
            >
              <span>Dnevnik.ru</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenConsultModal}
              className="px-3.5 sm:px-4 py-1.5 text-xs font-medium text-white bg-neutral-900 dark:bg-white dark:text-black rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors whitespace-nowrap shrink-0 shadow-2xs"
            >
              Запись
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="Открыть мобильное меню"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with comfortable touch spacing */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-sky-600 dark:hover:text-white py-2.5 px-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={SCHOOL_INFO.dnevnikUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 rounded-xl border border-sky-200"
              >
                <span>Электронный дневник (Dnevnik.ru)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
