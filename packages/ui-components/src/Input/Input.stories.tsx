import React from 'react';
import { Meta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'UI Components/Input',
  component: Input,
} as Meta;

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Primary Input',
  primary: true,
  
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Secondary Input',
  primary: false,
};