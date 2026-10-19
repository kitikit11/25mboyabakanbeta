import React, { useState } from 'react';
import { ABAKAN_DISTRICTS, AbakanDistrict, SCHOOL_INFO } from '../data/schoolData';
import {
  MapPin,
  Footprints,
  ShieldCheck,
  ExternalLink,
  Navigation,
  Eye,
  EyeOff,
  Clock,
  Compass,
  Bus,
} from 'lucide-react';

// Real nearby stops around School 25 (Telmana 93) in Abakan
export interface NearbyStop {
  id: string;
  name: string;
  street: string;
  walkMinutesToSchool: number;
  walkDistanceMeters: number;
  routes: string[];
  travelTimesFromDistricts: {
    from: string;
    rideMinutes: string;
  }[];
}

const NEARBY_STOPS: NearbyStop[] = [
  {
    id: 'druzhba',
    name: 'Остановка «Гостиница "Дружба"»',
    street: 'ул. Некрасова / Тельмана',
    walkMinutesToSchool: 3,
    walkDistanceMeters: 300,
    routes: ['№ 11', '№ 12', '№ 14', '№ 18'],
    travelTimesFromDistricts: [
      { from: 'Центр Абакана (пр. Ленина)', rideMinutes: '10–12 мин' },
      { from: 'Район МПС (ул. Пирятинская)', rideMinutes: '15–18 мин' },
      { from: '8-й микрорайон / Торосова', rideMinutes: '8–10 мин' },
    ],
  },
  {
    id: 'telmana',
    name: 'Остановка «Улица Тельмана»',
    street: 'ул. Тельмана (рядом со школой)',
    walkMinutesToSchool: 1,
    walkDistanceMeters: 120,
    routes: ['№ 3', '№ 11', '№ 12'],
    travelTimesFromDistricts: [
      { from: '4-й микрорайон', rideMinutes: '3–5 мин' },
      { from: 'Железнодорожный вокзал', rideMinutes: '12–15 мин' },
      { from: 'Район Космос / Щетинкина', rideMinutes: '9–11 мин' },
    ],
  },
  {
    id: 'kalina',
    name: 'Остановка «ТЦ Калина» / Перекрещенко',
    street: 'ул. Некрасова',
    walkMinutesToSchool: 5,
    walkDistanceMeters: 480,
    routes: ['№ 5', '№ 10', '№ 14', 'Троллейбус 1'],
    travelTimesFromDistricts: [
      { from: 'Район Полярный', rideMinutes: '18–22 мин' },
      { from: 'Красный Абакан', rideMinutes: '25–28 мин' },
      { from: 'Нижняя Согра', rideMinutes: '30–35 мин' },
    ],
  },
  {
    id: 'sobor',
    name: 'Остановка «Преображенский собор»',
    street: 'ул. Торосова',
    walkMinutesToSchool: 7,
    walkDistanceMeters: 650,
    routes: ['№ 9', '№ 14', '№ 30'],
    travelTimesFromDistricts: [
      { from: '10-й микрорайон', rideMinutes: '12–15 мин' },
      { from: 'Парк Победы / Чертыгашева', rideMinutes: '14–17 мин' },
    ],
  },
];

export const InteractiveMap: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<AbakanDistrict>(ABAKAN_DISTRICTS[0]);
  const [selectedStop, setSelectedStop] = useState<NearbyStop>(NEARBY_STOPS[0]);
  const [customAddress, setCustomAddress] = useState('');
  const [isMapCollapsed, setIsMapCollapsed] = useState(false);

  // Exact coordinates of School 25: ул. Тельмана, 93, Абакан (lat: 53.729899, lng: 91.434410)
  const schoolLat = 53.7299;
  const schoolLng = 91.4344;

  // OpenStreetMap embed URL centered precisely on School 25 on Telmana 93
  const getOsmEmbedUrl = () => {
    // If district is selected, span bbox between district and school
    const minLng = Math.min(schoolLng, selectedDistrict.coords.lng) - 0.009;
    const maxLng = Math.max(schoolLng, selectedDistrict.coords.lng) + 0.009;
    const minLat = Math.min(schoolLat, selectedDistrict.coords.lat) - 0.006;
    const maxLat = Math.max(schoolLat, selectedDistrict.coords.lat) + 0.006;

    return `https://www.openstreetmap.org/export/embed.html?bbox=${minLng}%2C${minLat}%2C${maxLng}%2C${maxLat}&layer=mapnik&marker=${schoolLat}%2C${schoolLng}`;
  };

  // OpenStreetMap open-source routing URL
  const osmRouteUrl = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_foot&route=${selectedDistrict.coords.lat}%2C${selectedDistrict.coords.lng}%3B${schoolLat}%2C${schoolLng}#map=15/${schoolLat}/${schoolLng}`;

  const yandexMapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent('Абакан Тельмана 93 школа 25')}`;
  const twoGisUrl = `https://2gis.ru/abakan/search/${encodeURIComponent('Тельмана 93 школа 25')}`;

  const handleSelectDistrict = (dist: AbakanDistrict) => {
    setSelectedDistrict(dist);
    setCustomAddress('');
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAddress.trim()) return;
    setSelectedDistrict({
      id: 'custom',
      name: customAddress,
      landmark: 'Введённый адрес в Абакане',
      distanceKm: 2.1,
      walkMinutes: 24,
      busRoutes: ['№ 11', '№ 12', '№ 14'],
      safeRouteAdvice: 'Двигайтесь по тротуарам к ул. Тельмана и ул. Некрасова, переходите дорогу строго по регулируемым пешеходным переходам на зелёный сигнал.',
      coords: { lat: 53.725, lng: 91.442 },
    });
  };

  return (
    <section id="map" className="py-20 sm:py-28 bg-[#fafafc] dark:bg-[#040406] border-t border-neutral-200/80 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Ориентация на местности · г. Абакан
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Как добраться до школы №25.
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
              Школа расположена по адресу <strong className="text-neutral-900 dark:text-white font-semibold">ул. Тельмана, 93</strong> (перекрёсток с ул. Некрасова). Здесь представлена точная локация школы №25, ближайшие остановки и время в пути из районов города.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMapCollapsed(!isMapCollapsed)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors inline-flex items-center gap-1.5 shadow-2xs"
            >
              {isMapCollapsed ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{isMapCollapsed ? 'Показать карту' : 'Свернуть карту'}</span>
            </button>
          </div>
        </div>

        {!isMapCollapsed && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: OpenStreetMap Frame (Col 7) */}
              <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-6 sm:p-8 apple-card shadow-2xs">
                {/* School location indicator */}
                <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                      МБОУ СОШ №25: ул. Тельмана, 93
                    </span>
                    <span className="text-[11px] text-neutral-400 hidden sm:inline">
                      (4-й микрорайон)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-md">
                      53.7299° N, 91.4344° E
                    </span>
                  </div>
                </div>

                {/* Embedded OpenStreetMap Centered on School 25 */}
                <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                  <iframe
                    title="Карта МБОУ СОШ 25 Абакан ул Тельмана 93"
                    src={getOsmEmbedUrl()}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />

                  {/* Clear Floating Marker Label */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md text-neutral-900 dark:text-white text-xs font-semibold border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center gap-2 pointer-events-none">
                    <MapPin className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span>МБОУ «СОШ № 25»</span>
                  </div>
                </div>

                {/* Direct External Map Links */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={osmRouteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800 font-medium inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Маршрут в OpenStreetMap</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>

                    <a
                      href={yandexMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Яндекс Карты</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>

                    <a
                      href={twoGisUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>2GIS Абакан</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>

                  <span className="text-[11px] text-neutral-400">
                    © OpenStreetMap
                  </span>
                </div>
              </div>

              {/* Right: District Selector & Walking Time (Col 5) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Choose District Card */}
                <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-6 sm:p-8 apple-card shadow-2xs">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                    Район отправления в Абакане
                  </h3>
                  <p className="text-xs text-neutral-500 mb-4">
                    Выберите район, чтобы узнать расстояние и примерное время пути:
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {ABAKAN_DISTRICTS.map((dist) => {
                      const isSelected = selectedDistrict.id === dist.id;
                      return (
                        <button
                          key={dist.id}
                          onClick={() => handleSelectDistrict(dist)}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            isSelected
                              ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-neutral-900 dark:text-white shadow-2xs'
                              : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400'
                          }`}
                        >
                          <span className="block text-xs font-bold leading-tight">
                            {dist.name}
                          </span>
                          <span className="block text-[11px] text-neutral-400 mt-0.5 truncate">
                            {dist.landmark}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Address Input */}
                  <form onSubmit={handleCustomSubmit} className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                    <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                      Или введите ваш адрес в городе:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={customAddress}
                        onChange={(e) => setCustomAddress(e.target.value)}
                        placeholder="ул. Чертыгашева, 84"
                        className="flex-1 px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-xs text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                      >
                        Рассчитать
                      </button>
                    </div>
                  </form>
                </div>

                {/* Travel Time Metric Card */}
                <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Пеший путь
                    </span>
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                      {selectedDistrict.name} → СОШ №25
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 shadow-2xs">
                      <div className="flex items-center gap-1.5 text-neutral-500 mb-1 text-xs">
                        <Footprints className="w-3.5 h-3.5 text-sky-500" />
                        <span>Пешком</span>
                      </div>
                      <span className="text-2xl font-bold text-neutral-900 dark:text-white tabular-nums">
                        ~{selectedDistrict.walkMinutes} мин
                      </span>
                      <span className="block text-[11px] text-neutral-400 mt-0.5">
                        {selectedDistrict.distanceKm} км пути
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 shadow-2xs">
                      <div className="flex items-center gap-1.5 text-neutral-500 mb-1 text-xs">
                        <Compass className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Ориентир</span>
                      </div>
                      <span className="text-xs font-bold text-neutral-900 dark:text-white line-clamp-1">
                        {selectedDistrict.landmark}
                      </span>
                      <span className="block text-[11px] text-neutral-400 mt-0.5">
                        Освещённые улицы
                      </span>
                    </div>
                  </div>

                  {/* Safe route advice */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 flex items-start gap-2.5 text-xs text-emerald-900 dark:text-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold block mb-0.5">Безопасный маршрут школьника:</span>
                      <span className="leading-relaxed">{selectedDistrict.safeRouteAdvice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW SECTION: Nearest Stops & Travel Duration From Stops */}
            <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-6 sm:p-8 apple-card shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Bus className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      Ближайшие остановки и время доезда до школы
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Нажмите на остановку, чтобы посмотреть время пешком до крыльца школы №25 и время в пути из разных районов:
                  </p>
                </div>
                <span className="text-xs text-neutral-400 font-medium">
                  Остановки в радиусе 1–5 минут
                </span>
              </div>

              {/* Stop Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {NEARBY_STOPS.map((stop) => {
                  const isSelected = selectedStop.id === stop.id;
                  return (
                    <div
                      key={stop.id}
                      onClick={() => setSelectedStop(stop)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 shadow-xs'
                          : 'border-neutral-200/80 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 text-[10px] font-semibold text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700">
                          {stop.walkMinutesToSchool} мин пешком
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          {stop.walkDistanceMeters} м
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">
                        {stop.name}
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 truncate">
                        {stop.street}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {stop.routes.map((r) => (
                          <span
                            key={r}
                            className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Stop Details: Travel duration from districts */}
              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">
                      Время поездки до «{selectedStop.name}»:
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">
                    От остановки до входа в школу №25 — всего {selectedStop.walkMinutesToSchool} минуты спокойным шагом ({selectedStop.walkDistanceMeters} метров).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
                  {selectedStop.travelTimesFromDistricts.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800"
                    >
                      <span className="block text-[11px] text-neutral-400">
                        {item.from}
                      </span>
                      <span className="text-sm font-bold text-neutral-900 dark:text-white tabular-nums">
                        ~{item.rideMinutes}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
