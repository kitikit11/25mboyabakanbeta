import React from 'react';
import { Waves, Cpu, BookOpen, Award, ArrowUpRight } from 'lucide-react';
import { VisualAsset } from './VisualAsset';

interface BentoFeaturesProps {
  onLearnMore: (topic: string) => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onLearnMore }) => {
  return (
    <section id="infrastructure" className="py-20 sm:py-28 bg-[#fbfbfd] dark:bg-[#08080a] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Инфраструктура и среда
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Все для всестороннего развития ученика.
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Школа №25 — это современная образовательная среда, объединяющая научные лаборатории, собственный плавательный бассейн, площадки для физкультуры на свежем воздухе и цифровые классы.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Bento Card 1: Swimming Pool (Span 2 cols) */}
          <div className="md:col-span-2 group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden flex flex-col justify-between apple-card">
            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Waves className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Спортивная гордость
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
                Плавательный бассейн 25 метров
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                Редкая для общеобразовательных школ Сибири собственная водная база. 4 плавательные дорожки, постоянный контроль воды, профессиональный тренерский состав и бесплатные уроки плавания для начальных и средних классов.
              </p>
            </div>

            <div className="relative h-64 sm:h-72 w-full mt-4 overflow-hidden">
              <VisualAsset type="pool" interactive={false} />
            </div>
          </div>

          {/* Bento Card 2: IT Labs & Engineering (Span 1 col) */}
          <div className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-8 sm:p-10 flex flex-col justify-between apple-card">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Будущее в коде
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
                IT-лаборатории и цифровые классы
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                Компьютерные кабинеты с современными станциями, изучение Python, алгоритмов, веб-разработки и 3D-моделирования.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-4/3">
              <VisualAsset type="digital_class" interactive={false} />
            </div>
          </div>

          {/* Bento Card 3: Library & Media Hub (Span 1 col) */}
          <div className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-8 sm:p-10 flex flex-col justify-between apple-card">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Знания
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
                Медиатека и читальный зал
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                30 000+ учебников, тихая зона для подготовки к экзаменам, доступ к электронным научным ресурсам и литературные вечера.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-4/3">
              <VisualAsset type="library" interactive={false} />
            </div>
          </div>

          {/* Bento Card 4: Heritage & Stadium (Span 2 cols) */}
          <div className="md:col-span-2 group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden flex flex-col justify-between apple-card">
            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Открытая территория
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
                Площадка для занятий физкультурой на улице
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mb-4">
                Оборудованное пришкольное место для проведения уроков физкультуры на свежем воздухе: беговые дорожки, зона разминки и площадка для спортивных игр.
              </p>

              <button
                onClick={() => onLearnMore('sports')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 dark:text-white hover:underline"
              >
                <span>Узнать расписание спортивных секций</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="relative h-60 w-full overflow-hidden">
              <VisualAsset type="stadium" interactive={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
