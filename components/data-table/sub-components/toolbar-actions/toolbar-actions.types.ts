import React from "react";
import { carbonSelectedRow } from "@/components/data-table/data-table.types";

type toolbarAction = {
  renderIcon: React.ElementType;
  action: (selectedRows: carbonSelectedRow[]) => void;
  title: string;
};

export interface IToolbarActionsProps {
  actions?: toolbarAction[];
  shouldShowBatchActions: boolean;
  selectedRows: carbonSelectedRow[];
}
