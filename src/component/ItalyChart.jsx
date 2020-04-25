import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { Container, Box } from '@material-ui/core';
import moment from 'moment';
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
      <Box
        marginTop={1}
        marginBottom={3}
        data-id="italy-chart-box"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <DataProvided href={API_ITALY_HYSTORICAL_APIFY_SHORT_URL} />

        <SwitchInterval onToggleSwitch={onToggleSwitch} checked={checked} />
      </Box>

      <Box
        style={{
          display: 'flex',
          // justifyContent: '',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Chart
          height={300}
          width={600}
          series={[intensiveTherapy]}
          status={[STATUS.INTENSIVE_THERAPY]}
        />
        <Chart
          height={300}
          width={600}
          series={[totalHospitalized]}
          status={[STATUS.TOTAL_HOSPITALIZED]}
        />
        <Chart
          height={300}
          width={600}
          series={[totalPositive]}
          status={[STATUS.TOTAL_POSITIVE]}
        />
        <Chart
          height={300}
          width={600}
          series={[newDailyPositive]}
          status={[STATUS.NEW_DAILY_POSITIVE]}
        />
        <Chart
          height={300}
          width={600}
          series={[dailyDeceased]}
          status={[STATUS.DAILY_DECEASED]}
        />
        <Chart
          height={300}
          width={600}
          series={[dailySwabs]}
          status={[STATUS.DAILY_SWABS]}
        />
      </Box>
    </>
  );
};

export default ItalyChart;
