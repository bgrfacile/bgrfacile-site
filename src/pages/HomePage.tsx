import {Hero} from "@/components/Hero.tsx";
import {FeaturedProducts} from "@/components/FeaturedProducts.tsx";
import {Testimonials} from "@/components/Testimonials.tsx";

function HomePage() {
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
