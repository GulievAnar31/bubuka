import { Card, CardContent } from '@/components/ui/card';
import { FC } from 'react';

const organizerLogos = [
    { name: 'TechSummit', logo: '🏢' },
    { name: 'MusicFest', logo: '🎵' },
    { name: 'CreativeHub', logo: '🎨' },
    { name: 'SportEvents', logo: '⚽' },
    { name: 'CharityGala', logo: '❤️' },
    { name: 'BusinessConf', logo: '💼' },
    { name: 'ArtExpo', logo: '🖼️' },
    { name: 'FoodFest', logo: '🍽️' }
];

type HeaderProps = {
    onOpenContact: () => void;
};

const TestimonialsSection: FC<HeaderProps> = () => {
    return (
        <section id="testimonials" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Любимы организаторами мероприятий{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            по всему миру
                        </span>
                    </h2>
                </div>

                {/* Organizer Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                    {organizerLogos?.map((org, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0"
                        >
                            <CardContent className="p-4 text-center">
                                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {org.logo}
                                </div>
                                <h4 className="text-sm font-medium text-gray-700">{org.name}</h4>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;
