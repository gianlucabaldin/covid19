/* eslint-disable import/no-cycle */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavButtons from './NavButtons';
import Languages from './Languages';

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  languages: {
    display: 'flex',
    width: 200,
    textAlign: 'right',
  },
}));

const Header = ({ onClick }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      data-test-id="appbar"
      color="transparent"
      style={{ boxShadow: 'none' }}
    >
      <Toolbar className={classes.toolbar}>
        <Box width={250}>
          <Typography variant="h4" color="primary" data-test-id="logo">
            Covid-19
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            data-test-id="logo-subtitle"
          >
            {t('header.subtitle')}
          </Typography>
        </Box>
        <Box>
          <NavButtons onClick={onClick} />
        </Box>
        <Box className={classes.languages}>
          <Languages />
          <Link
            href="https://github.com/gianlucabaldin/covid19"
            target="_blank"
            rel="noreferrer"
            data-test-id="github-link"
          >
            <GitHubIcon fontSize="large" cursor="pointer" htmlColor="black" />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
