import React from "react";
import PropTypes from "prop-types";
import "./toggle.css";

export const Toggle = ({
  label,
  checked,
  onChange,
  variant = "Primary",
  disabled = false,
  size = "Medium", // Small, Medium, Large
}) => {
  const getTextColor = () => {
    if (disabled) return "#999"; // dimmed when disabled

    switch (variant) {
      case "Primary":
        return "#FF69B4"; // pink
      case "Secondary":
        return "#FF69B4"; // pink
      case "Ken":
        return "#0D98BA"; // blue
      default:
        return "#333";
    }
  };

  return (
    <label
      className={`toggle-label ${disabled ? "disabled" : ""} storybook-toggle--${size}`}
    >
      <input
        type="checkbox"
        className="toggle-input"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className={`toggle-slider storybook-toggle--${variant}`} />
      {label && (
        <span className="toggle-text" style={{ color: getTextColor() }}>
          {label}
        </span>
      )}
    </label>
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["Primary", "Secondary", "Ken"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["Small", "Medium", "Large"]),
};
