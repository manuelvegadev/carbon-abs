/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
import React from 'react';
import {
  // @ts-ignore
  Button,
  // @ts-ignore
  ComposedModal,
  // @ts-ignore
  ModalBody,
  // @ts-ignore
  ModalFooter,
  // @ts-ignore
  ModalHeader,
} from '@carbon/react';
import { IAwaitConfirmDialogProps } from '~/contexts';
import { DeferredPromise } from '~/utils';

interface IConfirmDialogProps {
  promise: DeferredPromise;
  contextValues: { isOpen: boolean } & IAwaitConfirmDialogProps;
}

export const Confirm: React.FC<IConfirmDialogProps> = ({
  contextValues,
  promise,
}) => {
  const { isOpen, label, heading, content, resolveText, rejectText, danger } =
    contextValues;

  return (
    <ComposedModal
      open={isOpen}
      preventCloseOnClickOutside
      size={'sm'}
      style={{ zIndex: 9001 }}
    >
      <ModalHeader
        title={heading}
        label={label}
        buttonOnClick={promise.reject}
      />
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <Button type={'button'} kind={'secondary'} onClick={promise.reject}>
          {rejectText}
        </Button>
        <Button
          type={'button'}
          onClick={promise.resolve}
          kind={danger ? 'danger' : 'primary'}
        >
          {resolveText}
        </Button>
      </ModalFooter>
    </ComposedModal>
  );
};
