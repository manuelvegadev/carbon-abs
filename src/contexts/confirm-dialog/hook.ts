import { useContext } from "react";
import ConfirmDialogContext, { IConfirmDialogContext } from "./context";

export const useConfirmDialog = (): IConfirmDialogContext => {
  const context = useContext(ConfirmDialogContext);

  if (!context) {
    console.error("Error deploying the Confirm context");
  }

  return context;
};

export default useConfirmDialog;
