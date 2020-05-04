/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import ChartContainer from './ChartContainer';
import ItalyRegions from './ItalyRegions';
import { fetchItalyRegion, fetchItalyHistoricalAll } from '../utils/fetch';
import Summary from './Summary';
import { processData } from '../utils/chartUtils';
import {
  SECTIONS,
  API_APIFY_SHORT_URL,
  API_OPEN_PUGLIA_SHORT_URL,
} from '../utils/consts';

const summaryInitialStatus = {
  tamponi: 0,
  totalCases: 0,
  deceased: 0,
  lastUpdate: '',
  dataTestId: SECTIONS.ITALY,
  loading: true,
  error: false,
};

const chartInitialStatus = {
  data: [],
  dataTestId: SECTIONS.ITALY,
  error: false,
  loading: true,
  checked: true,
  href: API_APIFY_SHORT_URL,
};

const tableInitialStatus = {
  data: {},
  loading: true,
  href: API_OPEN_PUGLIA_SHORT_URL,
};

const ItalyContainer = () => {
  const { t } = useTranslation();

  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  const [chartData, setChartData] = useState({ ...chartInitialStatus });
  const [tableData, setTableData] = useState(tableInitialStatus);
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

    // fill summary with last day-data extracted from previous fetch
    setSummaryData({
      ...summaryData,
      data: [
        { key: 'total-swabs', value: res[res.length - 1].tamponi },
        { key: 'total-cases', value: res[res.length - 1].totalCases },
        { key: 'total-deceased', value: res[res.length - 1].deceased },
        {
          key: 'last-update',
          value: moment(intensiveTherapy[intensiveTherapy.length - 1].x).format(
            'LLL',
          ),
        },
      ],
      loading: false,
      error: false,
    });
    setChartData({
      ...chartInitialStatus,
      data: [
        {
          intensive_therapy: intensiveTherapy,
        },
        { total_hospitalized: totalHospitalized },
        { total_positive: totalPositive },
        { new_daily_positive: newDailyPositive },
        { daily_deceased: dailyDeceased },
        { daily_swabs: dailySwabs },
      ],
      loading: false,
    });
    return res;
  };

  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchItalyHistoricalAll()
      .then((res) => {
        return extractData(res);
      })
      .then((res) => {
        setFetchedDataAll(res);
      })
      .catch(() => {
        setSummaryData({ loading: false, error: true });
        setChartData({ error: true });
      });

    // fill table with fetched data
    fetchItalyRegion()
      .then((res) => {
        setTableData({ ...tableInitialStatus, data: res, loading: false });
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
      data: [
        {
          intensive_therapy: intensiveTherapy,
        },
        { total_hospitalized: totalHospitalized },
        { total_positive: totalPositive },
        { new_daily_positive: newDailyPositive },
        { daily_deceased: dailyDeceased },
        { daily_swabs: dailySwabs },
      ],
      loading: false,
      checked,
    });
  };

  return (
    <div data-test-id="italy-container">
      <Grid container justify="center">
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          style={{ paddingLeft: 8, paddingRight: 8 }}
        >
          <Summary {...summaryData} />
        </Grid>
      </Grid>
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item xs={12}>
          <ChartContainer {...chartData} onToggleSwitch={onToggleSwitch} />
        </Grid>
      </Grid>
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }}>
          <Typography variant="h5" style={{ textTransform: 'capitalize' }}>
            {t('regions-details')}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }} xs={12}>
          <ItalyRegions {...tableData} />
        </Grid>
      </Grid>
    </div>
  );
};

// ItalyContainer.defaultProps = {
//   data: {},
//   error: false,
// };

export default ItalyContainer;
