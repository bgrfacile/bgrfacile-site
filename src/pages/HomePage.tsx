import {Hero} from "@/components/Hero.tsx";
import {FeaturedProducts} from "@/components/FeaturedProducts.tsx";
import {Testimonials} from "@/components/Testimonials.tsx";
import { useChangeDocumentTitle } from "@/hooks/use-change-document-title.ts";

function HomePage() {
    useChangeDocumentTitle('Accueil');
    return (
        <>
            <main>
                <Hero/>
                <FeaturedProducts/>
                <Testimonials/>
            </main>
        </>
    );
}

export default HomePage;
