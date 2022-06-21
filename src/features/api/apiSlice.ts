import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AirResponse, QueryParams, WeatherResponse } from './types';

const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const getUrl = ({ type, lat, lon }: QueryParams) =>
  `/${type}?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${
    import.meta.env.VITE_AIR_POLLUTION_API_KEY
  }`;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCurrentAirInfo: builder.query<AirResponse, QueryParams>({
      query: (params: QueryParams) => getUrl({ ...params }),
      transformResponse: (response: any) => {
        const resp = response.list[0];
        return {
          dt: resp.dt,
          pm10: resp.components.pm10,
          pm25: resp.components.pm2_5,
        };
      },
    }),
    getAirForecast: builder.query<{ air: AirResponse[] }, QueryParams>({
      query: (params: QueryParams) => getUrl({ ...params }),
      transformResponse: (response: any) => {
        const resp = response.list;
        const newAir = [] as AirResponse[];

        resp.forEach((element: any) => {
          const components = element.components;
          newAir.push({
            dt: new Date(element.dt * 1000).toLocaleString(),
            pm10: components.pm10,
            pm25: components.pm2_5,
          });
        });

        return {
          air: newAir,
        };
      },
    }),
    getCurrentWeatherInfo: builder.query<WeatherResponse, QueryParams>({
      query: (params: QueryParams) => getUrl({ ...params }),
      transformResponse: (response: any) => {
        const resp = response;
        return {
          dt: resp.dt,
          location: resp.name,
          temperature: resp.main.temp,
          maximumTemp: resp.main.temp_max,
          minimumTemp: resp.main.temp_min,
          humidity: resp.main.humidity,
          weather: resp.weather[0].description,
          weather_en: resp.weather[0].main,
        };
      },
    }),
    getWeatherForecast: builder.query<
      { temperatures: Partial<WeatherResponse>[] },
      QueryParams
    >({
      query: (params: QueryParams) => getUrl({ ...params }),
      transformResponse: (response: any) => {
        const resp = response.list;
        const newWeather = [] as Partial<WeatherResponse>[];

        resp.forEach((element: any) => {
          const weather = element.main;
          newWeather.push({
            dt: new Date(element.dt * 1000).toLocaleString(),
            temperature: weather.temp,
            maximumTemp: weather.temp_max,
            minimumTemp: weather.temp_min,
          });
        });

        return {
          temperatures: newWeather,
        };
      },
    }),
  }),
});

export const {
  useGetCurrentAirInfoQuery,
  useGetAirForecastQuery,
  useGetCurrentWeatherInfoQuery,
  useGetWeatherForecastQuery,
} = apiSlice;
