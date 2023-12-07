import React, { useState } from 'react'
import product_bg from '../../assets/img/product_bg.png'
import product_mbg from '../../assets/img/product_mbg.png'
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
    <p>PAIK'S<br />&emsp;MENU</p>
  </StProductHeaderContainer>
  <main>
  <StSelectCategoryContainer>
    {productCategory.map(category => {
      return <StCategorybutton $selectCategory={selectCategory} key={category} onClick={handleOnClickSelectCategory}>{category}</StCategorybutton>
    })}
  </StSelectCategoryContainer>
  <StroductsContainer>
    <StProducts>

    </StProducts>
  </StroductsContainer>
  </main>
    </>
  )
};

const StProductHeaderContainer = styled.header`
  position: relative;
  & p {
    color: #6b4d30;
    font-size: 5rem;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 45%;
  }
  .product_bg {
    display: block;
  }
  .product_mbg {
      display: none;
    }
  @media screen and (max-width: 55rem) {
    & p {
      top: 50%;
      left: 40%;
    }
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
    & p {
      font-size: 3.5rem;
      top: 78%;
      left: 28%;
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
  display: flex;
  justify-content: center;
`;

const StProducts = styled.div`
  background-color: pink;
  width: 20rem;
  aspect-ratio: 3/4;
`;

export default Product;