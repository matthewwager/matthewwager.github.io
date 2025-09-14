import React from 'react';
import './DesignTokens.css';

// Design tokens showcase
export default {
  title: 'Design System/Design Tokens',
  parameters: {
    docs: {
      description: {
        component: 'Design tokens define the visual design attributes of your design system. These are the building blocks that ensure consistency across all components.',
      },
    },
  },
  tags: ['autodocs'],
};

// Color palette
export const Colors = {
  render: () => (
    <div className="colors-showcase">
      <h2>Color Palette</h2>
      <div className="colors-grid">
        <div className="color-group">
          <h3>Primary Colors</h3>
          <div className="color-list">
            <div className="color-item">
              <div className="color-swatch primary"></div>
              <div className="color-info">
                <strong>Primary</strong><br />
                var(--color-primary)
              </div>
            </div>
            <div className="color-item">
              <div className="color-swatch primary-dark"></div>
              <div className="color-info">
                <strong>Primary Dark</strong><br />
                var(--color-primary-dark)
              </div>
            </div>
            <div className="color-item">
              <div className="color-swatch primary-light"></div>
              <div className="color-info">
                <strong>Primary Light</strong><br />
                var(--color-primary-light)
              </div>
            </div>
          </div>
        </div>
        
        <div className="color-group">
          <h3>Text Colors</h3>
          <div className="color-list">
            <div className="color-item">
              <div className="color-swatch text-primary"></div>
              <div className="color-info">
                <strong>Text Primary</strong><br />
                var(--color-text-primary)
              </div>
            </div>
            <div className="color-item">
              <div className="color-swatch text-secondary"></div>
              <div className="color-info">
                <strong>Text Secondary</strong><br />
                var(--color-text-secondary)
              </div>
            </div>
            <div className="color-item">
              <div className="color-swatch text-light"></div>
              <div className="color-info">
                <strong>Text Light</strong><br />
                var(--color-text-light)
              </div>
            </div>
          </div>
        </div>

        <div className="color-group">
          <h3>Background Colors</h3>
          <div className="color-list">
            <div className="color-item">
              <div className="color-swatch bg-primary"></div>
              <div className="color-info">
                <strong>Background Primary</strong><br />
                var(--color-bg-primary)
              </div>
            </div>
            <div className="color-item">
              <div className="color-swatch bg-secondary"></div>
              <div className="color-info">
                <strong>Background Secondary</strong><br />
                var(--color-bg-secondary)
              </div>
            </div>
            <div className="color-item">
              <div className="color-swatch bg-accent"></div>
              <div className="color-info">
                <strong>Background Accent</strong><br />
                var(--color-bg-accent)
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  ),
};

// Typography
export const Typography = {
  render: () => (
    <div className="typography-showcase">
      <h2>Typography Scale</h2>
      <div className="typography-examples">
        <div>
          <h1 className="gradient-text">
            Heading 1 - 3rem (48px)
          </h1>
          <p className="description">Used for main page titles</p>
        </div>
        
        <div>
          <h2>
            Heading 2 - 2.25rem (36px)
          </h2>
          <p className="description">Used for section titles</p>
        </div>
        
        <div>
          <h3>
            Heading 3 - 1.875rem (30px)
          </h3>
          <p className="description">Used for component titles</p>
        </div>
        
        <div>
          <h4>
            Heading 4 - 1.5rem (24px)
          </h4>
          <p className="description">Used for subsections</p>
        </div>
        
        <div>
          <h5>
            Heading 5 - 1.25rem (20px)
          </h5>
          <p className="description">Used for card titles</p>
        </div>
        
        <div>
          <h6>
            Heading 6 - 1.125rem (18px)
          </h6>
          <p className="description">Used for small headings</p>
        </div>
        
        <div>
          <p className="body-text">
            Body Text - 1rem (16px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="description">Used for descriptions and content</p>
        </div>
        
        <div>
          <p className="small-text">
            Small Text - 0.875rem (14px) - Used for captions and metadata
          </p>
          <p className="description">Used for captions and metadata</p>
        </div>
      </div>
    </div>
  ),
};

// Spacing
export const Spacing = {
  render: () => (
    <div className="spacing-showcase">
      <h2>Spacing Scale</h2>
      <div className="spacing-examples">
        <div className="spacing-item">
          <div className="spacing-visual small"></div>
          <div className="spacing-info">
            <strong>4px (--spacing-1)</strong> - Extra tight spacing
          </div>
        </div>
        <div className="spacing-item">
          <div className="spacing-visual medium"></div>
          <div className="spacing-info">
            <strong>8px (--spacing-2)</strong> - Tight spacing
          </div>
        </div>
        <div className="spacing-item">
          <div className="spacing-visual base"></div>
          <div className="spacing-info">
            <strong>16px (--spacing-4)</strong> - Base spacing
          </div>
        </div>
        <div className="spacing-item">
          <div className="spacing-visual large"></div>
          <div className="spacing-info">
            <strong>24px (--spacing-6)</strong> - Medium spacing
          </div>
        </div>
        <div className="spacing-item">
          <div className="spacing-visual xl"></div>
          <div className="spacing-info">
            <strong>32px (--spacing-8)</strong> - Large spacing
          </div>
        </div>
        <div className="spacing-item">
          <div className="spacing-visual xxl"></div>
          <div className="spacing-info">
            <strong>48px (--spacing-12)</strong> - Section spacing
          </div>
        </div>
        <div className="spacing-item">
          <div className="spacing-visual hero"></div>
          <div className="spacing-info">
            <strong>64px (--spacing-16)</strong> - Page spacing
          </div>
        </div>
      </div>
    </div>
  ),
};

// Shadows
export const Shadows = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h2>Shadow System</h2>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
        <div style={{ padding: '2rem', backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <h3>Default Shadow</h3>
          <p>Used for cards and components</p>
        </div>
        <div style={{ padding: '2rem', backgroundColor: 'white', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <h3>Large Shadow</h3>
          <p>Used for elevated elements</p>
        </div>
      </div>
    </div>
  ),
};
