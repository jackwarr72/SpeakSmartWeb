import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState<{ email?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setIsSubmitted(false);

        if (!validateEmail(formData.email)) {
            setErrors({ email: 'Please enter a valid email address.' });
            return;
        }

        // Handle form submission logic here (e.g., send to an API)
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="container mx-auto max-w-4xl px-6 py-12">
            <div className="text-center">
                <h1 className="text-5xl font-bold font-sans text-primary mb-4">Get In Touch</h1>
                <p className="text-lg text-gray-600 mb-12">Have a question about a lesson, a suggestion for a topic, or just want to say hello? We'd love to hear from you!</p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <p className="text-lg">For collaborations and inquiries, please email us at:</p>
                    <a href="mailto:hello@speaksmart.com" className="text-xl text-accent font-bold hover:underline">hello@speaksmart.com</a>
                </div>

                {isSubmitted && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                        <p className="font-bold">Thank You!</p>
                        <p>Your message has been sent successfully. We'll get back to you soon.</p>
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required />
                             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-accent focus:border-accent" required></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-accent text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;