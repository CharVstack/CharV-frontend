import { act, renderHook } from '@testing-library/react';

import schema from '@openapi-spec/v1.json';

import { useUpdateVmForm } from './UpdateVmForm';

describe('UpdateVmForm', () => {
  describe('Validation', () => {
    const view = renderHook(() =>
      useUpdateVmForm(
        schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
          .vms[0].metadata.id
      )
    );
    const {
      methods: { setValue, handleSubmit, reset },
    } = view.result.current;
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
