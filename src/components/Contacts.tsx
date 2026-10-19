import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';

export const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Вопрос по приёму в школу',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        topic: 'Вопрос по приёму в школу',
        message: '',
      });
    }, 700);
  };

  return (
    <section id="contacts" className="py-20 sm:py-28 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Связь и местоположение
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Всегда на связи с родителями и городом.
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Приёмная комиссия, запись на приём к руководству и консультации по переводу из других образовательных учреждений.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details & Map Card (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-8">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">
                Реквизиты и адрес
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900 dark:text-white block">
                      Фактический адрес
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {SCHOOL_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900 dark:text-white block">
                      Телефоны школы
                    </span>
                    <div className="text-neutral-600 dark:text-neutral-300 space-y-0.5">
                      <p>
                        Приёмная: <a href="tel:+73902287900" className="hover:underline font-mono">{SCHOOL_INFO.contacts.receptionPhone}</a>
                      </p>
                      <p>
                        Администрация: <a href="tel:+73902350721" className="hover:underline font-mono">{SCHOOL_INFO.contacts.adminPhone}</a>
                      </p>
                      <p>
                        Дежурная часть: <a href="tel:+73902289100" className="hover:underline font-mono">{SCHOOL_INFO.contacts.dutyPhone}</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900 dark:text-white block">
                      Электронная почта
                    </span>
                    <a href={`mailto:${SCHOOL_INFO.contacts.email}`} className="text-neutral-600 dark:text-neutral-300 hover:underline">
                      {SCHOOL_INFO.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900 dark:text-white block">
                      Режим работы учреждения
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {SCHOOL_INFO.contacts.workHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Route Shortcuts */}
              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-3">
                <a
                  href="https://yandex.ru/maps/?text=Абакан+Тельмана+93+СОШ+25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Яндекс Карты</span>
                </a>
                <a
                  href="https://2gis.ru/abakan/search/Тельмана%2093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>2ГИС Абакан</span>
                </a>
              </div>
            </div>
          </div>

          {/* Electronic Consultation Form (Col 6) */}
          <div className="lg:col-span-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-10">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              Электронное обращение
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mb-6">
              Оставьте вопрос для секретаря или администрации школы. Ответ поступит по телефону или email.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-emerald-200 dark:border-emerald-800 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                  Обращение успешно отправлено!
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto mb-4">
                  Секретарь школы зарегистрирует обращение и свяжется с вами в рабочее время школы.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-1.5 text-xs font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-700 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  Отправить еще одно сообщение
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Ваше имя и фамилия *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Например: Анна Смирнова"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Электронная почта
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Тема обращения
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
                  >
                    <option value="Вопрос по приёму в школу">Зачисление в 1-й класс (набор 2026)</option>
                    <option value="Перевод из другой школы">Перевод в 2–9 классы</option>
                    <option value="Поступление в 10 класс (профили)">Поступление в 10 класс (профили)</option>
                    <option value="Занятия в школьном бассейне">Секции в бассейне и спорткомплексе</option>
                    <option value="Запись на личный приём к директору">Личный приём у директора (Беруашвили Ш.И.)</option>
                    <option value="Другой вопрос">Другой вопрос</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Текст вопроса
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите вопрос или возраст ребенка..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-neutral-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-medium text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? (
                    <span>Отправка обращения...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Отправить обращение в приёмную</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
