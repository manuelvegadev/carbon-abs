import { useId } from "react";
import { IInputHiddenProps } from "./input-hidden.types";

export function InputHidden({
  formHook,
  name,
  value = 0,
  valueAsNumber = false,
  ...props
}: IInputHiddenProps) {
  const id = useId();

  const { register } = formHook;

  return (
    <input
      type={"hidden"}
      id={id + name}
      value={value}
      {...register(name, { valueAsNumber })}
      {...props}
    />
  );
}
