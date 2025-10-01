import React from 'react';
import PropTypes from 'prop-types';
import { designTheme } from '../../.storybook/designTheme';

export const Loading = ({ variant = 'Primary', size = 'Medium', label = 'Loading...' }) => {
  const colors = {
    Primary: designTheme.colors.Primary,
    Secondary: designTheme.colors.Primary,
    Ken: designTheme.colors.Ken,
  };

  const fontSizes = {
    Small: designTheme.sizes.Small.fontSize,
    Medium: designTheme.sizes.Medium.fontSize,
    Large: designTheme.sizes.Large.fontSize,
  };

  const spinnerSizes = {
    Small: '12px',
    Medium: '16px',
    Large: '20px',
  };

  const spinnerStyle = {
    width: spinnerSizes[size],
    height: spinnerSizes[size],
    border: `2px solid ${colors[variant]}`,
    borderTopColor: colors[variant],
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyle} />
      {label && (
        <span
          style={{
            color: colors[variant],
            fontSize: fontSizes[size],
            marginLeft: '8px',
            fontFamily: designTheme.font.family,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

Loading.propTypes = {
  variant: PropTypes.oneOf(['Primary', 'Secondary', 'Ken']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  label: PropTypes.string,
};
