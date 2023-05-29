import React from 'react';
import { carbonTableRow } from '~/components/data-table/data-table.types';

type toolbarAction = {
  renderIcon: React.ElementType;
  action: (selectedRows: carbonTableRow[]) => void;
  title: string;
};

export interface IToolbarActionsProps {
  actions?: toolbarAction[];
  shouldShowBatchActions: boolean;
  selectedRows: carbonTableRow[];
}
