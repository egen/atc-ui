import React from 'react';
import { render, screen } from '@testing-library/react';
import Cat from './Cat';

test('renders learn react link', () => {
  render(<Cat />);
  console.log(screen);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
