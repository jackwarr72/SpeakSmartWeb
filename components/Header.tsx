import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = "block py-2 px-4 text-sm hover:text-accent transition-colors duration-300";
    const activeLinkClasses = "text-accent";

    const navLinks = (
        <>
            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/courses" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Courses</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/blog" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/ai-practice" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>AI Practice</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${isSticky ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className={`text-2xl font-bold ${isSticky ? 'text-primary' : 'text-white'}`}>
                        SpeakSmart
                    </Link>

                    <div className="hidden md:flex items-center space-x-1">
                        <div className={`flex items-center space-x-1 ${isSticky ? 'text-text-dark' : 'text-white'}`}>
                           {navLinks}
                        </div>
                        <button className={`p-2 rounded-full hover:bg-gray-200/50 transition-colors ${isSticky ? 'text-text-dark' : 'text-white'}`}>
                            <SearchIcon />
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isSticky ? 'text-primary' : 'text-white'}>
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white text-text-dark rounded-md shadow-lg">
                        <div className="p-2">
                           {navLinks}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;