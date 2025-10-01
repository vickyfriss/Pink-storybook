import { fn } from 'storybook/test';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
    variant: 'Primary',
    buttonVariant: 'Primary',
    squaredButtons: false, // default
  },
  argTypes: {
    variant: { control: 'radio', options: ['Primary', 'Secondary', 'Ken'] },
    buttonVariant: { control: 'radio', options: ['Primary', 'Secondary', 'Ken'] },
    squaredButtons: { control: 'boolean' },
  },
};

export const LoggedIn = {
  args: {
    user: { name: 'Jane Doe' },
    variant: 'Primary',
    buttonVariant: 'Secondary',
    squaredButtons: false,
  },
};

export const LoggedOut = {
  args:{
    variant:'Primary',
    buttonVariant:"Secondary",
    squaredButtons:false,
  },
};
