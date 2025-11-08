import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic) {
            setError('Please enter a topic to discuss.');
            return;
        }
        setError('');
        setLoading(true);
        setResponse('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const fullPrompt = `You are a friendly and patient English language tutor. A student wants to practice their English conversation skills with you. 
            
            Their chosen topic is: "${topic}".
            
            Start a simple and encouraging conversation with the student about this topic. Ask an open-ended question to begin. Keep your language clear and appropriate for an intermediate English learner.`;
            
            const geminiResponse = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: fullPrompt,
            });

            setResponse(geminiResponse.text);

        } catch (err) {
            console.error(err);
            setError('Sorry, something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="topic" className="block text-lg font-medium text-gray-800 mb-2">Conversation Topic</label>
                    <input
                        id="topic"
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., 'My favorite hobbies' or 'Ordering food'"
                        className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent text-lg"
                        disabled={loading}
                    />
                </div>
                
                <div className="text-center">
                    <button 
                        type="submit" 
                        className="bg-accent text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? 'Thinking...' : 'Start Practicing'}
                    </button>
                </div>
            </form>

            {error && (
                <div className="mt-8 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                    <p>{error}</p>
                </div>
            )}

            {loading && (
                <div className="mt-8 text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="mt-2 text-gray-600">Our AI tutor is preparing your first question...</p>
                </div>
            )}

            {response && (
                <div className="mt-8 pt-8 border-t">
                    <h3 className="text-2xl font-bold font-sans text-primary mb-4">AI Tutor:</h3>
                    <div className="prose lg:prose-lg max-w-none text-text-dark leading-relaxed whitespace-pre-wrap">
                        {response}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAssistant;