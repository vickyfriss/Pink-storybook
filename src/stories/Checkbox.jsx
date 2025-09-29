// Checkbox.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  variant = 'primary', // 'primary' | 'secondary' | 'ken'
}) => {
  const classes = [
    'checkbox-label',
    disabled ? 'disabled' : '',
    `storybook-checkbox--${variant}`,
  ].filter(Boolean).join(' ');

  return (
    <label className={classes} data-variant={variant}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="checkbox-input"
      />
      <span className="checkbox-custom" />
      {label && <span className="checkbox-text">{label}</span>}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ken']),
};
