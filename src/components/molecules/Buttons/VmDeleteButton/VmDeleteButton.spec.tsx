import { within } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './VmDeleteButton.stories';

describe('VmControlMenu', () => {
  describe('Static', () => {
    const { Default, Disabled } = composeStories(stories);

    test('ボタンが有効', () => {
      const { container } = render(<Default />);
      const canvas = within(container);
      const button = canvas.getByText<HTMLButtonElement>('DELETE');
      expect(button.disabled).toBeFalsy();
    });
    test('ボタンが無効', () => {
      const { container } = render(<Disabled />);
      const canvas = within(container);
      const button = canvas.getByText<HTMLButtonElement>('DELETE');
      expect(button.disabled).toBeTruthy();
    });
  });
});
