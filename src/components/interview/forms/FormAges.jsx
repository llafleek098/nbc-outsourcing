import React from 'react';
import styled from 'styled-components';
import { useInterviewForm } from '../../../contexts/interview.context';
import {
  StRadioInputContainer,
  StRadioInputWrapper
} from '../InterviewForm.styles';
import { agesData } from './form.data';

const FormAges = () => {
  const { ages, handleChange } = useInterviewForm();

  return (
    <StContainer onChange={handleChange}>
      {agesData.map((age) => (
        <StRadioInputWrapper key={age.value} $checked={ages === age.value}>
          <input type="radio" name="ages" id={age.value} value={age.value} />
          <label htmlFor={age.value}>{age.label}</label>
        </StRadioInputWrapper>
      ))}
    </StContainer>
  );
};

export default FormAges;

const StContainer = styled(StRadioInputContainer)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  gap: 0.5rem;
  padding: 0 0.5rem;

  label {
    padding: 1rem 0;
    cursor: pointer;
  }
`;
