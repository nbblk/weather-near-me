/** @jsxImportSource @emotion/react */
import Card from '@common/components/atoms/Card/Card';
import CurrentWeather from '@common/components/organisms/CurrentWeather/CurrentWeather';
import WeatherDigest from '@common/components/organisms/WeatherDigest/WeatherDigest';
import { CSSObject } from '@emotion/react';
import { useEffect, useState } from 'react';
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
  fetchWeather,
  fetchWeatherForecast,
} from '../common/services/weatherService';
import { fetchAir, fetchAirForecast } from '../common/services/airService';

type Summary = {
  location: string;
  dt: number;
  weather: string;
  temperature: number;
  pm10: number;
  pm25: number;
  maximumTemp: number;
  minimumTemp: number;
  humidity: number;
};

export default () => {
  const [data, setData] = useState<Summary>({
    location: '',
    dt: 0,
    weather: '',
    temperature: 0,
    pm10: 0,
    pm25: 0,
    maximumTemp: 0,
    minimumTemp: 0,
    humidity: 0,
  });

  const [forecast, setForecast] = useState({
    temperatures: [] as any,
    air: [] as any,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await Promise.all([
        fetchWeather(),
        fetchAir(),
        fetchWeatherForecast(),
        fetchAirForecast(),
      ]);

      setData({ ...response[0], ...response[1] });
      setForecast({ ...response[2], ...response[3] });
    };
    try {
      fetchData();
    } catch (error: any) {
      alert(error.message);
    }
  }, []);

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
        <CurrentWeather
          location={data.location}
          temperature={data.temperature}
          weather={data.weather}
        />
        <WeatherDigest
          pm10={data.pm10}
          pm25={data.pm25}
          maxTemp={data.maximumTemp}
          minTemp={data.minimumTemp}
          humidity={data.humidity}
        />
      </Card>
      <div css={chartsStyles}>
        <Card css={{ width: '50%' }}>
          <ResponsiveContainer height={400}>
            <LineChart
              data={forecast.temperatures}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="temp_max" stroke="#8884d8" />
              <Line type="monotone" dataKey="temp_min" stroke="#82ca9d" />
              <XAxis dataKey="dt" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card css={{ width: '50%' }}>
          <ResponsiveContainer height={400}>
            <BarChart
              data={forecast.air}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <XAxis dataKey="dt" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pm10" fill="#8884d8" />
              <Bar dataKey="pm2_5" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </main>
  );
};
