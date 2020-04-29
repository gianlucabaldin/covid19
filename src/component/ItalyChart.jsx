import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { Grid } from '@material-ui/core';
import SwitchInterval from './SwitchInterval';
import Error from './Error';
import DataProvided from './DataProvided';
import { API_ITALY_HYSTORICAL_APIFY_SHORT_URL } from '../utils/consts';
import Chart from './Chart';

const ItalyChart = ({
  data,
  error,
  dataTestId,
  loading,
  checked,
  onToggleSwitch,
}) => {
  if (error) return <Error />;

  return (
    <>
      <Grid container spacing={2} data-test-id="switch-interval-container">
        <Grid item>
          <SwitchInterval onToggleSwitch={onToggleSwitch} checked={checked} />
        </Grid>
      </Grid>

      <Grid container data-test-id={`${dataTestId}-chart-container`}>
        {data &&
          data.length > 0 &&
          data.map((el) => (
            <Grid item xs={12} md={6} lg={4} style={{ padding: 16 }}>
              <Chart loading={loading} series={[el.value]} status={[el.key]} />
            </Grid>
          ))}
      </Grid>
      <Grid container spacing={2}>
        <DataProvided href={API_ITALY_HYSTORICAL_APIFY_SHORT_URL} />
      </Grid>
    </>
  );
};

export default ItalyChart;
