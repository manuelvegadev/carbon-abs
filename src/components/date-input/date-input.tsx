/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
// @ts-ignore
import { DatePicker, DatePickerInput } from '@carbon/react';
import { IDateInputProps } from './data-input.types';

export function DateInput({
  id,
  label,
  value,
  onChange,
  disabled = false,
}: IDateInputProps) {
  return (
    // @ts-ignore TODO: Fix types when available
    <DatePicker
      datePickerType={'single'}
      value={value}
      dateFormat={'Y-m-d'}
      // @ts-ignore TODO: Remove this when types are fixed
      onClose={(date: any, value: string) => {
        if (onChange) onChange(value);
      }}
      allowInput={false}
    >
      <DatePickerInput id={id} labelText={label} required disabled={disabled} />
    </DatePicker>
  );
}
