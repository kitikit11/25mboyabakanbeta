import React, { useState } from 'react';

interface VisualAssetProps {
  type: 'campus' | 'pool' | 'digital_class' | 'library' | 'stadium' | 'assembly';
  className?: string;
  interactive?: boolean;
}

// Exactly ONE real photo of the school building as requested by user
const SCHOOL_BUILDING_PHOTO = {
  url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85',
  alt: 'МБОУ СОШ №25 города Абакана — здание школы по ул. Тельмана, 93',
};

export const VisualAsset: React.FC<VisualAssetProps> = ({
  type,
  className = '',
  interactive = false,
}) => {
  const [photoError, setPhotoError] = useState(false);

  const containerClasses = `relative w-full h-full overflow-hidden select-none ${
    interactive ? 'transition-transform duration-500 hover:scale-[1.02]' : ''
  } ${className}`;

  // Only the main campus/building has the real photo from the internet
  if (type === 'campus') {
    return (
      <div className={containerClasses}>
        {!photoError ? (
          <div className="relative w-full h-full">
            <img
              src={SCHOOL_BUILDING_PHOTO.url}
              alt={SCHOOL_BUILDING_PHOTO.alt}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setPhotoError(true)}
              className="w-full h-full object-cover"
            />
            {/* Apple style subtle contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
            
            {/* Real location tag */}
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/10 flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>МБОУ СОШ №25 · ул. Тельмана, 93</span>
            </div>
          </div>
        ) : (
          /* High-fidelity vector backup if network drops */
          <div className="w-full h-full bg-gradient-to-b from-sky-100 via-slate-100 to-stone-200 dark:from-slate-900 dark:via-neutral-900 dark:to-neutral-950 flex items-center justify-center">
            <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="450" fill="#f1f5f9" className="dark:fill-neutral-900" />
              <rect x="220" y="150" width="360" height="180" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
              <rect x="70" y="180" width="160" height="150" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="570" y="180" width="160" height="150" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="300" y="162" width="200" height="28" rx="6" fill="#0f172a" />
              <text x="400" y="181" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">
                МБОУ СОШ № 25
              </text>
            </svg>
          </div>
        )}
      </div>
    );
  }

  // All other zones (pool, digital class, library, outdoor gym, assembly) use clean Apple schematic art (photos reverted as requested!)
  if (type === 'pool') {
    return (
      <div className={`${containerClasses} bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-950 flex items-center justify-center`}>
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="450" fill="#0f172a" />
          <rect x="80" y="180" width="640" height="250" rx="8" fill="#334155" />
          <rect x="100" y="195" width="600" height="225" rx="6" fill="#0284c7" />
          {/* 4 Swimming Lanes */}
          <line x1="240" y1="195" x2="210" y2="420" stroke="#e0f2fe" strokeWidth="3" strokeDasharray="10 6" />
          <line x1="380" y1="195" x2="370" y2="420" stroke="#fef08a" strokeWidth="3" strokeDasharray="10 6" />
          <line x1="520" y1="195" x2="530" y2="420" stroke="#e0f2fe" strokeWidth="3" strokeDasharray="10 6" />
          <g transform="translate(620, 22)">
            <rect x="0" y="0" width="150" height="28" rx="6" fill="#0369a1" opacity="0.8" />
            <text x="75" y="18" fill="#f0f9ff" fontSize="11" fontWeight="600" textAnchor="middle">
              25 МЕТРОВ · 4 ДОРОЖКИ
            </text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'digital_class') {
    return (
      <div className={`${containerClasses} bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 flex items-center justify-center`}>
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="450" fill="#0f172a" />
          <rect x="180" y="100" width="440" height="190" rx="10" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />
          <text x="210" y="150" fill="#38bdf8" fontSize="15" fontFamily="monospace">
            const school = new Academy(&quot;СОШ №25&quot;);
          </text>
          <text x="210" y="185" fill="#34d399" fontSize="15" fontFamily="monospace">
            school.enableProfiles([&quot;IT&quot;, &quot;Math&quot;, &quot;Physics&quot;]);
          </text>
          <text x="210" y="220" fill="#facc15" fontSize="13" fontFamily="monospace">
            // Компьютерный класс и цифровые лаборатории
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'library') {
    return (
      <div className={`${containerClasses} bg-gradient-to-b from-stone-100 via-amber-50 to-stone-200 dark:from-neutral-900 dark:via-stone-900 dark:to-neutral-950 flex items-center justify-center`}>
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="450" fill="#fdfbf7" className="dark:fill-neutral-900" />
          <rect x="50" y="60" width="700" height="240" rx="4" fill="#d97706" opacity="0.2" stroke="#b45309" strokeWidth="2" />
          <line x1="50" y1="120" x2="750" y2="120" stroke="#92400e" strokeWidth="4" />
          <line x1="50" y1="180" x2="750" y2="180" stroke="#92400e" strokeWidth="4" />
          <line x1="50" y1="240" x2="750" y2="240" stroke="#92400e" strokeWidth="4" />
          <ellipse cx="400" cy="380" rx="260" ry="45" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" className="dark:fill-neutral-800" />
        </svg>
      </div>
    );
  }

  // Outdoor physical education grounds (simple street workout & track area, not a stadium)
  if (type === 'stadium') {
    return (
      <div className={`${containerClasses} bg-gradient-to-b from-sky-300 via-emerald-600 to-emerald-800 flex items-center justify-center`}>
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue Sky */}
          <rect width="800" height="180" fill="#38bdf8" />
          
          {/* Outdoor green grass grounds */}
          <rect x="0" y="180" width="800" height="270" fill="#15803d" />

          {/* Running track lane for PE lessons */}
          <path d="M 50 450 L 150 250 L 650 250 L 750 450" fill="none" stroke="#ea580c" strokeWidth="28" strokeLinecap="round" />
          <path d="M 50 450 L 150 250 L 650 250 L 750 450" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="10 8" />

          {/* Outdoor workout bars & basketball backboard */}
          <g transform="translate(350, 180)">
            {/* Workout horizontal bars */}
            <line x1="0" y1="90" x2="0" y2="20" stroke="#475569" strokeWidth="4" />
            <line x1="50" y1="90" x2="50" y2="20" stroke="#475569" strokeWidth="4" />
            <line x1="100" y1="90" x2="100" y2="20" stroke="#475569" strokeWidth="4" />
            <line x1="-5" y1="28" x2="105" y2="28" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="0" y1="45" x2="100" y2="45" stroke="#cbd5e1" strokeWidth="3" />
          </g>

          {/* Caption */}
          <g transform="translate(480, 25)">
            <rect x="0" y="0" width="280" height="28" rx="6" fill="#0f172a" opacity="0.8" />
            <text x="140" y="18" fill="#f8fafc" fontSize="11" fontWeight="600" textAnchor="middle">
              ОТКРЫТАЯ ПЛОЩАДКА ДЛЯ ФИЗКУЛЬТУРЫ
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // assembly
  return (
    <div className={`${containerClasses} bg-gradient-to-b from-purple-950 via-slate-900 to-neutral-950 flex items-center justify-center`}>
      <svg viewBox="0 0 800 450" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill="#0f0728" />
        <path d="M0 0 Q200 40 400 0 Q600 40 800 0 L800 120 Q600 160 400 120 Q200 160 0 120 Z" fill="#7e22ce" opacity="0.8" />
        <rect x="100" y="220" width="600" height="70" fill="#3b0764" stroke="#a855f7" strokeWidth="2" rx="4" />
      </svg>
    </div>
  );
};
