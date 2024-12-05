import {Menu, X} from 'lucide-react';
import {Link} from 'react-router';
import {useState} from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        BGR-Facile
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
                        <Link to="/products" className="text-gray-700 hover:text-blue-600">Produits</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600">À Propos</Link>
                        <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X/> : <Menu/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        <Link to="/" className="block text-gray-700 hover:text-blue-600">Accueil</Link>
                        <Link to="/products" className="block text-gray-700 hover:text-blue-600">Produits</Link>
                        <Link to="/about" className="block text-gray-700 hover:text-blue-600">À Propos</Link>
                        <Link to="/blog" className="block text-gray-700 hover:text-blue-600">Blog</Link>
                        <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
