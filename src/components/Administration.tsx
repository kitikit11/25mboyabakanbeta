import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { UserCheck, Clock, Phone, Award } from 'lucide-react';

export const Administration: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#050507] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Руководство и команда
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Опыт, ответственность и уважение к каждому.
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Школа №25 сочетает более чем четвертьвековые традиции сибирской педагогики и современные стандарты управления образовательным процессом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Director Card */}
          <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-10 flex flex-col justify-between apple-card">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg mb-6 shadow-xs">
                БШ
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>{SCHOOL_INFO.director.role}</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {SCHOOL_INFO.director.name}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                {SCHOOL_INFO.director.badge} · Руководит школой с августа 2022 года.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>Часы личного приёма граждан: {SCHOOL_INFO.director.receptionHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-neutral-400" />
                  <span>Приёмная директора: {SCHOOL_INFO.director.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deputy Director Card */}
          <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-10 flex flex-col justify-between apple-card">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center font-bold text-lg mb-6 shadow-xs">
                БН
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>{SCHOOL_INFO.deputyDirector.role}</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {SCHOOL_INFO.deputyDirector.name}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                {SCHOOL_INFO.deputyDirector.merit}. Возглавляла школу №25 на протяжении 25 лет с момента её основания.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <span className="font-medium text-neutral-900 dark:text-white">Преемственность традиций:</span>
                  <span>Курирует научно-методическую работу и наставничество молодых педагогов.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers and Pedagogy banner */}
        <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-neutral-200/80 dark:border-neutral-800">
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-1">
              Педагогический коллектив школы №25
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              78 учителей, среди которых заслуженные учителя Республики Хакасия, почётные работники общего образования РФ, эксперты предметных комиссий ОГЭ и ЕГЭ.
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div>
              <span className="text-2xl font-bold text-neutral-900 dark:text-white block tabular-nums">
                85%
              </span>
              <span className="text-xs text-neutral-500">Высшая и 1 категория</span>
            </div>
            <div className="w-px h-8 bg-neutral-300 dark:bg-neutral-700" />
            <div>
              <span className="text-2xl font-bold text-neutral-900 dark:text-white block tabular-nums">
                28 лет
              </span>
              <span className="text-xs text-neutral-500">Школе в Абакане</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
