/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { SECTIONS } from '../utils/consts';

const NavButtons = ({ onClick }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(SECTIONS.ITALY);

  const handleClick = (location) => {
    setActive(location);
    onClick(location);
  };

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
          variant={active === SECTIONS.ITALY ? 'contained' : 'outlined'}
          color="primary"
          data-test-id="nav-button-italy"
          onClick={() => handleClick(SECTIONS.ITALY)}
        >
          {t('navbuttons.italy')}
        </Button>
      </Box>
      <Box m={1}>
        <Button
          variant={active === SECTIONS.EUROPE ? 'contained' : 'outlined'}
          color="primary"
          data-test-id="nav-button-europe"
          onClick={() => handleClick(SECTIONS.EUROPE)}
        >
          {t('navbuttons.europe')}
        </Button>
      </Box>

      <Box m={1}>
        <Button
          variant={active === SECTIONS.WORLDWIDE ? 'contained' : 'outlined'}
          color="primary"
          data-test-id="nav-button-worldwide"
          onClick={() => handleClick(SECTIONS.WORLDWIDE)}
        >
          {t('navbuttons.worldwide')}
        </Button>
      </Box>
    </Box>
  );
};

export default NavButtons;
