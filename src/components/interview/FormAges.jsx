import React from 'react';
import { useInterviewForm } from '../../contexts/interview.context';
import { agesData } from './form.data';

const FormAges = () => {
  const { handleChange } = useInterviewForm();
  return (
    <fieldset name="ages" onChange={handleChange}>
      <legend>나이대</legend>
      {agesData.map((age) => (
        <>
          <input type="radio" name="ages" id={age.value} value={age.value} />
          <label htmlFor={age.value}>{age.label}</label>
        </>
      ))}
    </fieldset>
  );
};

export default FormAges;
