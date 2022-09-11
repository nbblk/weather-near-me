/** @jsxImportSource @emotion/react */
import Icon from '@common/components/atoms/Icon/Icon';
import { CSSObject } from '@emotion/react';

type CurrentWeather = {
  location: string;
  weather: string;
  temperature: number;
};

enum weatherTypes {
  비 = 'rain',
  구름 = 'cloud',
  맑음 = 'sun',
  박무 = 'mist',
}

export default ({ location, temperature, weather }: CurrentWeather) => {
  const getWeatherImgPath = (weather: string) => {
    let path = `./src/common/assets/`;
    if (weather.includes('비')) {
      path += `${weatherTypes.비}.png`;
    }
    if (weather.includes('구름') || weather.includes('흐림')) {
      path += `${weatherTypes.구름}.png`;
    }
    if (weather.includes('맑음')) {
      path += `${weatherTypes.맑음}.png`;
    }
    if (weather.includes('박무')) {
      path += `${weatherTypes.박무}.png`;
    }
    return path;
  };

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
