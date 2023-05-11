import React from "react";
import { BatchActions } from "@/components/data-table/sub-components";
import { carbonSelectedRow } from "@/components/data-table/data-table.types";

type tableHeader = {
  header: string;
  key: string;
};

type tableRow = {
  id: string;
  [key: string]: any;
};

type rowOptions = {
  action: (row: tableRow) => void;
  hoverText: string;
  renderIcon: React.ElementType;
};

export interface ITableProps {
  headers: tableHeader[];
  rows: tableRow[];
  rowOptions?: rowOptions;
  getTableProps: any;
  getHeaderProps: any;
  getRowProps: any;
  getSelectionProps: any;
  batchActions?: React.ComponentProps<typeof BatchActions>["actions"];
  onSelect?: (rowsSelected: carbonSelectedRow[]) => void;
  selectedRows: carbonSelectedRow[];
  disabled?: boolean;
}
