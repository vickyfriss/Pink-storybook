import React from 'react';
import PropTypes from 'prop-types';
import './toggle.css';

export const Toggle = ({ label, checked, onChange, disabled = false, variant = 'primary' }) => (
  <label className={`toggle-label ${disabled ? 'disabled' : ''}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      disabled={disabled}
      className="toggle-input"
    />
    <span className={`toggle-slider storybook-toggle--${variant}`} />
    {label && <span className="toggle-text">{label}</span>}
  </label>
);

Toggle.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ken']),
};
