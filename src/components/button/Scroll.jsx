import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && <StTopButton onClick={scrollToTop}>Top</StTopButton>}
    </div>
  );
};

const StTopButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: white;
  border: 0.2rem solid #f1f1f1;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

export default TopButton;
