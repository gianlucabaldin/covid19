import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box } from '@material-ui/core';
import NavButtons from './NavButtons';

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" data-id="appbar" color="transparent">
      <Toolbar className={classes.toolbar}>
        <Box width={200}>
          <Typography variant="h4" color="primary">
            Covid 19
          </Typography>
          <Typography variant="p" color="primary">
            Latest & historical data
          </Typography>
        </Box>
        <Box>
          <NavButtons />
        </Box>
        <Box width={200} textAlign="right">
          <GitHubIcon
            href="https://github.com/gianlucabaldin"
            fontSize="large"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
