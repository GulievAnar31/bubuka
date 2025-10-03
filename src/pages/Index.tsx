import { useState } from "react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ContactModal } from "@/components/Modal";

export default function Index() {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <Header onOpenContact={() => setOpen(true)} />
            <main>
                <HeroSection onOpenContact={() => setOpen(true)} />
                <FeaturesSection onOpenContact={() => setOpen(true)} />
                <HowItWorksSection onOpenContact={() => setOpen(true)} />
                <CTASection onOpenContact={() => setOpen(true)} />
            </main>
            <Footer />
            <ContactModal open={open} onOpenChange={setOpen} />
        </div>
    );
}