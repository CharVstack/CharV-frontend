import { render, screen } from '@testing-library/react';

import { Home } from './home';

test('Output "Home"', () => {
  render(<Home />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});
