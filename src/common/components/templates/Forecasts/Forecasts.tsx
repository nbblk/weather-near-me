/** @jsxImportSource @emotion/react */

import Card from '@common/components/atoms/Card/Card';
import { CSSObject } from '@emotion/react';
import { AirResponse, WeatherResponse } from '@common/types/types';
import AirForecastChart from '../../organisms/Chart/AirForecastChart/AirForecastChart';
import WeatherForecastChart from '../../organisms/Chart/WeatherForecastChart/WeatherForecastChart';

type Forecasts = {
  temperatures: Partial<WeatherResponse>[] | undefined;
  air: AirResponse[] | undefined;
};

const chartsStyles: CSSObject = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export default ({ temperatures, air }: Forecasts) => {
  return (
    <div css={chartsStyles}>
      <Card css={{ width: '50%' }}>
        <WeatherForecastChart data={temperatures} />
      </Card>
      <Card css={{ width: '50%' }}>
        <AirForecastChart data={air} />
      </Card>
    </div>
  );
};
