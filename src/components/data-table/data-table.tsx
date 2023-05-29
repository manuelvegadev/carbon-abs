/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
import React, { memo } from 'react';
import {
  // @ts-ignore
  Button,
  DataTable as DataTableCarbon,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from '@carbon/react';
import { IDataTableProps } from '~/components';
import { BatchActions, Table, ToolbarActions } from './sub-components';

export const DataTable: React.FC<IDataTableProps<any>> = memo(
  ({
    headers,
    rows,
    rowOptions,
    batchActions = [],
    toolbarActions = [],
    size = 'md',
    addButton,
    onSelectRow,
    disabled = false,
    selectAllCheckbox = false,
  }) => (
    <DataTableCarbon
      rows={rows}
      headers={headers}
      isSortable
      size={size}
      locale={'es'}
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
                  placeholder={'Filtrar registros'}
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
              propGetters={{
                getHeaderProps,
                getRowProps,
                getSelectionProps,
                getTableProps,
              }}
              batchActions={batchActions}
              rowOptions={rowOptions}
              disabled={disabled}
              onSelectRow={onSelectRow}
              selectedRows={selectedRows}
              selectAllCheckbox={selectAllCheckbox}
            />
          </TableContainer>
        );
      }}
    </DataTableCarbon>
  ),
);

DataTable.displayName = 'DataTable';
