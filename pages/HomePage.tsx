import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostCard from '../components/BlogPostCard';
import FeaturedCourse from '../components/FeaturedCourse';
import { useData } from '../contexts/DataContext';

const HomePage: React.FC = () => {
    const { posts } = useData();
    const featuredPosts = posts.slice(0, 3);
    const featuredCourse = posts.find(p => p.id === '9');

    return (
        <div>
            {/* Hero Section */}
            <section className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(https://picsum.photos/seed/learning/1920/1080)` }}>
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="text-center z-10 p-4">
                    <h1 className="text-5xl md:text-7xl font-bold font-sans mb-4 drop-shadow-lg">Unlock Your English Fluency</h1>
                    <p className="text-lg md:text-xl mb-8 drop-shadow-md">Expert tips, in-depth lessons, and practical advice to help you speak confidently.</p>
                    <Link to="/courses" className="bg-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                        Browse Our Lessons
                    </Link>
                </div>
            </section>

            {/* Featured Blog Posts Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold font-sans text-center text-primary mb-12">Latest from the Blog</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPosts.map(post => (
                            <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Course Section */}
            {featuredCourse && (
                <section className="py-20 bg-secondary">
                    <div className="container mx-auto px-6">
                         <h2 className="text-4xl font-bold font-sans text-center text-primary mb-12">Featured Course</h2>
                        <FeaturedCourse course={featuredCourse} />
                    </div>
                </section>
            )}

            {/* Newsletter Signup Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold font-sans text-primary mb-4">Start Your Journey to Fluency!</h2>
                    <p className="text-text-dark mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for exclusive lessons, language tips, and learning strategies delivered directly to your inbox.</p>
                    <form className="max-w-md mx-auto flex">
                        <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-l-md border-gray-300 focus:ring-accent focus:border-accent" required />
                        <button type="submit" className="bg-primary text-white font-bold py-3 px-6 rounded-r-md hover:bg-opacity-90 transition-colors">Subscribe</button>
                    </form>
                </div>
            </section>

            {/* About Us Preview Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img src="https://picsum.photos/seed/teachers/600/400" alt="About Us" className="rounded-lg shadow-xl w-full" />
                        </div>
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="text-4xl font-bold font-sans text-primary mb-4">Meet Our Experts</h2>
                            <p className="text-text-dark mb-6">
                                We're a team of passionate educators and linguists dedicated to making English learning accessible and effective. SpeakSmart is our platform to share our expertise and help you achieve your language goals.
                            </p>
                            <Link to="/about" className="bg-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300">
                                Our Mission
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
