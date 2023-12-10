import React from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import useKakaoMap from '../../hooks/useKakaoMap';

function KaKaoSearch({ mapInstanceRef }) {
  const { markers, updateSelectedMarker, searchPaikPlace } = useKakaoMap();
  const [searchPlace, handleChangeSearchPlace] = useInput('');

  const handleSelectMarker = (marker) => () => {
    updateSelectedMarker(marker);
  };
  const handleSearchStore = (e) => {
    e.preventDefault();
    if (!searchPlace || searchPlace.length === 0) return;
    searchPaikPlace(mapInstanceRef.current, searchPlace);
  };

  return (
    <StMapWrapper>
      <StSearchWrap onSubmit={handleSearchStore}>
        <StSearchTitle>매장명</StSearchTitle>
        <StSearchBox>
          <StInput value={searchPlace} onChange={handleChangeSearchPlace} />
          <StSearchButton type="submit">검색</StSearchButton>
        </StSearchBox>
        <StSearchBodyContents>
          {markers.map((marker) => (
            //marker가 가지고 있는 것 : address, content, phone, position -> 'lat, lng'

            <StSearchContentList
              key={marker.id}
              onClick={handleSelectMarker(marker)}
            >
              <img
                src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png"
                alt="빽다방 로고"
                width={50}
                height={50}
              />
              <StSearchStoreInfo>
                <StStoreTitle>{marker.content}</StStoreTitle>
                <StStoreAddress>{marker.address}</StStoreAddress>
              </StSearchStoreInfo>
            </StSearchContentList>
          ))}
        </StSearchBodyContents>
      </StSearchWrap>
    </StMapWrapper>
  );
}
export default KaKaoSearch;
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
  z-index: 999;
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
