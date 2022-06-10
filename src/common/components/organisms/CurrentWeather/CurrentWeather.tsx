/** @jsxImportSource @emotion/react */
import Icon from '@/common/components/atoms/Icon/Icon';
import Text from '@/common/components/atoms/Text/Text';
import { CSSObject } from '@emotion/react';
import { useState, useEffect } from 'react';

import { getShorttermWeatherForecastUrl } from '@/common/apis/weather';
import { getAirPollutionBySidoUrl } from '@/common/apis/air';
import { useFetch } from '@/common/hooks/useFetch';

type CurrentWeatherTypes = {
  location: string;
  weather: string;
  temperature: number;
  pm100: number;
  pm25: number;
  maximumTemp: number;
  minimumTemp: number;
};

export default () => {
  const [current, setCurrent] = useState<CurrentWeatherTypes>({
    location: '강남구 서초대로',
    weather: '',
    temperature: 0,
    pm100: 0,
    pm25: 0,
    maximumTemp: 0,
    minimumTemp: 0,
  });

  useEffect(() => {
    (async () => {
      const sampleData = {
        baseDate: '20220607',
        baseTime: '0500',
        nx: 55,
        ny: 127,
      };
      const weatherUrl = getShorttermWeatherForecastUrl(sampleData);
      const airData = getAirPollutionBySidoUrl('seoul');

      const weatherResponse = await useFetch(weatherUrl);
      const airResponse = await useFetch(airData);

      console.log(weatherResponse, airResponse);
    })();
  }, []);

  const currentWeatherStyle: CSSObject = {
    width: '100%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div css={currentWeatherStyle}>
      <h1>{current.location}</h1>
      <Icon children={undefined} css={{ width: '80px', height: '80px' }} />
      <Text value={current.weather} />
      <Text value={current.temperature} />
    </div>
  );
};
