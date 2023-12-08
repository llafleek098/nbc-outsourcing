import React from 'react';
import styled from 'styled-components';
import interview_bg from '../assets/img/interview_bg.jpg';
import interview_mbg from '../assets/img/interview_mbg.jpg';
import InterviewForm from '../components/interview/InterviewForm';
import InterviewResult from '../components/interview/InterviewResult';
import InterviewProvider from '../contexts/interview.context';

function InterviewPage() {
  return (
    <InterviewProvider>
      {/* <StBanner>
        <h2> WHAT'S YOUR FAVORITE PAIK'S</h2>
      </StBanner> */}
      <StFavoriteContainer>
        <StFavoriteHeaderContainer>
          <StFavoriteBgImg
            className="interview_bg"
            src={interview_bg}
            alt="interview background"
          />
          <StFavoriteBgImg
            className="interview_mbg"
            src={interview_mbg}
            alt="interview mobile background"
          />
          <h2>WHAT'S YOUR FAVORITE PAIK'S</h2>
          <p>지금 바로 가까운 매장에서 빽다방 메뉴를 만나 보실 수 있습니다.</p>
        </StFavoriteHeaderContainer>
      </StFavoriteContainer>
      <StInterviewWrapper>
        <InterviewForm />
        <InterviewResult />
      </StInterviewWrapper>
    </InterviewProvider>
  );
}
export default InterviewPage;

// 전체를 감싸는 컨테이너
const StFavoriteContainer = styled.div`
  margin: 0 auto 3rem auto;
  h2 {
    font-weight: bold;
  }
`;

// 헤더 전체 컨테이너
const StFavoriteHeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  & h2 {
    color: var(--primaryColor);
    letter-spacing: -5px;
    font-size: 5rem;
    position: absolute;
    top: 45%;
    transform: translateY(-45%);
  }
  & p {
    font-size: 2rem;
    position: absolute;
    top: 57%;
    transform: translateY(-57%);
  }
  .interview_bg {
    display: block;
  }
  .interview_mbg {
    display: none;
  }
  @media screen and (max-width: 37.5rem) {
    .interview_bg {
      display: none;
    }
    .interview_mbg {
      display: block;
      height: 50rem;
      min-height: 40rem;
      min-width: 20rem;
    }
    & h2 {
      font-size: 3.5rem;
      top: 88%;
      transform: translateY(-88%);
    }
    & p {
      font-size: 1.5rem;
      top: 93%;
      transform: translateY(-93%);
    }
  }
  @media screen and (max-width: 30rem) {
    & h2 {
      font-size: 3.5rem;
      top: 92%;
      transform: translateY(-92%);
    }
    & p {
      display: none;
    }
  }
`;

// 헤더 배경이미지
const StFavoriteBgImg = styled.img`
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 50rem;
  object-fit: cover;
  margin: auto;
`;
// const StBanner = styled.div`
//   background: url(${interviewBg}) center / cover no-repeat;
//   height: 40rem;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   h2 {
//     font-size: 5rem;
//     color: var(--primaryColor);
//     font-weight: 900;
//     letter-spacing: -3.9px;
//   }
//   margin-bottom: 4rem;
// `;
const StInterviewWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
