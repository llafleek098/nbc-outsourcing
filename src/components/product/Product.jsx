import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import product_bg from '../../assets/img/product_bg.png';
import product_mbg from '../../assets/img/product_mbg.png';
import small_logo from '../../assets/img/small_Logo.png';
import useProduct from '../../hooks/useProduct';
import { default as PageBannerWrapper } from '../common/PageBanner.styles';
import { categories } from '../interview/forms/form.data';

function Product() {
  const [params] = useSearchParams();
  const selectedCategory = params.get('category') || '커피';
  const { products } = useProduct();

  return (
    <StProductContainer>
      <StProductHeaderContainer basicBg={product_bg} mobileBg={product_mbg}>
        <h2>paik's menu</h2>
        <p>빽다방에서 제공하는 메뉴를 확인해보세요</p>
      </StProductHeaderContainer>
      <main>
        <StSelectCategoryContainer>
          {categories.map((category) => {
            return (
              <StCategoryButton
                to={`/products?category=${category}`}
                $selectCategory={selectedCategory}
                key={category}
                value={category}
              >
                {category}
              </StCategoryButton>
            );
          })}
        </StSelectCategoryContainer>
        <StProductListContainer>
          {products &&
            selectedCategory &&
            products[selectedCategory]?.map(
              ({ name, imgSrc, subName, description }) => {
                return (
                  <StProductBox key={name}>
                    <StProductImg src={imgSrc} alt="productID" />
                    <StProductName>{name}</StProductName>
                    <StProductOverlay>
                      <h1>{name}</h1>
                      <h3>{subName}</h3>
                      <hr />
                      <p>{description}</p>
                    </StProductOverlay>
                  </StProductBox>
                );
              }
            )}
        </StProductListContainer>
      </main>
    </StProductContainer>
  );
}

// 전체를 감싸는 컨테이너
const StProductContainer = styled.div`
  margin: 0 auto 3rem auto;
  h2 {
    font-weight: bold;
  }
`;

// 헤더 전체 컨테이너

const StProductHeaderContainer = styled(PageBannerWrapper)`
  h2 {
    color: #6b4d30;
  }
  @media screen and (max-width: 37.5rem) {
    padding-bottom: 7%;
  }
  @media screen and (max-width: 30rem) {
    h2 {
      font-size: 3.5rem;
    }
    p {
      display: none;
    }
  }
`;

// 카테고리 탭 전체 컨테이너
const StSelectCategoryContainer = styled.ul`
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 37.5rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
// 카테고리 버튼
const StCategoryButton = styled(Link)`
  width: 25rem;
  min-height: 4rem;
  padding: 0.5rem 2rem;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
  transition: 0.3s;
  letter-spacing: 3px;
  &:hover {
    background-color: #ffe800;
    color: #071f60;
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
        background-color: #ffe800;
        color: #071f60;
      `;
    }
    return css`
      background-color: white;
      color: #7483aa;
    `;
  }}
`;

// 제품 카드 전체 리스트를 감싸는 컨테이너
const StProductListContainer = styled.div`
  max-width: 100rem;
  margin: auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  transition: all 0.3s;
  overflow: hidden;
  @media screen and (max-width: 60rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 37.5rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
// 제품 사진과 이름이 들어갈 박스
const StProductBox = styled.li`
  list-style-type: none;
  width: 100%;
  aspect-ratio: 3/4;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 60rem) {
    min-width: 13rem;
    width: 100%;
  }
  @media screen and (max-width: 37.5rem) {
    min-width: 13rem;
    width: 100%;
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
  width: 100%;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: block;
  position: absolute;
  text-align: center;
  color: #071f60;
  bottom: 5%;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
// 호버 시 올라오는 상품 설명 박스
const StProductOverlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  top: 0;
  left: 0;
  position: absolute;
  background: #ffe800;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: all 0.5s;
  transform: translateY(2.5rem);
  & h1 {
    font-size: 2.3rem;
    margin: 2rem 0 1.3rem 0;
  }
  & h3 {
    margin: 0 0 0.6rem 0.2rem;
  }
  & hr {
    border-color: #071f60;
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
  @media screen and (max-width: 37.5rem) {
    padding-top: 0.5rem;
    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default Product;
