import { render } from '@testing-library/react';

import { H1 } from '@components/atoms/Heading';

test('Output "NotFound"', () => {
  render(<H1>404 not found</H1>);
});
