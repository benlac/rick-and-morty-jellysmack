import { Params } from '@/models/store';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

class Api {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (params: Params | null) => {
    const str = params
      ? Object.entries(params)
          .map(([key, val]) => `${key}=${val}`)
          .join('&')
      : '';
    return await this.fetch(str, 'GET');
  };

  getById = async (id: number) => {
    return await this.fetch(`/${id}`);
  };

  fetch = async (path = '', method: Method = 'GET') => {
    const url = `${this.endpoint}${path}`;
    const req = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    return await fetch(url, req).then((res) => res.json());
  };
}

export default Api;
