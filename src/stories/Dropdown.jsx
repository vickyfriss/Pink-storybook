// Dropdown.jsx
import React from "react";
import PropTypes from "prop-types";
import "./dropdown.css";

export const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  variant = "Primary",
  size = "Medium",
  inline = false,
  disabled = false,
}) => {
  const wrapperClasses = [
    "dropdown-wrapper",
    `storybook-dropdown--${variant}`,
    `storybook-dropdown--${size}`,
    inline ? "dropdown-inline" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {label && <label className="dropdown-label">{label}</label>}
      <select
        className="dropdown-select"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["Primary", "Secondary", "Ken"]),
  size: PropTypes.oneOf(["Small", "Medium", "Large"]),
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
};
