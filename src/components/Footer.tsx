import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 text-xs py-14 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top footer row: Title and navigation columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-base font-bold text-neutral-900 dark:text-white block mb-2">
              {SCHOOL_INFO.shortName}
            </span>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed mb-4">
              {SCHOOL_INFO.fullName}
            </p>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Учредитель: Городское управление образования Администрации города Абакана. Обучение ведётся на государственном русском языке.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 text-xs uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  О школе и руководстве
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Ступени и профили
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Бассейн и инфраструктура
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Фотогалерея локаций
                </a>
              </li>
              <li>
                <a href="#parents" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Расписание звонков
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 text-xs uppercase tracking-wider">
              Официальные ресурсы
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://школа25.абакан.рф"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Портал школа25.абакан.рф</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/club777990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Группа ВКонтакте</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://dnevnik.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 font-medium"
                >
                  <span>Электронный дневник Dnevnik.ru</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://edu.gov.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Минпросвещения России</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright hairline */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>
            © 1997 – 2026 {SCHOOL_INFO.shortName}. Все права защищены. 655017, г. Абакан, ул. Тельмана, 93.
          </p>
          <div className="flex items-center gap-4">
            <span>Безопасная цифровая среда</span>
            <span>·</span>
            <span>Минималистичный дизайн</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
