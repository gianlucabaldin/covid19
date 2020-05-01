/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { Grid } from '@material-ui/core';
import SwitchInterval from './SwitchInterval';
import Error from './Error';
import DataProvided from './DataProvided';
import { API_APIFY_SHORT_URL } from '../utils/consts';
import Chart from './Chart';

const ChartContainer = ({
  data,
  error,
  dataTestId,
  loading,
  checked,
  onToggleSwitch,
  href,
}) => {
  if (error) return <Error />;

  // if one chart per row --> high width, responsive grid otherwise
  const getGridSize = () => {
    return data && data.length > 1
      ? { xs: 12, md: 6, lg: 4 }
      : { xs: 12, md: 10 };
  };

  return (
    <>
      <Grid container spacing={2} data-test-id="switch-interval-container">
        <Grid item>
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
            <Grid item {...getGridSize()} style={{ padding: 16 }}>
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
