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
import {
  processDataWorldwide,
  filterEuropeanCountries,
  europeanSummatory,
} from '../utils/chartUtils';
import {
  SECTIONS,
  API_COVID_API_INFO_SHORT_URL,
  europeanCountries,
} from '../utils/consts';
// import EuropeCountries from './EuropeCountries';
import ChartContainer from './ChartContainer';

const summaryInitialStatus = {
  confirmed: 0,
  deaths: 0,
  recovered: 0,
  dataTestId: SECTIONS.EUROPE,
  loading: true,
  error: false,
};

const chartInitialStatus = {
  data: [],
  dataTestId: SECTIONS.EUROPE,
  error: false,
  loading: true,
  checked: true,
  href: API_COVID_API_INFO_SHORT_URL,
};

const tableInitialStatus = {
  data: {},
  loading: true,
};

const EuropeContainer = () => {
  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  // const [chartData, setChartData] = useState({ ...chartInitialStatus });
  // const [tableData, setTableData] = useState(tableInitialStatus);
  const [fetchedDataAll, setFetchedDataAll] = useState();

  const extractData = (response) => {
    const filtered = filterEuropeanCountries(response.result);

    const { confirmed, deaths, recovered } = europeanSummatory(filtered);
    setSummaryData({
      ...summaryData,
      data: [
        { key: 'total-confirmed', value: confirmed },
        { key: 'total-recovered', value: recovered },
        { key: 'total-deaths', value: deaths },
        {
          key: 'last-update',
          value: moment(response.date).format('LLL'),
        },
      ],
      loading: false,
      error: false,
    });
    return response.result;
    /*
    setChartData({
      ...chartInitialStatus,
      data: [{ confirmed }, { deaths }, { recovered }],
      loading: false,
    });
    return res;
    */
  };
  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchWorldwideCountryTotals()
      .then((res) => {
        return extractData(res);
      })
      .then((res) => {
        setFetchedDataAll(res);
      })
      .catch(() => {
        // setSummaryData({ loading: false, error: true });
        // setChartData({ loading: false, error: true });
      });
    /*
    // fill table with fetched data
    fetchWorldwideCountryTotals()
      .then((res) => {
        setTableData({ data: res, loading: false });
      })
      .catch((err) => {
        // to fill
        console.log('error', err);
      });
*/
  };
  useEffect(() => {
    fetchData();
  }, []);

  //   const onToggleSwitch = (checked) => {
  //     const { confirmed, deaths, recovered } = processDataWorldwide(
  //       fetchedDataAll,
  //       checked,
  //     );
  //     setChartData({
  //       ...chartInitialStatus,
  //       data: [{ confirmed }, { deaths }, { recovered }],
  //       checked,
  //       loading: false,
  //     });
  //   };

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
        <ChartContainer {...chartData} onToggleSwitch={onToggleSwitch} />
      </Grid> */}
      {/* <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }}>
          <Typography variant="h5">Country List</Typography>
        </Grid>
      </Grid> */}
      {/* <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }}>
          <EuropeCountries {...tableData} />
        </Grid>
      </Grid> */}
    </>
  );
};

EuropeContainer.defaultProps = {
  data: {},
  error: false,
};

export default EuropeContainer;
