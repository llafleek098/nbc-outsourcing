import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import paiksLogo from '../assets/img/header_logo.png';

const HeaderContainer = () => {
  return (
    <StHeaderStyle>
      <Link to="/">
        <StLogoButton>
          <StPaiksCoffeeLogo src={paiksLogo} />
        </StLogoButton>
      </Link>
      <Link to="/products">
        <StHeaderButton>메뉴</StHeaderButton>
      </Link>
      <Link to="/location">
        <StHeaderButton>매장 안내</StHeaderButton>
      </Link>
      <Link to="/interview">
        <StHeaderButton>선호 조사</StHeaderButton>
      </Link>
    </StHeaderStyle>
  );
};
const StHeaderStyle = styled.div`
  background-color: white;
  width: 100vw;
  height: 100px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 300px;
  padding-right: 300px;
  position: sticky;
  top: 0;
  z-index: 10; //헤더 맨 앞으로 불러오는
  @media screen and (max-width: 75rem) {
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    height: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StHeaderButton = styled.button`
  background-color: transparent;
  font-size: 23px;
  font-weight: 600;
  color: #071f60;
  cursor: pointer;
`;

const StLogoButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  @media screen and (max-width: 75rem) {
  }
`;

const StPaiksCoffeeLogo = styled.img`
  margin-left: 20px;
  width: auto;
  @media screen and (max-width: 75rem) {
    width: 120px;
  }
`;

export default HeaderContainer;
