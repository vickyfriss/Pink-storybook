// Checkbox.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { designTheme } from '../../.storybook/designTheme'; // adjust path

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  variant = 'Primary', // 'Primary' | 'Secondary' | 'Ken'
  size = 'Medium',     // 'Small' | 'Medium' | 'Large'
  style = {},
  ...props
}) => {
  // Variant styles from theme
  const variantStyles = {
    Primary: {
      borderColor: designTheme.colors.Primary,
      fillColor: checked ? designTheme.colors.Primary : 'transparent',
      textColor: designTheme.colors.Primary,
      checkColor: designTheme.colors.TextOnPrimary,
    },
    Secondary: {
      borderColor: designTheme.colors.SecondaryText,
      fillColor: checked ? designTheme.colors.Secondary : 'transparent', // white fill
      textColor: designTheme.colors.SecondaryText,
      checkColor: designTheme.colors.SecondaryText,
    },
    Ken: {
      borderColor: designTheme.colors.Ken,
      fillColor: checked ? designTheme.colors.Ken : 'transparent',
      textColor: designTheme.colors.Ken,
      checkColor: designTheme.colors.TextOnKen,
    },
  };

  // Size styles from theme
  const sizeStyles = {
    Small: { width: '16px', height: '16px', fontSize: '14px' },
    Medium: { width: '20px', height: '20px', fontSize: '16px' },
    Large: { width: '24px', height: '24px', fontSize: '18px' },
  };

  const current = variantStyles[variant];
  const currentSize = sizeStyles[size] || sizeStyles.Medium;

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        gap: '0.5em',
        color: current.textColor, // text color
        fontSize: currentSize.fontSize, // label font size
        ...style,
      }}
      {...props}
    >
      <span
        style={{
          display: 'inline-block',
          boxSizing: 'border-box',
          border: `2px solid ${current.borderColor}`,
          backgroundColor: current.fillColor,
          borderRadius: '4px',
          width: currentSize.width,
          height: currentSize.height,
          position: 'relative',
        }}
      >
        {checked && (
          <svg
            viewBox="0 0 24 24"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '70%',
              height: '70%',
              transform: 'translate(-50%, -50%)',
              fill: 'currentColor',
              color: current.checkColor,
            }}
          >
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        )}
      </span>
      {label && <span style={{ userSelect: 'none' }}>{label}</span>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        style={{ display: 'none' }}
      />
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['Primary', 'Secondary', 'Ken']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  style: PropTypes.object,
};
