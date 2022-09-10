/* global kakao */
import { useGetMapMarkerInfoQuery } from '@features/api/apiSlice';
import { markers } from '@common/constants/constants';
import { InfoWindow } from '@common/types/types';

const { kakao } = window;

export default () => {
  const { data: info } = useGetMapMarkerInfoQuery(markers);

  const createMarkers = (map: any) => {
    for (let i = 0; i < markers.length; i++) {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(markers[i].lat, markers[i].lon),
      });
      marker.setMap(map);

      createInfoWindow(
        { lat: markers[i].lat, long: markers[i].lon },
        marker,
        map,
        i,
      );
    }
  };

  const createInfoWindow = (
    position: { lat: number; long: number },
    marker: any,
    map: any,
    index: number,
  ) => {
    const infoWindowPosition = new kakao.maps.LatLng(
      position.lat,
      position.long,
    );
    addMouseListener(
      {
        position: infoWindowPosition,
        marker: marker,
        map: map,
      },
      index,
    );
  };

  const addMouseListener = (iw: InfoWindow, index: number) => {
    const infoWindow = new kakao.maps.InfoWindow({
      position: iw.position,
      content: getIwContent(index),
    });
    kakao.maps.event.addListener(iw.marker, 'mouseover', () =>
      infoWindow.open(iw.map, iw.marker),
    );
    kakao.maps.event.addListener(iw.marker, 'mouseout', () =>
      infoWindow.close(),
    );
  };

  const getIwContent = (index: number) => {
    return `<div style="width: 150px; text-align: center">
      <div style="width: 100%; background-color: #e7e7e7">${info[index].location}</div>
      <div>
        <span>temp</span>
        <span>${info[index].temperature}</span>
      </div>
      <div>
        <span>min</span>
        <span>${info[index].minimumTemp}</span>
      </div>
      <div>
        <span>max</span>
        <span>${info[index].maximumTemp}</span>
      </div>
      <div>
        <span>humidity</span>
        <span>${info[index].humidity}</span>
      </div>
      <div>
        <span>pm10</span>
        <span>${info[index].humidity}</span>
      </div>
      <div>
        <span>pm2.5</span>
        <span>${info[index].humidity}</span>
      </div>
      </div>`;
  };

  if (info) {
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
  }

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};
