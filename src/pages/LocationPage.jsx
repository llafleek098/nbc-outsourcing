import { useEffect, useState } from 'react';
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MarkerClusterer
} from 'react-kakao-maps-sdk';
import styled from 'styled-components';

function LocationPage() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [currentPosition, setCurrentPosition] = useState({
    lat: 37.50231497199725,
    lng: 127.04484141806945
  });
  const [searchPlace, setSearchPlace] = useState('');
  console.log(markers);
  const searchPaik = () => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places(map);
    console.log(1);
    ps.keywordSearch(
      '빽다방',
      (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new window.kakao.maps.LatLngBounds();
          let markers = [];

          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x
              },
              content: data[i].place_name
            });
            // @ts-ignore
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);
        }
      },
      { useMapCenter: true, radius: 3000, useMapBounds: true }
    );
  };

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude // 경도
          });
        },
        (err) => {
          setCurrentPosition({
            lat: 37.566826,
            lng: 126.9786567
          });
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      setCurrentPosition({
        lat: 37.50231497199725,
        lng: 127.04484141806945
      });
    }
  }, []);
  useEffect(() => {
    console.log('map', map);
    searchPaik();
  }, [map]);

  const onSearchChanged = (e) => {
    setSearchPlace(e.target.value);
  };
  return (
    <Container>
      <Input value={searchPlace} onChange={onSearchChanged} />
      <Map // 로드뷰를 표시할 Container
        center={currentPosition}
        style={{
          width: '100%',
          height: '350px'
        }}
        level={5}
        onCreate={(map) => {
          setMap(map);
        }}
        // onCenterChanged={() => searchPaik()}
        onZoomChanged={() => searchPaik()}
        onDragEnd={() => searchPaik()}
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
        >
          {markers.map((marker) => (
            <MapMarker
              image={{
                src: 'https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png', // 마커이미지의 주소입니다
                size: {
                  width: 42,
                  height: 42
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 27,
                    y: 69
                  } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                }
              }}
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <CustomOverlayMap position={marker.position}>
                  <div style={{ color: '#000' }}>{marker.content}</div>
                </CustomOverlayMap>
              )}
            </MapMarker>
          ))}
        </MarkerClusterer>
      </Map>
    </Container>
  );
}

export default LocationPage;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  min-width: 760px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;
const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 300px;
  height: 50px;
  border: 4px solid #071f60;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
`;
