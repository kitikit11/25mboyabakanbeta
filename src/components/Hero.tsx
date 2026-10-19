import React from 'react';
import { ArrowRight, ChevronRight, Compass } from 'lucide-react';
import { SchoolPhotoCarousel } from './SchoolPhotoCarousel';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenConsultModal: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultModal, onExploreClick }) => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Centered Editorial Hero Block */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-3">
            {SCHOOL_INFO.shortName} · {SCHOOL_INFO.city}
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6 text-balance">
            Пространство для мысли.
            <br />
            <span className="text-neutral-500 dark:text-neutral-400">Энергия для побед.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Школа с 28-летней историей, передовой IT-лабораторией и уникальным 25-метровым плавательным бассейном. 
            Создаем условия, в которых каждому ребенку интересно учиться и побеждать.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm font-medium">
            <button
              onClick={onOpenConsultModal}
              className="px-6 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-xs hover:shadow-md active:scale-95 inline-flex items-center gap-2"
            >
              <span>Подать документы в 25 школу</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreClick}
              className="px-6 py-2.5 rounded-full bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all inline-flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-neutral-500" />
              <span>Правила и устав школы</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Real School Photo Carousel in Hero */}
        <div className="max-w-5xl mx-auto">
          <SchoolPhotoCarousel />
        </div>

        {/* Apple-style Key Metrics Grid below Showcase */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
            {SCHOOL_INFO.highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white tabular-nums mb-1">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-0.5">
                  {item.label}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
