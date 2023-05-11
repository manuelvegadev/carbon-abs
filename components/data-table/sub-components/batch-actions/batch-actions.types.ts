import React from "react";
import { carbonSelectedRow } from "@/components/data-table/data-table.types";

type batchAction = {
  renderIcon?: React.ElementType;
  action?: (rows: carbonSelectedRow[]) => void;
  title: string;
};

export interface IBatchActionsProps {
  actions: batchAction[];
  batchActionProps: any;
  selectedRows: carbonSelectedRow[];
}
