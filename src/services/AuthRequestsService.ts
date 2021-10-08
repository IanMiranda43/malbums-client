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

export interface iApiResponse {
  status: string;
  user?: iUserResponse;
  message?: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserRegister extends iUserLogin {
  username: string;
  confirmPassword: string;
}

type AxiosApiResponse = AxiosResponse<iApiResponse>;

function handleTokenError(res: AxiosApiResponse) {
  const { status, data } = res;

  if (status !== 200) {
    if (data.status === 'error' && data.message === 'Invalid token') {
      return window.location.reload();
    }
  }
}

class AuthRequestsService {
  constructor(private api = apiConnection()) {}

  async register(userRequest: iUserRegister): Promise<iApiResponse> {
    const res = (await this.api.post(
      '/register',
      userRequest,
    )) as AxiosApiResponse;

    handleTokenError(res);

    return res.data;
  }

  async login(userRequest: iUserLogin): Promise<iApiResponse> {
    const res = (await this.api.post(
      '/authenticate',
      userRequest,
    )) as AxiosApiResponse;

    handleTokenError(res);

    return res.data;
  }

  async logout(): Promise<iApiResponse> {
    const res = (await this.api.get('/logout')) as AxiosApiResponse;

    handleTokenError(res);

    return res.data;
  }

  async delete(userRequest: iUserLogin): Promise<iApiResponse> {
    const res = (await this.api.delete('/authenticate', {
      data: userRequest,
    })) as AxiosApiResponse;

    handleTokenError(res);

    return res.data;
  }
}

export default AuthRequestsService;
