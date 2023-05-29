import React from 'react';
import { DataTable as DataTableCarbon } from '@carbon/react';
import {
  ITableProps,
  IDataTableBatchActionsProps,
  IToolbarActionsProps,
  TableHeader,
} from '~/components';

export type carbonTableRow = {
  cells: {
    errors: [] | null;
    id: string;
    info: {
      header: string;
    };
    isEditable: boolean;
    isEditing: boolean;
    isValid: boolean;
    value: string;
  }[];
  disabled: boolean;
  id: string;
  isExpanded: boolean;
  isSelected: boolean;
};

export type DataTableAddButtonProp = {
  renderIcon?: React.ReactNode;
  action?: () => void;
  title: string;
};

export type DataTableHeader<T> = TableHeader & {
  key: keyof T;
};

export type DataTableRow<T> = T & {
  id: string;
  isSelected?: boolean;
};

export type DataTableRowOptions = ITableProps['rowOptions'];

/**
 * The generic T is the type of the structure of
 * the data that will be displayed in the table.
 * */
export interface IDataTableProps<T>
  extends Pick<ITableProps, 'selectAllCheckbox'> {
  headers: DataTableHeader<T>[];
  rows: DataTableRow<T>[];
  rowOptions?: DataTableRowOptions;
  batchActions?: IDataTableBatchActionsProps['actions'];
  toolbarActions?: IToolbarActionsProps['actions'];
  size?: React.ComponentProps<typeof DataTableCarbon>['size'];
  addButton?: DataTableAddButtonProp;
  onSelectRow?: ITableProps['onSelectRow'];
  disabled?: boolean;
}
