import { render, screen } from '@testing-library/react';
import App from './App';
// try solve the canvas issue in test
// import { setupJestCanvasMock } from 'jest-canvas-mock';

test('renders learn react link', () => {
  // try solve the canvas issue in test
  // jest.resetAllMocks();
  // setupJestCanvasMock();
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
