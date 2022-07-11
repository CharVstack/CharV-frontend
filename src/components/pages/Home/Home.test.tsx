import { render, screen } from '@testing-library/react';

import { Home } from './Home';

test('Output "Home"', () => {
  render(<Home />);
  expect(screen.getByText('Instance')).toBeInTheDocument();
});
