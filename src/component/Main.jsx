import React from 'react'
import bg1 from '../assets/img/main_bg1.jpg'
import bg2 from '../assets/img/main_bg2.jpg'
import bg3 from '../assets/img/main_bg3.jpg'
import logo from '../assets/img/Logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Main() {

  return (
    <div>
      <StYouTubeWrapper>
        <StYouTubeVideo>
        </StYouTubeVideo>
      </StYouTubeWrapper>
      <StEntireContainer>
        <StMenuLinkWrapper to='/products'>
          <StBgImg className='bg1' src={bg1} alt='products background img' />
          <p>PAIK'S MENU</p>
          <StMenuButtonBox>
            <PlusButton/>
          </StMenuButtonBox>
        </StMenuLinkWrapper>
        <StFavoriteStoreContainer>
          <StFavoriteWrapper to='/interview'>
            <StBgImg src={bg2} alt='interview background img' />
            <p>WHAT'S YOUR<br />
            FAVORITE<br />
            PAIK'S</p>
            <StFavoriteButtonBox>
            <PlusButton/>
            </StFavoriteButtonBox>
          </StFavoriteWrapper>
          <StStoreWrapper to='/location'>
            <StBgImg src={bg3} alt='location background img' />
            <p>PAIK'S STORE</p>
            <StStoreButtonBox>
            <PlusButton/>
            </StStoreButtonBox>
          </StStoreWrapper>
        </StFavoriteStoreContainer>
      </StEntireContainer>
    </div>
  )
}

// 유튜브가 들어갈 공간
const StYouTubeWrapper = styled.div`
  background-color: pink;
  width: 100%;
  aspect-ratio: 1.78/1;
  position: relative;
`;
// 유튜브 크기 지정
const StYouTubeVideo = styled.div`
  border: 1px solid red;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  max-height: 720px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
`;

// 페이지 이동 컴포넌트가 모두 들어있는 가장 큰 컨테이너
const StEntireContainer = styled.div`
  display: flex;
  font-size: 5rem;
  @media screen and (max-width: 75rem) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    font-size: 4rem;
  }
  `;
  // 각 컴포넌트에 들어갈 배경이미지 사이즈 지정
  const StBgImg = styled.img`
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
  `;
// 메뉴 페이지 이동 컴포넌트(링크)
const StMenuLinkWrapper = styled(Link)`
  height: 50rem;
  width: 50%;
  position: relative;
  overflow: hidden;
  & .bg1 {
  transform: scale(1.0);
  transition: transform 0.5s;
  }
  & p {
    color: #6b4d30;
    font-weight: bold;
    position: absolute;
    top: 70%;
    left: 7%;
  }
  &:hover {
    cursor: pointer;
    & .bg1 {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
  @media screen and (max-width: 75rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
// 메뉴 페이지 이동 버튼 애니메이션 박스(위치 지정)
const StMenuButtonBox = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  perspective: 110rem;
  top: 10%;
  right: 5%;
  &:hover {
    & div {
      transform: rotateY(180deg);
    }
  }
`;
// 메뉴 페이지 이동 버튼 애니메이션을 위한 추가 박스
const StButtonAnimation = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
`
// 플러스 모양 버튼(앞면)
const StMoveButton = styled.button`
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 50%;
  font-size: 4rem;
  text-align: center;
  line-height: 1.2;
  &:hover {
    cursor: pointer;
  }
`;
// 호버 시 바뀌는 이미지(뒷면)
const StSwitchLogoImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  &:hover {
    cursor: pointer;
  }
`;
// 선호도 조사&매장 검색 페이지 정렬 및 css 위한 컨테이너
const StFavoriteStoreContainer = styled.div`
  height: 50rem;
  width: 50%;
  @media screen and (max-width: 75rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
// 선호도 조사 페이지 이동 컴포넌트(링크)
const StFavoriteWrapper = styled(Link)`
  display: block;
  height: 50%;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  & p {
    color: #071F60;
    font-weight: bold;
    position: absolute;
    top: 13%;
    left: 7%;
  }
`;
// 선호도 조사 페이지 이동 버튼 애니메이션 박스(위치 지정)
const StFavoriteButtonBox = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  perspective: 110rem;
  bottom: 10%;
  right: 5%;
  &:hover {
    & div {
      transform: rotateY(180deg);
    }
  }
`;
// 매장 검색 페이지 이동 컴포넌트(링크)
const StStoreWrapper = styled(Link)`
  display: block;
  height: 50%;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  & p {
    color: white;
    font-weight: bold;
    position: absolute;
    bottom: 15%;
    right: 5%;
  }
`;
// 매장 검색 페이지 이동 버튼 애니메이션 박스(위치 지정)
const StStoreButtonBox = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  perspective: 110rem;
  top: 10%;
  left: 5%;
  &:hover {
    & div {
      transform: rotateY(180deg);
    }
  }
`;

// 반복되는 플러스 버튼 함수화
const PlusButton = () => {
  return (
    <StButtonAnimation>
      <StMoveButton>+</StMoveButton>
      <StSwitchLogoImg src={logo} />
    </StButtonAnimation>
  )
}

export default Main;