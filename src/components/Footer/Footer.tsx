import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <Link to='https://github.com/vladyka-nazarii' target='_blank'>
        <img className={styles.github} src='./github-mark-white.svg' alt='Github' />
      </Link>
      2023
    </div>
  </footer>
);
