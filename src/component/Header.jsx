import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        <div>
          <Typography variant="h4" color="primary">
            Covid 19
          </Typography>
          <Typography variant="p" color="primary">
            Latest & historical data
          </Typography>
        </div>
        <div>
          <NavButtons />
        </div>
        <div>
          <Button color="inherit">Github</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
