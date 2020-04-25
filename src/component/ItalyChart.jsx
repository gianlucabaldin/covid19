import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { Container, Box, Grid } from '@material-ui/core';
import SwitchInterval from './SwitchInterval';
import Error from './Error';
import DataProvided from './DataProvided';
import { STATUS, API_ITALY_HYSTORICAL_APIFY_SHORT_URL } from '../utils/consts';
// import SwitchInterval from './SwitchInterval';
import Chart from './Chart';

const ItalyChart = ({
  data,
  error,
  loading,
  checked,
  onToggleSwitch,
  width = 500,
}) => {
  const {
    intensiveTherapy,
    totalHospitalized,
    totalPositive,
    newDailyPositive,
    dailyDeceased,
    dailySwabs,
  } = data;
  return (
    <>
      <Grid container spacing={2} data-id="swith-interval-container">
        <Grid item>
          <SwitchInterval onToggleSwitch={onToggleSwitch} checked={checked} />
        </Grid>
      </Grid>

      <Grid
        container
        style={{ paddingLeft: '24', paddingRight: '24' }}
        spacing={2}
      >
        <Grid item xs={4}>
          <Chart
            series={[intensiveTherapy]}
            status={[STATUS.INTENSIVE_THERAPY]}
          />
        </Grid>
        <Grid item xs={4}>
          <Chart
            style={{ width: 'inherit', padding: '24px' }}
            series={[totalHospitalized]}
            status={[STATUS.TOTAL_HOSPITALIZED]}
          />
        </Grid>
        <Grid item xs={4}>
          <Chart series={[totalPositive]} status={[STATUS.TOTAL_POSITIVE]} />
        </Grid>
        <Grid item xs={4}>
          <Chart
            series={[newDailyPositive]}
            status={[STATUS.NEW_DAILY_POSITIVE]}
          />
        </Grid>
        <Grid item xs={4}>
          <Chart series={[dailyDeceased]} status={[STATUS.DAILY_DECEASED]} />
        </Grid>
        <Grid item xs={4}>
          <Chart series={[dailySwabs]} status={[STATUS.DAILY_SWABS]} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <DataProvided href={API_ITALY_HYSTORICAL_APIFY_SHORT_URL} />
      </Grid>
    </>
  );
};

export default ItalyChart;
