import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { BookContext } from '../../context/BooksContext';

import styles from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { selectedBook, goToMain } = useContext(BookContext);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer} onClick={goToMain}>
          <img className={styles.logo} src='./120-BoLogo.png' alt='logo' />
          <h1 className={styles.title}>Bits Orchestra</h1>
        </div>
        <nav className={styles.nav}>
          <button
            className={`${styles.button} ${pathname === '/' && styles.active}`}
            onClick={goToMain}
          >
            Dashboard
          </button>
          <button
            className={`${styles.button} ${pathname === '/editor' && styles.active}`}
            onClick={() => navigate('/editor')}
          >
            {selectedBook ? 'Edit the Book' : 'Add a Book'}
          </button>
        </nav>
      </div>
    </header>
  );
};
