import 'dotenv/config';

type weatherParamsType = {
  baseDate: string; // 20220607
  baseTime: string; // 0500
  nx: number; // 55
  ny: number; // 127
};

export const getShorttermWeatherForecastUrl = (
  weatherParams: weatherParamsType,
) => {
  return `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.WEATHER_CERT_KEY}&numOfRows=10&pageNo=1
    &base_date=${weatherParams.baseDate}&base_time=${weatherParams.baseTime}&nx=${weatherParams.nx}&ny=${weatherParams.ny}&dataType=JSON`;
};
