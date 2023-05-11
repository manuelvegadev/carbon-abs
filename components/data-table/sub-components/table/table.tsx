import {
  Table as TableCarbon,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
} from "@carbon/react";
import clsx from "clsx";
import { ITableProps } from "./table.types.ts";
// @ts-ignore TODO: Fix types
import styles from "./table.module.scss";

export function Table({
  headers,
  rows,
  rowOptions,
  getTableProps,
  getHeaderProps,
  getRowProps,
  getSelectionProps,
  batchActions,
  onSelect,
  selectedRows,
  disabled,
}: ITableProps) {
  return (
    <TableCarbon {...getTableProps()} className={styles["table"]}>
      <TableHead>
        <TableRow>
          {batchActions || onSelect ? (
            <TableSelectAll {...getSelectionProps()} />
          ) : null}
          {headers.map((header, i) => (
            <TableHeader key={i} {...getHeaderProps({ header })}>
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
              <TableRow
                key={rowIndex}
                {...getRowProps({ row })}
                isSelected={
                  selectedRows.some(({ id }) => id === row.id) || row.isSeleted
                }
                className={clsx({
                  [styles.table__row]: true,
                  [styles["table__row--actionable"]]: shouldRenderActionIcon,
                })}
              >
                {batchActions || onSelect ? (
                  <TableSelectRow
                    {...getSelectionProps({ row })}
                    checked={row.isSelected}
                  />
                ) : null}
                {row.cells.map((cell: { id: string; value: string }) => {
                  return (
                    <TableCell
                      key={cell.id}
                      onClick={() => {
                        shouldRenderActionIcon
                          ? rowOptions.action?.(row)
                          : null;
                      }}
                      title={rowOptions?.hoverText || ""}
                      onMouseEnter={(event) => {
                        event.currentTarget.parentElement!.classList.add(
                          styles["table__row--actionable--hover"]
                        );
                      }}
                      onMouseLeave={(event) => {
                        event.currentTarget.parentElement!.classList.remove(
                          styles["table__row--actionable--hover"]
                        );
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          maxWidth: "25vw",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        title={cell.value}
                      >
                        {cell.value}
                      </span>
                    </TableCell>
                  );
                })}
                {shouldRenderActionIcon ? (
                  <td className={styles["table__row--actionable__icon"]}>
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
              style={{ textAlign: "center" }}
            >
              <em>(No hay registros)</em>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </TableCarbon>
  );
}

export default Table;
