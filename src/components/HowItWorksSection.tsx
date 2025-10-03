import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    UserPlus,
    Calendar,
    CreditCard,
    BarChart3,
    ArrowRight,
    CheckCircle,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const steps = [
    { step: 1, icon: UserPlus, color: 'blue' },
    { step: 2, icon: Calendar, color: 'purple' },
    { step: 3, icon: CreditCard, color: 'green' },
    { step: 4, icon: BarChart3, color: 'orange' },
];

const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
};

type HeaderProps = {
    onOpenContact: () => void;
};

export const HowItWorksSection: FC<HeaderProps> = ({ onOpenContact }) => {
    const { t } = useTranslation();

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        {t('howItWorks.title')}{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t('howItWorks.titleHighlight')}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('howItWorks.subtitle')}
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
                    {steps?.map((step, index) => {
                        const IconComponent = step.icon;
                        const isLast = index === steps.length - 1;

                        // Вынесли детали в переменную с кастом
                        const details = t(`howItWorks.steps.${index}.details`, {
                            returnObjects: true,
                        }) as string[];

                        return (
                            <div key={index} className="relative">
                                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white h-full">
                                    <CardContent className="p-6 space-y-4 text-center">
                                        {/* Иконка */}
                                        <div
                                            className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${colorClasses[step.color as keyof typeof colorClasses]
                                                } border-2 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <IconComponent className="w-8 h-8" />
                                        </div>

                                        {/* Заголовок шага */}
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {t(`howItWorks.steps.${index}.title`)}
                                        </h3>

                                        {/* Описание */}
                                        <p className="text-gray-600 leading-relaxed">
                                            {t(`howItWorks.steps.${index}.description`)}
                                        </p>

                                        {/* Детали */}
                                        <div className="space-y-2">
                                            {details?.map((detail, detailIndex) => (
                                                <div
                                                    key={detailIndex}
                                                    className="flex items-start space-x-2 text-sm text-gray-500"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                    <span className="text-left">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Стрелки */}
                                {!isLast && (
                                    <>
                                        {/* Desktop */}
                                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                                <ArrowRight className="w-5 h-5 text-gray-400" />
                                            </div>
                                        </div>
                                        {/* Mobile */}
                                        <div className="lg:hidden flex justify-center py-4">
                                            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HowItWorksSection;
