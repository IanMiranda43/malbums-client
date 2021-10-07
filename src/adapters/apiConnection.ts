import axios from 'axios';
import { useAuthContext } from 'contexts/AuthContext';

const { token } = useAuthContext();

export const apiConnection = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
