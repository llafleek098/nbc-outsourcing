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

function KaKaoMap({ mapInstanceRef }) {
  const {
    markers,
    currentPosition,
    selectedMarker,
    searchPaik,
    updateSelectedMarker
  } = useKakaoMap();

  const handleCreateMap = (map) => {
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = map;
      searchPaik(mapInstanceRef.current);
    }
  };
  const handleIdleMap = () => searchPaik(mapInstanceRef.current);

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
            <CustomMapOverlay marker={selectedMarker} />
          )}
        </CustomMapMarker>
      ))}
    </Map>
  );
}
export default KaKaoMap;
