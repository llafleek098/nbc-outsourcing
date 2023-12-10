import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import useKakaoMap from '../../hooks/useKakaoMap';

function KaKaoSearch() {
  const { markers, searchPaikPlace, mapInstanceRef, handleSelectMarker } =
    useKakaoMap();
  const [searchPlace, handleChangeSearchPlace] = useInput('');
  const [isShow, setShow] = useState(false);

  const handleSearchStore = (e) => {
    e.preventDefault();
    if (!searchPlace || searchPlace.length === 0 || !mapInstanceRef.current)
      return;
    searchPaikPlace(mapInstanceRef.current, searchPlace);
  };
  const handleToggleShow = () => setShow((prev) => !prev);

  return (
    <StSearchWrapper>
      <StSearchFormWrapper $isShow={isShow}>
        <StSearchForm onSubmit={handleSearchStore} $isShow={isShow}>
          <StSearchTitle>매장명</StSearchTitle>
          <StSearchBox>
            <StInput value={searchPlace} onChange={handleChangeSearchPlace} />
            <StSearchButton type="submit">검색</StSearchButton>
          </StSearchBox>
        </StSearchForm>
        <StSearchBodyContents>
          {markers.map((marker) => (
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
      </StSearchFormWrapper>
      <StSearchIconWrapper onClick={handleToggleShow}>
        {!isShow ? <FaSearch /> : <MdClose />}
      </StSearchIconWrapper>
    </StSearchWrapper>
  );
}
export default KaKaoSearch;
const StSearchWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 30rem;
  z-index: 2;

  @media screen and (max-width: 600px) {
    width: 100%;
    top: 0;
    left: 0;
    padding: 1rem;
    height: 50%;
  }
`;
const StSearchFormWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: ${(props) => (props.$isShow ? 'block' : 'none')};
  }
`;

const StSearchForm = styled.form`
  background-color: var(--primaryColor);
  border-radius: 1rem 1rem 0 0;
`;

const StSearchTitle = styled.div`
  font-size: 24px;
  padding: 1rem;
  color: white;
  font-weight: 600;
`;
const StSearchBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
`;
const StSearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: var(--accentColor);
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
  border-radius: 0 0 1rem 1rem;
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

const StSearchIconWrapper = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  background-color: var(--accentColor);
  color: var(--primaryColor);

  border-radius: 50%;
  overflow: hidden;

  width: 4rem;
  height: 4rem;
  * {
    width: 100%;
    height: 100%;
    scale: 0.7;
    transition: all 0.2s ease-in-out;
    transform-origin: center;
  }

  :hover * {
    scale: 0.9;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
