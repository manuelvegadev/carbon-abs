/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * */
import React from 'react';
import { TableToolbarAction, TableToolbarMenu } from '@carbon/react';
// @ts-ignore
import { ChevronDown } from '@carbon/icons-react';
import { IToolbarActionsProps } from './toolbar-actions.types';

export function ToolbarActions({
  actions,
  shouldShowBatchActions,
  selectedRows,
}: IToolbarActionsProps) {
  return actions ? (
    <TableToolbarMenu
      tabIndex={shouldShowBatchActions ? -1 : 0}
      iconDescription={'Acciones'}
      renderIcon={ChevronDown}
    >
      {actions!.map(({ title, action, renderIcon: RenderIcon }, index) => (
        <TableToolbarAction onClick={() => action(selectedRows)} key={index}>
          {RenderIcon ? (
            <span
              style={{
                display: 'flex',
                gap: '.5em',
                alignItems: 'center',
              }}
            >
              <RenderIcon />
              {title}
            </span>
          ) : (
            title
          )}
        </TableToolbarAction>
      ))}
    </TableToolbarMenu>
  ) : (
    <React.Fragment />
  );
}

export default ToolbarActions;
