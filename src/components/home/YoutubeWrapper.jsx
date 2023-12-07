import React, { useState } from 'react';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import YouTube from 'react-youtube';
import styled from 'styled-components';
const youtubeIds = ['1-zO9VZgAuw', 'Fdf6fmB8VcQ', 'QShoaTFK70c'];

function YoutubeWrapper() {
  const [currentPosition, setCurrentPosition] = useState(0);

  const handleClick = (moveFunc) => () => {
    setCurrentPosition(moveFunc(currentPosition, youtubeIds.length));
  };

  const handleRadio = (e) => {
    setCurrentPosition(Number(e.target.value));
  };

  return (
    <StYoutubePlayerWrapper>
      <StYoutubePlayerContainer>
        {youtubeIds.map((youtubeId, index) => (
          <StYoutubePlayerItem
            key={youtubeId}
            $left={currentPosition === index ? 0 : 100}
            $top={index * 100}
            $selected={currentPosition === index}
          >
            <YouTube videoId={youtubeId} />
          </StYoutubePlayerItem>
        ))}
      </StYoutubePlayerContainer>
      <StControlButtonContainer>
        <button onClick={handleClick(prevPosition)}>
          <FaCircleArrowLeft />
        </button>
        <button onClick={handleClick(nextPosition)}>
          <FaCircleArrowRight />
        </button>
      </StControlButtonContainer>
      <StPaginationContainer onChange={handleRadio}>
        {youtubeIds.map((youtubeId, index) => (
          <input
            key={'radio' + youtubeId}
            type="radio"
            name="youtube-player"
            value={index}
            checked={currentPosition === index}
          />
        ))}
      </StPaginationContainer>
    </StYoutubePlayerWrapper>
  );
}

const nextPosition = (position, total) => (position + 1) % total;
const prevPosition = (position, total) => (position - 1 + total) % total;

export default YoutubeWrapper;

const StYoutubePlayerWrapper = styled.div`
  /* background-color: pink; */
  width: 100%;
  aspect-ratio: 1.78/1;
  position: relative;
  padding: 9rem;
`;
const StYoutubePlayerContainer = styled.ul`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  border-radius: 2.5rem;
`;
const StYoutubePlayerItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;

  top: -${(props) => props.$top}%;
  left: ${(props) => props.$left}%;
  opacity: ${(props) => (props.$selected ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const StControlButtonContainer = styled.div`
  position: absolute;
  width: 100%;

  top: 50%;
  left: 0;
  transform: translateY(-50%);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;

  button {
    font-size: 5rem;
    line-height: 5rem;
    outline: none;
    border: none;
    background: none;
    color: white;
    cursor: pointer;
    transition: color 0.4s ease-in-out;

    color: var(--primaryColor);
  }
  button:hover {
    color: var(--accentColor);
  }
`;
const StPaginationContainer = styled.div`
  position: absolute;

  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  input[type='radio'] {
    appearance: none;
    cursor: pointer;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;
    background-color: var(--secondaryColor);
  }
  input[type='radio']:checked {
    background-color: var(--primaryColor);
  }
  input[type='radio']:hover {
    background-color: var(--accentColor);
  }
`;
