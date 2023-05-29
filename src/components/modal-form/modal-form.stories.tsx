import type { Meta, StoryObj } from '@storybook/react';

import { ModalForm as Component } from './modal-form';

const meta = {
  title: 'ModalForm',
  component: Component,
  // tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    onSubmit: {
      action: 'onSubmit',
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalForm: Story = {
  args: {
    children({ components: { InputText } }) {
      return <InputText name="name" label="Name" />;
    },
    onSubmit: async () => {
      return;
    },
    submitButtonText: 'Submit',
  },
};
