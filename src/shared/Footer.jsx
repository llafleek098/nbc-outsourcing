import React from 'react';
import styled from 'styled-components';
import thebornlogo from '../assets/img/thebornkorea.svg';

const Footer = () => {
  return (
    <StFooterContainer>
      <StFooterLogo src={thebornlogo}></StFooterLogo>
      <StFooterText>
        이 홈페이지는 교육 목적으로 제작하여 모든 저작권은 THEBORNKOREA(주)에
        있습니다.
        <br />
        COPYRIGHTⓒ 2018 THEBORN KOREA INC. ALL RIGHTS RESERVED
      </StFooterText>
    </StFooterContainer>
  );
};

const StFooterContainer = styled.div`
  background-color: white;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 75rem) {
    background-color: white;
  }
`;

const StFooterLogo = styled.img`
  width: 200px;
  margin-bottom: 5px;
  @media screen and (max-width: 75rem) {
    width: 150px;
  }
`;

const StFooterText = styled.p`
  font-size: 13px;
  color: #4c4d52;
  @media screen and (max-width: 75rem) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Footer;
