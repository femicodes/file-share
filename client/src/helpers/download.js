import axios from 'axios';

const apiUrl = `http://localhost:9000`;

export const getDownloadInfo = (id) => {
  const url = `${apiUrl}/post/${id}`;
  return axios.get(url);
}