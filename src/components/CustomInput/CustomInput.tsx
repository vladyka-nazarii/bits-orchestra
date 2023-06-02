import { memo } from 'react';

import styles from './CustomInput.module.scss';
import { MIN_ISBN, MAX_ISBN } from '../../utils/constants';

interface ICustomInputProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
}

export const CustomInput = memo(({ value, onChange, type = 'text' }: ICustomInputProps) => (
  <input
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    min={type === 'number' ? MIN_ISBN : undefined}
    max={type === 'number' ? MAX_ISBN : undefined}
    required
  />
));
