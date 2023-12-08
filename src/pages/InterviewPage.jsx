import React from 'react';
import styled from 'styled-components';
import interview_bg from '../assets/img/interview_bg.jpg';
import interview_mbg from '../assets/img/interview_mbg.jpg';
import PageBannerWrapper from '../components/common/PageBanner.styles';
import InterviewForm from '../components/interview/InterviewForm';
import InterviewResult from '../components/interview/InterviewResult';
import InterviewProvider from '../contexts/interview.context';

function InterviewPage() {
  return (
    <InterviewProvider>
      <StBanner basicBg={interview_bg} mobileBg={interview_mbg}>
        <h2> WHERE'S YOUR FAVORITE PAIK'S</h2>
        <p>좋아하는 음식을 알려주세요</p>
      </StBanner>
      {/* <StBanner>
        <h2> WHAT'S YOUR FAVORITE PAIK'S</h2>
        <p>좋아하는 음식을 선택해보세요</p>
      </StBanner> */}
      <StInterviewWrapper>
        <InterviewForm />
        <InterviewResult />
      </StInterviewWrapper>
    </InterviewProvider>
  );
}
export default InterviewPage;

const StBanner = styled(PageBannerWrapper)`
  h2 {
    color: var(--primaryColor);
  }
  @media screen and (max-width: 37.5rem) {
    justify-content: center;
  }
`;
const StInterviewWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
