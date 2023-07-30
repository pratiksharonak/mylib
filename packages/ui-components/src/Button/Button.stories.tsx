import React from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'UI Components/Button',
  component: Button,
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  primary: true,
  size: 'large',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Secondary Button',
//   primary: false,
// };