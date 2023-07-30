import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button renders correctly', () => {
  render(<Button onClick={() => {}} label="Click Me" />);
  const buttonElement = screen.getByText('Click Me');
  expect(buttonElement).toBeInTheDocument();
});