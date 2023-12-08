import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

function LocationPage() {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [currentPosition, setCurrentPosition] = useState({
    lat: 37.50231497199725,
    lng: 127.04484141806945
  });
  const [place, setPlace] = useState([]);
  const [searchPlace, setSearchPlace] = useState();
  const onSearchChanged = (e) => {
    setSearchPlace(e.target.value);
  };

  console.log('place', place);
  console.log('markers', markers);

  const searchPaik = () => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places(map);
    ps.keywordSearch(
      '빽다방',
      (data, status, _pagination) => {
        setPlace(data);

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
              content: data[i].place_name,
              adress: data[i].road_address_name,
              phone: data[i].phone
            });
            //기능완성 후 처음부터 코드 분석해보기
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

  //장소검색
  const searchStore = (e) => {
    e.preventDefault();
    // 장소 검색 객체를 생성합니다
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(searchPlace, (data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new window.kakao.maps.LatLngBounds();

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
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  };
  return (
    <Container>
      <StoreMain>매장 안내</StoreMain>
      <SearchWrap onSubmit={searchStore}>
        <SearchTitle>매장명</SearchTitle>
        <SearchBox>
          <Input value={searchPlace} onChange={onSearchChanged} />
          <SearchButton>검색</SearchButton>
        </SearchBox>
        {/* 검색결과창 */}
        <SearchBodyContents>
          {place.map((item) => {
            return (
              <SearchContentList key={item.id}>
                <img
                  src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png"
                  alt="빽다방 로고"
                  width={50}
                  height={50}
                />
                <SearchStoreInfo>
                  <StoreTitle>{item.place_name}</StoreTitle>
                  <StoreAddress>{item.road_address_name}</StoreAddress>
                </SearchStoreInfo>
              </SearchContentList>
            );
          })}
        </SearchBodyContents>
      </SearchWrap>
      <Map // 로드뷰를 표시할 Container
        center={currentPosition}
        style={{
          width: '100%',
          height: '400px'
        }}
        level={5}
        onCreate={(map) => {
          setMap(map);
        }}
        // onCenterChanged={() => searchPaik()}
        onZoomChanged={() => searchPaik()}
        onDragEnd={() => searchPaik()}
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
              <ContentWrap>
                <Contents>
                  <TitleWrap>
                    <Title>{marker.content}</Title>
                    <CloseBtn
                      onClick={() => {
                        setInfo();
                      }}
                    >
                      x
                    </CloseBtn>
                  </TitleWrap>
                  <BodyContents>
                    <img
                      src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png"
                      width={42}
                      height={42}
                    />
                    <StoreInfo>
                      <AdressInfo>{marker.adress}</AdressInfo>
                      <PhoneInfo>{marker.phone}</PhoneInfo>
                    </StoreInfo>
                  </BodyContents>
                </Contents>
              </ContentWrap>
            )}
          </MapMarker>
        ))}
      </Map>
    </Container>
  );
}

export default LocationPage;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  min-width: 760px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const StoreMain = styled.h2`
  font-size: 24px;
  margin: 60px 0;
  color: #071f60;
  font-weight: 600;
`;

const SearchWrap = styled.form`
  position: absolute;
  top: 16rem;
  left: 2rem;
  width: 300px;
  z-index: 999;
  /* border: 4px solid #071f60; */
  background-color: #071f60;
  border-radius: 1rem;
`;
const SearchTitle = styled.div`
  font-size: 24px;
  padding: 1rem;
  color: white;
  font-weight: 600;
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
`;
const SearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #ffe800;
  font-weight: 800;
  font-size: 18px;
  padding: 0.5rem;
`;
const Input = styled.input`
  width: 75%;
  height: 50px;
  border: 4px solid #071f60;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
`;
const SearchBodyContents = styled.ul`
  background-color: white;
  border: 1px solid gray;
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;
  overflow-x: hidden;
  height: 230px;
  & img {
    padding: 0.5rem;
  }
`;
const SearchContentList = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid gray;
`;
const SearchStoreInfo = styled.div`
  margin-left: 1rem;
  font-size: 16px;
`;
const StoreTitle = styled.div`
  font-weight: bold;
`;
const StoreAddress = styled.div`
  font-size: 14px;
  margin-top: 0.5rem;
`;

const ContentWrap = styled.div`
  position: relative;
`;
const Contents = styled.div`
  position: absolute;
  top: -6.5rem;
  left: -1rem;
  border: 4px solid #ffe800;
  z-index: 999;
  width: 220px;
  background-color: white;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffe800;
  padding: 1rem;
`;
const Title = styled.div`
  font-size: 14px;
  color: #071f60;
  font-weight: 800;
`;
const CloseBtn = styled.button`
  background-color: transparent;
`;
const BodyContents = styled.div`
  display: flex;
`;

const StoreInfo = styled.div`
  padding: 1rem;
`;
const AdressInfo = styled.div`
  font-size: 14px;
`;

const PhoneInfo = styled.div`
  font-size: 14px;
`;
