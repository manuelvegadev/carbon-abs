/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
import React from "react";
// @ts-ignore
import { TextInput } from "@carbon/react";
import { UseFormReturn } from "react-hook-form";

export interface IInputTextProps
  extends React.ComponentProps<typeof TextInput> {
  formHook: UseFormReturn;
  label: string;
  name: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}
