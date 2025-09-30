import { useState } from "react";
import { Toggle } from "./Toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
};

export default meta;

export const Default = {
  args: {
    checked: false,
    variant: "ken",
    label: "My toggle",
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={setChecked} // make it interactive
      />
    );
  },
};


