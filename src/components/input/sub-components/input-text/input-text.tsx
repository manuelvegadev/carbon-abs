/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
// @ts-ignore
import { TextInput } from '@carbon/react';
import React, { useId } from 'react';
import { getErrorMessage } from '../../utils';
import { RegisterOptions } from 'react-hook-form';
import { IInputTextProps } from './input-text.types';
import clsx from 'clsx';

export function InputText({
  formHook,
  label,
  name,
  defaultValue,
  onChange,
  required = false,
  floatingErrorMessage = false,
  ...props
}: IInputTextProps) {
  const id = useId();

  const onChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log('onChange');
    const value = event.target.value;
    setValue(name, value);
    await trigger(name);
    if (onChange) onChange(value);
  };

  const inputProps: React.ComponentProps<typeof TextInput> = {
    id: id + name,
    labelText: label,
    defaultValue: defaultValue,
    // TODO: Remove this when types are fixed
    onChange: onChangeHandler,
    ...props,
  };

  if (!formHook) {
    return <TextInput {...inputProps} />;
  }

  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = formHook;

  const registerOptions: RegisterOptions = {};

  if (required) registerOptions.required = getErrorMessage.required();
  registerOptions.onChange = onChangeHandler;

  return (
    <TextInput
      {...inputProps}
      {...register(name, registerOptions)}
      invalid={!!errors[name]}
      invalidText={errors[name]?.message}
      className={clsx(
        {
          'cds--input__floating-error-message': floatingErrorMessage,
        },
        props.className,
      )}
    />
  );
}
