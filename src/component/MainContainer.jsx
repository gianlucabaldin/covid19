import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavButtons from './NavButtons';
import Summary from './Summary';

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
  const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);
  return (
    <Container fixed>
      <NavButtons />
      <Typography
        component="div"
        style={{ backgroundColor: '#CFE8FC', height: '100vh' }}
      >
        <Summary />
      </Typography>
    </Container>
  );
};

export default MainContainer;
