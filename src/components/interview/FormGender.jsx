import React from 'react';
import styled from 'styled-components';
import { useInterviewForm } from '../../contexts/interview.context';
import {
  StRadioInputContainer,
  StRadioInputWrapper
} from './InterviewForm.styles';

const FormGender = () => {
  const { handleChange, gender } = useInterviewForm();

  const isChecked = (gender) => gender === 'male';

  return (
    <StContainer name="gender" onChange={handleChange}>
      <StRadioInputWrapper $checked={isChecked(gender)}>
        <input type="radio" name="gender" id="male" value="male" />
        <label htmlFor="male">남성</label>
      </StRadioInputWrapper>
      <StRadioInputWrapper $checked={!isChecked(gender)}>
        <input type="radio" name="gender" id="female" value="female" />
        <label htmlFor="female">여성</label>
      </StRadioInputWrapper>
    </StContainer>
  );
};

export default FormGender;

const StContainer = styled(StRadioInputContainer)`
  display: flex;
  flex-direction: row;

  margin-bottom: 2rem;

  justify-content: stretch;
  align-items: stretch;
  gap: 4rem;

  label {
    padding: 1rem 0;
    font-size: 1.5rem;
  }

  li {
    flex: 1;
  }
`;
