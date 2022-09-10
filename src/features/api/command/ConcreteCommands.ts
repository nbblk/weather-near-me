import { apiType, markers } from '@common/constants/constants';
import {
  AirResponse,
  Info,
  MarkerPosition,
  QueryParams,
  WeatherResponse,
} from '@common/types/types';
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

export class MapMarkerInfo implements Command {
  execute(builder: EndpointBuilder<BaseQueryFn, string, string>) {
    return builder.query<Info[], []>({
      queryFn: async (args, _queryApi, _extraOptions, baseQuery) => {
        const weatherResults = await Promise.all(
          args.map((marker: MarkerPosition) =>
            baseQuery(
              getUrl({ type: apiType[0], lat: marker.lat, lon: marker.lon }),
            ),
          ),
        );
        const airResults = await Promise.all(
          args.map((marker: MarkerPosition) =>
            baseQuery(
              getUrl({ type: apiType[2], lat: marker.lat, lon: marker.lon }),
            ),
          ),
        );

        const weatherData = weatherResults.map((result) => result.data);
        const airData = airResults.map(
          (result) => result.data.list[0].components,
        );

        const newArr: Info[] = [];

        for (let i = 0; i < weatherData.length; i++) {
          const weather = weatherData[i];
          const air = airData[i];
          newArr.push({
            location: weather.name,
            temperature: weather.main.temp,
            minimumTemp: weather.main.temp_min,
            maximumTemp: weather.main.temp_max,
            humidity: weather.main.humidity,
            pm10: air.pm10,
            pm25: air.pm2_5,
          });
        }

        return { data: newArr };
      },
    });
  }
}
