export const BASE_URL = `https://api.openweathermap.org/data/2.5`;

export const apiType = [
  'weather',
  'forecast',
  'air_pollution',
  'air_pollution/forecast',
] as const;

export const markers = [
  {
    name: '서울',
    lat: 37.56667,
    long: 126.97806,
  },
  {
    name: '부산',
    lat: 35.17944,
    long: 129.07556,
  },
  {
    name: '인천',
    lat: 37.45639,
    long: 126.70528,
  },
  {
    name: '대구',
    lat: 35.87222,
    long: 128.6025,
  },
  {
    name: '안양',
    lat: 37.39444,
    long: 126.95556,
  },
  {
    name: '대전',
    lat: 36.35111,
    long: 127.385,
  },
  {
    name: '광주',
    lat: 35.15972,
    long: 126.85306,
  },
  {
    name: '수원',
    lat: 37.26389,
    long: 127.02861,
  },
  {
    name: '울산',
    lat: 35.53889,
    long: 129.31667,
  },
  {
    name: '창원',
    lat: 35.22917,
    long: 128.675,
  },
];