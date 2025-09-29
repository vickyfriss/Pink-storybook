import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'Primary',
  backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {
  // dynamically set class based on variant
  const mode = `storybook-button--${variant.toLowerCase()}`; 
  // will be 'storybook-button--primary', 'storybook-button--secondary', or 'storybook-button--ken'

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Variant of the button */
  variant: PropTypes.oneOf(['Primary', 'Secondary', 'Ken']),
  /** Optional background color override */
  backgroundColor: PropTypes.string,
  /** Size of the button */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button label */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
