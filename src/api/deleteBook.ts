import { API_URL } from '../configAPI';
import { Method } from '../types/enums';

export const deleteBook = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: Method.Delete });
    if (!response.ok) {
      alert(response.statusText);
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
};
