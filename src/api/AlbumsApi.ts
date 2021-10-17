import { AxiosResponse } from 'axios';

import ApiConnection from './ApiConnection';

export interface IAlbum {
  name: string;
  artist: string;
  year: number;
  genre: string;
  total_time: number;
}
export interface IAlbumResponse extends IAlbum {
  id: string;
  created_at: string;
  updated_at: string;
}

interface IApiResponse {
  status: string;
  album?: IAlbumResponse;
  message?: string;
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

class AlbumsApi {
  constructor(private api = ApiConnection()) {}

  async create(newAlbum: IAlbum): Promise<IApiResponse | false> {
    const response = await this.api.post<IAlbum, ResponseType>(
      '/album',
      newAlbum,
    );

    handleTokenError(response);

    return response.data;
  }
}

export default AlbumsApi;
