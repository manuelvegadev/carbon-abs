import { TableBatchAction, TableBatchActions } from "@carbon/react";
import { IBatchActionsProps } from "./batch-actions.types.ts";

export function BatchActions({
  actions,
  batchActionProps,
  selectedRows,
}: IBatchActionsProps) {
  return actions?.length > 0 ? (
    <TableBatchActions
      {...batchActionProps}
      // TODO: Change this when types are available
      translateWithId={(id: string, options: { [key: string]: string }) => {
        let text = "";
        if (id === "carbon.table.batch.cancel") text = "Cancelar";
        if (id === "carbon.table.batch.items.selected")
          text = `${options.totalSelected} Seleccionados`;
        if (id === "carbon.table.batch.item.selected")
          text = `${options.totalSelected} Seleccionado`;
        return text;
      }}
    >
      {actions.map(({ renderIcon, action, title }, index) => (
        <TableBatchAction
          key={index}
          tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
          renderIcon={renderIcon}
          onClick={() => {
            if (action) action(selectedRows);
          }}
        >
          {title}
        </TableBatchAction>
      ))}
    </TableBatchActions>
  ) : null;
}

export default BatchActions;
