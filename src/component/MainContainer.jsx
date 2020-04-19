/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Container from '@material-ui/core/Container';
import NavButtons from './NavButtons';
import Summary from './Summary';
import ChartItaly from './ChartItaly';
// import { mockResponseJson } from '../utils/mock/mockItalyHistoricalResponse';
import { API_ITALY_HYSTORICAL, fetch } from '../utils/fetch';

export const SECTIONS = {
  WORLDWIDE: 0,
  ITALY: 1,
  COUNTRY_LIST: 2,
};

const initialStatus = {
  confirmed: 0,
  recovered: 0,
  deaths: 0,
  error: false,
};

const initialChartStatus = {
  data: {},
  error: false,
};

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const MainContainer = () => {
  const [summaryData, setSummaryData] = useState({ ...initialStatus });
  const [chartData, setChartData] = useState({ ...initialChartStatus });
  const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);

  // get Container width to be passed to chart dinamically
  const [width, setWidth] = useState(getWidth());

  // fetch data from public api or mock (see implementation)
  const fetchData = async () => {
    fetch(API_ITALY_HYSTORICAL)
      .then((res) => {
        setChartData({ data: res });
        const { Confirmed, Recovered, Deaths } = res[res.length - 1];
        setSummaryData({
          confirmed: Confirmed,
          recovered: Recovered,
          deaths: Deaths,
          error: false,
        });
      })
      .catch(() => {
        setSummaryData({ error: true });
        setChartData({ error: true });
      });
  };
  useEffect(() => {
    fetchData();
    // }, [activeSection]);
  }, []);

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
    <Container fixed ref={ref} style={{ backgroundColor: 'lightblue' }}>
      <NavButtons />
      <Summary {...summaryData} />
      <ChartItaly {...chartData} width={width} />
    </Container>
  );
};

export default MainContainer;
