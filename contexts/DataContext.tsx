import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Post, Author } from '../types';
import { posts as initialPosts, authors as initialAuthors } from '../constants';

interface DataContextProps {
    posts: Post[];
    authors: Author[];
    addPost: (post: Omit<Post, 'id' | 'publishDate'>) => void;
    updatePost: (post: Post) => void;
    deletePost: (postId: string) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [authors] = useState<Author[]>(initialAuthors);

    const addPost = (post: Omit<Post, 'id' | 'publishDate'>) => {
        const newPost: Post = {
            ...post,
            id: (Math.max(...posts.map(p => parseInt(p.id, 10))) + 1).toString(),
            publishDate: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
        };
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    const updatePost = (updatedPost: Post) => {
        setPosts(prevPosts =>
            prevPosts.map(post => (post.id === updatedPost.id ? updatedPost : post))
        );
    };

    const deletePost = (postId: string) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    };

    return (
        <DataContext.Provider value={{ posts, authors, addPost, updatePost, deletePost }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
