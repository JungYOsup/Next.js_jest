import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FrequentlyLabel from './FrequentlyLabel';

const TopButton = styled.div(() => ({
  position: 'sticky',
  left: 0,
  top: 700,
}));

const FrequentlyArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <React.Fragment>
      {isVisible && (
        <TopButton onClick={scrollToTop}>
          <FrequentlyLabel size={null} text="위로가자" />
        </TopButton>
      )}
    </React.Fragment>
  );
};

export default FrequentlyArrowUp;
