import React from 'react';
import Hero from '../components/Hero';

export default {
  title: 'Design System/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A hero section component with customizable content, CTAs, and avatar. Perfect for landing pages and portfolio introductions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Person\'s name displayed in the hero',
    },
    title: {
      control: { type: 'text' },
      description: 'Professional title or role',
    },
    description: {
      control: { type: 'text' },
      description: 'Hero description text',
    },
  },
};

export const Default = {
  args: {
    name: 'Matthew Wager',
    title: 'Full Stack Developer',
    description: 'I create beautiful, functional websites and applications that solve real-world problems. Passionate about clean code and user experience.',
  },
};

export const Designer = {
  args: {
    name: 'Sarah Johnson',
    title: 'UI/UX Designer',
    description: 'Crafting intuitive user experiences with modern design principles. Passionate about accessibility and user-centered design.',
    ctaButtons: [
      {
        text: 'View Portfolio',
        href: '#portfolio',
        variant: 'primary',
        icon: <i className="fas fa-eye"></i>
      },
      {
        text: 'Get In Touch',
        href: '#contact',
        variant: 'secondary',
        icon: <i className="fas fa-envelope"></i>
      }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero section customized for a designer with different CTAs.',
      },
    },
  },
};

export const Minimal = {
  args: {
    name: 'Alex Chen',
    title: 'Product Manager',
    description: 'Building products that users love.',
    ctaButtons: [
      {
        text: 'Learn More',
        href: '#about',
        variant: 'outline',
        icon: <i className="fas fa-arrow-right"></i>
      }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal hero with single CTA button.',
      },
    },
  },
};

export const Developer = {
  args: {
    name: 'Michael Rodriguez',
    title: 'Senior Frontend Developer',
    description: 'Specializing in React, TypeScript, and modern web technologies. Building scalable applications with attention to performance and accessibility.',
    ctaButtons: [
      {
        text: 'View Projects',
        href: '#projects',
        variant: 'primary',
        icon: <i className="fas fa-code"></i>
      },
      {
        text: 'Download CV',
        href: '#resume',
        variant: 'secondary',
        icon: <i className="fas fa-download"></i>
      },
      {
        text: 'GitHub',
        href: 'https://github.com',
        variant: 'outline',
        icon: <i className="fab fa-github"></i>
      }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Developer-focused hero with multiple CTAs including external links.',
      },
    },
  },
};
