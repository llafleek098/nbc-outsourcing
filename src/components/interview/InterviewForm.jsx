import React from 'react';
import styled from 'styled-components';
import { useInterviewForm } from '../../contexts/interview.context';
import FormInputs from './forms/FormInputs';
import ProgressBar from './forms/ProgressBar';
import { MAX_PAGE } from './forms/form.data';

function InterviewForm() {
  const {
    handleSubmit,
    handleNavigateNextPage,
    handleNavigatePrevPage,
    page,
    isDisablePrev,
    isDisableNext,
    isDisableSubmit
  } = useInterviewForm();

  return (
    page < MAX_PAGE && (
      <>
        <ProgressBar page={page} />
        <StForm onSubmit={handleSubmit}>
          <FormInputs />
          <StNavigateButtonContainer>
            <StNavigateButtonPrev
              type="button"
              onClick={handleNavigatePrevPage}
              disabled={isDisablePrev}
            >
              뒤로가기
            </StNavigateButtonPrev>
            <StNavigateButtonNext
              type="button"
              disabled={isDisableNext}
              onClick={handleNavigateNextPage}
            >
              계속하기
            </StNavigateButtonNext>
            <StNavigateButtonNext type="submit" disabled={isDisableSubmit}>
              제출하기
            </StNavigateButtonNext>
          </StNavigateButtonContainer>
        </StForm>
      </>
    )
  );
}

export default InterviewForm;

const StForm = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StNavigateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;
const StNavigateButton = styled.button`
  padding: 1rem 5rem;
  border-radius: 1rem;
  cursor: pointer;
  &:disabled {
    display: none;
  }
`;
const StNavigateButtonPrev = styled(StNavigateButton)`
  background-color: var(--secondaryColor);
`;
const StNavigateButtonNext = styled(StNavigateButton)`
  background-color: var(--primaryColor);
  color: white;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--accentColor);
    color: black;
  }
`;
