import { PropsWithChildren, memo } from 'react';

import styles from './CustomLabel.module.scss';

interface ICustomLabelProps extends PropsWithChildren {
  title: string;
}

export const CustomLabel = memo(({ children, title }: ICustomLabelProps) => (
  <label className={styles.label}>
    <p className={styles.title}>{title}</p>
    {children}
  </label>
));
