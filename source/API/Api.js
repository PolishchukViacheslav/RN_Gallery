import { API_URL, API_CLIENT_ID, QUERY } from './';

export const response = async () => {
  const URL = `${API_URL}?query=${QUERY}&client_id=${API_CLIENT_ID}`;
  const data = await fetch(URL);
  console.log(URL);

  return data.json();
};
