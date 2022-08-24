import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AirForecast,
  CurrentAirInfo,
  CurrentWeatherInfo,
  WeatherForecast,
} from './command/commands';
import { CommandManager } from './command/CommandManager';
import { BASE_URL } from '../../common/constants/constants';

const endpointGenerator = (
  builder: EndpointBuilder<BaseQueryFn, string, string>,
) => {
  const commandManager = new CommandManager(builder); // invoker
  return {
    getCurrentAirInfo: commandManager.setCommand(new CurrentAirInfo()),
    getAirForecast: commandManager.setCommand(new AirForecast()),
    getCurrentWeatherInfo: commandManager.setCommand(new CurrentWeatherInfo()),
    getWeatherForecast: commandManager.setCommand(new WeatherForecast()),
  };
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => endpointGenerator(builder),
});

export const {
  useGetCurrentAirInfoQuery,
  useGetAirForecastQuery,
  useGetCurrentWeatherInfoQuery,
  useGetWeatherForecastQuery,
} = apiSlice;
