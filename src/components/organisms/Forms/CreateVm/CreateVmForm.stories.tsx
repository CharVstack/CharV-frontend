import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { FormProvider } from 'react-hook-form';

import { CreateVmForm, useCreateVmForm } from './Form';

export default {
  component: CreateVmForm,
  decorators: [
    (Story) => {
      const methods = useCreateVmForm();
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
} as ComponentMeta<typeof CreateVmForm>;

export const Default: ComponentStoryObj<typeof CreateVmForm> = {
  args: {
    isConfirm: false,
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const name = canvas.getByLabelText<HTMLInputElement>('名前');
    const cpu = canvas.getByLabelText<HTMLInputElement>('CPU');
    const memory = canvas.getByLabelText<HTMLInputElement>('メモリ');
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
    expect(name.value).toBe('');
    expect(cpu.value).toBe('0');
    expect(memory.value).toBe('0');
  },
};

export const InConfirm: ComponentStoryObj<typeof CreateVmForm> = {
  args: {
    isConfirm: true,
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const name = canvas.getByLabelText<HTMLInputElement>('名前');
    const cpu = canvas.getByLabelText<HTMLInputElement>('CPU');
    const memory = canvas.getByLabelText<HTMLInputElement>('メモリ');
    userEvent.type(name, 'foo');
    userEvent.type(cpu, '1');
    userEvent.type(memory, '1');
    expect(name.value).toBe('');
    expect(cpu.value).toBe('0');
    expect(memory.value).toBe('0');
  },
};
