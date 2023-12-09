import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import store_bg from '../assets/img/store_bg.jpg';
import store_mbg from '../assets/img/store_mbg.jpg';
import PageBannerWrapper from '../components/common/PageBanner.styles';

function LocationPage() {
  // info : selectedMarker
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
      (data, status) => {
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
    // console.log('map', map);
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
  const handleClickSearchContent = (marker) => {
    console.log(marker);
    setInfo(marker);
  };
  return (
    <Container>
      <StBanner basicBg={store_bg} mobileBg={store_mbg}>
        <h2>Store</h2>
        <p>원하시는 지역의 매장을 검색해 보세요</p>
      </StBanner>
      <StMapWrapper>
        <StSearchWrap onSubmit={searchStore}>
          <StSearchTitle>매장명</StSearchTitle>
          <StSearchBox>
            <StInput value={searchPlace} onChange={onSearchChanged} />
            <StSearchButton>검색</StSearchButton>
          </StSearchBox>
          {/* 검색결과창 */}
          <StSearchBodyContents>
            {place.map((item) => {
              //marker가 가지고 있는 것 : address, content, phone, position -> 'lat, lng'
              const newMarker = {
                address: item.address,
                content: item.place_name,
                phone: item.phone,
                position: {
                  lat: item.x,
                  lng: item.y
                }
              };
              return (
                <StSearchContentList
                  key={item.id}
                  onClick={() => handleClickSearchContent(newMarker)}
                >
                  <img
                    src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png"
                    alt="빽다방 로고"
                    width={50}
                    height={50}
                  />
                  <StSearchStoreInfo>
                    <StStoreTitle>{item.place_name}</StStoreTitle>
                    <StStoreAddress>{item.road_address_name}</StStoreAddress>
                  </StSearchStoreInfo>
                </StSearchContentList>
              );
            })}
          </StSearchBodyContents>
        </StSearchWrap>
      </StMapWrapper>
      <StyledMap // 로드뷰를 표시할 Container
        center={currentPosition}
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
              <StContentWrap>
                <StContents>
                  <StTitleWrap>
                    <StTitle>{marker.content}</StTitle>
                    <StCloseBtn
                      onClick={() => {
                        setInfo();
                      }}
                    >
                      x
                    </StCloseBtn>
                  </StTitleWrap>
                  <StBodyContents>
                    <img
                      src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png"
                      width={42}
                      height={42}
                    />
                    <StStoreInfo>
                      <StAddressInfo>{marker.adress}</StAddressInfo>
                      <StPhoneInfo>{marker.phone}</StPhoneInfo>
                    </StStoreInfo>
                  </StBodyContents>
                </StContents>
              </StContentWrap>
            )}
          </MapMarker>
        ))}
      </StyledMap>
    </Container>
  );
}

export default LocationPage;

const StyledMap = styled(Map)`
  width: 120rem;
  height: 80rem;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  min-width: 760px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;
const StBanner = styled(PageBannerWrapper)``;

const StMapWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;
const StSearchWrap = styled.form`
  position: absolute;
  left: -56rem;
  top: 1rem;
  width: 300px;
  z-index: 2;
  background-color: #071f60;
  border-radius: 1rem;
`;
const StSearchTitle = styled.div`
  font-size: 24px;
  padding: 1rem;
  color: white;
  font-weight: 600;
  margin: 0.5rem;
`;
const StSearchBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;
const StSearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #ffe800;
  font-weight: 800;
  font-size: 18px;
  padding: 0.5rem;
`;
const StInput = styled.input`
  width: 75%;
  height: 50px;
  padding: 10px 20px;
  border-radius: 1rem;
  margin: 0.5rem;
  &:focus {
    outline: none;
  }
`;
const StSearchBodyContents = styled.ul`
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
const StSearchContentList = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;
const StSearchStoreInfo = styled.div`
  margin-left: 1rem;
  font-size: 16px;
`;
const StStoreTitle = styled.div`
  font-weight: bold;
`;
const StStoreAddress = styled.div`
  font-size: 14px;
  margin-top: 0.5rem;
`;

const StContentWrap = styled.div`
  position: relative;
`;
const StContents = styled.div`
  position: absolute;
  top: -7rem;
  left: -1rem;
  border: 4px solid #ffe800;
  z-index: 999;
  width: 220px;
  background-color: white;
`;
const StTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffe800;
  padding: 1rem;
`;
const StTitle = styled.div`
  font-size: 14px;
  color: #071f60;
  font-weight: 800;
`;
const StCloseBtn = styled.button`
  background-color: transparent;
`;
const StBodyContents = styled.div`
  display: flex;
`;

const StStoreInfo = styled.div`
  padding: 1rem;
`;
const StAddressInfo = styled.div`
  font-size: 14px;
`;

const StPhoneInfo = styled.div`
  font-size: 14px;
`;
