import React from 'react';
import { carbonTableRow } from '~/components/data-table/data-table.types';

export type DataTableBatchAction = {
  renderIcon?: React.ElementType;
  action?: (rows: carbonTableRow[]) => void;
  title: string;
};

export interface IDataTableBatchActionsProps {
  actions: DataTableBatchAction[];
  batchActionProps: any;
  selectedRows: carbonTableRow[];
}
