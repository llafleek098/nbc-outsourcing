import React, { useState } from 'react'
import product_bg from '../../assets/img/product_bg.png'
import product_mbg from '../../assets/img/product_mbg.png'
import 뱅쇼hot from '../../assets/img/뱅쇼hot.png'
// import logo from '../../assets/img/Logo.png'
import styled from 'styled-components';
import { css } from 'styled-components';

function Product() {

  const productCategory = ['신메뉴', '커피', '음료', '디저트', '빽스치노']
  const [selectCategory, setSelectCategory] = useState('신메뉴');

  const handleOnClickSelectCategory = e => setSelectCategory(e.target.textContent)

  return (
    <>
  <StProductHeaderContainer>
    <StProductBgImg className='product_bg' src={product_bg} alt='product background' />
    <StProductBgImg className='product_mbg' src={product_mbg} alt='product mobile background' />
    <div>PAIK'S MENU</div>
  </StProductHeaderContainer>
  <main>
  <StSelectCategoryContainer>
    {productCategory.map(category => {
      return <StCategorybutton $selectCategory={selectCategory} key={category} onClick={handleOnClickSelectCategory}>{category}</StCategorybutton>
    })}
  </StSelectCategoryContainer>
  <StroductsContainer>
    <StProducts>
      <StProductImg src={뱅쇼hot} alt='productID' />
      <div>뱅쇼 HOT</div>
    </StProducts>
    <StProductExplanation className='hoverImg'></StProductExplanation>
  </StroductsContainer>
  </main>
    </>
  )
};

const StProductHeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    color: #6b4d30;
    font-size: 5rem;
    font-weight: bold;
    position: absolute;
  }
  .product_bg {
    display: block;
  }
  .product_mbg {
      display: none;
    }
  @media screen and (max-width: 37.5rem) {
    .product_bg {
    display: none;
  }
    .product_mbg {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 40rem;
      min-width: 20rem;
    }
    & div {
      font-size: 3.5rem;
      bottom: 7%;
    }
  }
`;

const StProductBgImg = styled.img`
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 50rem;
  object-fit: cover;
  margin: auto;
`;

const StSelectCategoryContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 10rem;
  @media screen and (max-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  `;

const StCategorybutton = styled.button`
  width: 20rem;
  padding: 0.5rem 2rem;
  border: 0.1rem solid white;
  font-size: 1.5rem;
  transition: 0.3s;
  &:hover {
    background-color: #FFE800;
    color: #071F60;
    cursor: pointer;
  }
  @media screen and (max-width: 37.5rem) {
    min-width: 13rem;
    width: 80%;
  }
  
  ${(props) => {
    if (props.$selectCategory === props.children) {
      return css`
        background-color: #FFE800;
        color: #071F60;
      `;
    }
    return css`
      background-color: #071F60;
      color: white;
    `
  }}
`;

const StroductsContainer = styled.div`
  transition: all 0.3s;
  max-width: 100rem;
  display: flex;
  justify-content: center;
  /* align-content: stretch; */
  /* flex-direction: row; */
  margin: auto;
  flex-wrap: wrap;
`;

const StProducts = styled.div`
  display: block;
  width: 20%;
  aspect-ratio: 3/4;
  border: 0.2rem solid #f1f1f1;
  position: relative;
  opacity: 1;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  overflow: hidden;
  & img {
    transform: scale(1);
    transition: transform 0.5s;
    opacity: 1;
    }
  &:hover {
    /* cursor: pointer; */
    & img { 
      transform: scale(1.1);
      transition: transform 0.5s;
      opacity: 5;
    }
    & .hoverImg {
      height: 100%;
    }
  }
  & div {
    color: #071F60;
    font-size: 2rem;
    font-weight: bolder;
    position: absolute;
    bottom: 5%;
  }
  @media screen and (max-width: 60rem) {
    min-width: 13rem;
    width: 40%;
  }
  @media screen and (max-width: 37.5rem) {
    min-width: 13rem;
    width: 80%;
  }
`;

const StProductImg = styled.img`
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
`;

const StProductExplanation = styled.div`
  background-color: #FFE800;
  width: 20%;
  aspect-ratio: 3/4;
  border: 0.1rem solid white;
  opacity: 5;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  /* overflow: hidden; */
  transition: all.4s;
  & div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* bottom: 10%;
    left: 42%; */
  }
  @media screen and (max-width: 60rem) {
    min-width: 13rem;
    width: 40%;
  }
  @media screen and (max-width: 37.5rem) {
    min-width: 13rem;
    width: 80%;
  }
`

export default Product;