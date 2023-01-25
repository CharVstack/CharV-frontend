import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import * as stories from './VmActionMenu.stories';

describe('VmControlMenu', () => {
  describe('Interaction', () => {
    const { Open } = composeStories(stories);

    test('メニュー展開', async () => {
      const { container } = render(
        <MemoryRouter>
          <Open />
        </MemoryRouter>
      );
      await Open.play({ canvasElement: container });
    });
  });
});
