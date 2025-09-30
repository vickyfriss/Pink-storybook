// Slider.stories.jsx
import React, { useState } from "react";
import Slider from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    variant: { control: "radio", options: ["Primary", "Secondary", "Ken"] },
    size: { control: "radio", options: ["Small", "Medium", "Large"] },
    value: { control: "number" },
    label: { control: "text" },
    inline: { control: "boolean" },
  },
};

// Default story (label above)
export const Default = (args) => {
  const [value, setValue] = useState(args.value || 50);
  return (
    <div style={{ width: "300px" }}>
      <Slider {...args} value={value} onChange={setValue} />
    </div>
  );
};

Default.args = {
  variant: "Primary",
  size: "Medium",
  value: 50,
  label: "Volume",
  inline: false,
};

// Inline story (label on the left)
export const Inline = (args) => {
  const [value, setValue] = useState(args.value || 50);
  return (
    <div style={{ width: "300px" }}>
      <Slider {...args} value={value} onChange={setValue} inline />
    </div>
  );
};

Inline.args = {
  variant: "Primary",
  size: "Medium",
  value: 50,
  label: "Volume",
};
