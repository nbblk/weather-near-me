import { ApiType, baseURL, getUrl } from '@features/api/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type params = {
  type: ApiType;
  lat: number;
  lon: number;
};

type airResponse = {
  dt: number;
  pm10: number;
  pm25: number;
};

type weatherResponse = {
  dt: number;
  location: string;
  temperature: number;
  maximumTemp: number;
  minimumTemp: number;
  humidity: number;
  weather: string;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    getCurrentAirInfo: builder.query<airResponse, params>({
      query: (params: params) => getUrl(params.type, params.lat, params.lon),
      transformResponse: (response: any, meta, arg) => {
        const resp = response.list[0];
        return {
          dt: resp.dt,
          pm10: resp.components.pm10,
          pm25: resp.components.pm2_5,
        };
      },
    }),
    getAirForecast: builder.query<{ air: airResponse[] }, params>({
      query: (params: params) => getUrl(params.type, params.lat, params.lon),
      transformResponse: (response: any, meta, arg) => {
        const resp = response.list;
        const newAir = [] as any;

        resp.forEach((element: any) => {
          const components = element.components;
          newAir.push({
            dt: new Date(element.dt * 1000).toLocaleString(),
            pm10: components.pm10,
            pm2_5: components.pm2_5,
          });
        });

        return {
          air: newAir,
        };
      },
    }),
    getCurrentWeatherInfo: builder.query<weatherResponse, params>({
      query: (params: params) => getUrl(params.type, params.lat, params.lon),
      transformResponse: (response: any, meta, arg) => {
        const resp = response;
        return {
          dt: resp.dt,
          location: resp.name,
          temperature: resp.main.temp,
          maximumTemp: resp.main.temp_max,
          minimumTemp: resp.main.temp_min,
          humidity: resp.main.humidity,
          weather: resp.weather[0].description,
        };
      },
    }),
    getWeatherForecast: builder.query<
      { temperatures: weatherResponse[] },
      params
    >({
      query: (params: params) => getUrl(params.type, params.lat, params.lon),
      transformResponse: (response: any, meta, arg) => {
        const resp = response.list;
        const newWeather = [] as any;

        resp.forEach((element: any) => {
          const weather = element.main;
          newWeather.push({
            dt: new Date(element.dt * 1000).toLocaleString(),
            temp: weather.temp,
            temp_max: weather.temp_max,
            temp_min: weather.temp_min,
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
