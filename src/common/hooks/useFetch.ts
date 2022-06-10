import { useState, useEffect } from 'react';

import axios, { AxiosResponse } from 'axios';

interface DataTypes {
  response: AxiosResponse | null;
  errorMessage: string;
  isLoaded: boolean;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<DataTypes>({
    response: null,
    errorMessage: '',
    isLoaded: false,
  });

  useEffect(() => {
    async () => {
      try {
        const response = await axios.get(url);
        setData({ ...data, response: response, isLoaded: true });
      } catch (error: any) {
        setData({ ...data, errorMessage: error.message, isLoaded: true });
      }
    };
  }, []);

  return { ...data };
};
