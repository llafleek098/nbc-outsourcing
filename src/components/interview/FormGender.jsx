import React from 'react';
import { useInterviewForm } from '../../contexts/interview.context';

const FormGender = () => {
  const { handleChange } = useInterviewForm();
  return (
    <fieldset name="gender" onChange={handleChange}>
      <legend>성별</legend>
      <input type="radio" name="gender" id="male" value="male" />
      <label htmlFor="male">남성</label>
      <input type="radio" name="gender" id="female" value="female" />
      <label htmlFor="female">여성</label>
    </fieldset>
  );
};

export default FormGender;
