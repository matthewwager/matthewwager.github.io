import React from 'react';
import Navigation from '../components/Navigation';

export default {
  title: 'Design System/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navigation component with mobile menu functionality. Supports multiple variants and customizable links.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'transparent'],
      description: 'Visual style variant of the navigation',
    },
    brandName: {
      control: { type: 'text' },
      description: 'Brand/logo text displayed in navigation',
    },
  },
};

export const Default = {
  args: {
    variant: 'default',
    brandName: 'Matthew Wager',
  },
};

export const Minimal = {
  args: {
    variant: 'minimal',
    brandName: 'Portfolio',
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal variant with transparent background, perfect for hero sections.',
      },
    },
  },
};

export const Transparent = {
  args: {
    variant: 'transparent',
    brandName: 'Design System',
  },
  parameters: {
    docs: {
      description: {
        story: 'Transparent variant with white text, ideal for dark backgrounds.',
      },
    },
  },
};

export const CustomLinks = {
  args: {
    variant: 'default',
    brandName: 'Custom Brand',
    links: [
      { href: '#home', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with custom links array.',
      },
    },
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <div style={{ height: '100px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem' }}>
        <Navigation variant="transparent" brandName="Transparent Nav" />
      </div>
      <div style={{ height: '100px', background: '#f8fafc', padding: '2rem' }}>
        <Navigation variant="minimal" brandName="Minimal Nav" />
      </div>
      <div style={{ height: '100px', background: 'white', padding: '2rem' }}>
        <Navigation variant="default" brandName="Default Nav" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All navigation variants displayed in different background contexts.',
      },
    },
  },
};
