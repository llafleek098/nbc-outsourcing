import React, { useRef } from 'react';
import styled from 'styled-components';
import KaKaoMap from '../components/location/KaKaoMap';
import KaKaoSearch from '../components/location/KaKaoSearch';
import store_bg from '../assets/img/store_bg.jpg';
import store_mbg from '../assets/img/store_mbg.jpg';
import PageBannerWrapper from '../components/common/PageBanner.styles';

function LocationPage() {
  const mapInstanceRef = useRef(null);

  return (
    <>
      <StBanner basicBg={store_bg} mobileBg={store_mbg}>
        <h2>Store</h2>
        <p>원하시는 지역의 매장을 검색해 보세요</p>
      </StBanner>
      <StWrapper>
        <KaKaoSearch mapInstanceRef={mapInstanceRef} />
        <KaKaoMap mapInstanceRef={mapInstanceRef} />
      </StWrapper>
    </>
  );
}
export default LocationPage;

const StWrapper = styled.div`
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
