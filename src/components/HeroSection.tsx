import { Button } from '@/components/ui/button';
import { Play, Star, Users, Calendar } from 'lucide-react';
import { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

type HeroImage = {
    title: string;
    gradient?: string;
    icon?: string;
    sold?: string;
    progress?: number;
    revenue?: string;
    growth?: string;
    image?: string;
};

type HeroSectionProps = {
    onOpenContact: () => void;
};

const HeroSection: FC<HeroSectionProps> = ({ onOpenContact }) => {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const heroImages = useMemo<HeroImage[]>(() => {
        const raw = t('hero.carousel', { returnObjects: true }) as unknown;
        return Array.isArray(raw) ? (raw as HeroImage[]) : [];
    }, [t]);

    const fallback: HeroImage = {
        title: t('hero.card.fallbackTitle', { defaultValue: 'Мероприятие' }),
        gradient: 'from-blue-500 to-purple-600',
        icon: '🎟️',
    };

    const slides: HeroImage[] = heroImages.length > 0 ? heroImages : [fallback];

    useEffect(() => {
        if (slides.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
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
                                onClick={onOpenContact}
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                {t('hero.buttons.primary')}
                            </Button>

                            <Button
                                onClick={onOpenContact}
                                variant="outline"
                                size="lg"
                                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all"
                            >
                                <Play className="w-5 h-5 mr-2" />
                                {t('hero.buttons.secondary')}
                            </Button>
                        </div>

                        {/* Статистика */}

                    </div>

                    {/* Правая колонка — карточка со слайдером */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500 w-full max-w-lg">
                                {/* Картинка или фон */}
                                {currentImage.image ? (
                                    <img
                                        src={currentImage.image}
                                        alt={currentImage.title}
                                        className="w-full h-48 md:h-56 object-cover"
                                        loading="eager"
                                    />
                                ) : (
                                    <div
                                        className={`w-full h-48 md:h-56 bg-gradient-to-r ${currentImage.gradient ?? 'from-blue-500 to-purple-600'
                                            } flex items-center justify-center`}
                                    >
                                        <span className="text-5xl">{currentImage.icon ?? '🎟️'}</span>
                                    </div>
                                )}

                                {/* Контент карточки */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center justify-between">
                                        {currentImage.title}
                                        <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-lg">
                                            {t('hero.card.live', { defaultValue: 'В эфире' })}
                                        </span>
                                    </h3>

                                    {/* Продажи */}
                                    <p className="text-sm text-gray-600 mb-1">
                                        {t('hero.card.sold', { defaultValue: 'Билетов продано' })}
                                    </p>
                                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                        <span>{currentImage.sold}</span>
                                    </div>

                                    {/* Прогресс-бар */}
                                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                        <div
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                                            style={{ width: `${currentImage.progress ?? 0}%` }}
                                        />
                                    </div>

                                    {/* Доход и рост */}
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-900">
                                            {currentImage.revenue}
                                        </span>
                                        <span className="text-sm text-green-600 font-medium">
                                            {currentImage.growth}
                                        </span>
                                    </div>
                                </div>
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
};

export default HeroSection;