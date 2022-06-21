/** @jsxImportSource @emotion/react */
import Card from '@common/components/atoms/Card/Card';
import CurrentWeather from '@common/components/organisms/CurrentWeather/CurrentWeather';
import WeatherDigest from '@common/components/organisms/WeatherDigest/WeatherDigest';
import { CSSObject } from '@emotion/react';
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  useGetCurrentAirInfoQuery,
  useGetAirForecastQuery,
  useGetCurrentWeatherInfoQuery,
  useGetWeatherForecastQuery,
} from '@features/api/apiSlice';
import { useGeolocation } from '@common/hooks/useGeolocation';

export default () => {
  const { lat, lon } = useGeolocation();

  const {
    data: air,
    //    error,
    //    isLoading,
  } = useGetCurrentAirInfoQuery({
    type: 'air_pollution',
    lat: lat,
    lon: lon,
  });

  const {
    data: airForecast,
    //error,
    //isLoading,
  } = useGetAirForecastQuery({
    type: 'air_pollution/forecast',
    lat: lat,
    lon: lon,
  });

  const {
    data: weather,
    //  error,
    //  isLoading,
  } = useGetCurrentWeatherInfoQuery({
    type: 'weather',
    lat: lat,
    lon: lon,
  });

  const {
    data: weatherForecast,
    //   error,
    //   isLoading,
  } = useGetWeatherForecastQuery({
    type: 'forecast',
    lat: lat,
    lon: lon,
  });

  const mainStyles: CSSObject = {
    width: '100vw',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const chartsStyles: CSSObject = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <main css={mainStyles}>
      <Card css={{ width: '100%' }}>
        {weather && (
          <CurrentWeather
            location={weather.location}
            temperature={weather.temperature}
            weather={weather.weather}
          />
        )}{' '}
        {weather && air && (
          <WeatherDigest
            pm10={air.pm10}
            pm25={air.pm25}
            maxTemp={weather.maximumTemp}
            minTemp={weather.minimumTemp}
            humidity={weather.humidity}
          />
        )}{' '}
      </Card>
      <div css={chartsStyles}>
        <Card css={{ width: '50%' }}>
          <ResponsiveContainer height={400}>
            <LineChart
              data={weatherForecast?.temperatures}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="maximumTemp" stroke="#8884d8" />
              <Line type="monotone" dataKey="minimumTemp" stroke="#82ca9d" />
              <XAxis dataKey="dt" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card css={{ width: '50%' }}>
          <ResponsiveContainer height={400}>
            <BarChart
              data={airForecast?.air}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <XAxis dataKey="dt" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pm10" fill="#8884d8" />
              <Bar dataKey="pm25" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </main>
  );
};
