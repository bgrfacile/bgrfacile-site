export type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string|null;
    link?: string;
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
