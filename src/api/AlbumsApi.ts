import { AxiosResponse } from 'axios';
import ApiConnection from './ApiConnection';

export interface iAlbum {
  name: string;
  artist: string;
  year: number;
  genre: string;
  total_time: number;
}

export interface iAlbumResponse extends iAlbum {
  id: string;
  created_at: string;
  updated_at: string;
}

interface iApiResponse {
  status: string;
  album: iAlbumResponse;
  message?: string;
}

type AxiosApiResponse = AxiosResponse<iApiResponse>;

function handleErrors(data: iApiResponse) {
  const { status, message } = data;

  if (status === 'error' && message === 'Invalid token') {
    return window.location.reload();
  }
}

class AlbumsApi {
  constructor(private api = ApiConnection()) {}

  async create(newAlbum: iAlbum): Promise<iAlbumResponse | false> {
    const { status, data } = (await this.api.post(
      '/album',
      newAlbum,
    )) as AxiosApiResponse;

    if (status !== 200 && data.status !== 'success') {
      handleErrors(data);
      return false;
    }

    return data.album;
  }
}

export default AlbumsApi;
