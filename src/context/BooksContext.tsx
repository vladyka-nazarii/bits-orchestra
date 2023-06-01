import { createContext, memo, PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IBook } from '../types/interfaces';
import { getBooks } from '../api/getBooks';

interface IBooksContext {
  books: IBook[];
  refetchBooks: () => Promise<void>;
  filter: boolean | null;
  setFilter: React.Dispatch<React.SetStateAction<boolean | null>>;
  selectedBook: IBook | null;
  setSelectedBook: React.Dispatch<React.SetStateAction<IBook | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  goToMain: () => void;
}

const initialBooksContext: IBooksContext = {
  books: [],
  refetchBooks: async () => {
    //
  },
  filter: true,
  setFilter: () => {
    //
  },
  selectedBook: null,
  setSelectedBook: () => {
    //
  },
  isLoading: false,
  setIsLoading: () => {
    //
  },
  error: null,
  goToMain: () => {
    //
  },
};

export const BookContext = createContext<IBooksContext>(initialBooksContext);

export const BooksProvider = memo(({ children }: PropsWithChildren) => {
  const [books, setBooks] = useState<IBook[]>(initialBooksContext.books);
  const [filter, setFilter] = useState<boolean | null>(initialBooksContext.filter);
  const [selectedBook, setSelectedBook] = useState<IBook | null>(initialBooksContext.selectedBook);
  const [isLoading, setIsLoading] = useState<boolean>(initialBooksContext.isLoading);
  const [error, setError] = useState<string | null>(initialBooksContext.error);

  const navigate = useNavigate();

  const goToMain = () => {
    setSelectedBook(null);
    navigate('/');
  };

  const refetchBooks = async () => {
    setIsLoading(true);
    const { newBooks, newErorr } = await getBooks();
    setBooks(newBooks);
    setError(newErorr);
    setIsLoading(false);
  };

  useEffect(() => {
    refetchBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        refetchBooks,
        filter,
        setFilter,
        selectedBook,
        setSelectedBook,
        isLoading,
        setIsLoading,
        error,
        goToMain,
      }}
    >
      {children}
    </BookContext.Provider>
  );
});
