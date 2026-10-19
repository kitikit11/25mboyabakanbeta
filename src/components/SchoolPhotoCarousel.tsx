import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MapPin,
  Camera,
  CheckCircle2,
} from 'lucide-react';

export interface SchoolPhotoSlide {
  id: string;
  src: string;
  altSrc?: string;
  title: string;
  season: 'Зима' | 'Лето';
  seasonBadge: string;
  description: string;
  details: string;
  renderType: 'winter_entrance' | 'summer_plaza' | 'summer_garden';
}

export const REAL_SCHOOL_PHOTOS: SchoolPhotoSlide[] = [
  {
    id: 'winter_entrance',
    src: 'images (1).jpg',
    altSrc: '/images (1).jpg',
    title: 'Парадный вход и центральное крыльцо',
    season: 'Зима',
    seasonBadge: 'Зимний вид · ул. Тельмана, 93',
    description:
      'Главный вход школы №25: широкий тёмный навес, гранитные ступени с полосой безопасности, пандус и государственный флаг РФ.',
    details: 'Фасад 3-этажного здания, большие окна учебных кабинетов и чистый школьный двор.',
    renderType: 'winter_entrance',
  },
  {
    id: 'summer_plaza',
    src: 'L_height.webp',
    altSrc: '/L_height.webp',
    title: 'Школьный двор и главный корпус',
    season: 'Лето',
    seasonBadge: 'Летний вид · Центральный двор',
    description:
      'Широкая мощёная площадь перед школой, где проходят торжественные линейки 1 сентября и праздники последнего звонка.',
    details: 'Панорамный вид на трехэтажный корпус, крытую входную группу и прилегающее учебное крыло.',
    renderType: 'summer_plaza',
  },
  {
    id: 'summer_garden',
    src: 'images.jpg',
    altSrc: '/images.jpg',
    title: 'Фасад со стороны сквера и цветников',
    season: 'Лето',
    seasonBadge: 'Зеленая зона · Аллея',
    description:
      'Благоустроенная территория перед школой: цветники с декоративными растениями, аккуратно подстриженные кустарники и аллея.',
    details: 'Уютный сквер перед крыльцом школы №25 для прогулок и отдыха учащихся между сменами.',
    renderType: 'summer_garden',
  },
];

export const SchoolPhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgFailedMap, setImgFailedMap] = useState<Record<string, boolean>>({});
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const currentSlide = REAL_SCHOOL_PHOTOS[currentIndex];

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay || isLightboxOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REAL_SCHOOL_PHOTOS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlay, isLightboxOpen]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? REAL_SCHOOL_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % REAL_SCHOOL_PHOTOS.length);
  };

  const handleImageError = (id: string) => {
    setImgFailedMap((prev) => ({ ...prev, [id]: true }));
  };

  // Faithful vector reconstruction matching each exact user-uploaded photo
  const renderFaithfulVector = (type: SchoolPhotoSlide['renderType']) => {
    if (type === 'winter_entrance') {
      // Photo 1: Winter entrance with porch, stairs with yellow line, ramp, dark canopy, Russian flag, snow
      return (
        <div className="w-full h-full bg-[#cbd5e1] dark:bg-[#1e293b] relative overflow-hidden select-none">
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none">
            {/* Overcast Siberian winter sky */}
            <rect width="800" height="450" fill="#e2e8f0" className="dark:fill-[#1e2430]" />

            {/* School Building 3 Stories Grey Concrete Panels */}
            <rect x="0" y="20" width="800" height="300" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
            <rect x="0" y="20" width="800" height="300" fill="#cbd5e1" opacity="0.6" />

            {/* Panel seams vertical */}
            {[100, 200, 300, 400, 500, 600, 700].map((x) => (
              <line key={x} x1={x} y1="20" x2={x} y2="320" stroke="#64748b" strokeWidth="1.5" opacity="0.4" />
            ))}

            {/* 3 Floors of Windows */}
            {[60, 140, 220].map((y, rowIdx) => (
              <g key={rowIdx}>
                {Array.from({ length: 14 }).map((_, colIdx) => (
                  <rect
                    key={colIdx}
                    x={30 + colIdx * 54}
                    y={y}
                    width="42"
                    height="50"
                    fill="#f8fafc"
                    stroke="#475569"
                    strokeWidth="1.5"
                    className="dark:fill-[#0f172a]"
                  />
                ))}
              </g>
            ))}

            {/* Russian Flag on roof center */}
            <line x1="400" y1="0" x2="400" y2="20" stroke="#475569" strokeWidth="3" />
            <g transform="translate(400, 0)">
              <rect x="0" y="0" width="24" height="6" fill="#ffffff" />
              <rect x="0" y="6" width="24" height="6" fill="#1d4ed8" />
              <rect x="0" y="12" width="24" height="6" fill="#dc2626" />
            </g>

            {/* Dark Canopy Porch */}
            <polygon points="180,180 620,180 600,240 200,240" fill="#332420" stroke="#1c1917" strokeWidth="2" />
            <rect x="180" y="170" width="440" height="12" fill="#291a16" />
            
            {/* Porch Columns */}
            <rect x="290" y="240" width="12" height="70" fill="#1e293b" />
            <rect x="500" y="240" width="12" height="70" fill="#1e293b" />

            {/* School Doors & Red Signboard */}
            <rect x="330" y="245" width="65" height="65" fill="#422006" stroke="#291a16" />
            <rect x="405" y="245" width="65" height="65" fill="#422006" stroke="#291a16" />
            <rect x="375" y="248" width="50" height="18" fill="#b91c1c" rx="2" />
            <text x="400" y="260" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">
              СОШ №25
            </text>

            {/* Wide Concrete Steps with Yellow Safety Line */}
            <polygon points="270,310 530,310 545,345 255,345" fill="#94a3b8" stroke="#475569" />
            {/* Yellow warning strip on top step */}
            <line x1="270" y1="310" x2="530" y2="310" stroke="#eab308" strokeWidth="6" />
            {/* Black rubber non-slip runners */}
            <rect x="435" y="310" width="60" height="35" fill="#1e293b" />

            {/* Wheelchair Ramp on Left */}
            <polygon points="120,335 255,310 255,345 120,345" fill="#475569" />
            <line x1="120" y1="310" x2="255" y2="285" stroke="#0f172a" strokeWidth="3" />

            {/* Snow on ground */}
            <path d="M0 345 L800 345 L800 450 L0 450 Z" fill="#f1f5f9" className="dark:fill-[#334155]" />
            <path d="M0 380 Q200 360 400 380 T800 380 L800 450 L0 450 Z" fill="#ffffff" className="dark:fill-[#1e293b]" opacity="0.8" />
          </svg>
        </div>
      );
    }

    if (type === 'summer_plaza') {
      // Photo 3: Summer paved courtyard with interlocking stones, wide facade and side wing
      return (
        <div className="w-full h-full bg-[#bae6fd] dark:bg-[#0c1829] relative overflow-hidden select-none">
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none">
            {/* Summer blue sky with cumulus clouds */}
            <rect width="800" height="450" fill="#7dd3fc" className="dark:fill-[#071324]" />
            <circle cx="200" cy="80" r="60" fill="#ffffff" opacity="0.4" />
            <circle cx="250" cy="65" r="50" fill="#ffffff" opacity="0.5" />
            <circle cx="600" cy="70" r="70" fill="#ffffff" opacity="0.4" />

            {/* Left 2-story wing */}
            <polygon points="0,170 230,230 230,320 0,320" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            {[0, 45, 90, 135, 180].map((x, i) => (
              <rect key={i} x={x + 10} y={235 + i * 5} width="28" height="35" fill="#38bdf8" opacity="0.6" stroke="#64748b" />
            ))}

            {/* Main 3-story building */}
            <rect x="230" y="140" width="460" height="180" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
            {/* Windows rows */}
            {[160, 205, 250].map((y, r) => (
              <g key={r}>
                {Array.from({ length: 9 }).map((_, c) => (
                  <rect key={c} x={245 + c * 50} y={y} width="36" height="30" fill="#0284c7" opacity="0.6" stroke="#475569" />
                ))}
              </g>
            ))}

            {/* Central canopy portico */}
            <rect x="345" y="235" width="200" height="20" fill="#332420" />
            <line x1="445" y1="120" x2="445" y2="140" stroke="#475569" strokeWidth="3" />
            <rect x="445" y="122" width="20" height="12" fill="#ef4444" />

            {/* Distant brick high-rise on far right */}
            <rect x="690" y="120" width="80" height="200" fill="#991b1b" stroke="#7f1d1d" />

            {/* Interlocking paving stones courtyard in foreground */}
            <path d="M0 320 L800 320 L800 450 L0 450 Z" fill="#cbd5e1" className="dark:fill-[#1e293b]" />
            <path d="M200 450 L320 320 L570 320 L680 450 Z" fill="#e2e8f0" className="dark:fill-[#334155]" />
          </svg>
        </div>
      );
    }

    // summer_garden: Flowerbed, dusty miller, green spherical pruned tree, entrance
    return (
      <div className="w-full h-full bg-[#93c5fd] dark:bg-[#071324] relative overflow-hidden select-none">
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none">
          <rect width="800" height="450" fill="#60a5fa" className="dark:fill-[#08172c]" />

          {/* Left Wing with Poster */}
          <rect x="0" y="50" width="310" height="300" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
          {/* Blue poster on wall */}
          <rect x="90" y="150" width="140" height="70" rx="4" fill="#1d4ed8" stroke="#ffffff" strokeWidth="2" />
          <text x="160" y="175" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
            МБОУ СОШ №25
          </text>
          <text x="160" y="195" fill="#fef08a" fontSize="8" textAnchor="middle">
            ИЮНЬ · ИЮЛЬ · АВГУСТ
          </text>

          {/* Central 3-story Building */}
          <rect x="310" y="130" width="410" height="190" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <rect x="440" y="225" width="160" height="18" fill="#332420" />

          {/* Asphalt school courtyard */}
          <path d="M0 320 L800 320 L800 450 L0 450 Z" fill="#64748b" className="dark:fill-[#1e293b]" />

          {/* Spherical pruned green tree on left */}
          <circle cx="20" cy="180" r="110" fill="#15803d" />
          <circle cx="30" cy="160" r="90" fill="#16a34a" opacity="0.9" />

          {/* Rich Flowerbed in foreground with dusty miller and grass */}
          <path d="M100 450 Q260 360 420 400 T780 390 L800 450 Z" fill="#166534" />
          {/* Silver/grey Dusty Miller (Cineraria) flowers */}
          <ellipse cx="250" cy="420" rx="90" ry="25" fill="#94a3b8" opacity="0.9" />
          <ellipse cx="520" cy="425" rx="140" ry="25" fill="#cbd5e1" opacity="0.9" />
          {/* Spiky Blue Fescue grass clump */}
          <ellipse cx="380" cy="415" rx="60" ry="30" fill="#0f766e" />
        </svg>
      </div>
    );
  };

  return (
    <div
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-xl bg-neutral-900 group select-none"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Aspect Ratio Container for Showcase */}
      <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden bg-neutral-950">
        {/* Slide Media: Tries exact local uploaded file, then graceful faithful vector */}
        <div className="relative w-full h-full">
          {!imgFailedMap[currentSlide.id] ? (
            <img
              src={currentSlide.src}
              alt={currentSlide.title}
              onError={() => handleImageError(currentSlide.id)}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          ) : (
            renderFaithfulVector(currentSlide.renderType)
          )}

          {/* Measured Apple contrast gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 pointer-events-none" />
        </div>

        {/* Top Badges & Fullscreen Action */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/10 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-sky-400" />
            <span>{currentSlide.seasonBadge}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-white/80 px-2 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 tabular-nums">
              {currentIndex + 1} / {REAL_SCHOOL_PHOTOS.length}
            </span>
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 transition-colors border border-white/10 shadow-xs"
              title="Открыть во весь экран"
              aria-label="Открыть во весь экран"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/10 hover:scale-105 active:scale-95"
          aria-label="Предыдущее фото"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/10 hover:scale-105 active:scale-95"
          aria-label="Следующее фото"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Editorial Caption */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:right-6 z-20 text-white">
          <div className="flex items-center gap-2 text-xs font-medium text-sky-300 mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>МБОУ СОШ №25 · г. Абакан, ул. Тельмана, 93</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white mb-1 drop-shadow-xs">
            {currentSlide.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-200 max-w-2xl leading-relaxed drop-shadow-xs line-clamp-2 sm:line-clamp-none">
            {currentSlide.description}
          </p>
        </div>
      </div>

      {/* Thumbnail Bar & Dot Navigation at Bottom */}
      <div className="p-3 sm:p-4 bg-neutral-900/95 dark:bg-black/90 border-t border-neutral-800 flex items-center justify-between gap-4">
        {/* Thumbnails row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 flex-1 max-w-md">
          {REAL_SCHOOL_PHOTOS.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative rounded-xl overflow-hidden aspect-16/10 border transition-all text-left ${
                  isActive
                    ? 'border-sky-400 ring-2 ring-sky-400/40 shadow-xs'
                    : 'border-neutral-700 opacity-60 hover:opacity-100 hover:border-neutral-500'
                }`}
              >
                <div className="w-full h-full bg-neutral-800">
                  {renderFaithfulVector(slide.renderType)}
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-1 left-1.5 text-[9px] sm:text-[10px] font-semibold text-white drop-shadow-xs truncate max-w-[90%]">
                  {slide.season}
                </span>
              </button>
            );
          })}
        </div>

        {/* Indicator dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          {REAL_SCHOOL_PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? 'w-6 bg-sky-400' : 'w-1.5 bg-neutral-600 hover:bg-neutral-400'
              }`}
              aria-label={`Перейти к слайду ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  {currentSlide.seasonBadge}
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative aspect-16/9 w-full bg-black">
              {!imgFailedMap[currentSlide.id] ? (
                <img
                  src={currentSlide.src}
                  alt={currentSlide.title}
                  onError={() => handleImageError(currentSlide.id)}
                  className="w-full h-full object-contain"
                />
              ) : (
                renderFaithfulVector(currentSlide.renderType)
              )}

              {/* Prev / Next */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-6 text-white bg-neutral-900">
              <h3 className="text-xl font-bold mb-1">{currentSlide.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-2">
                {currentSlide.description}
              </p>
              <p className="text-xs text-neutral-400">{currentSlide.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
