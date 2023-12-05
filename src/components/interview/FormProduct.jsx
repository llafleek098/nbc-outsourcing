import React from 'react';
import useInterviewForm from '../../hooks/useInterviewForm';

function FormProduct() {
  const { handleChange } = useInterviewForm();

  return (
    <fieldset>
      <legend>좋아하는 상품</legend>
      <select name="category" onChange={handleChange}>
        <option value={'카테고리'}>카테고리</option>
        <option value={'커피'}>커피</option>
        <option value={'음료'}>음료</option>
        <option value={'아이스크림/디저트'}>아이스크림/디저트</option>
        <option value={'빽스치노'}>빽스치노</option>
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
