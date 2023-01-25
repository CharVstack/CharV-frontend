import { within } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './VmControlMenu.stories';

describe('VmControlMenu', () => {
  const { Default, Disabled, Open } = composeStories(stories);
  describe('Static', () => {
    test('ボタンが有効', () => {
      const { container } = render(<Default />);
      const canvas = within(container);
      const button = canvas.getByText<HTMLButtonElement>('Actions');
      expect(button.disabled).toBeFalsy();
    });
    test('ボタンが無効', () => {
      const { container } = render(<Disabled />);
      const canvas = within(container);
      const button = canvas.getByText<HTMLButtonElement>('Actions');
      expect(button.disabled).toBeTruthy();
    });
  });
  describe('Interaction', () => {
    test('メニュー展開', async () => {
      const { container } = render(<Open />);
      await Open.play({ canvasElement: container });
    });
  });
});
