import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import PostForm from '../components/PostForm';
import { Post } from '../types';

const AdminPage: React.FC = () => {
    const { posts, authors, addPost, updatePost, deletePost } = useData();
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [postToEdit, setPostToEdit] = useState<Post | null>(null);

    const handleAddNew = () => {
        setPostToEdit(null);
        setIsFormVisible(true);
    };

    const handleEdit = (post: Post) => {
        setPostToEdit(post);
        setIsFormVisible(true);
    };

    const handleDelete = (postId: string) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deletePost(postId);
        }
    };
    
    const handleSave = (postData: any) => {
        if (postToEdit) {
            updatePost(postData);
        } else {
            addPost(postData);
        }
        setIsFormVisible(false);
        setPostToEdit(null);
    };

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-primary text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-gray-700">
                    SpeakSmart Admin
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a href="#/admin" className="flex items-center px-4 py-2 rounded bg-gray-700 text-white">Dashboard</a>
                    <a href="#/admin" className="flex items-center px-4 py-2 rounded hover:bg-gray-700">Posts</a>
                    <a href="#/admin" className="flex items-center px-4 py-2 rounded hover:bg-gray-700">Pages</a>
                    <a href="#/admin" className="flex items-center px-4 py-2 rounded hover:bg-gray-700">Comments</a>
                    <a href="#/admin" className="flex items-center px-4 py-2 rounded hover:bg-gray-700">Users</a>
                    <a href="#/admin" className="flex items-center px-4 py-2 rounded hover:bg-gray-700">Settings</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Posts</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Admin User</span>
                        <img src="https://picsum.photos/seed/admin/40/40" alt="Admin" className="w-10 h-10 rounded-full" />
                    </div>
                </header>
                
                <div className="p-6 flex-1 overflow-y-auto">
                    <div className="flex justify-end mb-4">
                        <button onClick={handleAddNew} className="bg-accent text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                            Add New Post
                        </button>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {posts.map(post => {
                                    const author = authors.find(a => a.id === post.authorId);
                                    return (
                                        <tr key={post.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{post.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{author?.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{post.publishDate}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <button onClick={() => handleEdit(post)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                                <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            {isFormVisible && (
                <PostForm 
                    postToEdit={postToEdit} 
                    authors={authors} 
                    onSave={handleSave} 
                    onCancel={() => { setIsFormVisible(false); setPostToEdit(null); }} 
                />
            )}
        </div>
    );
};

export default AdminPage;
