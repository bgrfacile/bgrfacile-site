import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useChangeDocumentTitle } from '@/hooks/use-change-document-title.ts';
import emailjs from 'emailjs-com';


const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

export function ContactPage() {
    useChangeDocumentTitle('Contact');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation du formulaire
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Envoi de l'email via EmailJS
        emailjs.sendForm(
            SERVICE_ID, // Remplacez par votre SERVICE_ID
            TEMPLATE_ID, // Remplacez par votre TEMPLATE_ID
            e.target as HTMLFormElement, // Utilisation de la référence de formulaire
            USER_ID // Remplacez par votre USER_ID
        )
            .then((response) => {
                console.log('Message envoyé avec succès!', response);
                alert('Message envoyé avec succès!');
                // Réinitialiser les champs du formulaire après l'envoi
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'email:', error);
                alert('Une erreur est survenue lors de l\'envoi du message.');
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
                    <p className="text-xl text-gray-600">
                        Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-gray-600">contact@bgrfacile.com</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                            <h3 className="font-semibold mb-2">Téléphone</h3>
                            <p className="text-gray-600">+33 X XX XX XX XX</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                            <h3 className="font-semibold mb-2">Adresse</h3>
                            <p className="text-gray-600">123 Avenue de l'Innovation<br />75001 Paris, France</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Envoyer le message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
