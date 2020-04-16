import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const MainContainer = () => {
  return (
    <Container fixed>
      <Typography
        component="div"
        style={{ backgrouundColor: '#cfe8fc', height: '100vh' }}
      />
    </Container>
  );
};

export default MainContainer;
