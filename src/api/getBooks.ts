import { API_URL } from '../configAPI';
import { IBook } from '../types/interfaces';

export const getBooks = async () => {
  let newBooks: IBook[] = [];
  let newErorr: string | null = null;

  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      newBooks = await response.json();
    } else {
      newErorr = response.statusText;
    }
  } catch (error) {
    if (error instanceof Error) {
      newErorr = error.message;
    }
  }

  return { newBooks, newErorr };
};
