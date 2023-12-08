import React, { useState } from 'react'
import product_bg from '../../assets/img/product_bg.png'
import product_mbg from '../../assets/img/product_mbg.png'
import 뱅쇼hot from '../../assets/img/뱅쇼hot.png'
import styled from 'styled-components';
import { css } from 'styled-components';
import small_logo from '../../assets/img/small_Logo.png'

function Product() {

  const productCategory = ['신메뉴', '커피', '음료', '디저트', '빽스치노']
  const [selectCategory, setSelectCategory] = useState('신메뉴');

  const handleOnClickSelectCategory = e => setSelectCategory(e.target.textContent)

  return (
    <StProductContainer>
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

      <StProductsContainer>
        <StProductBox>
          <StProductImg src={뱅쇼hot} alt='productID' />
          <StProductName>뱅쇼(HOT)</StProductName>
            <StProductOverlay>
              <h1>뱅쇼(HOT)</h1>
              <h3>VIN CHAUD</h3>
              <hr />
              <p>상큼한 과일향과 풍부한 시나몬향이 매력적인 메뉴</p>
            </StProductOverlay>
        </StProductBox>
      </StProductsContainer>
      </main>
  </StProductContainer>
  )
};

// 전체를 감싸는 컨테이너
const StProductContainer = styled.div`
  margin: 0 auto;
  div, button {
    font-weight: bold;
  }
`;

// 헤더 전체 컨테이너
const StProductHeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    color: #6b4d30;
    letter-spacing: -5px;
    font-size: 5rem;
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

// 헤더 배경이미지
const StProductBgImg = styled.img`
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 50rem;
  object-fit: cover;
  margin: auto;
`;
// 카테고리 탭 전체 컨테이너
const StSelectCategoryContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
// 카테고리 버튼
const StCategorybutton = styled.button`
  width: 20rem;
  padding: 0.5rem 2rem;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  transition: 0.3s;
  letter-spacing: 3px;
  &:hover {
    background-color: #FFE800;
    color: #071F60;
    cursor: pointer;
  }
  @media screen and (max-width: 37.5rem) {
    min-width: 13rem;
    width: 80%;
  }
  /* 눌러지는 카테고리마다 조건부 css */
  ${(props) => {
    if (props.$selectCategory === props.children) {
      return css`
        background-color: #FFE800;
        color: #071F60;
      `;
    }
    return css`
      background-color: white;
      color: #7483aa;
    `
  }}
`;

// 제품 카드 전체를 감싸는 컨테이너
const StProductsContainer = styled.div`
  max-width: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  margin: auto;
  flex-wrap: wrap;
  overflow: hidden;
`;
// 제품 사진과 이름이 들어갈 박스
const StProductBox = styled.div`
  width: 20rem;
  aspect-ratio: 3/4;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 60rem) {
    min-width: 13rem;
    width: 40%;
  }
  @media screen and (max-width: 37.5rem) {
    min-width: 13rem;
    width: 80%;
  }
`;
// 상품 카드 안에 들어갈 이미지
const StProductImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
// 상품 카드 안에 들어갈 이름
const StProductName = styled.h1`
  font-size: 1.7rem;
  position: absolute;
  color: #071F60;
  bottom: 5%;
`;
// 호버 시 올라오는 상품 설명 박스
const StProductOverlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  top: 0;
  left: 0;
  position: absolute;
  background: #FFE800;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: all .5s;
  transform: translateY(2.5rem);
  & h1 {
    font-size: 2.3rem;
    margin: 2rem 0 1.3rem 0;
  }
  & h3 {
    margin: 0 0 0.6rem 0.2rem;
  }
  & hr {
    border-color: #071F60;
    width: 100%;
  }
  & p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  &:hover {
    opacity: 0.7;
    transform: translateY(0rem);
    cursor: url(${small_logo}) 5 5, default;
  }
`;

export default Product;