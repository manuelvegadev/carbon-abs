import React from "react";
import { DataTable as DataTableCarbon } from "@carbon/react/lib/components/DataTable";
import {
  BatchActions,
  Table,
  ToolbarActions,
} from "@/components/data-table/sub-components";

type rowCellInfo = {
  header: string;
};

type rowCell = {
  errors: string[];
  id: string;
  info: rowCellInfo;
  isEditable: boolean;
  isEditing: boolean;
  isValid: boolean;
  value: string;
};

export type carbonSelectedRow = {
  cells: rowCell[];
  disabled: boolean;
  id: string;
  isExpanded: boolean;
  isSelected: boolean;
};

type addButton = {
  renderIcon?: React.ReactNode;
  action?: () => void;
  title: string;
};

export interface IDataTableProps {
  headers: React.ComponentProps<typeof DataTableCarbon>["headers"];
  rows: React.ComponentProps<typeof DataTableCarbon>["rows"];
  rowOptions?: React.ComponentProps<typeof Table>["rowOptions"];
  batchActions?: React.ComponentProps<typeof BatchActions>["actions"];
  toolbarActions?: React.ComponentProps<typeof ToolbarActions>["actions"];
  size?: React.ComponentProps<typeof DataTableCarbon>["size"];
  addButton?: addButton;
  onSelect?: (rowsSelected: carbonSelectedRow[]) => void;
  disabled?: boolean;
}
