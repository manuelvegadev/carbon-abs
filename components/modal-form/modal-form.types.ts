import React from "react";

export interface IModalFormProps {
  children: (props: {
    isSubmitting: boolean;
    success: boolean;
    error: boolean;
    components: any;
    currentStep: number;
  }) => React.ReactElement;
  submitButtonText?: string;
  onSubmit: (data: any) => Promise<any>;
  deleteButtonAction?: (data: any) => Promise<any>;
  onSuccess?: (data: any) => void;
  steps?: {
    label: string;
    secondaryLabel?: string;
    disabled?: boolean;
  }[];
}
