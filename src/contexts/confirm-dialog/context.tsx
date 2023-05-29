import React, { createContext } from "react";

export interface IAwaitConfirmDialogProps {
  content?: React.ReactNode;
  danger?: boolean;
  heading?: React.ReactNode;
  label?: React.ReactNode;
  rejectText?: React.ReactNode;
  resolveText?: React.ReactNode;
}

export const awaitConfirmDialogDefaultValues: IAwaitConfirmDialogProps = {
  content: <>¿Está seguro de continuar?</>,
  danger: false,
  heading: <>Confirmar</>,
  label: <></>,
  rejectText: <>Cancelar</>,
  resolveText: <>Aceptar</>,
};

export const confirmDialogContextDefaultProps: IConfirmDialogContext = {
  awaitConfirmDialog: async ({
    heading = awaitConfirmDialogDefaultValues.heading,
    label = awaitConfirmDialogDefaultValues.label,
    content = awaitConfirmDialogDefaultValues.content,
    resolveText = awaitConfirmDialogDefaultValues.resolveText,
    rejectText = awaitConfirmDialogDefaultValues.rejectText,
    danger = awaitConfirmDialogDefaultValues.danger,
  }: IAwaitConfirmDialogProps) => {
    console.warn("Modal context not implemented", {
      heading,
      label,
      content,
      resolveText,
      rejectText,
      danger,
    });
  },
};

export interface IConfirmDialogContext {
  awaitConfirmDialog: (props: IAwaitConfirmDialogProps) => Promise<void>;
}

export const ConfirmDialogContext = createContext<IConfirmDialogContext>({
  awaitConfirmDialog: confirmDialogContextDefaultProps.awaitConfirmDialog,
});

export default ConfirmDialogContext;
