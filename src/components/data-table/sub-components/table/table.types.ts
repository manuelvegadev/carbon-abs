import React from 'react';
import { carbonTableRow, IDataTableBatchActionsProps } from '~/components';

export type TableHeader = {
  header: string;
  key: string;
  isSortable?: boolean;
  clampToLine?: boolean;
};

export type TableRowOptions = {
  action: (row: carbonTableRow) => void;
  hoverText: string;
  renderIcon: React.ElementType;
};

//region Prop Getters
export type getHeaderProps = ({ header }: { header: TableHeader }) => {
  key: string;
  sortDirection: 'ASC' | 'DESC' | 'NONE';
  isSortable: boolean;
  isSortHeader: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type getTableProps = () => {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isSortable: boolean;
  overflowMenuOnHover: boolean;
  stickyHeader: boolean;
  useStaticWidth: boolean;
  useZebraStyles: boolean;
};

export type getSelectionProps = (_ref?: { row: carbonTableRow }) => {
  ariaLabel: string;
  checked: boolean;
  id: string;
  indeterminate: boolean;
  name: string;
  onSelect: () => void;
};

export type getRowProps = ({ row }: { row: carbonTableRow }) => {
  key: string;
  isExpanded: boolean;
  ariaLabel: string;
  isSelected: boolean;
  disabled: boolean;
  onExpand: () => void;
};
//endregion

export interface ITableProps {
  batchActions?: IDataTableBatchActionsProps['actions'];
  disabled?: boolean;
  headers: TableHeader[];
  onSelectRow?: (rowsSelected: carbonTableRow['id'], checked: boolean) => void;
  propGetters: {
    getTableProps: getTableProps;
    getHeaderProps: getHeaderProps;
    getRowProps: getRowProps;
    getSelectionProps: getSelectionProps;
  };
  rowOptions?: TableRowOptions;
  rows: carbonTableRow[];
  readonly selectAllCheckbox?: boolean;
  selectedRows: carbonTableRow[];
}
