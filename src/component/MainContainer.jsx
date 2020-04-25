/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
import ItalyContainer from './ItalyContainer';

export const SECTIONS = {
  WORLDWIDE: 0,
  ITALY: 1,
  COUNTRY_LIST: 2,
};

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const MainContainer = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);

  // get Container width to be passed to chart dinamically
  const [width, setWidth] = useState(getWidth());

  // get Container width to be passed to chart dinamically
  const ref = useRef();
  useEffect(() => {
    const containerSizeListener = () => {
      if (ref && ref.current && ref.current.offsetWidth) {
        setWidth(ref.current.offsetWidth * 0.9);
      }
    };
    window.addEventListener('resize', containerSizeListener);
    // the following line in necessary otherwise the method won't be called on component mount
    containerSizeListener();
    return () => {
      window.removeEventListener('resize', containerSizeListener);
    };
  }, []);

  return (
    <>
      {/* <Container fluid ref={ref} style={{ backgroundColor: 'lightblue' }}> */}
      <ItalyContainer width={width} />
      {/* </Container> */}
    </>
  );
};

export default MainContainer;
