import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router';

export function Hero() {
    return (
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Transformez l'éducation avec des outils innovants
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        BGRFacile développe des solutions technologiques pour révolutionner l'apprentissage et rendre
                        l'éducation plus accessible.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Découvrir nos produits
                            <ArrowRight className="ml-2" size={20}/>
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}