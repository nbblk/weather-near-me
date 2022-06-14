import axios from 'axios';
import { getUrl } from '@common/apis/apiHelper';

const fetchWeather = async () => {
  const response = await (await axios.get(getUrl('weather'))).data;

  return {
    dt: response.dt,
    location: `${response.name}시`,
    temperature: response.main.temp,
    maximumTemp: response.main.temp_max,
    minimumTemp: response.main.temp_min,
    humidity: response.main.humidity,
    weather: response.weather[0].description,
  };
};
const fetchWeatherForecast = async () => {
  const response = await (await axios.get(getUrl('forecast'))).data.list;

  const newWeather = [] as any;

  response.forEach((element: any) => {
    const weather = element.main;
    newWeather.push({
      dt: element.dt,
      temp: weather.temp,
      temp_max: weather.temp_max,
      temp_min: weather.temp_min,
    });
  });

  return {
    temperatures: newWeather,
  };
};

export { fetchWeather, fetchWeatherForecast };
