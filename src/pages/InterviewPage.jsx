import React from 'react';
import styled from 'styled-components';
import interviewBg from '../assets/img/interview_bg.jpg';
import InterviewForm from '../components/interview/InterviewForm';
import InterviewResult from '../components/interview/InterviewResult';
import InterviewProvider from '../contexts/interview.context';

function InterviewPage() {
  return (
    <InterviewProvider>
      <StBanner>
        <h2> WHAT'S YOUR FAVORITE PAIK'S</h2>
      </StBanner>
      <StInterviewWrapper>
        <InterviewForm />
        <InterviewResult />
      </StInterviewWrapper>
    </InterviewProvider>
  );
}
export default InterviewPage;

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
const StInterviewWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
