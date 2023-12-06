import React from 'react';
import { useInterviewForm } from '../../contexts/interview.context';
import useProduct from '../../hooks/useProduct';
import { categoryData } from './form.data';

function FormProduct() {
  const { handleChange, category } = useInterviewForm();
  const { products } = useProduct();

  return (
    <fieldset>
      <legend>좋아하는 상품</legend>
      <select name="category" onChange={handleChange}>
        {categoryData.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select name="product" onChange={handleChange}>
        {products?.[category] ? (
          products[category].map((product) => (
            <option key={product.name} value={product.name}>
              {product.name}
            </option>
          ))
        ) : (
          <option value={''}>선택해주세요</option>
        )}
      </select>
    </fieldset>
  );
}

export default FormProduct;
