import { useContext, useEffect, useState } from 'react';

import { Loader } from '../UI/Loader/Loader';
import { BooksLayout } from './BooksLayout/BooksLayout';
import { IBook } from '../../types/interfaces';
import { BookContext } from '../../context/BooksContext';

import styles from './TableContent.module.scss';

export const TableContent = () => {
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const { books, filter, isLoading, error } = useContext(BookContext);

  useEffect(() => {
    if (filter) {
      setFilteredBooks(books.filter((book) => book.active));
    }
    if (filter === null) {
      setFilteredBooks([...books]);
    }
    if (filter === false) {
      setFilteredBooks(books.filter((book) => !book.active));
    }
  }, [books, filter]);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return <BooksLayout filteredBooks={filteredBooks} />;
};
