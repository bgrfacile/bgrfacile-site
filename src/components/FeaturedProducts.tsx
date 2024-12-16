import {Link} from 'react-router';
import {ArrowRight} from 'lucide-react';
import {PRODUCTS} from "@/data/Product.ts";


export function FeaturedProducts() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Nos Produits Phares</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        product.isFlagship &&
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                {product.slug ? (
                                    <Link
                                        to={`/products/${product.slug}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                                    >
                                        En savoir plus <ArrowRight className="ml-2" size={16}/>
                                    </Link>
                                ) : product.link ? (
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                                    >
                                        En savoir plus <ArrowRight className="ml-2" size={16}/>
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}