import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/schoolData';
import { VisualAsset } from './VisualAsset';
import {
  Maximize2,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Camera,
  Layers,
} from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<'photo' | 'schematic'>('photo');

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const currentIndex = selectedPhoto
    ? filteredItems.findIndex((item) => item.id === selectedPhoto.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredItems[currentIndex - 1]);
    } else {
      setSelectedPhoto(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedPhoto(filteredItems[currentIndex + 1]);
    } else {
      setSelectedPhoto(filteredItems[0]);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#fbfbfd] dark:bg-[#070709] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Школьная среда
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Пространства для учёбы и спорта.
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
              Корпус на Тельмана, 93: 25-метровый плавательный бассейн, современные IT-аудитории, библиотека и благоустроенная площадка для физкультуры на улице.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Direct link to school's official VK 960+ photo archive */}
            <a
              href="https://vk.com/club777990"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0 shadow-2xs"
            >
              <span>Фотоархив ВКонтакте (964 фото)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-200/50 dark:bg-neutral-900 rounded-xl mb-8 w-fit overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: 'Все локации' },
            { id: 'building', label: 'Здание и двор' },
            { id: 'sports', label: 'Бассейн и физкультура' },
            { id: 'study', label: 'Классы и IT' },
            { id: 'events', label: 'Актовый зал' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                filter === cat.id
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-2xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden apple-card shadow-2xs"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                <VisualAsset type={item.id as any} interactive={true} />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-full bg-white/90 text-neutral-900 dark:bg-black/90 dark:text-white shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-white text-[11px] font-medium border border-white/10">
                  {item.badge}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                {selectedPhoto.badge} · МБОУ СОШ №25
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Area */}
            <div className="relative aspect-16/9 w-full bg-neutral-950">
              <VisualAsset type={selectedPhoto.id as any} />

              {/* Prev / Next navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Следующее фото"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption & Info */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                {selectedPhoto.description}
              </p>
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <span>МБОУ «СОШ № 25» города Абакана</span>
                <span>ул. Тельмана, 93</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
