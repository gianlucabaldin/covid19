import React from 'react';
import {
  withStyles,
  Switch,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

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

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 10,
    },
  },
}));

const SwitchInterval = ({ onToggleSwitch, checked }) => {
  const { t } = useTranslation();
  const onToggle = (e) => {
    const newState = e.target.checked;
    onToggleSwitch(newState);
  };
  const classes = useStyles();

  return (
    <Typography component="div" data-test-id="switch-interval-container">
      <Grid
        component="label"
        container
        alignItems="center"
        spacing={1}
        className={classes.grid}
      >
        <Grid item style={{ textTransform: 'capitalize' }}>
          {t('switch.historical')}
        </Grid>
        <Grid item>
          <AntSwitch checked={checked} onChange={onToggle} name="checkedC" />
        </Grid>
        <Grid item style={{ textTransform: 'capitalize' }}>
          {t('switch.last-10-days')}
        </Grid>
      </Grid>
    </Typography>
  );
};

export default SwitchInterval;
