/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import ItalyChart from './ItalyChart';
import ItalyRegions from './ItalyRegions';
import { fetchItalyRegion, fetchItalyHistoricalAllApify } from '../utils/fetch';
import Summary from './Summary';
import { processData } from '../utils/chartUtils';

const summaryInitialStatus = {
  tamponi: 0,
  totalCases: 0,
  deceased: 0,
  lastUpdate: '',
  error: false,
};

const chartInitialStatus = {
  data: {
    intensiveTherapy: [],
    totalHospitalized: [],
    totalPositive: [],
    newDailyPositive: [],
    dailyDeceased: [],
    dailySwabs: [],
  },
  error: false,
  loading: true,
  checked: true,
};

const tableInitialStatud = {
  data: {},
  loading: true,
};

const ItalyContainer = (props) => {
  const { width } = props;

  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  const [chartData, setChartData] = useState({ ...chartInitialStatus });
  const [tableData, setTableData] = useState(tableInitialStatud);
  const [fetchedDataAll, setFetchedDataAll] = useState();

  const extractData = (res) => {
    const {
      intensiveTherapy,
      totalHospitalized,
      totalPositive,
      newDailyPositive,
      dailyDeceased,
      dailySwabs,
    } = processData(res);
    setChartData({
      ...chartInitialStatus,
      data: {
        intensiveTherapy,
        totalHospitalized,
        totalPositive,
        newDailyPositive,
        dailyDeceased,
        dailySwabs,
      },
      loading: false,
    });
    // fill summary with last day-data extracted from previous fetch
    setSummaryData({
      tamponi: res[res.length - 1].tamponi,
      totalCases: res[res.length - 1].totalCases,
      deceased: res[res.length - 1].deceased,
      lastUpdate: moment(
        intensiveTherapy[intensiveTherapy.length - 1].x,
        // ).format('DD / MM / YYYY'),
      ).format('LLL'),
      error: false,
    });
    return res;
  };
  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchItalyHistoricalAllApify(true)
      .then((res) => {
        return extractData(res);
      })
      .then((res) => {
        setFetchedDataAll(res);
      })
      .catch(() => {
        setSummaryData({ error: true });
        setChartData({ error: true });
      });

    // fill table with fetched data
    fetchItalyRegion(true)
      .then((res) => {
        setTableData({ data: res, loading: false });
      })
      .catch((err) => {
        // to fill
        console.log('error', err);
      });
  };
  useEffect(() => {
    fetchData();
    // }, [activeSection]);
  }, []);

  const onToggleSwitch = (checked) => {
    const {
      intensiveTherapy,
      totalHospitalized,
      totalPositive,
      newDailyPositive,
      dailyDeceased,
      dailySwabs,
    } = processData(fetchedDataAll, checked);
    setChartData({
      ...chartInitialStatus,
      data: {
        intensiveTherapy,
        totalHospitalized,
        totalPositive,
        newDailyPositive,
        dailyDeceased,
        dailySwabs,
      },
      checked,
    });
  };

  return (
    <>
      <Grid container justify="center">
        <Summary {...summaryData} />
      </Grid>
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item>
          <ItalyChart
            {...chartData}
            width={width}
            onToggleSwitch={onToggleSwitch}
          />
        </Grid>
      </Grid>
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }}>
          <Typography variant="h5">Region Details</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }}>
          {/* <ItalyRegions tableData={tableData} loading={tableData.loading} /> */}
          <ItalyRegions {...tableData} />
        </Grid>
      </Grid>
    </>
  );
};

ItalyContainer.defaultProps = {
  data: {},
  error: false,
};

export default ItalyContainer;
