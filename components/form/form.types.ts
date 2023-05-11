import React from "react";
import { FormButtons } from "@/components/form/sub-components";
import { handleSubmitProps } from "@/utils/form/submission-handler/submission-handler.types.ts";
import { IFormButtonsProps } from "@/components/form/sub-components/form-buttons/form-buttons.types.ts";

type formChildrenProp = (props: {
  isSubmitting: boolean;
  success: boolean;
  error: boolean;
}) => React.ReactNode;

export interface IFormProps {
  onSubmit: handleSubmitProps["onSubmit"];
  onSuccess?: IFormButtonsProps["onSuccess"];
  children: formChildrenProp;
  successMessage?: string;
  submitButtonText: string;
  submitButtonDisabled?: boolean;
  cancelButtonText?: string;
  cancelButtonAction?: () => void;
  secondaryButtons?: React.ComponentProps<
    typeof FormButtons
  >["secondaryButtons"];
  inlineNotification?: React.ComponentProps<
    typeof FormButtons
  >["inlineNotification"];
}
