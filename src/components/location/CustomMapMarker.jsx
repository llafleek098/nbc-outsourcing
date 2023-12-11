import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
function CustomMapMarker({ children, ...rest }) {
  return (
    <MapMarker
      image={{
        src: 'https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png',
        size: {
          width: 42,
          height: 42
        },
        options: {
          offset: {
            x: 27,
            y: 69
          }
        }
      }}
      {...rest}
    >
      {children}
    </MapMarker>
  );
}
export default CustomMapMarker;
