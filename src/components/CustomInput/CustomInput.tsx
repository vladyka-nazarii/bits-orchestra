import { memo } from 'react';

import styles from './CustomInput.module.scss';

interface ICustomInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
}

export const CustomInput = memo(({ value, onChange, type = 'text' }: ICustomInputProps) => (
  <input
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    min={type === 'number' ? '1000000000000' : undefined}
    max={type === 'number' ? '9999999999999' : undefined}
    required
  />
));
