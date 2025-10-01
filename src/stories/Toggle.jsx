// Toggle.jsx
import React from "react";
import PropTypes from "prop-types";
import { designTheme } from "../../.storybook/designTheme";

export const Toggle = ({
  label,
  checked,
  onChange,
  variant = "Primary",
  disabled = false,
  size = "Medium", // Small, Medium, Large
}) => {
  // Map variant + disabled to colors
  const getColors = (variant, disabled) => {
    if (disabled) {
      return {
        track: "#EEE",
        thumb: "#CCC",
        text: "#999",
        border: "#CCC",
      };
    }

    switch (variant) {
      case "Primary":
        return {
          track: designTheme.colors.Primary,       // pink track
          thumb: "#FFF",                            // white thumb
          text: designTheme.colors.Primary,        // pink text
          border: designTheme.colors.Primary,      // border same as track
        };
      case "Secondary":
        return {
          track: designTheme.colors.Secondary,     // white track
          thumb: designTheme.colors.Primary,       // pink thumb
          text: designTheme.colors.Primary,        // pink text
          border: designTheme.colors.Primary,      // pink border
        };
      case "Ken":
        return {
          track: designTheme.colors.Ken,           // blueish track
          thumb: "#FFF",
          text: designTheme.colors.Ken,
          border: designTheme.colors.Ken,
        };
      default:
        return { track: "#EEE", thumb: "#CCC", text: "#333", border: "#CCC" };
    }
  };

  const colors = getColors(variant, disabled);

  // Size mapping
  const sizes = {
    Small: { width: 36, height: 16, thumb: 12, fontSize: 12 },
    Medium: { width: 48, height: 24, thumb: 20, fontSize: 14 },
    Large: { width: 64, height: 32, thumb: 28, fontSize: 16 },
  };

  const sz = sizes[size] || sizes.Medium;

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: sz.fontSize,
        gap: "8px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: sz.width,
          height: sz.height,
          backgroundColor: colors.track,
          border: `1px solid ${colors.border}`,
          borderRadius: sz.height / 2,
          transition: "background-color 0.2s, border-color 0.2s",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 1,
            left: checked ? sz.width - sz.thumb - 1 : 1,
            width: sz.thumb,
            height: sz.thumb,
            backgroundColor: colors.thumb,
            borderRadius: "50%",
            transition: "left 0.2s",
          }}
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          style={{
            opacity: 0,
            width: sz.width,
            height: sz.height,
            position: "absolute",
            margin: 0,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        />
      </div>
      {label && <span style={{ color: colors.text }}>{label}</span>}
    </label>
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["Primary", "Secondary", "Ken"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["Small", "Medium", "Large"]),
};
