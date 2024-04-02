import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

let buttonElement, checkboxElement;

beforeEach(() => {
  //render the App
  render(<App />);

  //find the button elements
  buttonElement = screen.getByRole('button', { name: /blue/i });
  checkboxElement = screen.getByRole('checkbox', { name: /disable button/i });
});

test('should button starts with correct label and color', () => {
  //check the initial color
  expect(buttonElement).toHaveClass('red');
});

test('should button has correct label and color after click', () => {
  //check the initial color
  expect(buttonElement).toHaveClass('red');

  //click the button
  fireEvent.click(buttonElement);

  //check the button text
  expect(buttonElement).toHaveTextContent(/red/i);

  //check the button color
  expect(buttonElement).toHaveClass('blue');
});

test('should correctly add checkbox flow', () => {
  render(<App />);

  //check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});

test('should button be disabled when checkbox is checked', () => {
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();

});
