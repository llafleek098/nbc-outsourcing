import React, { useState } from 'react';
import YouTube from 'react-youtube';
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
    <div>
      <ul>
        {youtubeIds.map((youtubeId, index) => (
          <li
            style={{
              backgroundColor: index === currentPosition ? 'yellow' : ''
            }}
            key={youtubeId}
          >
            <YouTube videoId={youtubeId} />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleClick(nextPosition)}>{'>'}</button>
        <button onClick={handleClick(prevPosition)}>{'<'}</button>
      </div>
      <div onChange={handleRadio}>
        {youtubeIds.map((youtubeId, index) => (
          <input
            key={'radio' + youtubeId}
            type="radio"
            name="youtube-player"
            value={index}
            checked={currentPosition === index}
          />
        ))}
      </div>
    </div>
  );
}

const nextPosition = (position, total) => (position + 1) % total;
const prevPosition = (position, total) => (position - 1 + total) % total;

export default YoutubeWrapper;
