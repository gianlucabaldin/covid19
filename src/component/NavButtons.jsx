import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const NavButtons = () => {
  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <Box m={1}>
        <Button variant="outlined" color="primary" disabled>
          Country List
        </Button>
      </Box>
      <Box m={1}>
        <Button variant="outlined" color="primary">
          Worldwide
        </Button>
      </Box>
      <Box m={1}>
        <Button variant="outlined" color="primary">
          Europe
        </Button>
      </Box>
      <Box m={1}>
        <Button variant="contained" color="primary">
          Italy
        </Button>
      </Box>
    </Box>
  );
};

export default NavButtons;
