import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const NavButtons = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      m={1}
      p={1}
      data-test-id="nav-buttons"
    >
      <Box m={1}>
        <Button
          variant="outlined"
          color="primary"
          disabled
          data-test-id="nav-button-country-list"
        >
          Country List
        </Button>
      </Box>
      <Box m={1}>
        <Button
          variant="outlined"
          color="primary"
          data-test-id="nav-button-worldwide"
        >
          Worldwide
        </Button>
      </Box>
      <Box m={1}>
        <Button
          variant="outlined"
          color="primary"
          data-test-id="nav-button-europe"
        >
          Europe
        </Button>
      </Box>
      <Box m={1}>
        <Button
          variant="contained"
          color="primary"
          data-test-id="nav-button-italy"
        >
          Italy
        </Button>
      </Box>
    </Box>
  );
};

export default NavButtons;
