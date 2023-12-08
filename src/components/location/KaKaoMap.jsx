import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoMap from '../../hooks/useKakaoMap';
import CustomMapMarker from './CustomMapMarker';
import CustomMapOverlay from './CustomMapOverlay';

const mapStyle = {
  width: '1200px',
  height: '400px',
  position: 'relative'
};
const initialZoom = 5;

function KaKaoMap() {
  const {
    mapInstance,
    markers,
    currentPosition,
    selectedMarker,
    searchPaik,
    updateSelectedMarker,
    updateMapInstance
  } = useKakaoMap();
  const handleCreateMap = (map) => {
    if (mapInstance) return;
    updateMapInstance(map);
    searchPaik();
  };
  const handleIdleMap = () => searchPaik();

  const handleSelectMarker = (marker) => () => {
    updateSelectedMarker(marker);
  };

  return (
    <Map
      center={currentPosition}
      style={mapStyle}
      level={initialZoom}
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
              // handler={update}
            />
          )}
        </CustomMapMarker>
      ))}
    </Map>
  );
}
export default KaKaoMap;
