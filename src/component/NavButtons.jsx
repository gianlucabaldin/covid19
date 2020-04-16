import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

// const NavButtons = (props) => {
const NavButtons = () => {
  // const getColor = ({ activeSection }) => {};
  return (
    <Box
      display="flex"
      justifyContent="center"
      m={1}
      p={1}
      bgcolor="background.paper"
    >
      <Box m={1}>
        <Button variant="outlined" color="primary">
          Worldwide
        </Button>
      </Box>
      <Box m={1}>
        <Button variant="contained" color="primary">
          Italy
        </Button>
      </Box>
      <Box m={1}>
        <Button variant="outlined" color="primary" disabled>
          Country List
        </Button>
      </Box>
      {/* <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}
    </Box>
  );
};

export default NavButtons;
