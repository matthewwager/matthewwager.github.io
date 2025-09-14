import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Button from './Button';

// This file demonstrates how to use modular components
const ComponentExamples = () => {
    return (
        <div>
            {/* Example 1: Different Navigation Variants */}
            <Navigation variant="default" />
            <Navigation variant="minimal" />
            <Navigation variant="transparent" />
            
            {/* Example 2: Custom Navigation Links */}
            <Navigation 
                brandName="My Portfolio"
                links={[
                    { href: '#home', label: 'Home' },
                    { href: '#about', label: 'About' },
                    { href: '#contact', label: 'Contact' }
                ]}
            />
            
            {/* Example 3: Different Button Variants */}
            <Button variant="primary" size="large">Primary Button</Button>
            <Button variant="secondary" size="medium">Secondary Button</Button>
            <Button variant="outline" size="small">Outline Button</Button>
            <Button variant="ghost" size="medium">Ghost Button</Button>
            
            {/* Example 4: Buttons with Icons */}
            <Button 
                variant="primary" 
                icon={<i className="fas fa-download"></i>}
                href="#download"
            >
                Download CV
            </Button>
            
            {/* Example 5: Custom Hero */}
            <Hero 
                name="John Doe"
                title="UI/UX Designer"
                description="Creating beautiful user experiences with modern design principles."
                ctaButtons={[
                    {
                        text: "View Portfolio",
                        href: "#portfolio",
                        variant: "primary",
                        icon: <i className="fas fa-eye"></i>
                    },
                    {
                        text: "Contact Me",
                        href: "#contact",
                        variant: "outline",
                        icon: <i className="fas fa-phone"></i>
                    }
                ]}
            />
        </div>
    );
};

export default ComponentExamples;
