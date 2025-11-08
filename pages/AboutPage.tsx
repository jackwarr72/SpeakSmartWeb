import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div>
            <header className="relative h-[50vh] flex items-center justify-center text-white text-center bg-primary">
                <img src="https://picsum.photos/seed/education/1920/1080" alt="A well-lit library" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="z-10 p-6">
                    <h1 className="text-5xl md:text-6xl font-bold font-sans">About SpeakSmart</h1>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-6 py-20">
                <section className="mb-16 text-center">
                    <h2 className="text-4xl font-bold font-sans text-primary mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Welcome to SpeakSmart! Our mission is to make learning English accessible, effective, and enjoyable for everyone. We believe that language is a bridge to new opportunities, cultures, and connections. Whether you are a beginner starting your journey or an advanced learner polishing your skills, we are here to provide you with reliable, high-quality resources to help you achieve your goals and speak with confidence.
                    </p>
                </section>

                <div className="flex flex-col md:flex-row items-center gap-12 my-16">
                    <div className="md:w-1/2">
                        <img src="https://picsum.photos/seed/experts/600/600" alt="Our team of educators" className="rounded-full shadow-xl w-full max-w-sm mx-auto" />
                    </div>
                    <div className="md:w-1/2">
                         <h2 className="text-4xl font-bold font-sans text-primary mb-4">What We Offer</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            At SpeakSmart, we are dedicated to creating authentic and practical content. You'll find:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                            <li><strong>In-depth Grammar Guides:</strong> Clear explanations of complex grammar rules with practical examples.</li>
                            <li><strong>Vocabulary Lessons:</strong> Thematic vocabulary lists, idioms, and phrasal verbs to enrich your language.</li>
                            <li><strong>Practical Skills Advice:</strong> Tips for improving your listening, speaking, reading, and writing.</li>
                            <li><strong>Expert-Authored Articles:</strong> Content created by experienced linguists and ESL instructors.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;