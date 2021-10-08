import { AxiosResponse } from 'axios';
import { apiConnection } from '../adapters/apiConnection';

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

class AlbumsRequestsService {
  constructor(private api = apiConnection()) {}

  async createAlbum(newAlbum: iAlbum): Promise<iAlbumResponse | false> {
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

export default AlbumsRequestsService;
