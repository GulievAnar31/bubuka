import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Zap,
    Shield,
    HeadphonesIcon,
    TrendingUp,
    ArrowRight,
    Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CTASection() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full" />
                <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full" />
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/10 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-8 mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                        <Star className="w-4 h-4 mr-2" />
                        {t("cta.badge")}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        {t("cta.title", { what: t("cta.title_highlight") })}
                    </h2>

                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        {t("cta.subtitle")}
                    </p>
                </div>

                {/* Feature highlights */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        {
                            icon: Zap,
                            title: t("cta.feature.fast.title"),
                            description: t("cta.feature.fast.desc"),
                        },
                        {
                            icon: Shield,
                            title: t("cta.feature.payments.title"),
                            description: t("cta.feature.payments.desc"),
                        },
                        {
                            icon: HeadphonesIcon,
                            title: t("cta.feature.support.title"),
                            description: t("cta.feature.support.desc"),
                        },
                        {
                            icon: TrendingUp,
                            title: t("cta.feature.growth.title"),
                            description: t("cta.feature.growth.desc"),
                        },
                    ].map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={i}
                                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <CardContent className="p-4 text-center">
                                    <Icon className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                                    <h3 className="font-semibold text-white text-sm">
                                        {feature.title}
                                    </h3>
                                    <p className="text-blue-100 text-xs">{feature.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Main CTA */}
                <div className="text-center space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            {t("cta.button.primary")}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all backdrop-blur-sm"
                        >
                            {t("cta.button.secondary")}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}