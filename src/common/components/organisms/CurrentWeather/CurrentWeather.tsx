/** @jsxImportSource @emotion/react */
import Icon from '@common/components/atoms/Icon/Icon';
import { CSSObject } from '@emotion/react';
import { getWeatherImgPath } from '@common/utils/utils';

type CurrentWeather = {
  location: string;
  weather: string;
  temperature: number;
};

export default ({ location, temperature, weather }: CurrentWeather) => {
  const currentWeatherStyle: CSSObject = {
    width: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div css={currentWeatherStyle}>
      <h3>{location}</h3>
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Icon css={{ width: '150px', height: '150px', margin: '1rem' }}>
          <img
            src={getWeatherImgPath(weather)}
            alt={weather}
            width="100"
            height="100"
          />
        </Icon>
        <span
          css={{ fontSize: 'xxx-large', margin: '1rem' }}
        >{`${temperature}°C`}</span>
        <span css={{ alignSelf: 'flex-end' }}>{weather}</span>
      </div>
    </div>
  );
};
