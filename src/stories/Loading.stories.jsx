// Loading.stories.jsx
import React, { useState } from 'react';
import './loading.css'; // we’ll style it in a moment

const Loading = ({ variant = 'Primary', size = 'Medium', label = 'Loading...' }) => {
  const colors = {
    Primary: '#FF69B4',
    Secondary: '#FF69B4',
    Ken: '#0D98BA',
  };

  const sizes = {
    Small: '12px',
    Medium: '16px',
    Large: '20px',
  };

  return (
    <div className={`loading-wrapper loading-${size}`}>
      <div
        className="loading-spinner"
        style={{ borderTopColor: colors[variant] }}
      />
      <span style={{ color: colors[variant], fontSize: sizes[size], marginLeft: '8px' }}>
        {label}
      </span>
    </div>
  );
};

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['Primary', 'Secondary', 'Ken'],
    },
    size: {
      control: 'radio',
      options: ['Small', 'Medium', 'Large'],
    },
    label: { control: 'text' },
  },
};

export const Default = (args) => <Loading {...args} />;

Default.args = {
  variant: 'Primary',
  size: 'Medium',
  label: 'Loading...',
};
