import React from 'react';
import DesignTokenDemo from '../components/DesignTokenDemo';

export default {
  title: 'Design System/Design Token Demo',
  component: DesignTokenDemo,
  parameters: {
    docs: {
      description: {
        component: 'This component demonstrates how to use design tokens in your CSS. All styling uses CSS custom properties (variables) defined in the design tokens file.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => <DesignTokenDemo />,
};
