/* eslint-disable no-sparse-arrays */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import {
  fetchWorldwideHistorical,
  fetchWorldwideCountryTotals,
} from '../utils/fetch';
import Summary from './Summary';
import { processDataWorldwide } from '../utils/chartUtils';
import { SECTIONS } from '../utils/consts';
import WorldwideCountry from './WorldwideCountry';

const summaryInitialStatus = {
  confirmed: 0,
  deaths: 0,
  recovered: 0,
  dataTestId: SECTIONS.WORLDWIDE,
  loading: true,
  error: false,
};

const chartInitialStatus = {
  data: [],
  dataTestId: SECTIONS.WORLDWIDE,
  error: false,
  loading: true,
  checked: true,
};

const tableInitialStatus = {
  data: {},
  loading: true,
};

const WorldwideContainer = () => {
  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  const [chartData, setChartData] = useState({ ...chartInitialStatus });
  const [tableData, setTableData] = useState(tableInitialStatus);
  const [fetchedDataAll, setFetchedDataAll] = useState();

  const extractData = (res) => {
    const { confirmed, deaths, recovered } = processDataWorldwide(res);

    // get last item
    const lastRecent = Object.keys(res).pop();
    setSummaryData({
      ...summaryData,
      data: [
        { key: 'total-confirmed', value: res[lastRecent].confirmed },
        { key: 'total-deaths', value: res[lastRecent].deaths },
        { key: 'total-recovered', value: res[lastRecent].recovered },
        {
          key: 'last-update',
          value: moment(lastRecent).format('LLL'),
        },
      ],
      loading: false,
      error: false,
    });
    setChartData({
      ...chartInitialStatus,
      data: [{ confirmed }, { deaths }, { recovered }],
      loading: false,
    });
    return res;
  };
  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchWorldwideHistorical()
      .then((res) => {
        return extractData(res.result);
      })
      .then((res) => {
        setFetchedDataAll(res);
      })
      .catch(() => {
        setSummaryData({ loading: false, error: true });
        setChartData({ loading: false, error: true });
      });

    // fill table with fetched data
    fetchWorldwideCountryTotals()
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
  }, []);

  const onToggleSwitch = (checked) => {
    const { confirmed, deaths, recovered } = processDataWorldwide(
      fetchedDataAll,
      checked,
    );
    setChartData({
      ...chartInitialStatus,
      data: [{ confirmed }, { deaths }, { recovered }],
      checked,
      loading: false,
    });
  };

  return (
    <>
      <Grid container justify="center">
        <Summary {...summaryData} />
      </Grid>
      {/* <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <WorldwideCountry {...chartData} onToggleSwitch={onToggleSwitch} />
      </Grid> */}
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }}>
          <Typography variant="h5">Country List</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }}>
          <WorldwideCountry {...tableData} />
        </Grid>
      </Grid>
    </>
  );
};

WorldwideContainer.defaultProps = {
  data: {},
  error: false,
};

export default WorldwideContainer;
