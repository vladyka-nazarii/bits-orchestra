import { useContext, useState } from 'react';

import { CATEGORY_OPTIONS } from '../../utils/constants';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { CustomLabel } from '../CustomLabel/CustomLabel';
import { CustomInput } from '../CustomInput/CustomInput';
import { BookContext } from '../../context/BooksContext';
import { IBook } from '../../types/interfaces';
import { updateBook } from '../../api/updateBook';
import { addBook } from '../../api/addBook';
import { Loader } from '../UI/Loader/Loader';

import styles from './EditForm.module.scss';

export const EditForm = () => {
  const { books, refetchBooks, selectedBook, isLoading, setIsLoading, goToMain } =
    useContext(BookContext);

  const [title, setTitle] = useState(selectedBook?.title || '');
  const [author, setAuthor] = useState(selectedBook?.author || '');
  const [category, setCategory] = useState(selectedBook?.category || '');
  const [isbn, setIsbn] = useState(selectedBook?.isbn || '');
  const id = selectedBook?.id || Date.now();
  const created = selectedBook?.created || Date.now();
  const modified = selectedBook?.created ? Date.now() : null;
  const active = selectedBook?.created ? selectedBook?.active : true;

  const newBook: IBook = {
    id,
    title,
    author,
    category,
    isbn: +isbn,
    created,
    modified,
    active,
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async () => {
    setIsLoading(true);
    if (books.find((book) => id === book.id)) {
      await updateBook(newBook);
      alert('Book was updated successfully!');
    } else {
      await addBook(newBook);
      alert('Book was added successfully!');
    }

    await refetchBooks();
    goToMain();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <CustomLabel title='Book title'>
        <CustomInput value={title} onChange={(event) => setTitle(event.target.value)} />
      </CustomLabel>
      <CustomLabel title='Author name'>
        <CustomInput value={author} onChange={(event) => setAuthor(event.target.value)} />
      </CustomLabel>
      <CustomLabel title='Category'>
        <CustomSelect
          options={CATEGORY_OPTIONS}
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />
      </CustomLabel>
      <CustomLabel title='ISBN'>
        <CustomInput
          value={`${isbn}`}
          onChange={(event) => setIsbn(event.target.value)}
          type='number'
        />
      </CustomLabel>
      <button type='submit'>{selectedBook ? 'Edit the Book' : 'Add a Book'}</button>
    </form>
  );
};
