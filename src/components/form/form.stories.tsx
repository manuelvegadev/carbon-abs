import type { Meta, StoryObj } from '@storybook/react';

import { Form as Component } from './form';

const meta = {
  title: 'Form',
  component: Component,
  // tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    children({ isSubmitting }) {
      return <div>{isSubmitting}</div>;
    },
    onSubmit: async () => {
      return;
    },
    submitButtonText: 'Submit',
  },
};
