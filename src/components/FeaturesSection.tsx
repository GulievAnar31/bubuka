import { Card, CardContent } from "@/components/ui/card";
import {
    CreditCard,
    BarChart3,
    Megaphone,
    Settings,
    Shield,
    Smartphone,
    Users,
    Calendar,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    indigo: "bg-indigo-100 text-indigo-600",
    pink: "bg-pink-100 text-pink-600",
    teal: "bg-teal-100 text-teal-600",
} as const;

export default function FeaturesSection() {
    const { t } = useTranslation();

    const features = [
        {
            icon: CreditCard,
            title: t("features.items.tickets.title"),
            description: t("features.items.tickets.desc"),
            color: "blue" as const,
        },
        {
            icon: Megaphone,
            title: t("features.items.marketing.title"),
            description: t("features.items.marketing.desc"),
            color: "purple" as const,
        },
        {
            icon: BarChart3,
            title: t("features.items.analytics.title"),
            description: t("features.items.analytics.desc"),
            color: "green" as const,
        },
        {
            icon: Settings,
            title: t("features.items.management.title"),
            description: t("features.items.management.desc"),
            color: "orange" as const,
        },
        {
            icon: Shield,
            title: t("features.items.security.title"),
            description: t("features.items.security.desc"),
            color: "red" as const,
        },
        {
            icon: Smartphone,
            title: t("features.items.mobile.title"),
            description: t("features.items.mobile.desc"),
            color: "indigo" as const,
        },
        {
            icon: Users,
            title: t("features.items.participants.title"),
            description: t("features.items.participants.desc"),
            color: "pink" as const,
        },
        {
            icon: Calendar,
            title: t("features.items.multiEvents.title"),
            description: t("features.items.multiEvents.desc"),
            color: "teal" as const,
        },
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Заголовок и описание из JSON */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        {t("features.title", { what: t("features.highlight") })}{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" />
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t("features.subtitle")}
                    </p>
                </div>

                {/* Карточки фич */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white"
                            >
                                <CardContent className="p-6 space-y-4">
                                    <div
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[feature.color]
                                            } group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <IconComponent className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Нижний CTA из JSON */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                        {t("features.cta")}
                    </div>
                </div>
            </div>
        </section>
    );
}