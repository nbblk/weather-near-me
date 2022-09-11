/** @jsxImportSource @emotion/react */
import Card from '@common/components/atoms/Card/Card';
import CurrentWeather from '../../organisms/CurrentWeather/CurrentWeather';
import WeatherDigest from '../../organisms/WeatherDigest/WeatherDigest';

type Current = {
  data: {
    location: string;
    temperature: number;
    weather: string;
    pm10: number;
    pm25: number;
    maxTemp: number;
    minTemp: number;
    humidity: number;
  };
};

export default ({ data }: Current) => {
  return (
    <Card css={{ width: '100%' }}>
      <CurrentWeather
        location={data.location}
        temperature={data.temperature}
        weather={data.weather}
      />
      <WeatherDigest
        pm10={data.pm10}
        pm25={data.pm25}
        maxTemp={data.maxTemp}
        minTemp={data.minTemp}
        humidity={data.humidity}
      />
    </Card>
  );
};
