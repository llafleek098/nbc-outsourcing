import React from 'react';

function InterviewForm() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form>
      <fieldset onChange={handleChange}>
        <legend>나이대</legend>
        <input type="radio" name="age" id="10ages" value="10ages" />
        <label htmlFor="10ages">10대</label>
        <input type="radio" name="age" id="20ages" value="20ages" />
        <label htmlFor="20ages">20대</label>
        <input type="radio" name="age" id="30ages" value="30ages" />
        <label htmlFor="30ages">30대</label>
        <input type="radio" name="age" id="40ages" value="40ages" />
        <label htmlFor="40ages">40대</label>
        <input type="radio" name="age" id="50ages" value="50ages" />
        <label htmlFor="50ages">50대</label>
        <input type="radio" name="age" id="60ages" value="60ages" />
        <label htmlFor="60ages">60대</label>
      </fieldset>
      <fieldset onChange={handleChange}>
        <legend>성별</legend>
        <input type="radio" name="gender" id="male" value="male" />
        <label htmlFor="male">남성</label>
        <input type="radio" name="gender" id="female" value="female" />
        <label htmlFor="female">여성</label>
      </fieldset>
      <fieldset onChange={handleChange}>
        <legend>좋아하는 상품</legend>
        <select>
          <option value={'카테고리'}>카테고리</option>
          <option value={'커피'}>커피</option>
          <option value={'음료'}>음료</option>
          <option value={'아이스크림/디저트'}>아이스크림/디저트</option>
          <option value={'빽스치노'}>빽스치노</option>
        </select>
        <select>
          <option value={'아메리카노'}>아메리카노</option>
          <option value={'카페라떼'}>카페라떼</option>
          <option value={'카페모카'}>카페모카</option>
        </select>
      </fieldset>
    </form>
  );
}

export default InterviewForm;
