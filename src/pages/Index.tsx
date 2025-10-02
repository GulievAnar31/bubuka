import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Index() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}