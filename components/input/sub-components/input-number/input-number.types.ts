/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
import React from "react";
// @ts-ignore
import { NumberInput } from "@carbon/react";
import { UseFormReturn } from "react-hook-form";

export interface IInputNumberProps
  extends React.ComponentProps<typeof NumberInput> {
  formHook: UseFormReturn;
  label: string;
  name: string;
  defaultValue?: number;
  onChange?: (value: number) => void;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}
