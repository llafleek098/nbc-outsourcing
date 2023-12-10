import React from 'react';
import styled from 'styled-components';
import KaKaoMap from '../components/location/KaKaoMap';
import KaKaoSearch from '../components/location/KaKaoSearch';

function LocationPage() {
  return (
    <StWrapper>
      <KaKaoSearch />
      <KaKaoMap />
    </StWrapper>
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
