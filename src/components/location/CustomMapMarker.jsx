import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
function CustomMapMarker({ children, ...rest }) {
  return (
    <MapMarker
      image={{
        src: 'https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png', // 마커이미지의 주소입니다
        size: {
          width: 42,
          height: 42
        },
        options: {
          offset: {
            x: 27,
            y: 69
          } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        }
      }}
      {...rest}
    >
      {children}
    </MapMarker>
  );
}
export default CustomMapMarker;
