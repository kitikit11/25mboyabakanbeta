import React, { useState } from 'react';
import { BELL_SCHEDULE, QUICK_DOCS } from '../data/schoolData';
import { Bell, Utensils, FileText, CheckCircle2, Download, ExternalLink } from 'lucide-react';

interface StudentParentHubProps {
  onOpenConsultModal: () => void;
}

export const StudentParentHub: React.FC<StudentParentHubProps> = ({ onOpenConsultModal }) => {
  const [selectedShift, setSelectedShift] = useState<'1' | '2'>('1');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleFakeDownload = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <section id="parents" className="py-20 sm:py-28 bg-[#fbfbfd] dark:bg-[#070709] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Родителям и учащимся
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Необходимая информация всегда под рукой.
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Расписание звонков в две смены, организация здорового горячего питания и ключевые нормативные документы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bell Schedule Widget (Col 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 apple-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Расписание звонков
                  </h3>
                  <p className="text-xs text-neutral-500">Уроки по 40 минут с переменами</p>
                </div>
              </div>

              {/* Shift Switcher */}
              <div className="inline-flex p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
                <button
                  onClick={() => setSelectedShift('1')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    selectedShift === '1'
                      ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  1 смена (08:00)
                </button>
                <button
                  onClick={() => setSelectedShift('2')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    selectedShift === '2'
                      ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  2 смена (13:30)
                </button>
              </div>
            </div>

            {/* Timetable table */}
            <div className="overflow-hidden rounded-2xl border border-neutral-100 dark:border-neutral-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-neutral-50 dark:bg-neutral-950 text-neutral-500">
                  <tr>
                    <th className="py-3 px-4 font-medium">Урок</th>
                    <th className="py-3 px-4 font-medium text-right">Время звонка</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                  {BELL_SCHEDULE.map((item, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-colors">
                      <td className="py-3 px-4 font-medium text-neutral-800 dark:text-neutral-200">
                        {item.lesson}
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums text-neutral-600 dark:text-neutral-400">
                        {selectedShift === '1' ? item.shift1 : item.shift2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500">
              <span>Приёмная открыта с 07:30 до 19:00</span>
              <button
                onClick={onOpenConsultModal}
                className="text-neutral-900 dark:text-white font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>Уточнить график консультаций</span>
              </button>
            </div>
          </div>

          {/* Right column: Hot Meals & Documents (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hot Meals Card */}
            <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 apple-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Горячее школьное питание
                  </h3>
                  <p className="text-xs text-neutral-500">Собственная столовая и контроль качества</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                Бесплатное сбалансированное горячее питание для учащихся 1–4 классов, диетическое меню и льготное обеспечение.
              </p>

              <div className="p-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl text-xs text-neutral-600 dark:text-neutral-300 space-y-1 mb-4">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Завтраки (1 смена):</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">08:40 – 10:40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Обеды (2 смена):</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">14:10 – 16:05</span>
                </div>
              </div>

              <a
                href="https://dnevnik.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 text-xs font-semibold text-center rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Электронный дневник ученика на Dnevnik.ru</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

            {/* Quick Docs & Admission */}
            <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 apple-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Нормативные документы
                  </h3>
                  <p className="text-xs text-neutral-500">Официальные положения и правила</p>
                </div>
              </div>

              {downloadSuccess && (
                <div className="mb-3 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Документ готов к просмотру: {downloadSuccess}</span>
                </div>
              )}

              <div className="space-y-2">
                {QUICK_DOCS.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="text-xs font-semibold text-neutral-900 dark:text-white truncate">
                        {doc.title}
                      </p>
                      <p className="text-[11px] text-neutral-400">
                        {doc.type} · {doc.category}
                      </p>
                    </div>

                    <button
                      onClick={() => handleFakeDownload(doc.title)}
                      className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                      title="Скачать документ"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href="https://школа25.абакан.рф"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-xs font-medium text-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Все документы на официальном сайте школы</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
