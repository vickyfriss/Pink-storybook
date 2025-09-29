import { Toggle } from './Toggle';

const meta = {
  component: Toggle,
};

export default meta;

export const Default = {
  args: {
    checked: false,
    onChange: () => {},
    variant: "ken",
    label: "My toggle",
    disabled: false
  }
};