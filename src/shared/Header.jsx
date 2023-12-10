import React from 'react';
import { FaStore } from 'react-icons/fa';
import { GiArchiveResearch } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
      <StNavContainer>
        <Link to="/products">
          <StHeaderButton>메뉴</StHeaderButton>
          <MdRestaurantMenu />
        </Link>
        <Link to="/location">
          <StHeaderButton>매장 안내</StHeaderButton>
          <FaStore />
        </Link>

        <Link to="/interview">
          <StHeaderButton>선호 조사</StHeaderButton>
          <GiArchiveResearch />
        </Link>
      </StNavContainer>
    </StHeaderStyle>
  );
};
const StHeaderStyle = styled.div`
  background-color: white;
  width: 100%;
  height: 100px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  gap: 5rem;
  top: 0;
  z-index: 10; // 헤더 맨 앞으로 불러오는 속성
  @media screen and (max-width: 75rem) {
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }
  @media screen and (max-width: 30rem) {
    justify-content: space-between;
    gap: 0;
  }
`;
const StNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  color: var(--primaryColor);
  a svg {
    display: none;
  }

  @media screen and (max-width: 37.5rem) {
    a svg {
      display: block;
    }
    a button {
      display: none;
    }
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
  @media screen and (max-width: 30rem) {
    margin-left: 0;
  }
`;

export default HeaderContainer;
