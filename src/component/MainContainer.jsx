/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavButtons from './NavButtons';
import Summary from './Summary';
import ChartItaly from './ChartItaly';

export const SECTIONS = {
  WORLDWIDE: 0,
  ITALY: 1,
  COUNTRY_LIST: 2,
};

const initialStatus = {
  confirmed: 0,
  recovered: 0,
  deaths: 0,
};

const MainContainer = () => {
  // const [data, setData] = useState({});
  const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);
  /*
  async function fetchData() {
    const res = await fetch('https://swapi.co/api/planets/4/');
    res
      .json()
      .then((res) => setPlanets(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, [activeSection]);
*/
  return (
    <Container fixed>
      <NavButtons />
      <Typography
        component="div"
        style={{ backgroundColor: '#CFE8FC', height: '100vh' }}
      >
        <Summary />
        <ChartItaly {...initialStatus} />
      </Typography>
    </Container>
  );
};

export default MainContainer;
