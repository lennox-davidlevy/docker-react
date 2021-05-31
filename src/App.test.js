import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
describe('Splash page should', () => {
  it('Render the icon', () => {
    expect(true).toBe(true);
  });
  it.todo('should do this');
  it.todo('should do that');
  it.todo('should do the other');
});
