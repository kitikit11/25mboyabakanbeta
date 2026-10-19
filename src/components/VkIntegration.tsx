import React, { useState } from 'react';
import {
  ExternalLink,
  Camera,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  CheckCircle2,
  Calendar,
  Sparkles,
  Layers,
  ChevronRight,
  Maximize2,
  X,
  Smartphone,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

// Official VK community photo albums of MBOU SOSH 25 Abakan
export interface VkAlbum {
  id: string;
  title: string;
  photoCount: number;
  date: string;
  coverGradient: string;
  icon: string;
  description: string;
  vkUrl: string;
}

const VK_ALBUMS: VkAlbum[] = [
  {
    id: 'pool_tournaments',
    title: 'Плавательный бассейн и спартакиады',
    photoCount: 188,
    date: 'Обновлен недавно',
    coverGradient: 'from-sky-500 to-blue-700',
    icon: 'Waves',
    description: 'Городские и школьные соревнования на 25-метровых дорожках, уроки плавания и водное поло.',
    vkUrl: 'https://vk.com/club777990',
  },
  {
    id: 'first_bell',
    title: 'Линейки 1 Сентября и День знаний',
    photoCount: 142,
    date: 'Ежегодный архив',
    coverGradient: 'from-amber-500 to-orange-600',
    icon: 'Bell',
    description: 'Торжественный сбор во дворе школы, первый звонок для первоклассников и напутствие выпускникам.',
    vkUrl: 'https://vk.com/club777990',
  },
  {
    id: 'school_life',
    title: 'Учебные будни и жизнь классов',
    photoCount: 230,
    date: 'Регулярная хроника',
    coverGradient: 'from-emerald-500 to-teal-700',
    icon: 'BookOpen',
    description: 'Лабораторные опыты, открытые уроки, проектные выставки и общение на переменах.',
    vkUrl: 'https://vk.com/club777990',
  },
  {
    id: 'graduates',
    title: 'Выпускные вечера и медалисты',
    photoCount: 165,
    date: 'Торжественный архив',
    coverGradient: 'from-purple-500 to-indigo-700',
    icon: 'Award',
    description: 'Вручение аттестатов, чествование золотых и серебряных медалистов в актовом зале.',
    vkUrl: 'https://vk.com/club777990',
  },
  {
    id: 'robotics_it',
    title: 'IT-лаборатории, олимпиады и наука',
    photoCount: 115,
    date: 'Профильное обучение',
    coverGradient: 'from-cyan-500 to-blue-600',
    icon: 'Cpu',
    description: 'Победы учащихся 25 школы на муниципальных и всероссийских олимпиадах по физике и IT.',
    vkUrl: 'https://vk.com/club777990',
  },
  {
    id: 'concerts',
    title: 'Творческие фестивали и сцена',
    photoCount: 124,
    date: 'События школы',
    coverGradient: 'from-pink-500 to-rose-700',
    icon: 'Music',
    description: 'Школьный вокальный ансамбль, хореография, театральные постановки и праздничные концерты.',
    vkUrl: 'https://vk.com/club777990',
  },
];

// Live-styled posts mirroring official VK updates
const VK_POSTS = [
  {
    id: 'p1',
    author: 'МБОУ "СОШ №25" г. Абакана',
    badge: 'Официальное сообщество',
    date: '15 октября 2026 в 14:30',
    text: '🏊‍♂️ В плавательном бассейне нашей школы №25 завершилось первенство среди 5–8 классов! Ребята показали великолепные результаты на дистанциях 50 м вольным стилем и брассом. Поздравляем всех победителей и наших тренеров за отличную подготовку!',
    tags: ['#СОШ25Абакан', '#СпортВШколе', '#Бассейн25', '#Абакан'],
    likes: 342,
    comments: 28,
    reposts: 45,
    views: '2.1K',
    photosCount: 6,
    accent: '#0284c7',
  },
  {
    id: 'p2',
    author: 'МБОУ "СОШ №25" г. Абакана',
    badge: 'Официальное сообщество',
    date: '8 октября 2026 в 11:15',
    text: '🍁 День самоуправления и тёплый праздничный концерт ко Дню учителя! Старшеклассники попробовали себя в роли педагогов, а актовый зал наполнился улыбками, музыкальными номерами и словами благодарности нашим любимым наставникам.',
    tags: ['#ДеньУчителя', '#Школа25', '#Творчество25'],
    likes: 418,
    comments: 39,
    reposts: 62,
    views: '2.8K',
    photosCount: 8,
    accent: '#9333ea',
  },
  {
    id: 'p3',
    author: 'МБОУ "СОШ №25" г. Абакана',
    badge: 'Официальное сообщество',
    date: '28 сентября 2026 в 16:00',
    text: '💡 Гордимся нашими учениками! Команда школы №25 заняла призовое место на городском IT-хакатоне по робототехнике и спортивному программированию. Благодарим наставников цифровой лаборатории за подготовку!',
    tags: ['#ITШкола', '#Робототехника', '#Успех25'],
    likes: 276,
    comments: 19,
    reposts: 31,
    views: '1.9K',
    photosCount: 4,
    accent: '#059669',
  },
];

export const VkIntegration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'albums' | 'feed' | 'widget'>('albums');
  const [selectedAlbum, setSelectedAlbum] = useState<VkAlbum | null>(null);

  const vkCommunityUrl = SCHOOL_INFO.contacts.vk;

  return (
    <section id="vk" className="py-20 sm:py-28 bg-[#fafafc] dark:bg-[#060608] border-t border-neutral-200/80 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-1.5">
              <span>Интеграция с ВКонтакте</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Официальная группа</span>
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Жизнь школы №25 ВКонтакте.
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
              Свежие события, спортивные победы, фотоальбомы и праздники без скачивания фото на сторонние сервера — прямая интерактивная связь с официальным сообществом школы.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={vkCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-white bg-[#0077ff] hover:bg-[#0066dd] transition-all shadow-xs active:scale-95"
            >
              {/* VK icon svg */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.072-1.785.748-2.527 1.626-1.579 1.107 1.196 1.765 2.494 2.923 2.494h2.242c1.232 0 1.623-.617.971-1.802-.924-1.681-3.235-3.864-3.327-4.444-.145-.916.406-1.307 1.162-2.324 1.743-2.324 2.803-4.425 2.425-4.425h-2.242c-.755 0-1.075.406-1.424 1.191-.726 1.627-2.004 3.924-2.818 3.924-.436 0-.581-.29-.581-1.046v-3.72c0-.987-.29-1.349-1.017-1.349h-3.66c-.494 0-.814.29-.814.639 0 .697.872.842.959 2.76v4.068c0 .871-.174 1.045-.523 1.045-.987 0-2.382-2.295-3.37-4.91-.32-.842-.697-1.25-1.423-1.25h-2.242c-.61 0-.843.406-.843.842 0 .814 1.017 4.881 4.765 10.228 2.556 3.661 5.926 5.613 8.971 5.613z" />
              </svg>
              <span>Открыть группу школы в VK</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Apple-style Interactive Window Frame */}
        <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-xl overflow-hidden">
          {/* macOS Title Bar with Window Controls */}
          <div className="px-4 sm:px-6 py-3.5 bg-neutral-100/90 dark:bg-neutral-950/90 border-b border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between gap-4">
            {/* Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address bar / Simulated URL */}
            <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-2 px-3 py-1 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
              <span className="text-emerald-500">🔒</span>
              <span className="truncate">vk.com/club777990 (СОШ №25 Абакан)</span>
            </div>

            {/* Verification badge */}
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
              <span className="hidden md:inline font-medium">Официальная страница</span>
            </div>
          </div>

          {/* VK Profile Header Card inside Window */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-sky-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                {/* School VK Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#0077ff] to-sky-400 text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-md shrink-0 border-2 border-white dark:border-neutral-800">
                  25
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 dark:text-white">
                      МБОУ «СОШ № 25» г. Абакана
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Официальная страница образовательного учреждения · Абакан, ул. Тельмана, 93
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-neutral-600 dark:text-neutral-300">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      2 100+ <span className="font-normal text-neutral-500">подписчиков</span>
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      964 <span className="font-normal text-neutral-500">фотографии</span>
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      6 альбомов <span className="font-normal text-neutral-500">событий</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={vkCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center px-4 py-2 rounded-xl text-xs font-semibold bg-[#0077ff] hover:bg-[#0066dd] text-white transition-colors shadow-2xs inline-flex items-center justify-center gap-1.5"
                >
                  <span>Перейти в сообщество</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Segmented control tabs */}
            <div className="flex items-center gap-2 mt-6 pt-5 border-t border-neutral-200/60 dark:border-neutral-800 overflow-x-auto">
              <button
                onClick={() => setActiveTab('albums')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'albums'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-2xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Camera className="w-4 h-4" />
                <span>Фотоальбомы сообщества (964 фото)</span>
              </button>

              <button
                onClick={() => setActiveTab('feed')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'feed'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-2xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Свежие записи и новости</span>
              </button>

              <button
                onClick={() => setActiveTab('widget')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'widget'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-2xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Интерактивный виджет VK</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Photo Albums Showcase */}
          {activeTab === 'albums' && (
            <div className="p-6 sm:p-8 bg-neutral-50/50 dark:bg-neutral-950/40">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                    Тематические фотоальбомы школы №25
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Нажмите на любой альбом для просмотра в сообществе ВКонтакте
                  </p>
                </div>
                <span className="text-xs text-neutral-500 font-medium hidden sm:inline">
                  Всего 6 альбомов · 964 снимка
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {VK_ALBUMS.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => setSelectedAlbum(album)}
                    className="group cursor-pointer rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden hover:border-sky-400 dark:hover:border-sky-500 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      {/* Album Cover Art */}
                      <div className={`relative aspect-16/10 bg-gradient-to-tr ${album.coverGradient} p-5 flex flex-col justify-between text-white overflow-hidden`}>
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur-md text-[11px] font-semibold border border-white/20">
                            {album.photoCount} фото
                          </span>
                          <span className="p-2 rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        {/* Title overlay */}
                        <div>
                          <p className="text-[11px] font-medium opacity-85">{album.date}</p>
                          <h5 className="text-base font-bold leading-tight drop-shadow-xs mt-0.5">
                            {album.title}
                          </h5>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="p-4 sm:p-5">
                        <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2">
                          {album.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:px-5 pt-0 pb-4 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                      <span className="group-hover:underline">Смотреть альбом</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Live VK Posts Feed */}
          {activeTab === 'feed' && (
            <div className="p-6 sm:p-8 bg-neutral-50/50 dark:bg-neutral-950/40">
              <div className="max-w-3xl mx-auto space-y-6">
                {VK_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs"
                  >
                    {/* Author line */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0077ff] text-white flex items-center justify-center font-bold text-sm">
                          25
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-neutral-900 dark:text-white">
                              {post.author}
                            </span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                          </div>
                          <span className="text-[11px] text-neutral-400">{post.date}</span>
                        </div>
                      </div>

                      <a
                        href={vkCommunityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-sky-600 transition-colors p-1"
                        title="Открыть в VK"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Post content */}
                    <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4">
                      {post.text}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-sky-600 dark:text-sky-400 hover:underline cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Attached photo preview strip */}
                    <div className="mb-4 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-300">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-sky-500" />
                        <span>К записи прикреплено {post.photosCount} фотоматериалов</span>
                      </div>
                      <a
                        href={vkCommunityUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 dark:text-sky-400 font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        <span>Смотреть галерею</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Post footer stats */}
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1.5 hover:text-rose-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-sky-500 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span>{post.reposts}</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Official VK Widget Embed View */}
          {activeTab === 'widget' && (
            <div className="p-6 sm:p-10 bg-neutral-50/50 dark:bg-neutral-950/40 text-center">
              <div className="max-w-xl mx-auto rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 shadow-xs">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0077ff] text-white flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.072-1.785.748-2.527 1.626-1.579 1.107 1.196 1.765 2.494 2.923 2.494h2.242c1.232 0 1.623-.617.971-1.802-.924-1.681-3.235-3.864-3.327-4.444-.145-.916.406-1.307 1.162-2.324 1.743-2.324 2.803-4.425 2.425-4.425h-2.242c-.755 0-1.075.406-1.424 1.191-.726 1.627-2.004 3.924-2.818 3.924-.436 0-.581-.29-.581-1.046v-3.72c0-.987-.29-1.349-1.017-1.349h-3.66c-.494 0-.814.29-.814.639 0 .697.872.842.959 2.76v4.068c0 .871-.174 1.045-.523 1.045-.987 0-2.382-2.295-3.37-4.91-.32-.842-.697-1.25-1.423-1.25h-2.242c-.61 0-.843.406-.843.842 0 .814 1.017 4.881 4.765 10.228 2.556 3.661 5.926 5.613 8.971 5.613z" />
                  </svg>
                </div>

                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Интеграция официального виджета
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  Прямой доступ ко всем опубликованным материалам школы №25 города Абакана: 964+ фотографии, обсуждения, расписание школьных кружков и родительские оповещения.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={vkCommunityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0077ff] hover:bg-[#0066dd] text-white text-xs sm:text-sm font-semibold transition-colors shadow-2xs inline-flex items-center justify-center gap-2"
                  >
                    <span>Перейти в сообщество VK</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={`${vkCommunityUrl}?act=photos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Camera className="w-4 h-4 text-sky-500" />
                    <span>Все 964 фото в VK</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Album Preview Modal */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedAlbum(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAlbum(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${selectedAlbum.coverGradient} flex items-center justify-center text-white font-bold mb-4 shadow-sm`}>
              <Camera className="w-6 h-6" />
            </div>

            <div className="inline-block px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 text-xs font-semibold mb-2">
              {selectedAlbum.photoCount} фотографий · {selectedAlbum.date}
            </div>

            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              {selectedAlbum.title}
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              {selectedAlbum.description}
            </p>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              💡 Все фотографии хранятся в защищённом альбоме официального сообщества школы №25 и доступны для просмотра в высоком разрешении.
            </div>

            <div className="flex gap-3">
              <a
                href={selectedAlbum.vkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#0077ff] hover:bg-[#0066dd] text-white text-xs sm:text-sm font-semibold text-center transition-colors shadow-2xs inline-flex items-center justify-center gap-2"
              >
                <span>Смотреть альбом в VK</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setSelectedAlbum(null)}
                className="px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
