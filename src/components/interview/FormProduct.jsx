import React from 'react';
import useInterviewForm from '../../hooks/useInterviewForm';
import { categoryData } from './form.data';

function FormProduct() {
  const { handleChange } = useInterviewForm();

  return (
    <fieldset>
      <legend>좋아하는 상품</legend>
      <select name="category" onChange={handleChange}>
        {categoryData.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <select name="product" onChange={handleChange}>
        <option value={'아메리카노'}>아메리카노</option>
        <option value={'카페라떼'}>카페라떼</option>
        <option value={'카페모카'}>카페모카</option>
      </select>
    </fieldset>
  );
}

export default FormProduct;
