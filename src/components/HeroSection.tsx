import { Button } from '@/components/ui/button';
import { Play, Star, Users, Calendar } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

type HeroImage = {
    title: string;
    /** Градиент в формате tailwind, например: 'from-blue-500 to-purple-600' */
    gradient?: string;
    /** Эмодзи-фолбэк, если нет изображения */
    icon?: string;
    /** Ниже поля можно не заполнять, они нам больше не нужны визуально, но тип оставим на будущее */
    sold?: string;
    progress?: number;
    revenue?: string;
    growth?: string;
    /** Путь к картинке из /public, напр. '/images/festival.jpg' */
    image?: string;
};

export default function HeroSection() {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Безопасно получаем массив слайдов из i18next
    const heroImages = useMemo<HeroImage[]>(() => {
        const raw = t('hero.carousel', { returnObjects: true }) as unknown;
        return Array.isArray(raw) ? (raw as HeroImage[]) : [];
    }, [t]);

    // Фолбэк слайд на случай пустого JSON
    const fallback: HeroImage = {
        title: t('hero.card.fallbackTitle', { defaultValue: 'Мероприятие' }),
        gradient: 'from-blue-500 to-purple-600',
        icon: '🎟️',
    };

    // Источник данных для слайдера — либо реальные данные, либо один фолбэк
    const slides: HeroImage[] = heroImages.length > 0 ? heroImages : [fallback];

    useEffect(() => {
        if (slides.length <= 1) return; // не крутим, если один слайд
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const currentImage = slides[currentImageIndex];

    return (
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Левая колонка — контент */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                <Star className="w-4 h-4 mr-2" />
                                {t('hero.badge')}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                {t('hero.title')}{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {t('hero.title_highlight')}
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                {t('hero.subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                {t('hero.buttons.primary')}
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all"
                            >
                                <Play className="w-5 h-5 mr-2" />
                                {t('hero.buttons.secondary')}
                            </Button>
                        </div>

                        {/* Статистика */}
                        <div className="flex flex-wrap gap-8 pt-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">
                                        {t('hero.stats.tickets.number')}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {t('hero.stats.tickets.label')}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">
                                        {t('hero.stats.events.number')}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {t('hero.stats.events.label')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка — ТОЛЬКО изображение/градиент на всю карточку */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
                                {currentImage.image ? (
                                    <img
                                        src={currentImage.image}
                                        alt={currentImage.title}
                                        className="w-full h-64 md:h-96 object-cover"
                                        loading="eager"
                                    />
                                ) : (
                                    <div
                                        className={`w-full h-64 md:h-96 bg-gradient-to-r ${currentImage.gradient ?? 'from-blue-500 to-purple-600'
                                            } flex items-center justify-center`}
                                    >
                                        <span className="text-5xl">
                                            {currentImage.icon ?? '🎟️'}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Точки-переключатели */}
                        {slides.length > 1 && (
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                                {slides.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}