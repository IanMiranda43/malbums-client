import axios from 'axios';
import { useAuthContext } from 'contexts/AuthContext';

export default function ApiConnection() {
  const { token } = useAuthContext();

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
