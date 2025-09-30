// Slider.jsx
import React from "react";
import PropTypes from "prop-types";
import "./slider.css";

const Slider = ({ label, value, onChange, variant = "Primary", size = "Medium", inline = false }) => {
  const colors = {
    Primary: "#FF69B4",
    Secondary: "#FF69B4",
    Ken: "#0D98BA",
  };

  const sizes = {
    Small: 8,
    Medium: 12,
    Large: 16,
  };

  return (
    <div className={`slider-wrapper ${inline ? "slider-inline" : ""}`} style={{ width: "100%" }}>
      {label && inline && (
        <span className="slider-label-inline" style={{ color: colors[variant], marginRight: "10px" }}>
          {label}
        </span>
      )}
      {!inline && label && (
        <label className="slider-label" style={{ color: colors[variant] }}>
          {label}
        </label>
      )}
      <div className="slider-container" style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <input
          type="range"
          className={`slider slider-${size}`}
          value={value}
          onChange={(e) => onChange?.(parseInt(e.target.value))}
          style={{
            accentColor: colors[variant],
            height: sizes[size],
            flexGrow: 1,
          }}
        />
        <span className="slider-value" style={{ marginLeft: "10px", color: colors[variant], fontWeight: 600 }}>
          {value}
        </span>
      </div>
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

export default Slider;
