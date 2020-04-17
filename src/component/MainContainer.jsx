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
  const [data, setData] = useState({ ...initialStatus });
  const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);

  const fetchData = async () => {
    const response = await fetch(
      'https://api.covid19api.com/total/dayone/country/italy',
    );
    // console.log(`res = ${res}`);

    response
      .json()
      // .then((res) => {
      //   console.log(`res in then() = ${res}`);
      //   debugger;
      //   console.log(`res.length = ${res.length}`);
      // })
      // .then((res) => {
      //   console.log(res[res.length - 1]);
      // })
      .then((res) => {
        const { Confirmed, Recovered, Deaths } = res[res.length - 1];
        // setData(res[res.length - 1]);
        setData({
          confirmed: Confirmed,
          recovered: Recovered,
          deaths: Deaths,
        });
      });
    // .catch((err) => setErrors(err));
  };

  useEffect(() => {
    fetchData();
    // }, [activeSection]);
  }, []);

  return (
    <Container fixed>
      <NavButtons />
      <Typography
        component="div"
        style={{ backgroundColor: '#CFE8FC', height: '100vh' }}
      >
        <Summary {...data} />
        <ChartItaly {...data} />
        {/* <div>{data.confirme}</div> */}
      </Typography>
    </Container>
  );
};

export default MainContainer;
