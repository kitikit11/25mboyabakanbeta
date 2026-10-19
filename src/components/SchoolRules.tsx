import React, { useState, useMemo } from 'react';
import { SCHOOL_RULES, SchoolRule } from '../data/schoolData';
import {
  Shirt,
  Clock,
  Smartphone,
  Waves,
  UtensilsCrossed,
  Shield,
  Search,
  CheckCircle,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';

export const SchoolRules: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRule, setExpandedRule] = useState<string | null>('uniform');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt':
        return <Shirt className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Waves':
        return <Waves className="w-5 h-5" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Shield':
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  const filteredRules = useMemo(() => {
    return SCHOOL_RULES.filter((rule) => {
      const matchesCategory = activeCategory === 'all' || rule.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        rule.title.toLowerCase().includes(q) ||
        rule.shortSummary.toLowerCase().includes(q) ||
        rule.paragraphs.some((p) => p.toLowerCase().includes(q)) ||
        (rule.importantNote && rule.importantNote.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="rules" className="py-20 sm:py-28 bg-[#fdfdfd] dark:bg-[#060608] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Устав и порядок
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Правила школы №25 в понятном формате.
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Сжатая выжимка из официальных «Правил внутреннего распорядка обучающихся» (приказ № 34-ОД) и Устава школы: всё о форме, пропусках, телефонах и бассейне.
          </p>
        </div>

        {/* Search and Category Filter Strip */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-x-auto scrollbar-none border border-neutral-200/60 dark:border-neutral-800">
            {[
              { id: 'all', label: 'Все правила' },
              { id: 'uniform', label: 'Школьная форма' },
              { id: 'absence', label: 'Пропуски и справки' },
              { id: 'gadgets', label: 'Телефоны' },
              { id: 'pool', label: 'Бассейн' },
              { id: 'cafeteria', label: 'Столовая' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Filter Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по Уставу: форма, справка..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
            />
          </div>
        </div>

        {/* Quick Highlights / 3 Big Rules At A Glance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Shirt className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">
                Дресс-код
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-snug">
                Деловой стиль: темно-синий, серый или черный цвет. Сменная чистая обувь обязательна.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">
                Болезнь и пропуски
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-snug">
                До 3 дней — записка от родителей. Более 3 дней или болезнь — медицинская справка педиатра.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">
                Телефоны на уроках
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-snug">
                По ФЗ № 618-ФЗ средства связи переводятся в беззвучный режим и убираются в рюкзак.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Rules Accordion List */}
        <div className="space-y-4">
          {filteredRules.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500">
              По запросу «{searchQuery}» правил не найдено. Попробуйте изменить формулировку.
            </div>
          ) : (
            filteredRules.map((rule) => {
              const isExpanded = expandedRule === rule.id;
              return (
                <div
                  key={rule.id}
                  className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden transition-all shadow-2xs"
                >
                  {/* Card Header / Click to Expand */}
                  <div
                    onClick={() => setExpandedRule(isExpanded ? null : rule.id)}
                    className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
                        {getCategoryIcon(rule.icon)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                            {rule.badge}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug truncate">
                          {rule.title}
                        </h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                          {rule.shortSummary}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                      <div className="space-y-3 mb-5">
                        {rule.paragraphs.map((p, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>

                      {rule.importantNote && (
                        <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
                          <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                          <span className="leading-snug">{rule.importantNote}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
