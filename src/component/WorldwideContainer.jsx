/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import ItalyChart from './ItalyChart';
import ItalyRegions from './ItalyRegions';
import { fetchItalyRegion, fetchWorldwideHistorical } from '../utils/fetch';
import Summary from './Summary';
import { processData, processDataWorldwide } from '../utils/chartUtils';
import { SECTIONS } from '../utils/consts';

const summaryInitialStatus = {
  confirmed: 0,
  deaths: 0,
  recovered: 0,
  dataTestId: SECTIONS.WORLDWIDE,
  error: false,
};

const chartInitialStatus = {
  data: {
    confirmed: [],
    deaths: [],
    recovered: [],
  },
  error: false,
  loading: true,
  checked: true,
};

// const tableInitialStatus = {
//   data: {},
//   loading: true,
// };

const WorldwideContainer = () => {
  // const { width } = props;

  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  const [chartData, setChartData] = useState({ ...chartInitialStatus });
  // const [tableData, setTableData] = useState(tableInitialStatus);
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
      error: false,
    });
    // setChartData({
    //   ...chartInitialStatus,
    //   data: {
    //     intensiveTherapy,
    //     totalHospitalized,
    //     totalPositive,
    //     newDailyPositive,
    //     dailyDeceased,
    //     dailySwabs,
    //   },
    //   loading: false,
    // });

    // fill summary with last day-data extracted from previous fetch
    // const lastItem = res[res.length - 1];
    // setSummaryData({
    //   confirmed: lastItem.confirmed,
    //   deaths: 0,
    //   recovered: 0,
    // tamponi: res[res.length - 1].tamponi,
    // confirmed: res[res.length - 1].totalCases,
    // deaths: res[res.length - 1].deceased,
    // receovered: moment(
    //   intensiveTherapy[intensiveTherapy.length - 1].x,
    // ).format('DD / MM / YYYY'),
    //   ).format('LLL'),
    //   error: false,
    // });
    return res;
  };
  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchWorldwideHistorical(true)
      .then((res) => {
        return extractData(res.result);
      })
      .then((res) => {
        setFetchedDataAll(res);
      })
      .catch(() => {
        setSummaryData({ error: true });
        setChartData({ error: true });
      });

    // fill table with fetched data
    // fetchItalyRegion(true)
    //   .then((res) => {
    //     setTableData({ data: res, loading: false });
    //   })
    //   .catch((err) => {
    //     // to fill
    //     console.log('error', err);
    //   });
  };
  useEffect(() => {
    fetchData();
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
        <Grid item>
          <ItalyChart {...chartData} onToggleSwitch={onToggleSwitch} />
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
          <ItalyRegions {...tableData} />
        </Grid>
      </Grid> */}
    </>
  );
};

WorldwideContainer.defaultProps = {
  data: {},
  error: false,
};

export default WorldwideContainer;
