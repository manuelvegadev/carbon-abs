import React from 'react';
import { FormButtons } from '~/components/form/sub-components';
import { IHandleSubmitProps } from '~/utils/form/submission-handler/submission-handler.types';
import { IFormButtonsProps } from '~/components/form/sub-components/form-buttons/form-buttons.types';

type formChildrenProp = (props: {
  isSubmitting: boolean;
  success: boolean;
  error: boolean;
}) => React.ReactNode;

export interface IFormProps {
  onSubmit: IHandleSubmitProps['onSubmit'];
  onSuccess?: IFormButtonsProps['onSuccess'];
  children: formChildrenProp;
  successMessage?: string;
  submitButtonText: string;
  submitButtonDisabled?: boolean;
  cancelButtonText?: string;
  cancelButtonAction?: () => void;
  secondaryButtons?: React.ComponentProps<
    typeof FormButtons
  >['secondaryButtons'];
  inlineNotification?: React.ComponentProps<
    typeof FormButtons
  >['inlineNotification'];
}
