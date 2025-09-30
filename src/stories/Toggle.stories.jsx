import { useState } from "react";
import { Toggle } from "./Toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered", // ← centers the component
  },
};

export default meta;

export const Default = {
  args:{
    checked:false,
    variant:"Primary",
    label:"My toggle",
    disabled:false,
    size:"Medium"
  },
  render:(args) => {
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
