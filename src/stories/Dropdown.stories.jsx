import { useState } from "react";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    size: { control: "radio", options: ["Small", "Medium", "Large"] },
    variant: { control: "radio", options: ["Primary", "Secondary", "Ken"] },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;

// --- Default dropdown ---
export const Default = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <div style={{ width: "250px" }}> {/* width-limited like original */}
      <Dropdown
        {...args}
        value={value}
        onChange={setValue}
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
      />
    </div>
  );
};

Default.args = {
  value: "option1",
  label: "Choose an option",
  size: "Medium",
  variant: "Primary",
  disabled: false,
};

// --- Inline dropdown ---
export const Inline = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <Dropdown
      {...args}
      value={value}
      onChange={setValue}
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ]}
      inline
    />
  );
};

Inline.args = {
  value: "option1",
  label: "Choose an option",
  size: "Medium",
  variant: "Secondary",
  disabled: false,
};
