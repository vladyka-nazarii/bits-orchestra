import { memo, useContext } from 'react';

import { CustomSelect } from '../../CustomSelect/CustomSelect';
import { TableHead } from '../TableHead/TableHead';
import { IBook } from '../../../types/interfaces';
import { formatDate } from '../../../utils/formatDate';
import { deleteBook } from '../../../api/deleteBook';
import { deactivateBook } from '../../../api/deactivateBook';
import { FILTER_OPTIONS } from '../../../utils/constants';
import { BookContext } from '../../../context/BooksContext';
import { useNavigate } from 'react-router-dom';

import styles from './BooksLayout.module.scss';

interface IBooksLayoutProps {
  filteredBooks: IBook[];
}

export const BooksLayout = memo(({ filteredBooks }: IBooksLayoutProps) => {
  const navigate = useNavigate();
  const { books, refetchBooks, filter, setFilter, setSelectedBook } = useContext(BookContext);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = JSON.parse(event.target.value);
    setFilter(value);
  };

  const handleEdit = (book: IBook) => {
    setSelectedBook(book);
    navigate('/editor');
  };

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    alert('Book was successfully deleted!');
    await refetchBooks();
  };

  const handleDeactivate = (id: number, active: boolean) => {
    deactivateBook(id, active).then(() => refetchBooks());
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <CustomSelect options={FILTER_OPTIONS} value={`${filter}`} onChange={handleSelectChange} />
        <h3 style={{ display: 'inline' }}>
          Show {filteredBooks.length} of {books.length}
        </h3>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <TableHead />
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id} className={book.active ? styles.active : styles.inactive}>
                <th>{book.title}</th>
                <th>{book.author}</th>
                <th>{book.category}</th>
                <th>{book.isbn}</th>
                <th>{formatDate(book.created)}</th>
                <th>{(book.modified && formatDate(book.modified)) || '--'}</th>
                <th>
                  <div className={styles.buttonContainer}>
                    <button
                      className={styles.button}
                      onClick={() => {
                        handleEdit(book);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => handleDeactivate(book.id, book.active)}
                    >
                      {book.active ? 'Deactivate' : 'Re-Activate'}
                    </button>
                    <button
                      className={styles.button}
                      disabled={book.active}
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
