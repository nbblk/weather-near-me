export const apiType = [
  'weather',
  'forecast',
  'air_pollution',
  'air_pollution/forecast',
] as const;
type ApiType = typeof apiType[keyof typeof apiType];

export type QueryParams = {
  type: ApiType;
  lat: number;
  lon: number;
};

export type AirResponse = {
  dt: string;
  pm10: number;
  pm25: number;
};

export type WeatherResponse = {
  dt: string;
  location: string;
  temperature: number;
  maximumTemp: number;
  minimumTemp: number;
  humidity: number;
  weather: string;
};
