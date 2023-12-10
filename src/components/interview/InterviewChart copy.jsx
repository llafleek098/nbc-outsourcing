import React from 'react';
import styled from 'styled-components';

const colors = [
  '#FC6A6A',
  '#A8CAFF',
  '#FCEDA7',
  '#D9F5AB',
  '#DDB5F5',
  '#FFC9E3'
];

function InterviewChart({ title, countData, total }) {
  return (
    <StInterviewChartWrapper>
      <p>{title}</p>
      {/* <StInterviewChartItemWrapper>
        {Object.keys(countData).map((key, index) => {
          const { value, label, count } = countData[key];
          const percent = calcPercent(count, total);
          return (
            percent > 0 && (
              <StInterviewChartItem
                key={label + value}
                $bgColor={colors[index]}
                $percent={percent}
              >
                <p>{label}</p>
                <p>{parseInt(percent * 100)}%</p>
              </StInterviewChartItem>
            )
          );
        })}
      </StInterviewChartItemWrapper> */}
      <div>
        <svg
          width='500'
          height='500'
          viewBox='0 0 100 100'>
            {Object.keys(countData).map((key, index) => {
              const { value, label, count } = countData[key];
              const percent = calcPercent(count, total);
              return (
                percent > 0 && (
                  <circle
                    cx='50'
                    cy='50'
                    r='20'
                    fill='transparent'
                    stroke={colors[index]}
                    strokeWidth='10'
                    strokeDasharray='10 5'
                  />
                )
              );
            })}
        </svg>
      </div>
      <div>
        <svg
          width='500'
          height='500'
          viewBox='0 0 100 100'>
          <circle
            cx='50'
            cy='50'
            r='20'
            fill='transparent'
            stroke='skyblue'
            strokeWidth='10'
            strokeDasharray='10 5' />
        </svg>
      </div>
    </StInterviewChartWrapper>
  );
}
export default InterviewChart;

const calcPercent = (count, total) => (count / total || 0).toFixed(2);

const StInterviewChartWrapper = styled.div`
border: 0.1rem solid red;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;

  > p {
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
`;
const StInterviewChartItemWrapper = styled.div`
border: 0.1rem solid blue;
  display: flex;
  flex-direction: row;

  border-radius: 1rem;
  overflow: hidden;
  & * {
    font-size: 1.5rem;
  }
`;

const StInterviewChartItem = styled.div`
border: 0.1rem solid yellow;
  background-color: ${(props) => props.$bgColor};
  max-width: 10rem;
  text-align: center;
  padding: 1rem;

  flex: ${(props) => props.$percent};
`;