import React, { useState } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import { useData } from '../contexts/DataContext';

const POSTS_PER_PAGE = 6;

const BlogPage: React.FC = () => {
    const { posts } = useData();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-5xl font-bold font-sans text-center text-primary mb-12">Explore Our Lessons & Articles</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                 <div className="flex justify-center items-center mt-12 space-x-2">
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                        aria-label="Previous page"
                    >
                        &larr; Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button 
                            key={page} 
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 border rounded-md ${currentPage === page ? 'bg-primary text-white border-primary' : 'bg-white border-gray-300 hover:bg-gray-100'}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                        >
                            {page}
                        </button>
                    ))}
                    
                    <button 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                        aria-label="Next page"
                    >
                        Next &rarr;
                    </button>
                </div>
            )}
        </div>
    );
};

export default BlogPage;
