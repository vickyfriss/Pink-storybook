// Slider.jsx
import React from "react";
import PropTypes from "prop-types";
import { designTheme } from "../../.storybook/designTheme"; // adjust path

export const Slider = ({ label, value, onChange, variant = "Primary", size = "Medium", inline = false }) => {
  const colors = {
    Primary: designTheme.colors.Primary,
    Secondary: designTheme.colors.Ken, // for border of secondary track
    Ken: designTheme.colors.Ken,
  };

  const trackFills = {
    Primary: designTheme.colors.Secondary,  // e.g., white
    Secondary: designTheme.colors.Secondary,
    Ken: designTheme.colors.Secondary,
  };

  const sizes = {
    Small: 8,
    Medium: 12,
    Large: 16,
  };

  const borderColor = {
    Primary: designTheme.colors.Primary,
    Secondary: designTheme.colors.Primary,
    Ken: designTheme.colors.Ken,
  };

  return (
    <div style={{ display: inline ? "flex" : "block", alignItems: "center", width: "100%" }}>
      {label && (
        <span
          style={{
            color: colors[variant],
            marginRight: inline ? 10 : 0,
            display: inline ? "inline-block" : "block",
            marginBottom: inline ? 0 : 5,
          }}
        >
          {label}
        </span>
      )}
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{
          width: "100%",
          height: sizes[size],
          accentColor: colors[variant], // thumb color / active part
          backgroundColor: trackFills[variant], // rest of track
          border: `1px solid ${borderColor[variant]}`,
          borderRadius: designTheme.borderRadius,
        }}
      />
      <span style={{ marginLeft: 10, color: colors[variant], fontWeight: 600 }}>{value}</span>
    </div>
  );
};

Slider.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["Primary", "Secondary", "Ken"]),
  size: PropTypes.oneOf(["Small", "Medium", "Large"]),
  inline: PropTypes.bool,
};

// at the bottom
export default Slider; // ✅ now it’s a default export
