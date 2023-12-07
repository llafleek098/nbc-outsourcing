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
        <StHeaderButton>고객의 소리</StHeaderButton>
      </Link>
    </StHeaderStyle>
  );
};
const StHeaderStyle = styled.div`
  background-color: #e6e7e8;
  width: 100vw;
  height: 100px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  padding-left: 300px;
  padding-right: 300px;
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
`;

const StPaiksCoffeeLogo = styled.img`
  margin-left: 20px;
  width: auto;
`;

export default HeaderContainer;
