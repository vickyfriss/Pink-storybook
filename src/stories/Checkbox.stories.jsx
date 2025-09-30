import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "ken"],
    },
    label: { control: "text" },
    disabled: { control: "boolean" },
    size: {
      control: { type: "radio" },
      options: ["Small", "Medium", "Large"],
    },
  },
  parameters: {
    layout: "centered", // ← centers the component
  },
};

export default meta;

export const Default = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={setChecked} // updates local state when clicked
    />
  );
};

Default.args = {
  checked: true,
  label: "Checkbox",
  disabled: false,
  variant: "primary",
  size: "Medium",
};
