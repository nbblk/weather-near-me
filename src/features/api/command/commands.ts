import { AirResponse, QueryParams, WeatherResponse } from '@common/types/types';
import { getUrl } from '@common/utils/utils';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Command } from './Command';

export class CurrentAirInfo implements Command {
  execute(builder: EndpointBuilder<BaseQueryFn, string, string>) {
    return builder.query<AirResponse, QueryParams>({
      query: (params: QueryParams) => getUrl({ ...params }),
      transformResponse: (response: any) => {
        const resp = response.list[0];
        return {
          dt: resp.dt,
          pm10: resp.components.pm10,
          pm25: resp.components.pm2_5,
        };
      },
    });
  }
}

export class AirForecast implements Command {
  execute(builder: EndpointBuilder<BaseQueryFn, string, string>) {
    return builder.query<{ air: AirResponse[] }, QueryParams>({
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
    });
  }
}

export class CurrentWeatherInfo implements Command {
  execute(builder: EndpointBuilder<BaseQueryFn, string, string>) {
    return builder.query<WeatherResponse, QueryParams>({
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
    });
  }
}

export class WeatherForecast implements Command {
  execute(builder: EndpointBuilder<BaseQueryFn, string, string>) {
    return builder.query<
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
    });
  }
}
