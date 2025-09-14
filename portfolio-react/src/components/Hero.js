import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = ({ 
    name = "Matthew",
    title = "Full Stack Developer",
    description = "I create beautiful, functional websites and applications that solve real-world problems. Passionate about clean code and user experience.",
    ctaButtons = [
        {
            text: "View My Work",
            href: "#projects",
            variant: "primary",
            icon: <i className="fas fa-code"></i>
        },
        {
            text: "Get In Touch", 
            href: "#contact",
            variant: "secondary",
            icon: <i className="fas fa-envelope"></i>
        }
    ],
    className = ""
}) => {
    return (
        <section id="home" className={`hero ${className}`}>
            <div className="hero__container">
                <div className="hero__content fade-in-up">
                    <h1 className="hero__title">
                        Hello, I'm <span className="hero__name">{name}</span>
                    </h1>
                    <div className="hero__subtitle">{title}</div>
                    <p className="hero__description">{description}</p>
                    <div className="hero__actions">
                        {ctaButtons.map((button, index) => (
                            <Button
                                key={index}
                                href={button.href}
                                variant={button.variant}
                                size="medium"
                                icon={button.icon}
                            >
                                {button.text}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="hero__image fade-in-up">
                    <div className="hero__avatar">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
