
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <Link to={`/post/${post.id}`}>
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300" />
        <div className="p-6">
          <h3 className="text-xl font-sans font-bold text-primary mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <span className="font-sans text-accent font-bold hover:underline">Read More &rarr;</span>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
