import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quality Financial Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
