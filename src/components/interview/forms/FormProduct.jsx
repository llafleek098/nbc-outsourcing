import React from 'react';
import styled from 'styled-components';
import { useInterviewForm } from '../../../contexts/interview.context';
import useProduct from '../../../hooks/useProduct';
import useSearchDebounce from '../../../hooks/useSearchDebounce';
import ProductCard from './ProductCard';
import { categoryData } from './form.data';

function FormProduct() {
  const { handleChange, category } = useInterviewForm();

  const { products } = useProduct();

  const [searchValue, handleSearchValue] = useSearchDebounce(
    products[category]
  );

  const filteredProducts =
    products[category] &&
    products[category].filter((product) => product.name.includes(searchValue));
  return (
    <>
      <StSelectInputContainer>
      <StSelect name="category" onChange={handleChange}>
        {categoryData.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </StSelect>
      {category !== '선택해주세요' &&
      <StInput
        type="text"
        maxLength={20}
        value={searchValue}
        onChange={handleSearchValue}
        placeholder='메뉴 검색'
      />}
      </StSelectInputContainer>
      {products[category] && (
          <StProductCardContainer>
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </StProductCardContainer>
      )}
    </>
  );
}

export default FormProduct;

const StSelectInputContainer = styled.div`
  @media screen and (max-width: 30rem) {
    select,
    input {
      min-width: 16rem;
    }
  }
  @media screen and (max-width: 25rem) {
    width: 22rem;
    display: flex;
    flex-direction: column;
    select {
      width: 100%;
      min-width: 10rem;
      margin: 3.5rem auto 0.3rem auto;
    }
    input {
      width: 100%;
      margin: 0.3rem auto 2rem auto;
    }
  }
`

const StSelect = styled.select`
  min-width: 20rem;
  height: 2.5rem;
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  color: var(--primaryColor);
  border-radius: 0.5rem;
  outline: none;
  text-align-last: center;
  text-align: center;
  &:hover {
    border: 1.5px solid var(--primaryColor);
    box-shadow: 0 0 10px #a9a8e9;
  }
  `;

const StInput = styled.input`
  min-width: 20rem;
  height: 2.5rem;
  border: 1px solid #868686;
  border-radius: 0.5rem;
  text-align: center;
  outline-color: var(--primaryColor);
  margin: 3.5rem 0 2rem 1rem;
  &:hover {
    border: 1.5px solid var(--primaryColor);
    box-shadow: 0 0 10px #a9a8e9;
  }
`

const StProductCardContainer = styled.div`
  max-width: 100%;
  gap: 1rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  transition: all 0.3s;
  
  @media screen and (max-width: 60rem) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (max-width: 50rem) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 40rem) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 30rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 20rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
