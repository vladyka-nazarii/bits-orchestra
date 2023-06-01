import { API_URL } from '../configAPI';
import { Method } from '../types/enums';

export const deactivateBook = async (id: number, active: boolean) => {
  const data = {
    active: !active,
  };
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: Method.Patch,
      headers: headers,
      body: JSON.stringify(data),
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
