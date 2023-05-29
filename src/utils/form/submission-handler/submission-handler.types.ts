import React from "react";
import { FieldValues } from "react-hook-form";

export type FormStates = {
  isSubmitting: {
    value: boolean;
    set: React.Dispatch<React.SetStateAction<boolean>>;
  };
  success: {
    value: boolean;
    set: React.Dispatch<React.SetStateAction<boolean>>;
  };
  error: {
    value: boolean;
    set: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export interface IHandleSubmitProps {
  formEvent: React.FormEvent<HTMLFormElement>;
  onSubmit: (data: FieldValues, formStates: FormStates) => Promise<void>;
  onSuccess?: (response: any, formStates: FormStates) => void;
}

type formComponents = {
  [key: string]: React.ElementType;
};

export interface ISubmissionHandlerChildrenPropProps {
  handleSubmit: (props: IHandleSubmitProps) => void;
  components: formComponents;
  formStates: FormStates;
  data: FieldValues;
}

export interface SubmissionHandlerProps {
  children: (props: ISubmissionHandlerChildrenPropProps) => React.ReactElement;
}
