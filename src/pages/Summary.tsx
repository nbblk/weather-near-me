/** @jsxImportSource @emotion/react */
import Card from '@/common/components/atoms/Card/Card';
import CurrentWeather from '@/common/components/organisms/CurrentWeather/CurrentWeather';
import WeatherDigest from '@/common/components/organisms/WeatherDigest/WeatherDigest';
import { CSSObject } from '@emotion/react';

export default () => {
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
        <CurrentWeather />
        <WeatherDigest />
      </Card>
      <div css={chartsStyles}>
        <Card css={{ width: '50%' }}>
          <div>chart1</div>
        </Card>
        <Card css={{ width: '50%' }}>
          <div>chart2</div>
        </Card>
      </div>
    </main>
  );
};
