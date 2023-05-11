/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * */
import {
  // @ts-ignore
  Button,
  DataTable as DataTableCarbon,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from "@carbon/react";
import { BatchActions, Table, ToolbarActions } from "./sub-components";
import { IDataTableProps } from "@/components/data-table/data-table.types.ts";

export function DataTable({
  headers,
  rows,
  rowOptions,
  batchActions = [],
  toolbarActions = [],
  size = "md",
  addButton,
  onSelect,
  disabled = false,
}: IDataTableProps) {
  return (
    <DataTableCarbon
      rows={rows}
      headers={headers}
      isSortable
      size={size}
      locale={"es"}
    >
      {({
        rows: CarbonRows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getToolbarProps,
        getBatchActionProps,
        onInputChange,
        selectedRows,
        getTableProps,
        getTableContainerProps,
      }: any) => {
        const batchActionProps = getBatchActionProps(),
          { shouldShowBatchActions } = batchActionProps;

        if (onSelect) onSelect(selectedRows);

        return (
          <TableContainer {...getTableContainerProps()}>
            <TableToolbar {...getToolbarProps()}>
              <BatchActions
                actions={batchActions}
                batchActionProps={batchActionProps}
                selectedRows={selectedRows}
              />
              <TableToolbarContent aria-hidden={shouldShowBatchActions}>
                <TableToolbarSearch
                  tabIndex={shouldShowBatchActions ? -1 : 0}
                  onChange={onInputChange}
                  placeholder={"Filtrar registros"}
                  persistent
                />
                <ToolbarActions
                  actions={toolbarActions}
                  selectedRows={selectedRows}
                  shouldShowBatchActions={shouldShowBatchActions}
                />
                {addButton ? (
                  <Button
                    tabIndex={shouldShowBatchActions ? -1 : 0}
                    onClick={() => addButton!.action!()}
                    size={size}
                    kind="primary"
                    renderIcon={addButton!.renderIcon}
                    disabled={disabled}
                  >
                    {addButton!.title}
                  </Button>
                ) : null}
              </TableToolbarContent>
            </TableToolbar>
            <Table
              headers={headers}
              rows={CarbonRows}
              getTableProps={getTableProps}
              getHeaderProps={getHeaderProps}
              getRowProps={getRowProps}
              getSelectionProps={getSelectionProps}
              batchActions={batchActions}
              rowOptions={rowOptions}
              disabled={disabled}
              onSelect={onSelect}
              selectedRows={selectedRows}
            />
          </TableContainer>
        );
      }}
    </DataTableCarbon>
  );
}
