import React from 'react';
import useInterviewForm from '../../hooks/useInterviewForm';

const FormAges = () => {
  const { handleChange } = useInterviewForm();
  return (
    <fieldset name="ages" onChange={handleChange}>
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
  );
};

export default FormAges;
