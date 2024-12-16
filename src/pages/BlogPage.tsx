import {Link} from 'react-router';
import {BLOG_POSTS} from "@/data/blog.ts";
import { useChangeDocumentTitle } from '@/hooks/use-change-document-title.ts';

export function BlogPage() {
    useChangeDocumentTitle('Blog');
    return (
        <main className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Blog</h1>
                    <p className="text-xl text-gray-600">
                        Découvrez nos derniers articles sur l'éducation et la technologie
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center text-gray-600 text-sm mb-4">
                                    <span>{post.author}</span>
                                    <span className="mx-2">•</span>
                                    <time>{new Date(post.date).toLocaleDateString('fr-FR')}</time>
                                </div>
                                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="text-blue-600 hover:text-blue-700 font-semibold"
                                >
                                    Lire la suite
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}