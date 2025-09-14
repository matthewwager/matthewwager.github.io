import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ 
    brandName = "Matthew Wager",
    links = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#timeline', label: 'Timeline' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ],
    className = "",
    variant = "default" // default, minimal, transparent
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (href) => {
        // Close mobile menu when link is clicked
        setIsMobileMenuOpen(false);
        
        // Smooth scroll to section
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`navigation navigation--${variant} ${className}`}>
            <div className="navigation__container">
                <div className="navigation__brand">
                    {brandName}
                </div>
                <ul className={`navigation__links ${isMobileMenuOpen ? 'navigation__links--open' : ''}`}>
                    {links.map((link, index) => (
                        <li key={index} className="navigation__item">
                            <a 
                                href={link.href}
                                className="navigation__link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(link.href);
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button 
                    className={`navigation__mobile-toggle ${isMobileMenuOpen ? 'navigation__mobile-toggle--open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
