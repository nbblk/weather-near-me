/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import {
  useGetCurrentAirInfoQuery,
  useGetAirForecastQuery,
  useGetCurrentWeatherInfoQuery,
  useGetWeatherForecastQuery,
} from '@features/api/apiSlice';
import { useGeolocation } from '@common/hooks/useGeolocation';
import Forecasts from '@common/components/templates/Forecasts/Forecasts';
import Current from '@common/components/templates/Current/Current';
import Loader from '@common/components/atoms/Loader/Loader';
import { apiType } from '@features/api/constants';

export default () => {
  const { lat, lon } = useGeolocation();

  const { data: weather } = useGetCurrentWeatherInfoQuery({
    type: apiType[0],
    lat,
    lon,
  });

  const { data: weatherForecast } = useGetWeatherForecastQuery({
    type: apiType[1],
    lat,
    lon,
  });

  const { data: air } = useGetCurrentAirInfoQuery({
    type: apiType[2],
    lat,
    lon,
  });

  const { data: airForecast } = useGetAirForecastQuery({
    type: apiType[3],
    lat,
    lon,
  });

  const mainStyles: CSSObject = {
    width: '100vw',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <main css={mainStyles}>
      {weather && air && (
        <Current
          data={{
            location: weather.location,
            temperature: weather.temperature,
            weather: weather.weather,
            pm10: air.pm10,
            pm25: air.pm25,
            maxTemp: weather.maximumTemp,
            minTemp: weather.minimumTemp,
            humidity: weather.humidity,
          }}
        />
      )}
      <Forecasts
        temperatures={weatherForecast?.temperatures}
        air={airForecast?.air}
      />
    </main>
  );
};
