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

  async create(albumData: IAlbum) {
    const response = await this.api.post<IAlbum, ResponseType>(
      '/album',
      albumData,
    );

    handleTokenError(response);

    return response;
  }

  async findById(id: string) {
    const response = await this.api.get<never, ResponseType>(`/album/${id}`);

    handleTokenError(response);

    return response;
  }

  async update(albumData: IAlbum, albumId: string) {
    const response = await this.api.put<IAlbum, ResponseType>(
      `/album/${albumId}`,
      albumData,
    );

    handleTokenError(response);

    return response;
  }

  async delete(id: string) {
    const response = await this.api.delete<never, ResponseType>(`/album/${id}`);

    handleTokenError(response);

    return response;
  }

  async list() {
    const response = await this.api.get<never, ResponseType>('/albums/list');

    handleTokenError(response);

    return response;
  }

  async search(search: string) {
    const response = await this.api.get<never, ResponseType>(
      `/albums/find/search=${search}`,
    );

    handleTokenError(response);

    return response;
  }
}

export default AlbumsApi;
