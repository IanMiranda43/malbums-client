import { AxiosResponse } from 'axios';
import { apiConnection } from '../adapters/apiConnection';

export interface iUserResponse {
  id: string;
  token: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

interface iApiResponse {
  status: string;
  user: iUserResponse;
  message?: string;
}

interface iUserLogin {
  email: string;
  password: string;
}

interface iUserRegister extends iUserLogin {
  username: string;
  confirmPassword: string;
}

type AxiosApiResponse = AxiosResponse<iApiResponse>;

function handleErrors(data: iApiResponse) {
  const { status, message } = data;

  if (status === 'error' && message === 'Invalid token') {
    return window.location.reload();
  }
}

class AuthRequestsService {
  async register(userRequest: iUserRegister): Promise<iUserResponse | false> {
    const { status, data } = (await apiConnection.post(
      '/register',
      userRequest,
    )) as AxiosApiResponse;

    handleErrors(data);

    if (status !== 201 && data.status !== 'success') {
      return false;
    }

    return data.user;
  }

  async login(userRequest: iUserLogin): Promise<iUserResponse | false> {
    const { status, data } = (await apiConnection.post(
      '/authenticate',
      userRequest,
    )) as AxiosApiResponse;

    handleErrors(data);

    if (status !== 200 && data.status !== 'success') {
      return false;
    }

    return data.user;
  }

  async logout(): Promise<boolean> {
    const { status, data } = (await apiConnection.get(
      '/logout',
    )) as AxiosApiResponse;

    handleErrors(data);

    if (status !== 200 && data.status !== 'success') {
      return false;
    }

    return true;
  }

  async delete(userRequest: iUserLogin): Promise<boolean> {
    const { status, data } = (await apiConnection.delete('/authenticate', {
      data: userRequest,
    })) as AxiosApiResponse;

    handleErrors(data);

    if (status !== 200 && data.status !== 'success') {
      return false;
    }

    return true;
  }
}

export default AuthRequestsService;
