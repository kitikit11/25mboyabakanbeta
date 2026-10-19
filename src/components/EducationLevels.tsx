import React, { useState } from 'react';
import { EDUCATION_PROGRAMS } from '../data/schoolData';
import { CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';

interface EducationLevelsProps {
  onOpenConsultModal: (programTitle: string) => void;
}

export const EducationLevels: React.FC<EducationLevelsProps> = ({ onOpenConsultModal }) => {
  const [activeTab, setActiveTab] = useState(EDUCATION_PROGRAMS[0].id);

  const currentProgram = EDUCATION_PROGRAMS.find((p) => p.id === activeTab) || EDUCATION_PROGRAMS[0];

  return (
    <section id="education" className="py-20 sm:py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Ступени образования
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Последовательный маршрут от 1 до 11 класса.
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            В МБОУ СОШ №25 сформирована преемственная система: бережная начальная школа, сильная фундаментальная база в среднем звене и профильные классы для старшеклассников.
          </p>
        </div>

        {/* Clean Apple Tab Switcher (Segmented buttons) */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200/60 dark:border-neutral-800">
            {EDUCATION_PROGRAMS.map((prog) => {
              const isActive = prog.id === activeTab;
              return (
                <button
                  key={prog.id}
                  onClick={() => setActiveTab(prog.id)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  <span className="opacity-70 mr-1.5">{prog.tag}</span>
                  <span>{prog.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Program Showcase Card */}
        <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{currentProgram.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                {currentProgram.title}
              </h3>

              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                {currentProgram.desc}
              </p>

              <div className="space-y-3.5">
                {currentProgram.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-4">
                <button
                  onClick={() => onOpenConsultModal(currentProgram.title)}
                  className="px-5 py-2 text-xs sm:text-sm font-medium text-white bg-neutral-900 dark:bg-white dark:text-black rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Записаться в этот поток</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick stats / Highlights for this stage */}
            <div className="lg:col-span-5 bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Ключевые факты ступени
              </h4>
              
              <ul className="space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                <li className="pb-3 border-b border-neutral-100 dark:border-neutral-800 flex justify-between">
                  <span className="text-neutral-500">Язык преподавания:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">Русский</span>
                </li>
                <li className="pb-3 border-b border-neutral-100 dark:border-neutral-800 flex justify-between">
                  <span className="text-neutral-500">Иностранные языки:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">Английский, Немецкий</span>
                </li>
                <li className="pb-3 border-b border-neutral-100 dark:border-neutral-800 flex justify-between">
                  <span className="text-neutral-500">Водные тренировки:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Включены в план</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-500">Форма обучения:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">Очная (2 смены)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
