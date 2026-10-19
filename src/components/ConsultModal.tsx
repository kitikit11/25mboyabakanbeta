import React, { useState } from 'react';
import { X, CheckCircle2, School, Calendar, ArrowRight } from 'lucide-react';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Поступление в 1 класс',
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    targetGrade: '1 класс (2026/2027 учебный год)',
    profile: 'Универсальный / Общеобразовательный',
  });
  const [appId, setAppId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    // Generate clean reference code
    const generated = `СОШ25-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(generated);
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    setFormData({
      parentName: '',
      phone: '',
      childName: '',
      targetGrade: '1 класс (2026/2027 учебный год)',
      profile: 'Универсальный / Общеобразовательный',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="relative max-w-lg w-full bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <School className="w-4 h-4 text-neutral-500" />
            <span className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
              МБОУ СОШ №25 · Запись и приёмная
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                  Предварительная запись в школу
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Оставьте контакты для приглашения на очную консультацию или родительское собрание.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  ФИО родителя (законного представителя) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="Иванова Екатерина Сергеевна"
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Контактный телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (900) 000-00-00"
                    className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Имя и фамилия ребёнка
                  </label>
                  <input
                    type="text"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    placeholder="Алексей Иванов"
                    className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  В какой класс планируете поступление?
                </label>
                <select
                  value={formData.targetGrade}
                  onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
                >
                  <option value="1 класс (2026/2027 учебный год)">1 класс (набор 2026/2027)</option>
                  <option value="2–4 классы (начальная школа)">2–4 классы (перевод в начальную школу)</option>
                  <option value="5–9 классы (основное общее)">5–9 классы (перевод в среднее звено)</option>
                  <option value="10 класс (технологический IT-профиль)">10 класс: Технологический (IT и физмат)</option>
                  <option value="10 класс (естественно-научный биохим)">10 класс: Естественно-научный (биохим)</option>
                  <option value="10 класс (социально-гуманитарный)">10 класс: Социально-гуманитарный</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-medium text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Зарегистрировать заявку</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                Заявка зарегистрирована
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 max-w-sm mx-auto">
                Ваш индивидуальный номер обращения:
              </p>
              <div className="inline-block px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-sm font-mono font-bold text-neutral-900 dark:text-white mb-6">
                {appId}
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 text-xs text-neutral-600 dark:text-neutral-300 text-left space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>Приёмная комиссия: Абакан, ул. Тельмана, 93</span>
                </div>
                <p>
                  Секретарь свяжется с вами по указанному номеру для согласования времени подачи оригиналов документов.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-medium text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                Закрыть
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
