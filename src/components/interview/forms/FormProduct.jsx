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
  const [searchValue, handleSearchValue, filteredProducts] = useSearchDebounce(
    products[category]
  );

  return (
    <>
      <StSelect name="category" onChange={handleChange}>
        {categoryData.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </StSelect>
      {products[category] && (
        <>
          <input
            type="text"
            maxLength={20}
            value={searchValue}
            onChange={handleSearchValue}
          />

          <StProductCardContainer>
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </StProductCardContainer>
        </>
      )}
    </>
  );
}

export default FormProduct;

const StSelect = styled.select`
  margin-top: 2rem;
`;
const StProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;

  gap: 2rem;
  margin: 2rem auto 4rem auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
