import type {Product} from "@/types";

export const PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'BGRBiblio',
        description: 'Une plateforme d\'apprentissage complète qui révolutionne l\'expérience éducative. Intègre des fonctionnalités de cours en ligne, des exercices interactifs, et un suivi personnalisé des progrès.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'bgrlearn'
    },
    {
        id: '2',
        title: 'BGRQuiz',
        description: 'Créez, partagez et gérez des quiz interactifs pour évaluer les connaissances. Inclut des statistiques détaillées et des rapports de progression.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'bgrquiz'
    },
    {
        id: '3',
        title: 'BGRConnect',
        description: 'Une solution de communication unifiée qui facilite les échanges entre enseignants, élèves et parents. Inclut la messagerie, le partage de documents et le suivi des devoirs.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'bgrconnect'
    },
    {
        id: '4',
        title: 'BGRAnalytics',
        description: 'Plateforme d\'analyse de données éducatives permettant aux établissements de suivre et d\'optimiser leurs performances pédagogiques.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'bgranalytics'
    }
];