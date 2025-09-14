import React from 'react';
import './DesignTokenDemo.css';

const DesignTokenDemo = () => {
  return (
    <div className="design-token-demo">
      <h1>Design Token Demo</h1>
      <p>This component demonstrates how to use design tokens in your CSS.</p>
      
      <div className="demo-section">
        <h2>Typography Examples</h2>
        <p className="body-text">
          This paragraph uses the body-text class which references design tokens for font family, size, and color.
        </p>
        <p className="small-text">
          This is small text using the small-text class.
        </p>
      </div>
      
      <div className="demo-section">
        <h2>Color Examples</h2>
        <div className="color-examples">
          <div className="color-box primary">Primary</div>
          <div className="color-box secondary">Secondary</div>
          <div className="color-box accent">Accent</div>
        </div>
      </div>
      
      <div className="demo-section">
        <h2>Spacing Examples</h2>
        <div className="spacing-examples">
          <div className="spacing-demo small">Small spacing</div>
          <div className="spacing-demo medium">Medium spacing</div>
          <div className="spacing-demo large">Large spacing</div>
        </div>
      </div>
    </div>
  );
};

export default DesignTokenDemo;
