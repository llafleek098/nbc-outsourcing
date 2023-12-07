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
  justify-content: space-evenly;
`;

const HeaderButton = styled.button`
  background-color: transparent;
  font-size: 25px;
  font-weight: 600;
`;

const PaiksCoffeeLogo = styled.img`
  margin-left: 20px;
  width: auto;
`;

const HeaderContainer = () => {
  return (
    <HeaderStyle>
      <Link to="/products/:productId">
        <HeaderButton>메뉴</HeaderButton>
      </Link>
      <HeaderButton>매장 안내</HeaderButton>
      <HeaderButton>고객의 소리</HeaderButton>

      <PaiksCoffeeLogo src={paiksLogo} />
    </HeaderStyle>
  );
};
export default HeaderContainer;
