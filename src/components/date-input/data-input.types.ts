export interface IDateInputProps {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
