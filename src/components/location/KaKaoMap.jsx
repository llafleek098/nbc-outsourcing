import React, { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import CustomMapMarker from './CustomMapMarker';
import CustomMapOverlay from './CustomMapOverlay';

const initialState = {
  lat: 37.50231497199725,
  lng: 127.04484141806945
};

const mapStyle = {
  width: '1200px',
  height: '400px',
  position: 'relative'
};
const initialZoom = 5;

function KaKaoMap() {
  const [currentPosition, setCurrentPosition] = useState(initialState);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);

  const searchPaik = () => {
    if (!mapRef.current) return;
    const placeSearchInstance = new window.kakao.maps.services.Places(
      mapRef.current
    );

    placeSearchInstance.keywordSearch(
      '빽다방',
      (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          const responseMarkers = data.map((marker) => {
            bounds.extend(new window.kakao.maps.LatLng(marker.y, marker.x));
            return {
              position: {
                lat: marker.y,
                lng: marker.x
              },
              content: marker.place_name,
              address: marker.address_name,
              phone: marker.phone
            };
          });
          setMarkers(responseMarkers);
        }
      },
      { useMapCenter: true, radius: 3000, useMapBounds: true }
    );
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  const handleCreateMap = () => {
    if (mapRef.current) {
      searchPaik();
    }
  };
  const handleIdleMap = () => searchPaik();

  const handleSelectMarker = (marker) => () => setSelectedMarker(marker);

  return (
    <Map
      center={currentPosition}
      style={mapStyle}
      level={initialZoom}
      ref={mapRef}
      onCreate={handleCreateMap}
      onIdle={handleIdleMap}
    >
      {markers.map((marker) => (
        <CustomMapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={handleSelectMarker(marker)}
        >
          {selectedMarker?.content === marker.content && (
            <CustomMapOverlay
              marker={selectedMarker}
              handler={setSelectedMarker}
            />
          )}
        </CustomMapMarker>
      ))}
    </Map>
  );
}
export default KaKaoMap;
