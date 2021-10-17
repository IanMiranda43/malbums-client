import { AxiosResponse } from 'axios';
import ApiConnection from './ApiConnection';

export interface IUserResponse {
  id: string;
  token: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface IApiResponse {
  status: string;
  user?: IUserResponse;
  message?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  username: string;
  confirmPassword: string;
}

type ResponseType = AxiosResponse<IApiResponse>;

function handleTokenError(response: ResponseType) {
  const { status, data } = response;

  if (
    status !== 200 &&
    status !== 201 &&
    data.status === 'error' &&
    data.message === 'Invalid token'
  ) {
    return window.location.reload();
  }
}

class AuthenticationApi {
  constructor(private api = ApiConnection()) {}

  async register(userRequest: IUserRegister): Promise<IApiResponse> {
    const response = await this.api.post<IUserRegister, ResponseType>(
      '/register',
      userRequest,
    );

    handleTokenError(response);

    return response.data;
  }

  async login(userRequest: IUserLogin): Promise<IApiResponse> {
    const response = await this.api.post<IUserLogin, ResponseType>(
      '/authenticate',
      userRequest,
    );

    handleTokenError(response);

    return response.data;
  }

  async logout(): Promise<IApiResponse> {
    const response = await this.api.get<never, ResponseType>('/logout');

    handleTokenError(response);

    return response.data;
  }

  async delete(userRequest: IUserLogin): Promise<IApiResponse> {
    const response = await this.api.delete<IUserLogin, ResponseType>(
      '/authenticate',
      {
        data: userRequest,
      },
    );

    handleTokenError(response);

    return response.data;
  }
}

export default AuthenticationApi;
