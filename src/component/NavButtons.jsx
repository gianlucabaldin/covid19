import React from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const NavButtons = () => {
  const { t } = useTranslation();
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
          {t('navbuttons.country-list')}
        </Button>
      </Box>
      <Box m={1}>
        <Button
          variant="outlined"
          color="primary"
          data-test-id="nav-button-worldwide"
        >
          {t('navbuttons.worldwide')}
        </Button>
      </Box>
      <Box m={1}>
        <Button
          variant="outlined"
          color="primary"
          data-test-id="nav-button-europe"
        >
          {t('navbuttons.europe')}
        </Button>
      </Box>
      <Box m={1}>
        <Button
          variant="contained"
          color="primary"
          data-test-id="nav-button-italy"
        >
          {t('navbuttons.italy')}
        </Button>
      </Box>
    </Box>
  );
};

export default NavButtons;
