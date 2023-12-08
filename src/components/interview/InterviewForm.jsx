import React from 'react';
import styled from 'styled-components';
import interviewBg from '../../assets/img/interview_bg.jpg';
import { useInterviewForm } from '../../contexts/interview.context';
import FormContentWrapper from './FormPage';
import {
  StNavigateButtonContainer,
  StNavigateButtonNext,
  StNavigateButtonPrev
} from './InterviewForm.styles';
import ProgressBar from './ProgressBar';
import { MAX_PAGE, pagesData } from './form.data';

function InterviewForm() {
  const { handleSubmit, handleNavigateNextPage, handleNavigatePrevPage, page } =
    useInterviewForm();

  const FormComponent = page < MAX_PAGE - 1 && pagesData[page].component;
  console.log(page);

  return (
    <StInterviewFormWrapper>
      <StBanner>
        <h2> WHAT'S YOUR FAVORITE PAIK'S</h2>
      </StBanner>
      {page < MAX_PAGE - 1 && (
        <>
          <ProgressBar page={page} />
          <StForm onSubmit={handleSubmit}>
            {page < MAX_PAGE - 1 && (
              <FormContentWrapper title={pagesData[page].title}>
                {<FormComponent />}
              </FormContentWrapper>
            )}
            <StNavigateButtonContainer>
              <StNavigateButtonPrev
                onClick={handleNavigatePrevPage}
                disabled={page === 0}
              >
                뒤로가기
              </StNavigateButtonPrev>
              <StNavigateButtonNext
                type="submit"
                onClick={handleNavigateNextPage}
              >
                계속하기
              </StNavigateButtonNext>
            </StNavigateButtonContainer>
          </StForm>
        </>
      )}
    </StInterviewFormWrapper>
  );
}

export default InterviewForm;
const StInterviewFormWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const StBanner = styled.div`
  background: url(${interviewBg}) center / cover no-repeat;
  height: 40rem;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 5rem;
    color: var(--primaryColor);
    font-weight: 900;
    letter-spacing: -3.9px;
  }
  margin-bottom: 4rem;
`;

const StForm = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
