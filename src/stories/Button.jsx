import React from 'react';
import PropTypes from 'prop-types';
import { designTheme } from '../../.storybook/designTheme'; // adjust path

export const Button = ({ variant = 'Primary', size = 'Medium', label, style = {}, ...props }) => {
  // Map variant to theme colors and borders
  const variantStyles = {
    Primary: {
      backgroundColor: designTheme.colors.Primary,
      color: designTheme.colors.TextOnPrimary,
      boxShadow: 'none',
      border: `1px solid ${designTheme.colors.Primary}`, // use theme color
    },
    Secondary: {
      backgroundColor: designTheme.colors.Secondary,
      color: designTheme.colors.SecondaryText,
      boxShadow: `inset 0 0 0 1px ${designTheme.colors.BorderShadow}`,
      border: `1px solid ${designTheme.colors.SecondaryText}`, // pink border
    },
    Ken: {
      backgroundColor: designTheme.colors.Ken,
      color: designTheme.colors.TextOnKen,
      boxShadow: `inset 0 0 0 1px ${designTheme.colors.BorderShadow}`,
      border: `1px solid ${designTheme.colors.Ken}`, // blue border
    },
  };

  // Map size to theme sizes
  const sizeStyles = designTheme.sizes[size] || designTheme.sizes.Medium;

  return (
    <button
      style={{
        borderRadius: designTheme.borderRadius,
        fontFamily: designTheme.font.family,
        fontWeight: designTheme.font.weight,
        lineHeight: designTheme.font.lineHeight,
        cursor: 'pointer',
        ...variantStyles[variant],
        ...sizeStyles,
        ...style, // allow overrides from story
      }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['Primary', 'Secondary', 'Ken']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
