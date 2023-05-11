/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
// @ts-ignore
import { NumberInput } from "@carbon/react";
import React, { useId } from "react";
import { getErrorMessage } from "../../utils";
import { RegisterOptions } from "react-hook-form";
import { IInputNumberProps } from "./input-number.types";

export function InputNumber({
  formHook,
  label,
  name,
  defaultValue = 0,
  onChange,
  required = false,
  min = 0,
  max = 999999999,
  step = 1,
  ...props
}: IInputNumberProps) {
  const id = useId();

  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = formHook;

  const registerOptions: RegisterOptions = {
    min: { value: min, message: getErrorMessage.min(min) },
    max: { value: max, message: getErrorMessage.max(max) },
    valueAsNumber: true,
  };

  if (required) registerOptions.required = getErrorMessage.required();

  return (
    <NumberInput
      id={id + name}
      label={label}
      defaultValue={defaultValue}
      {...register(name, registerOptions)}
      max={max}
      min={min}
      step={step}
      invalid={!!errors[name]}
      invalidText={errors[name]?.message}
      // TODO: Remove this when types are fixed
      onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(name, value);
        await trigger(name);
        if (onChange) onChange(Number(value));
      }}
      {...props}
      hideSteppers
    />
  );
}
