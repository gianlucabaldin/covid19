import React from 'react';
import { withStyles, Switch, Typography, Grid } from '@material-ui/core';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const SwitchInterval = ({ onToggleSwitch, checked }) => {
  const onToggle = (e) => {
    const newState = e.target.checked;
    onToggleSwitch(newState);
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Last 10 days</Grid>
        <Grid item>
          <AntSwitch checked={checked} onChange={onToggle} name="checkedC" />
        </Grid>
        <Grid item>Historical</Grid>
      </Grid>
    </Typography>
  );
};

export default SwitchInterval;
