/** @jsxImportSource @emotion/react */
import Icon from '@common/components/atoms/Icon/Icon';
import { CSSObject } from '@emotion/react';

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
          alignItems: 'center',
        }}
      >
        <Icon children={undefined} css={{ width: '80px', height: '80px' }} />
        <p
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span css={{ position: 'relative', fontSize: 'xxx-large' }}>
            {`${temperature}°C`}
          </span>
          <span css={{ position: 'absolute', right: 0, margin: '0 1rem' }}>
            {weather}
          </span>
        </p>
      </div>
    </div>
  );
};
