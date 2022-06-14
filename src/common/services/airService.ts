import axios from 'axios';
import { getUrl } from '@common/apis/apiHelper';

const fetchAir = async () => {
  const response = await (
    await axios.get(getUrl('air_pollution'))
  ).data.list[0];

  return {
    dt: response.dt,
    pm10: response.components.pm10,
    pm25: response.components.pm2_5,
  };
};

const fetchAirForecast = async () => {
  const response = await (
    await axios.get(getUrl('air_pollution/forecast'))
  ).data.list;

  const newAir = [] as any;

  response.forEach((element: any) => {
    const components = element.components;
    newAir.push({
      dt: element.dt,
      pm10: components.pm10,
      pm2_5: components.pm2_5,
    });
  });

  return {
    air: newAir,
  };
};

export { fetchAir, fetchAirForecast };
