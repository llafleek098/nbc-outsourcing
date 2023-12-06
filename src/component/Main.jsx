import React from 'react'
import bg1 from '../assets/img/main_bg1.jpg'
import bg2 from '../assets/img/main_bg2.jpg'
import bg3 from '../assets/img/main_bg3.jpg'
import styled from 'styled-components'

function Main() {
  return (
    <div>
      <StYouTubeWrapper><div style={{border: '2px solid red', height: '100%', width: '100%', maxWidth: '1280px', maxHeight: '720px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '2rem'}}></div></StYouTubeWrapper>
      <StEntireContainer>
        <StMenuWrapper>
          <StBgImg src={bg1} />
          <p>PAIK'S MENU</p> 
        </StMenuWrapper>
        <StFavoriteStoreContainer>
          <StFavoriteWrapper>
            <StBgImg src={bg2} />
            <p>WHAT'S YOUR<br />
            FAVORITE<br />
            PAIK'S</p>
          </StFavoriteWrapper>
          <StStoreWrapper>
            <StBgImg src={bg3} />
            <p>PAIK'S STORE</p>
          </StStoreWrapper>
        </StFavoriteStoreContainer>
      </StEntireContainer>
    </div>
  )
}

const StYouTubeWrapper = styled.div`
  background-color: pink;
  width: 100%;
  aspect-ratio: 1.78/1;
  position: relative;
`;

const StEntireContainer = styled.div`
  display: flex;
  @media screen and (max-width: 76.8rem) {
    display: flex;
    flex-direction: column;
  }
`

const StMenuWrapper = styled.div`
  height: 50rem;
  width: 50%;
  position: relative;
  & p {
    color: #6b4d30;
    font-size: 5rem;
    font-weight: bold;
    position: absolute;
    top: 70%;
    left: 8%;
  }
  @media screen and (max-width: 76.8rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const StBgImg = styled.img`
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
`

const StFavoriteStoreContainer = styled.div`
  height: 50rem;
  width: 50%;
  @media screen and (max-width: 76.8rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const StFavoriteWrapper = styled.div`
  height: 25rem;
  position: relative;
  & p {
    color: #071F60;
    font-size: 5rem;
    font-weight: bold;
    position: absolute;
    top: 13%;
    left: 7%;
    @media screen and (max-width: 76.8rem) {
    color: #071F60;
    font-size: 5rem;
    font-weight: bold;
    position: absolute;
    top: 17%;
    left: 7%;
    }
  }
  @media screen and (max-width: 76.8rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const StStoreWrapper = styled.div`
  height: 25rem;
  position: relative;
  & p {
    color: white;
    font-size: 5rem;
    font-weight: bold;
    position: absolute;
    bottom: 15%;
    right: 5%;
    @media screen and (max-width: 76.8rem) {
    color: white;
    font-size: 5rem;
    font-weight: bold;
    position: absolute;
    bottom: 15%;
    right: 5%;
    }
  }
  @media screen and (max-width: 76.8rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export default Main;