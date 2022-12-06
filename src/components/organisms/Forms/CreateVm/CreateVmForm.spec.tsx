import { composeStories } from '@storybook/testing-react';
import { render, act, renderHook } from '@testing-library/react';

import { useCreateVmForm } from '@components/organisms/Forms';

import * as stories from './CreateVmForm.stories';

describe('CreateVmForm', () => {
  describe('Interaction', () => {
    const { Default, InConfirm } = composeStories(stories);

    test('フォームに文字を入力できる', async () => {
      const { container } = render(<Default />);
      await Default.play({ canvasElement: container });
    });

    test('フォームに文字を入力できない', async () => {
      const { container } = render(<InConfirm />);
      await InConfirm.play({ canvasElement: container });
    });
  });

  describe('Validation', () => {
    const view = renderHook(() => useCreateVmForm());
    const { setValue, handleSubmit, reset } = view.result.current;
    test('Valid', async () =>
      act(async () => {
        const mockSubmit = vitest.fn();
        const mockErrorHandle = vitest.fn();
        reset();
        setValue('name', 'foo');
        setValue('cpu', 1);
        setValue('memory', 1);
        await handleSubmit(mockSubmit, mockErrorHandle)();
        expect(mockSubmit).toBeCalled();
        expect(mockErrorHandle).not.toBeCalled();
      }));
    test('Invalid', async () =>
      act(async () => {
        const mockSubmit = vitest.fn();
        const mockErrorHandle = vitest.fn();
        reset();
        setValue('name', '');
        setValue('cpu', 0);
        setValue('memory', 0);
        await handleSubmit(mockSubmit, mockErrorHandle)();
        expect(mockSubmit).not.toBeCalled();
        expect(mockErrorHandle).toBeCalled();
      }));
  });
});
