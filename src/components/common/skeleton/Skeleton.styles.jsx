import styled, { keyframes } from 'styled-components';
export const twinkle = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const SkeltonProductItem = styled.li`
  width: 90%;
  height: 90%;
  list-style: none;
  aspect-ratio: 3/4;
  animation: ${twinkle} 1s infinite ease-in-out;

  background-color: darkgray;
`;

export const SkeletonLine = styled.div`
  flex: 1;
  height: 3rem;
  background-color: darkgray;
  animation: ${twinkle} 1s infinite ease-in-out;
`;
