import { useState } from "react";
import { Toggle } from "./Toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered", // centers the component
  },
  argTypes: {
    variant: { control: "radio", options: ["Primary", "Secondary", "Ken"] },
    size: { control: "radio", options: ["Small", "Medium", "Large"] },
    checked: { control: "boolean" },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Default = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

Default.args = {
  checked: false,
  variant: "Primary",
  label: "My toggle",
  disabled: false,
  size: "Medium",
};
