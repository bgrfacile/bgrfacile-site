import {Link} from 'react-router';
import {Facebook, Twitter, Linkedin, Mail, Phone, MapPin} from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">BGRFacile</h3>
                        <p className="text-gray-400">
                            Transformez l'éducation avec des outils innovants.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li><Link to="/products" className="text-gray-400 hover:text-white">Produits</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white">À Propos</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <Mail size={16}/>
                                <span className="text-gray-400">contact@bgrfacile.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16}/>
                                <span className="text-gray-400">+33 X XX XX XX XX</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16}/>
                                <span className="text-gray-400">Paris, France</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Facebook/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Twitter/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Linkedin/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} BGRFacile. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}