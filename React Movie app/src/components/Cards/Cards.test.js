import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';

test('renders learn react link', () => {
  const { getByText } = render(<Cards />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
