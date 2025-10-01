// Dropdown.jsx
import React from "react";
import PropTypes from "prop-types";
import { designTheme } from "../../.storybook/designTheme"; // adjust path

export const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  variant = "Primary",
  size = "Medium",
  inline = false,
  disabled = false,
  style = {},
}) => {
  // Variant styles for the select box
  const variantStyles = {
    Primary: {
      backgroundColor: designTheme.colors.Primary,      // pink background
      color: designTheme.colors.TextOnPrimary,          // white text inside dropdown
      border: `2px solid ${designTheme.colors.Primary}`, // pink border
      labelColor: designTheme.colors.Primary,           // label should be pink
    },
    Secondary: {
      backgroundColor: designTheme.colors.Secondary,    // white background
      color: designTheme.colors.SecondaryText,          // pink text inside dropdown
      border: `2px solid ${designTheme.colors.SecondaryText}`, // pink border
      labelColor: designTheme.colors.SecondaryText,     // label should be pink
    },
    Ken: {
      backgroundColor: designTheme.colors.Ken,          // blue background
      color: designTheme.colors.TextOnKen,              // white text inside dropdown
      border: `2px solid ${designTheme.colors.Ken}`,    // blue border
      labelColor: designTheme.colors.Ken,               // label should be blue
    },
  };

  // Match Button sizes
  const sizeStyles = {
    Small: { padding: "11px 20px", fontSize: "14px" },
    Medium: { padding: "12px 24px", fontSize: "16px" },
    Large: { padding: "13px 28px", fontSize: "18px" },
  };

  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size] || sizeStyles.Medium;

  return (
    <div
      style={{
        display: inline ? "inline-flex" : "flex",
        flexDirection: inline ? "row" : "column",
        alignItems: inline ? "center" : "flex-start",
        gap: label ? "0.5em" : "0",
        fontFamily: designTheme.font.family,
      }}
    >
      {label && (
        <label
          style={{
            fontWeight: designTheme.font.weight,
            fontSize: currentSize.fontSize,
            color: currentVariant.labelColor, // label always brand-coloured
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        style={{
          borderRadius: designTheme.borderRadius,
          lineHeight: designTheme.font.lineHeight,
          cursor: disabled ? "not-allowed" : "pointer",
          appearance: "none",
          ...currentVariant,
          ...currentSize,
          ...style,
        }}
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
  style: PropTypes.object,
};
