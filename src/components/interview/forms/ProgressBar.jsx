import React from 'react';
import styled from 'styled-components';
function ProgressBar({ page }) {
  return (
    <StProgressBar>
      <StProgressSegment $width={page * 34 + 33} />
    </StProgressBar>
  );
}
export default ProgressBar;

const StProgressBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  height: 20px;
  background-color: #edf2f7;
  border-radius: 10px;
  overflow: hidden;
`;
const StProgressSegment = styled.div`
  transition: width 0.3s ease;
  background-color: #3182ce;
  width: ${(props) => props.$width}%;
`;
