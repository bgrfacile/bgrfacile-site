import {TEAM_MEMBERS} from "@/data/team.ts";
import {useChangeDocumentTitle} from "@/hooks/use-change-document-title.ts";


export function AboutPage() {
    useChangeDocumentTitle('À propos');
    return (
        <main className="py-16">
            <div className="container mx-auto px-4">
                {/* Mission Section */}
                <section className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">Notre Mission</h1>
                    <p className="text-xl text-gray-600">
                        Chez BGRFacile, nous croyons en la démocratisation de l'éducation à travers l'innovation
                        technologique. Notre mission est de développer des outils numériques intuitifs et interactifs
                        qui rendent l'apprentissage plus accessible, engageant et efficace pour tous les apprenants,
                        quel que soit leur parcours.
                    </p>
                </section>

                {/* Histoire Section */}
                <section className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Notre Histoire</h2>
                    <div className="bg-gray-50 rounded-lg p-8">
                        <p className="text-gray-600 mb-4">
                            Fondée en 2019, BGRFacile est née de ma volonté de créer un outil qui m'aiderait dans mes
                            études supérieures. Au départ, j’ai rencontré de nombreux échecs, tentant encore et encore
                            d'affiner ma vision pour proposer une solution qui pourrait réellement plaire aux
                            utilisateurs. Malgré ces défis, j’ai mis en ligne une première version dès 2019, marquant le
                            début d’un long processus d’amélioration et d’innovation.
                        </p>
                        <p className="text-gray-600">
                            Aujourd’hui, BGRFacile a évolué bien au-delà de son concept initial, s’adaptant aux besoins
                            des étudiants et des professionnels en quête d’outils éducatifs modernes et performants.
                        </p>
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-12 text-center">Notre Équipe</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.id} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}