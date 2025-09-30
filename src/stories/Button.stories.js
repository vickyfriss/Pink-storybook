import { fn } from 'storybook/test';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    variant: 'Primary',
    label: 'Button',
    size: 'Medium',
  },
};

// Squared borders (no border-radius)
export const Squared = {
  args: {
    variant: 'Primary',
    label: 'Squared Button',
    size: 'Medium',
    style: {
      borderRadius: 0, // 👈 this makes the borders square
    },
  },
};
