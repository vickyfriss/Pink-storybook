// Page.stories.jsx
import { Page } from './Page';

export default {
  title: 'Components/Page',
  component: Page,
  tags: ['autodocs'],
  argTypes: {
    headerVariant: {
      control: 'radio',
      options: ['Primary', 'Secondary', 'Ken'],
    },
    buttonVariant: {
      control: 'radio',
      options: ['Primary', 'Secondary', 'Ken'],
    },
    squaredButtons: {
      control: 'boolean',
    },
  },
};

// Default story (Logged out)
export const LoggedOut = {
  args:{
    headerVariant:'Primary',
    buttonVariant:"Secondary",
    squaredButtons:false,
  },
};

// Logged in
export const LoggedIn = {
  args:{
    headerVariant:"Primary",
    buttonVariant:'Secondary',
    squaredButtons:true,
  },
};
