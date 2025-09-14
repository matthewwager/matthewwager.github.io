import React from 'react';
import Button from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes. Perfect for CTAs, actions, and navigation throughout the portfolio.',
      },
    },
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button should take full width',
    },
    children: {
      control: { type: 'text' },
      description: 'Button text content',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

export const WithIcon = {
  args: {
    variant: 'primary',
    children: 'Download',
    icon: <i className="fas fa-download"></i>,
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Interactive example showing all variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.',
      },
    },
  },
};

// Interactive example showing all sizes
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="large">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.',
      },
    },
  },
};