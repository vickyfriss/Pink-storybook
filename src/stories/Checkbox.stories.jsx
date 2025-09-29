import { Checkbox } from './Checkbox';

const meta = {
  component: Checkbox,
};

export default meta;

export const Default = {
  args: {
    checked: true,
    onChange: () => {},
    label: "Checkbox",
    disabled: false,
    variant: "primary"
  }
};