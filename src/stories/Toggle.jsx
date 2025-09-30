import React from "react";
import PropTypes from "prop-types";
import "./toggle.css";

export const Toggle = ({ label, checked, onChange, variant = "primary", disabled }) => {
  return (
    <label className={`toggle-label ${disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        className="toggle-input"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className={`toggle-slider storybook-toggle--${variant}`} />
      <span
        className="toggle-text"
        style={{
          color: checked
            ? variant === "primary"
              ? "#FF69B4"
              : variant === "ken"
              ? "#0D98BA"
              : "#FF69B4"
            : "#333",
        }}
      >
        {label}
      </span>
    </label>
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "ken"]),
  disabled: PropTypes.bool,
};
