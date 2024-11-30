import {Link} from 'react-router';
import {ArrowRight} from 'lucide-react';
import type {Product} from "@/types";

const FEATURED_PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'BGRLearn',
        description: 'Plateforme d\'apprentissage interactive pour les étudiants et enseignants.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'bgrlearn'
    },
    {
        id: '2',
        title: 'BGRQuiz',
        description: 'Créez et partagez des quiz interactifs pour évaluer les connaissances.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'bgrquiz'
    },
    {
        id: '3',
        title: 'BGRConnect',
        description: 'Solution de communication entre enseignants, élèves et parents.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'bgrconnect'
    }
];

export function FeaturedProducts() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Nos Produits Phares</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURED_PRODUCTS.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                                >
                                    En savoir plus <ArrowRight className="ml-2" size={16}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}