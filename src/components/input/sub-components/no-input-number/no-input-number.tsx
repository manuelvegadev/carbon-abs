// @ts-ignore FIXME: Fix the module styles import error
import styles from './no-input-number.module.scss';
import clsx from 'clsx';

interface INoInputNumberProps {
  label: string;
  value: number;
  formatter?: (value: number) => string;
}

export function NoInputNumber({
  label,
  value,
  formatter,
}: INoInputNumberProps) {
  return (
    <div className="cds--number">
      <span className={'cds--label'}>{label}</span>
      <div
        className={clsx([
          'cds--number__input-wrapper align-content-center',
          styles['no-input-number__value'],
        ])}
      >
        {formatter ? formatter(value) : value}
      </div>
    </div>
  );
}
