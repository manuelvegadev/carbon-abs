import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { InputHidden, InputNumber, InputText } from '~/components';
import {
  FormStates,
  IHandleSubmitProps,
  SubmissionHandlerProps,
} from './submission-handler.types';

export function SubmissionHandler({ children }: SubmissionHandlerProps) {
  const [isSubmitting, setIsSubmitting] =
    useState<FormStates['isSubmitting']['value']>(false);
  const [success, setSuccess] = useState<FormStates['success']['value']>(false);
  const [error, setError] = useState<FormStates['error']['value']>(false);
  const [formValues, setFormValues] = useState<FieldValues>({});

  const formHook = useForm();
  const { handleSubmit: hookHandleSubmit, watch, getValues } = formHook;

  const formStates: FormStates = {
    isSubmitting: {
      value: isSubmitting,
      set: setIsSubmitting,
    },
    success: {
      value: success,
      set: setSuccess,
    },
    error: {
      value: error,
      set: setError,
    },
  };

  useEffect(() => {
    console.log('isSubmitting', isSubmitting);
  }, [isSubmitting]);

  useEffect(() => {
    setFormValues(getValues());
  }, []);

  watch((data) => {
    setFormValues(data);
  });

  // /** @type {SubmissionHandlerChildrenPropHandleSubmitOption} */
  function handleSubmit({
    formEvent,
    onSubmit,
    onSuccess,
  }: IHandleSubmitProps) {
    formEvent.preventDefault();

    hookHandleSubmit((data) => {
      setIsSubmitting(true);
      onSubmit(data, formStates)
        .then((response) => {
          setError(false);
          setSuccess(true);
          if (onSuccess) onSuccess(response, formStates);
        })
        .catch(() => {
          setSuccess(false);
          setError(true);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    })();
  }

  const components: { [key: string]: React.ElementType } = {
    InputText,
    InputNumber,
    InputHidden,
  };

  Object.entries(components).forEach(([name, component]) => {
    // @ts-ignore FIXME: Fix the type of 'component'
    component.defaultProps = { formHook };
    components[name] = component;
  });

  return children({
    handleSubmit,
    components,
    formStates,
    data: formValues,
  });
}
