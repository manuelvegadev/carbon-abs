import React from 'react';
import {
  Table as TableCarbon,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
} from '@carbon/react';
import clsx from 'clsx';
import { ITableProps } from '~/components';
// @ts-ignore TODO: Fix types
import styles from './table.module.scss';

export const Table: React.FC<ITableProps> = ({
  headers,
  rows,
  rowOptions,
  propGetters: {
    getTableProps,
    getHeaderProps,
    getRowProps,
    getSelectionProps,
  },
  batchActions,
  onSelectRow,
  // selectedRows,
  disabled,
  selectAllCheckbox = false,
}) => (
  <TableCarbon {...getTableProps()} className={styles['table']}>
    <TableHead>
      <TableRow>
        {batchActions || onSelectRow ? (
          selectAllCheckbox ? (
            <TableSelectAll {...getSelectionProps()} />
          ) : (
            <TableHeader scope={'col'} />
          )
        ) : null}
        {headers.map((header, index) => (
          <TableHeader {...getHeaderProps({ header })} scope="col" key={index}>
            {header.header}
          </TableHeader>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.length > 0 ? (
        rows.map((row, rowIndex) => {
          const shouldRenderActionIcon =
            rowOptions?.action && rowOptions?.renderIcon && !disabled;
          return (
            // @ts-ignore TODO: Remove this comment when types are fixed
            <TableRow
              {...getRowProps({ row })}
              className={clsx({
                [styles.table__row]: true,
                [styles['table__row--actionable']]: shouldRenderActionIcon,
              })}
              key={rowIndex}
            >
              {batchActions || onSelectRow ? (
                <TableSelectRow
                  {...getSelectionProps({ row })}
                  checked={row.isSelected}
                  onChange={(checked) => {
                    if (onSelectRow) onSelectRow(row.id, checked);
                  }}
                />
              ) : null}
              {row.cells.map(({ id, value }) => {
                const [, headerName] = id.split(':');
                return (
                  <TableCell
                    key={id}
                    onClick={() => {
                      if (shouldRenderActionIcon) rowOptions.action?.(row);
                    }}
                    title={rowOptions?.hoverText || ''}
                    onMouseEnter={(event) => {
                      event.currentTarget.parentElement!.classList.add(
                        styles['table__row--actionable--hover'],
                      );
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.parentElement!.classList.remove(
                        styles['table__row--actionable--hover'],
                      );
                    }}
                  >
                    {headers.find(({ key }) => key === headerName)!
                      .clampToLine ? (
                      <span className={'line-clamp'} title={value}>
                        {value}
                      </span>
                    ) : (
                      value
                    )}
                  </TableCell>
                );
              })}
              {shouldRenderActionIcon ? (
                <td className={styles['table__row--actionable__icon']}>
                  <rowOptions.renderIcon size={20} />
                </td>
              ) : null}
            </TableRow>
          );
        })
      ) : (
        <TableRow>
          <TableCell
            colSpan={headers.length + (batchActions ? 1 : 0)}
            style={{ textAlign: 'center' }}
          >
            <em>(No hay registros)</em>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </TableCarbon>
);

export default Table;
