import type { Meta, StoryObj } from '@storybook/react';

import { DataTable as Component } from './data-table';

const meta = {
  title: 'DataTable',
  component: Component,
  // tags: ['autodocs'],
  argTypes: {
    rows: { control: 'object' },
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DataTable: Story = {
  args: {
    rows: [
      { id: '1', name: 'John', age: 20 },
      { id: '2', name: 'Jane', age: 21 },
      { id: '3', name: 'Joe', age: 22 },
    ],
    headers: [
      { key: 'id', header: 'ID' },
      { key: 'name', header: 'Name' },
      { key: 'age', header: 'Age' },
    ],
  },
};
