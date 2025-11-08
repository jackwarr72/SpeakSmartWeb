import React from 'react';
import AIAssistant from '../components/AIAssistant';

const AIPlannerPage: React.FC = () => {
    return (
        <div className="container mx-auto max-w-4xl px-6 py-12">
            <div className="text-center">
                <h1 className="text-5xl font-bold font-sans text-primary mb-4">AI Practice Partner</h1>
                <p className="text-lg text-gray-600 mb-12">
                    Practice your English conversation skills with our AI tutor. Enter a topic below and start chatting!
                </p>
            </div>
            <AIAssistant />
        </div>
    );
};

export default AIPlannerPage;