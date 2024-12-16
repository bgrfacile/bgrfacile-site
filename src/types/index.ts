export type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string|null;
    link?: string;
    isFlagship?: boolean
};

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
};

export type Testimonial = {
    id: string;
    name: string;
    role: string;
    content: string;
    image: string;
};
