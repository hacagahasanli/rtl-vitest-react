import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';
0
test('should button starts with correct label and color', () => {
  //render the App
  render(<App />);

  //find the button
  const buttonElement = screen.getByRole('button', { name: /blue/i });

  //check the initial color
  expect(buttonElement).toHaveClass('red');
});

test('should button has correct label and color after click', () => {
  //render the App
  render(<App />);

  //find the button
  const buttonElement = screen.getByRole('button', { name: /blue/i });

  //check the initial color
  expect(buttonElement).toHaveClass('red');

  //click the button
  fireEvent.click(buttonElement);

  //check the button text
  expect(buttonElement).toHaveTextContent(/red/i);

  //check the button color
  expect(buttonElement).toHaveClass('blue');
});

test('checkbox flow', () => {
  render(<App />);

  //find elements
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkboxElement = screen.getByRole('checkbox', { name: /disable button/i });

  //check initial conditions
  expect(buttonElement).toBeEnabled()
  expect(checkboxElement).not.toBeChecked()
});
