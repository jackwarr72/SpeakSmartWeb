import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

const SinglePostPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const { posts, authors } = useData();
    const post = posts.find(p => p.id === postId);
    const author = post ? authors.find(a => a.id === post.authorId) : null;

    if (!post || !author) {
        return <Navigate to="/blog" />;
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    return (
        <article>
            <header className="relative h-[60vh] flex items-center justify-center text-white text-center">
                <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="z-10 p-6">
                    <h1 className="text-4xl md:text-6xl font-bold font-sans mb-4">{post.title}</h1>
                    <p className="text-lg">By <span className="font-bold">{author.name}</span> | Published on {post.publishDate}</p>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-6 py-12">
                <div className="prose lg:prose-xl max-w-none text-text-dark leading-relaxed">
                    {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-6">{paragraph}</p>
                    ))}
                </div>

                <hr className="my-12" />

                {/* Author Bio Section */}
                <section className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg">
                    <img src={author.imageUrl} alt={author.name} className="w-24 h-24 rounded-full mr-0 mb-4 md:mr-8 md:mb-0" />
                    <div>
                        <h4 className="text-2xl font-bold font-sans text-primary mb-2 text-center md:text-left">About {author.name}</h4>
                        <p className="text-gray-600 text-center md:text-left">{author.bio}</p>
                    </div>
                </section>

                {/* Social Share Buttons */}
                <section className="text-center my-12">
                    <h4 className="text-xl font-bold font-sans text-primary mb-4">Share this post</h4>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Facebook</button>
                        <button className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors">Twitter</button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">Pinterest</button>
                        <button onClick={copyToClipboard} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors">Copy Link</button>
                    </div>
                </section>

                {/* Comments Section */}
                <section>
                    <h3 className="text-3xl font-bold font-sans text-primary mb-6">Leave a Comment</h3>
                    <form className="bg-gray-100 p-8 rounded-lg">
                        <fieldset disabled className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md border-gray-300" />
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md border-gray-300" />
                            </div>
                            <textarea placeholder="Your Comment" rows={5} className="w-full px-4 py-2 rounded-md border-gray-300"></textarea>
                            <button type="submit" className="bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors cursor-not-allowed">Submit Comment</button>
                            <p className="text-sm text-gray-500">Comment system coming soon.</p>
                        </fieldset>
                    </form>
                </section>
            </div>
        </article>
    );
};

export default SinglePostPage;
