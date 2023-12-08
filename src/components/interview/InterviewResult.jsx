import React from 'react';
import { IoReload } from 'react-icons/io5';
import styled from 'styled-components';
import { useInterviewForm } from '../../contexts/interview.context';
import useInterview from '../../hooks/useInterview';
import useProduct from '../../hooks/useProduct';
import InterviewChart from './InterviewChart';
import {
  MAX_PAGE,
  getAgesCountData,
  getGenderCountData
} from './forms/form.data';

function InterviewResult() {
  const { interviews } = useInterview();
  const { products } = useProduct();
  const { category, productName, page, handleResetInterview } =
    useInterviewForm();

  const product =
    category &&
    productName &&
    products[category].find((product) => product.name === productName);

  const filteredInterviews = interviews
    ? interviews.filter((interview) => interview.productName === productName)
    : [];

  const { agesCountData, genderCountData } = filteredInterviews.reduce(
    (counterObject, interview) => {
      counterObject.agesCountData[interview.ages].count++;
      counterObject.genderCountData[interview.gender].count++;
      return counterObject;
    },
    { agesCountData: getAgesCountData(), genderCountData: getGenderCountData() }
  );
  return (
    page === MAX_PAGE && (
      <StInterviewResultWrapper>
        <StFigure>
          <h2>{product?.name}</h2>
          <img src={product?.imgSrc} alt={product?.name} />
        </StFigure>
        <StInterviewChartContainer>
          <InterviewChart
            title="나이대"
            total={filteredInterviews.length}
            countData={agesCountData}
          />
          <InterviewChart
            title="성별"
            total={filteredInterviews.length}
            countData={genderCountData}
          />
          <StReloadButton onClick={handleResetInterview}>
            <IoReload />
            다시하기
          </StReloadButton>
        </StInterviewChartContainer>
      </StInterviewResultWrapper>
    )
  );
}

export default InterviewResult;

const StInterviewResultWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;

  border-radius: 1rem;
  border: 1px solid black;

  > * {
    flex: 1;
  }
`;

const StFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }
`;

const StInterviewChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;
const StReloadButton = styled.button`
  margin-top: 5rem;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: var(--primaryColor);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--accentColor);
    color: black;
  }
  svg {
    transition: transform 0.5s ease-in-out;
  }
  &:hover svg {
    transform: rotate(360deg);
  }

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
