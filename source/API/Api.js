import { API_URL, API_CLIENT_ID, QUERY, COUNT } from './';

export const response = async () => {
  const data = await fetch(
    `${API_URL}?query=${QUERY}&count=${COUNT}&client_id=${API_CLIENT_ID}`,
  );

  return data.json();
};
