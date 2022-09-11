import { MarkerPosition } from '@common/types/types';

export const BASE_URL = `https://api.openweathermap.org/data/2.5`;

export const apiType = [
  'weather',
  'forecast',
  'air_pollution',
  'air_pollution/forecast',
] as const;

export const markers: MarkerPosition[] = [
  {
    city: '서울',
    lat: 37.56667,
    lon: 126.97806,
  },
  {
    city: '부산',
    lat: 35.17944,
    lon: 129.07556,
  },
  {
    city: '인천',
    lat: 37.45639,
    lon: 126.70528,
  },
  {
    city: '대구',
    lat: 35.87222,
    lon: 128.6025,
  },
  {
    city: '안양',
    lat: 37.39444,
    lon: 126.95556,
  },
  {
    city: '대전',
    lat: 36.35111,
    lon: 127.385,
  },
  {
    city: '광주',
    lat: 35.15972,
    lon: 126.85306,
  },
  {
    city: '수원',
    lat: 37.26389,
    lon: 127.02861,
  },
  {
    city: '울산',
    lat: 35.53889,
    lon: 129.31667,
  },
  {
    city: '창원',
    lat: 35.22917,
    lon: 128.675,
  },
];
