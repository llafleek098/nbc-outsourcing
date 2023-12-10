import React from 'react';
import styled from 'styled-components';
import PageBannerWrapper from '../components/common/PageBanner.styles';
import KaKaoMap from '../components/location/KaKaoMap';
import KaKaoSearch from '../components/location/KaKaoSearch';
import location_bg from '../assets/img/store_bg.jpg';
import location_mbg from '../assets/img/store_mbg.jpg';

function LocationPage() {
  return (
    <StLocationWrapper>
      <StBanner basicBg={location_bg} mobileBg={location_mbg}>
        <h2>paik's store</h2>
        <p>원하시는 지역의 매장을 검색해 보세요</p>
      </StBanner>
      <StLocationMapWrapper>
        <KaKaoSearch />
        <KaKaoMap />
      </StLocationMapWrapper>
    </StLocationWrapper>
  );
}
export default LocationPage;

const StBanner = styled(PageBannerWrapper)`
  @media screen and (max-width: 37.5rem) {
    padding-bottom: 7%;
  }
  @media screen and (max-width: 30rem) {
    h2 {
      font-size: 3.5rem;
    }
    p {
      display: none;
    }
  }
`;

const StLocationWrapper = styled.div`
  /* position: relative;
  min-width: 760px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto; */
  margin: 0 auto 3rem auto;
`;

const StLocationMapWrapper = styled.div`
  max-width: 100rem;
  width: 100%;
  height: 60rem;
  margin: auto;
  position: relative;
  padding: 1rem;
`;
