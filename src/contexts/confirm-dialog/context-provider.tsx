import React, { useCallback, useMemo, useState } from 'react';
import {
  Confirm,
  IConfirmContextProviderProps,
  IConfirmDialogContext,
} from '~/contexts';
import { DeferredPromise } from '~/utils';
import { awaitConfirmDialogDefaultValues, ConfirmDialogContext } from './';

export const ConfirmContextProvider: React.FC<IConfirmContextProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [label, setLabel] = useState(awaitConfirmDialogDefaultValues.label);
  const [heading, setHeading] = useState(
    awaitConfirmDialogDefaultValues.heading,
  );
  const [content, setContent] = useState(
    awaitConfirmDialogDefaultValues.content,
  );
  const [resolveText, setResolveText] = useState(
    awaitConfirmDialogDefaultValues.resolveText,
  );
  const [rejectText, setRejectText] = useState(
    awaitConfirmDialogDefaultValues.rejectText,
  );
  const [danger, setDanger] = useState(awaitConfirmDialogDefaultValues.danger);
  const [promise, setPromise] = useState<DeferredPromise>(
    new DeferredPromise(),
  );

  const awaitConfirmDialog = useCallback<
    IConfirmDialogContext['awaitConfirmDialog']
  >(
    async ({
      label = awaitConfirmDialogDefaultValues.label,
      heading = awaitConfirmDialogDefaultValues.heading,
      content = awaitConfirmDialogDefaultValues.content,
      resolveText = awaitConfirmDialogDefaultValues.resolveText,
      rejectText = awaitConfirmDialogDefaultValues.rejectText,
      danger = awaitConfirmDialogDefaultValues.danger,
    }) => {
      const deferred = new DeferredPromise(() => setIsOpen(false));
      setPromise(deferred);

      setLabel(label);
      setHeading(heading);
      setContent(content);
      setResolveText(resolveText);
      setRejectText(rejectText);
      setDanger(danger);

      setIsOpen(true);

      return deferred.promise;
    },
    [],
  );

  const contextValues = useMemo(() => {
    return {
      awaitConfirmDialog,
    };
  }, []);

  return (
    <ConfirmDialogContext.Provider value={contextValues}>
      <Confirm
        contextValues={{
          isOpen,
          label,
          heading,
          content,
          resolveText,
          rejectText,
          danger,
        }}
        promise={promise}
      />
      {children}
    </ConfirmDialogContext.Provider>
  );
};
