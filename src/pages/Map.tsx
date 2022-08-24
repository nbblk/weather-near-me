/* global kakao */
import {
  useGetCurrentAirInfoQuery,
  useGetCurrentWeatherInfoQuery,
} from '@features/api/apiSlice';
import { apiType, markers } from '@common/constants/constants';
import { useEffect } from 'react';

const { kakao } = window;

interface MarkerPosition {
  name: string;
  lat: number;
  long: number;
}

interface InfoWindow {
  position: MarkerPosition;
  marker: any;
  map: any;
}

export default () => {
  const { data: weather } = useGetCurrentWeatherInfoQuery({
    type: apiType[0],
    lat: markers[0].lat,
    lon: markers[0].long,
  });

  const { data: air } = useGetCurrentAirInfoQuery({
    type: apiType[2],
    lat: markers[0].lat,
    lon: markers[0].long,
  });

  console.log('weather', weather, 'air', air);

  const createMarkers = (map: any) => {
    markers.forEach((position: MarkerPosition) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(position.lat, position.long),
      });
      marker.setMap(map);

      createInfoWindow(position, marker, map);
    });
  };

  const createInfoWindow = (
    position: { lat: number; long: number },  
    marker: any,
    map: any,
  ) => {
    const infoWindowPosition = new kakao.maps.LatLng(
      position.lat,
      position.long,
    );
    addMouseListener({
      position: infoWindowPosition,
      marker: marker,
      map: map,
    });
  };

  const addMouseListener = (iw: InfoWindow) => {
    const infoWindow = new kakao.maps.InfoWindow({
      position: iw.position,
      content: getIwContent(),
    });
    kakao.maps.event.addListener(iw.marker, 'mouseover', () =>
      infoWindow.open(iw.map, iw.marker),
    );
    kakao.maps.event.addListener(iw.marker, 'mouseout', () =>
      infoWindow.close(),
    );
  };

  const getIwContent = () => {
    return `<div style="width: 150px; text-align: center">
      <div style="width: 100%; background-color: #e7e7e7">${weather.location}</div>
      <div>
        <span>temp</span>
        <span>${weather.temperature}</span>
      </div>
      <div>
        <span>min</span>
        <span>${weather.minimumTemp}</span>
      </div>
      <div>
        <span>max</span>
        <span>${weather.maximumTemp}</span>
      </div>
      <div>
        <span>humidity</span>
        <span>${weather.humidity}</span>  
      </div>
      <div>
        <span>pm10</span>
        <span>${air.pm10}</span>
      </div>
      <div>
        <span>pm2.5</span>
        <span>${air.pm25}</span>
      </div>
      </div>`;
  };

  useEffect(() => {
    const container = document.getElementById('map');

    const options = {
      center: new kakao.maps.LatLng(35.85133, 127.734086),
      // draggable: false,
      level: 13,
    };

    const map = new kakao.maps.Map(container, options);

    if (map) {
      createMarkers(map);
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};
