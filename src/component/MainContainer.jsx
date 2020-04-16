import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavButtons from './NavButtons';

const MainContainer = () => {
  return (
    <Container fixed>
      <NavButtons />
      <Typography
        component="div"
        style={{ backgroundColor: '#CFE8FC', height: '100vh' }}
      />
    </Container>
  );
};

export default MainContainer;
