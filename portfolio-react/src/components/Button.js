import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary', // primary, secondary, outline, ghost
    size = 'medium', // small, medium, large
    href = null,
    onClick = null,
    disabled = false,
    className = '',
    icon = null,
    fullWidth = false,
    ...props
}) => {
    const baseClass = 'button';
    const variantClass = `button--${variant}`;
    const sizeClass = `button--${size}`;
    const fullWidthClass = fullWidth ? 'button--full-width' : '';
    
    const buttonClasses = `${baseClass} ${variantClass} ${sizeClass} ${fullWidthClass} ${className}`.trim();

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        
        if (onClick) {
            onClick(e);
        }
    };

    const content = (
        <>
            {icon && <span className="button__icon">{icon}</span>}
            <span className="button__text">{children}</span>
        </>
    );

    // Render as link if href is provided
    if (href && !disabled) {
        return (
            <a 
                href={href}
                className={buttonClasses}
                onClick={handleClick}
                {...props}
            >
                {content}
            </a>
        );
    }

    // Render as button
    return (
        <button
            type="button"
            className={buttonClasses}
            onClick={handleClick}
            disabled={disabled}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;
