/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
// @ts-ignore
import { TextInput } from "@carbon/react";
import React, { useId } from "react";
import { getErrorMessage } from "../../utils";
import { RegisterOptions } from "react-hook-form";
import { IInputTextProps } from "./input-text.types";

export function InputText({
  formHook,
  label,
  name,
  defaultValue,
  onChange,
  required = false,
  ...props
}: IInputTextProps) {
  const id = useId();

  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = formHook;

  const registerOptions: RegisterOptions = {};

  if (required) registerOptions.required = getErrorMessage.required();

  return (
    <TextInput
      id={id + name}
      labelText={label}
      defaultValue={defaultValue}
      {...register(name, registerOptions)}
      invalid={!!errors[name]}
      invalidText={errors[name]?.message}
      // TODO: Remove this when types are fixed
      onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(name, value);
        await trigger(name);
        if (onChange) onChange(value);
      }}
      {...props}
    />
  );
}
