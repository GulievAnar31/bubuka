import { Button } from '@/components/ui/button';
import { Play, Star, Users, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const heroImages = t('hero.carousel', { returnObjects: true }) as Array<any>;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    const currentImage = heroImages[currentImageIndex];

    return (
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
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

                        {/* Stats */}
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

                    {/* Right Column - Animated Visual */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {currentImage.title}
                                        </h3>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {t('hero.card.live')}
                                        </span>
                                    </div>

                                    <div
                                        className={`h-32 bg-gradient-to-r ${currentImage.gradient} rounded-lg flex items-center justify-center transition-all duration-500`}
                                    >
                                        <div className="text-white text-center">
                                            <div className="text-2xl font-bold">
                                                {currentImage.icon}
                                            </div>
                                            <div className="text-sm">{t('hero.card.preview')}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">
                                                {t('hero.card.sold')}
                                            </span>
                                            <span className="font-semibold">
                                                {currentImage.sold}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${currentImage.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-2xl font-bold text-gray-900">
                                            {currentImage.revenue}
                                        </span>
                                        <span className="text-green-600 text-sm font-medium">
                                            {currentImage.growth}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {heroImages?.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
