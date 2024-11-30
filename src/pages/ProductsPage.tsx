import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import {PRODUCTS} from "@/data/Product.ts";

export function ProductsPage() {
    return (
        <main className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Nos Solutions Éducatives</h1>
                    <p className="text-xl text-gray-600">
                        Découvrez notre gamme complète d'outils innovants pour transformer l'expérience éducative.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8">
                                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                                <p className="text-gray-600 mb-6">{product.description}</p>
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                                >
                                    En savoir plus <ArrowRight className="ml-2" size={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}