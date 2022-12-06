import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Tabs.stories';

describe('Tabs', () => {
  const { Default } = composeStories(stories);

  test('タブボタンをクリックするとタブが遷移する', async () => {
    const { container } = render(<Default />);
    await Default.play({ canvasElement: container });
  });
});
