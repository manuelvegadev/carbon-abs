/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
// @ts-ignore
import { Button } from '@carbon/react';
// @ts-ignore
import { Settings } from '@carbon/icons-react';
import { IWithManageButtonProps } from './with-manage-button.types';

export function WithManageButton({
  children,
  manageLink,
}: IWithManageButtonProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {children}
      <Button
        href={manageLink}
        target={'_blank'}
        hasIconOnly
        renderIcon={Settings}
        kind={'secondary'}
        size={'md'}
        iconDescription={'Manage'}
        tooltipAlignment={'end'}
      >
        Manage
      </Button>
    </div>
  );
}
