import type {Testimonial} from "@/types";

const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Marie Laurent',
        role: 'Enseignante',
        content: 'BGRFacile a transformé ma façon d\'enseigner. Les outils sont intuitifs et mes élèves adorent les utiliser.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        id: '2',
        name: 'Thomas Dubois',
        role: 'Directeur d\'école',
        content: 'L\'implémentation des solutions BGRFacile a considérablement amélioré l\'engagement des élèves et la communication avec les parents.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
];

export function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Ce qu'ils disent de nous</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}