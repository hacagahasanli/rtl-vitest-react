import { render, screen } from '@testing-library/react';

import App from './App';

test('should button starts with correct color', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /blue/i });
  expect(buttonElement).toHaveClass('red');
});

test('should button has correct color after click', () => {});

test('should button has correct text after click', () => {});
