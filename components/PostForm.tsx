import React, { useState, useEffect } from 'react';
import { Post, Author } from '../types';

interface PostFormProps {
    postToEdit?: Post | null;
    authors: Author[];
    onSave: (post: any) => void;
    onCancel: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ postToEdit, authors, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        imageUrl: '',
        authorId: authors[0]?.id || '',
    });

    useEffect(() => {
        if (postToEdit) {
            setFormData({
                title: postToEdit.title,
                excerpt: postToEdit.excerpt,
                content: postToEdit.content,
                imageUrl: postToEdit.imageUrl,
                authorId: postToEdit.authorId,
            });
        } else {
            setFormData({
                title: '',
                excerpt: '',
                content: '',
                imageUrl: '',
                authorId: authors[0]?.id || '',
            });
        }
    }, [postToEdit, authors]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const postData = postToEdit ? { ...formData, id: postToEdit.id, publishDate: postToEdit.publishDate } : formData;
        onSave(postData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold font-sans text-primary mb-6">{postToEdit ? 'Edit Post' : 'Add New Post'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required />
                    </div>
                     <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required />
                    </div>
                     <div>
                        <label htmlFor="authorId" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                        <select name="authorId" id="authorId" value={formData.authorId} onChange={handleChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required>
                            {authors.map(author => (
                                <option key={author.id} value={author.id}>{author.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                        <textarea name="excerpt" id="excerpt" rows={3} value={formData.excerpt} onChange={handleChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required></textarea>
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content (use double newlines for paragraphs)</label>
                        <textarea name="content" id="content" rows={10} value={formData.content} onChange={handleChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required></textarea>
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-md hover:bg-gray-300 transition-colors">Cancel</button>
                        <button type="submit" className="bg-accent text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                            {postToEdit ? 'Update Post' : 'Save Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostForm;
