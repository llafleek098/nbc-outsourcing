import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import paiksLogo from '../assets/img/header_logo.png';

const HeaderStyle = styled.div`
  background-color: #e6e7e8;
  width: 100vw;
  height: 100px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 300px;
  padding-right: 300px;
`;

const HeaderButton = styled.button`
  background-color: transparent;
  font-size: 23px;
  font-weight: 600;
  color: #071f60;
  cursor: pointer;
`;

const LogoButton = styled.button`
  cursor: pointer;
  background-color: transparent;
`;

const PaiksCoffeeLogo = styled.img`
  margin-left: 20px;
  width: auto;
`;

const HeaderContainer = () => {
  return (
    <HeaderStyle>
      <Link to="/">
        <LogoButton>
          <PaiksCoffeeLogo src={paiksLogo} />
        </LogoButton>
      </Link>
      <Link to="/products">
        <HeaderButton>메뉴</HeaderButton>
      </Link>
      <Link to="/location">
        <HeaderButton>매장 안내</HeaderButton>
      </Link>
      <Link to="/interview">
        <HeaderButton>고객의 소리</HeaderButton>
      </Link>
    </HeaderStyle>
  );
};
export default HeaderContainer;
