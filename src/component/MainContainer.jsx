/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavButtons from './NavButtons';
import Summary from './Summary';
import ChartItaly from './ChartItaly';
import { mockResponseJson } from './mockResponse';

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

  // get Container width to be passed to chart dinamically
  // const [width, setWidth] = useState(0);
  const [width, setWidth] = useState(getWidth());

  // const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);

  // WORKING -- UNCOMMENT WHEN FINISHED
  /*
  const fetchData = async () => {
    const response = await fetch(
      'https://api.covid19api.com/total/dayone/country/italy',
    );
    response
      .json()
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
      .catch((err) => {
        console.log(err);

        setSummaryData({ error: true });
        setChartData({ error: true });
      });
  };
  useEffect(() => {
    fetchData();
    // }, [activeSection]);
  }, []);
*/

  const mock = mockResponseJson;

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
      {/* <Typography
        component="div"
        style={{ backgroundColor: '#CFE8FC', height: '100vh' }}
      > */}
      {/* <Summary {...summaryData} /> */}
      {/* <ChartItaly {...chartData} /> */}
      {/* <ChartItaly data={mock} ref={ref} /> */}
      <ChartItaly data={mock} width={width} />
      {/* </Typography> */}
    </Container>
  );
};

export default MainContainer;
