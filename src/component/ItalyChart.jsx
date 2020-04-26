import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { Grid } from '@material-ui/core';
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

      <Grid container>
        <Grid item xs={12} md={6} lg={4} style={{ padding: 16 }}>
          <Chart
            loading={loading}
            series={[intensiveTherapy]}
            status={[STATUS.INTENSIVE_THERAPY]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{ padding: 16 }}>
          <Chart
            loading={loading}
            series={[totalHospitalized]}
            status={[STATUS.TOTAL_HOSPITALIZED]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{ padding: 16 }}>
          <Chart
            loading={loading}
            series={[totalPositive]}
            status={[STATUS.TOTAL_POSITIVE]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{ padding: 16 }}>
          <Chart
            loading={loading}
            series={[newDailyPositive]}
            status={[STATUS.NEW_DAILY_POSITIVE]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{ padding: 16 }}>
          <Chart
            loading={loading}
            series={[dailyDeceased]}
            status={[STATUS.DAILY_DECEASED]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{ padding: 16 }}>
          <Chart
            loading={loading}
            series={[dailySwabs]}
            status={[STATUS.DAILY_SWABS]}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <DataProvided href={API_ITALY_HYSTORICAL_APIFY_SHORT_URL} />
      </Grid>
    </>
  );
};

export default ItalyChart;
