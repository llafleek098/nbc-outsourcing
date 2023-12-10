import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import useKakaoMap from '../../hooks/useKakaoMap';
import CustomMapMarker from './CustomMapMarker';
import CustomMapOverlay from './CustomMapOverlay';

const mapStyle = {
  width: '100%',
  height: '100%',
  position: 'relative'
};
const initialZoom = 5;

function KaKaoMap() {
  const {
    markers,
    currentPosition,
    selectedMarker,
    handleCreatedMap,
    handleIdleMap,
    handleSelectMarker
  } = useKakaoMap();

  return (
    <Map
      center={currentPosition}
      style={mapStyle}
      level={initialZoom}
      onCreate={handleCreatedMap}
      onIdle={handleIdleMap}
    >
      {markers.map((marker) => (
        <CustomMapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={handleSelectMarker(marker)}
        >
          {selectedMarker?.content === marker.content && (
            <CustomMapOverlay marker={selectedMarker} />
          )}
        </CustomMapMarker>
      ))}
    </Map>
  );
}
export default KaKaoMap;
