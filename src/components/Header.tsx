import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {t("header.logo")}
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {t("header.nav.features")}
                            </button>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {t("header.nav.howItWorks")}
                            </button>
                            <button
                                onClick={() => scrollToSection('testimonials')}
                                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {t("header.nav.testimonials")}
                            </button>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {t("header.nav.pricing")}
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {t("header.nav.contacts")}
                            </a>
                        </div>
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            {t("header.auth.login")}
                        </a>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
                            {t("header.auth.register")}
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-blue-600 p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
                            >
                                {t("header.nav.features")}
                            </button>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
                            >
                                {t("header.nav.howItWorks")}
                            </button>
                            <button
                                onClick={() => scrollToSection('testimonials')}
                                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
                            >
                                {t("header.nav.testimonials")}
                            </button>
                            <a
                                href="#"
                                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium"
                            >
                                {t("header.nav.pricing")}
                            </a>
                            <a
                                href="#"
                                className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium"
                            >
                                {t("header.nav.contacts")}
                            </a>
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <a
                                    href="#"
                                    className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium"
                                >
                                    {t("header.auth.login")}
                                </a>
                                <div className="mt-3 px-3">
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg font-medium">
                                        {t("header.auth.register")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}