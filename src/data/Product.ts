import type {Product} from "@/types";
import bgrsignCover from "@/assets/bgrsign_cover.png";

export const PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'BGRBiblio',
        description: 'Plateforme d\'apprentissage interactive pour les étudiants et enseignants.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'bgrlearn',
        isFlagship:true
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
    },
    {
        id: '4',
        title: 'BGRSign',
        description: 'révolutionne la gestion des présences en cours grâce à une solution numérique innovante. Simplifiez l’émargement, réduisez les tâches administratives et obtenez des rapports précis en temps réel. Adoptez BGRSign pour une expérience moderne et efficace du suivi de présence.',
        image: bgrsignCover,
        slug: null,
        link: 'https://bgrsign.benaja-bendo.fr/',
        isFlagship: true
    },
    {
        id: '5',
        title: 'MémoTheque',
        description: "bibliothèque numérique de mémoires",
        image: bgrsignCover,
        slug: null,
        link: 'https://bgrsign.benaja-bendo.fr/',
        isFlagship: true
    }
];