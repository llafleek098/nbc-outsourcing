import React from 'react'
import product_bg from '../../assets/img/product_bg.png'
import product_mbg from '../../assets/img/product_mbg.png'
import styled from 'styled-components';

function Product() {

  const productCategory = ['신메뉴', '커피', '음료', '디저트/아이스크림', '빽스치노']

  return (
    <>
  <ProductHeader>
    <StProductBgImg className='product_bg' src={product_bg} alt='product_background' />
    <StProductBgImg className='product_mbg' src={product_mbg} alt='product_mobile_background' />
    <p>PAIK'S<br />&emsp;MENU</p>
  </ProductHeader>
  <main>
    {productCategory.map(category => {
      <button key={productCategory}>{category}</button>
    })}
  </main>
    </>
  )
}

const ProductHeader = styled.header`
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
    }
    & p {
      font-size: 3.5rem;
      top: 78%;
      left: 28%;
    }
  }
`

const StProductBgImg = styled.img`
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 50rem;
  object-fit: cover;
  margin: auto;
`;

export default Product;