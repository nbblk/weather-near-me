import { QueryParams } from '@features/api/types';

export const getUrl = ({ type, lat, lon }: QueryParams) => {
  return `/${type}?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${
    import.meta.env.VITE_AIR_POLLUTION_API_KEY
  }`;
};
