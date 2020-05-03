/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { Grid, makeStyles } from '@material-ui/core';
import SwitchInterval from './SwitchInterval';
import Error from './Error';
import DataProvided from './DataProvided';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: 16,
    [theme.breakpoints.down('sm')]: {
      padding: '8px 0px',
      paddingTop: 16,
      paddingBottom: 0,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));

const ChartContainer = ({
  data,
  error,
  dataTestId,
  loading,
  checked,
  onToggleSwitch,
  href,
}) => {
  const classes = useStyles();
  if (error) return <Error />;

  // if one chart per row --> high width, responsive grid otherwise
  const getGridSize = () => {
    return data && data.length > 1
      ? { xs: 12, md: 6, lg: 4 }
      : { xs: 12, md: 10 };
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SwitchInterval onToggleSwitch={onToggleSwitch} checked={checked} />
        </Grid>
      </Grid>

      <Grid
        container
        data-test-id={`${dataTestId}-chart-container`}
        justify="center"
      >
        {data &&
          data.length > 0 &&
          data.map((el) => (
            <Grid item {...getGridSize()} className={classes.grid}>
              <Chart
                loading={loading}
                series={Object.values(el)}
                status={Object.keys(el)}
              />
            </Grid>
          ))}
      </Grid>
      {href && (
        <Grid container spacing={2}>
          <DataProvided href={href} />
        </Grid>
      )}
    </>
  );
};

export default ChartContainer;
