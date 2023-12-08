import React from 'react';
import styled from 'styled-components';
function CustomMapOverlay({ marker, handler }) {
  return (
    <StContentWrap>
      <StContents>
        <StTitleWrap>
          <StTitle>{marker.content}</StTitle>
          <StCloseBtn
            onClick={() => {
              handler(null);
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
            <StAddressInfo>{marker.address}</StAddressInfo>
            <StPhoneInfo>{marker.phone}</StPhoneInfo>
          </StStoreInfo>
        </StBodyContents>
      </StContents>
    </StContentWrap>
  );
}
export default CustomMapOverlay;

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
  cursor: pointer;
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
