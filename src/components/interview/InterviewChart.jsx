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
                <p>{parseInt(percent * 100)}%</p>
              </StInterviewChartItem>
            )
          );
        })}
      </StInterviewChartItemWrapper>
      <StLegendWrapper>
        {Object.keys(countData).map((key, index) => {
          const {label} = countData[key];
          return (
            <StLegendCard>
              <StLegendcolorBox
                key={label}
                $bgColor={colors[index]}
              />
                <p>{label}</p>
            </StLegendCard>
            )
          })}
      </StLegendWrapper>
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
    font-size: 2.6rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
`;
const StInterviewChartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  overflow: hidden;
  & * {
    font-size: 1.5rem;
  }
`;

const StInterviewChartItem = styled.div`
  background-color: ${(props) => props.$bgColor};
  text-align: center;
  padding: 1rem;

  flex: ${(props) => props.$percent};

  @media screen and (max-width: 30rem) {
    p {
      font-size: 1rem;
    }  
  }
`;

const StLegendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 30rem) {
    flex-wrap : wrap;
  }
  `;

const StLegendCard = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 0.5rem;
p {
  font-size: 1.5rem;
}

@media screen and (max-width: 30rem) {
  flex-wrap : wrap;
  p {
  font-size: 1rem;
}
}
`;

const StLegendcolorBox = styled.div`
  background-color: ${(props) => props.$bgColor};
  width: 2rem;
  height: 2rem;
  @media screen and (max-width: 30rem) {
  width: 1rem;
  height: 1rem;
}
`;