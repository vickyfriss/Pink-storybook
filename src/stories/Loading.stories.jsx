// Loading.stories.jsx
import React from 'react';
import './loading.css'; // Make sure you have styles

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
      {label && (
        <span
          style={{
            color: colors[variant],
            fontSize: sizes[size],
            marginLeft: '8px',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    variant: { control: 'radio', options: ['Primary', 'Secondary', 'Ken'] },
    size: { control: 'radio', options: ['Small', 'Medium', 'Large'] },
    label: { control: 'text' },
  },
};

// Default story (with label)
export const Default = (args) => <Loading {...args} />;
Default.args = {
  variant: 'Primary',
  size: 'Medium',
  label: 'Loading...',
};

// Icon-only story (without label, double size)
export const IconOnly = (args) => {
  // Map original sizes to double
  const sizeMultiplier = {
    Small: '36px',   // 12px * 3
    Medium: '48px',  // 16px * 3
    Large: '60px',   // 20px * 3
  };

  return (
    <div className="loading-wrapper">
      <div
        className="loading-spinner"
        style={{
          borderTopColor: args.variant === 'Primary' ? '#FF69B4' :
                         args.variant === 'Secondary' ? '#FF69B4' :
                         '#0D98BA',
          width: sizeMultiplier[args.size],
          height: sizeMultiplier[args.size],
        }}
      />
    </div>
  );
};

IconOnly.args = {
  variant: 'Primary',
  size: 'Medium',
};
