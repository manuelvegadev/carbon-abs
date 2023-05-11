type secondaryButton = {
  text: string;
  action: () => void;
  kind?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "danger--primary"
    | "danger--ghost"
    | "danger--tertiary"
    | "tertiary";
  disabled?: boolean;
};

type inlineNotification = {
  title: string;
  subtitle: string;
  kind:
    | "error"
    | "info"
    | "info-square"
    | "success"
    | "warning"
    | "warning-alt";
  hideCloseButton?: boolean;
};

export interface IFormButtonsProps {
  isSubmitting?: boolean;
  success?: boolean;
  successMessage?: string;
  submitButtonText?: string;
  submitButtonDisabled?: boolean;
  cancelButtonAction?: () => void;
  cancelButtonText?: string;
  secondaryButtons?: secondaryButton[];
  inlineNotification?: inlineNotification;
  onSuccess?: () => void;
}
