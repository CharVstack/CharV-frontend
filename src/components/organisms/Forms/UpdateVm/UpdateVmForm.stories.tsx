import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { FormProvider } from 'react-hook-form';

import schema from '@openapi-spec/v1.json';

import { UpdateVmForm, useUpdateVmForm } from './UpdateVmForm';

export default {
  component: UpdateVmForm,
  decorators: [
    (Story) => {
      const { methods } = useUpdateVmForm(
        schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
          .vms[0].metadata.id
      );
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
} as ComponentMeta<typeof UpdateVmForm>;

export const Default: ComponentStoryObj<typeof UpdateVmForm> = {
  args: {
    isConfirm: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const name = canvas.getByLabelText<HTMLInputElement>('名前');
    const cpu = canvas.getByLabelText<HTMLInputElement>('CPU');
    const memory = canvas.getByLabelText<HTMLInputElement>('メモリ');
    await waitFor(() => {
      expect(name.value).toBe('ubuntu');
      expect(cpu.value).toBe('4');
      expect(memory.value).toBe('2048');
    });
    userEvent.clear(name);
    userEvent.clear(cpu);
    userEvent.clear(memory);
    userEvent.type(name, 'foo');
    userEvent.type(cpu, '1');
    userEvent.type(memory, '1');
    expect(name.value).toBe('foo');
    expect(cpu.value).toBe('1');
    expect(memory.value).toBe('1');
    userEvent.clear(name);
    userEvent.clear(cpu);
    userEvent.clear(memory);
  },
};

export const InConfirm: ComponentStoryObj<typeof UpdateVmForm> = {
  args: {
    isConfirm: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const name = canvas.getByLabelText<HTMLInputElement>('名前');
    const cpu = canvas.getByLabelText<HTMLInputElement>('CPU');
    const memory = canvas.getByLabelText<HTMLInputElement>('メモリ');
    userEvent.type(name, 'foo');
    userEvent.type(cpu, '1');
    userEvent.type(memory, '1');
    await waitFor(() => {
      expect(name.value).toBe('ubuntu');
      expect(cpu.value).toBe('4');
      expect(memory.value).toBe('2048');
    });
  },
};
