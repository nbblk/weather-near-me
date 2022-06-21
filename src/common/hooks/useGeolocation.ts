import { useEffect, useState } from 'react';

const defaultGeolocation = { lat: 37.5665, lon: 126.978 };

export const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState({
    lat: defaultGeolocation.lat,
    lon: defaultGeolocation.lon,
  });

  const getGeolocation = async () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject),
    );
  };

  useEffect(() => {
    const getLocation = async () => {
      await getGeolocation()
        .then((position: any) => {
          setGeolocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        })
        .catch((error: any) => {
          setGeolocation({
            ...defaultGeolocation,
          });
        });
    };
    getLocation();
  }, []);

  return { ...geolocation };
};
