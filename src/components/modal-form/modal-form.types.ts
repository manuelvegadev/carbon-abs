import React from 'react';
import {
  FormStates,
  IHandleSubmitProps,
} from '~/utils/form/submission-handler/submission-handler.types.ts';

export interface IModalFormProps {
  children: (props: {
    isSubmitting: boolean;
    success: boolean;
    error: boolean;
    components: any;
    currentStep: number;
  }) => React.ReactElement;
  submitButtonText?: string;
  onSubmit: IHandleSubmitProps['onSubmit'];
  deleteButtonAction?: (data: any, formStates: FormStates) => Promise<any>;
  onSuccess?: IHandleSubmitProps['onSuccess'];
  steps?: {
    label: string;
    secondaryLabel?: string;
    disabled?: boolean;
  }[];
}
