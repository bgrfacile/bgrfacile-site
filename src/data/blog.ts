interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    image: string;
    slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'L\'impact de la technologie sur l\'éducation moderne',
        excerpt: 'Comment les outils numériques transforment l\'expérience d\'apprentissage en classe.',
        content: 'Lorem ipsum dolor sit amet...',
        author: 'Sophie Martin',
        date: '2024-03-15',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'impact-technologie-education'
    },
    {
        id: '2',
        title: 'Les tendances EdTech en 2024',
        excerpt: 'Découvrez les innovations qui façonnent l\'avenir de l\'éducation.',
        content: 'Lorem ipsum dolor sit amet...',
        author: 'Lucas Dubois',
        date: '2024-03-10',
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        slug: 'tendances-edtech-2024'
    }
];