import { API_URL } from '../configAPI';
import { Method } from '../types/enums';
import { IBook } from '../types/interfaces';

export const updateBook = async (book: IBook) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(`${API_URL}/${book.id}`, {
      method: Method.Put,
      headers: headers,
      body: JSON.stringify(book),
    });
    if (!response.ok) {
      alert(response.statusText);
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
};
