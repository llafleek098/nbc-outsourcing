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
      <StInterviewChartItemWrapper>
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
      </StInterviewChartItemWrapper>
    </StInterviewChartWrapper>
  );
}
export default InterviewChart;

const calcPercent = (count, total) => (count / total || 0).toFixed(2);

const StInterviewChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > p {
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
`;
const StInterviewChartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;

  border-radius: 1rem;
  & * {
    font-size: 1.5rem;
  }
`;

const StInterviewChartItem = styled.div`
  background-color: ${(props) => props.$bgColor};
  min-width: 10rem;
  text-align: center;
  padding: 1rem;

  flex: ${(props) => props.$percent};
`;
