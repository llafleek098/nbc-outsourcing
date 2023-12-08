import React from 'react';
import styled from 'styled-components';
import { useInterviewForm } from '../../../contexts/interview.context';
function ProductCard({ product }) {
  const { handleChange, productName } = useInterviewForm();
  return (
    <StProductCardWrapper
      onChange={handleChange}
      $checked={productName === product.name}
    >
      <label htmlFor={product.name} name="productName">
        <img src={product.imgSrc} alt={product.name} />
        <h3>{product.name}</h3>
        <input
          type="radio"
          name="productName"
          value={product.name}
          id={product.name}
        />
      </label>
    </StProductCardWrapper>
  );
}
export default ProductCard;

const StProductCardWrapper = styled.div`
  width: 100px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    border: 1px solid black;

    border-radius: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;

    background-color: ${(props) => (props.$checked ? 'lightblue' : 'white')};
  }
  img {
    width: 40px;
    height: 50px;
  }

  input {
    display: none;
  }
`;
