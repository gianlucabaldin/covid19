/* eslint-disable no-sparse-arrays */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { fetchWorldwideCountryTotals } from '../utils/fetch';
import Summary from './Summary';
import {
  filterEuropeanCountries,
  europeanSummatory,
} from '../utils/chartUtils';
import { SECTIONS, API_COVID_API_INFO_SHORT_URL } from '../utils/consts';
import CountryTable from './CountryTable';

const summaryInitialStatus = {
  confirmed: 0,
  deaths: 0,
  recovered: 0,
  dataTestId: SECTIONS.EUROPE,
  loading: true,
  error: false,
};

const tableInitialStatus = {
  data: {},
  loading: true,
  dataTestId: SECTIONS.EUROPE,
  href: API_COVID_API_INFO_SHORT_URL,
};

const EuropeContainer = () => {
  const { t } = useTranslation();
  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  const [tableData, setTableData] = useState(tableInitialStatus);

  const extractData = (res) => {
    const filtered = filterEuropeanCountries(res.result);

    const { confirmed, deaths, recovered } = europeanSummatory(filtered);
    setSummaryData({
      ...summaryData,
      data: [
        { key: 'total-confirmed', value: confirmed },
        { key: 'total-recovered', value: recovered },
        { key: 'total-deaths', value: deaths },
        {
          key: 'last-update',
          value: moment(res.date).format('LLL'),
        },
      ],
      loading: false,
      error: false,
    });

    setTableData({
      ...tableInitialStatus,
      data: { result: filtered },
      loading: false,
    });
    return res.result;
  };
  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchWorldwideCountryTotals()
      .then((res) => {
        return extractData(res);
      })
      .catch(() => {
        setSummaryData({ loading: false, error: true });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
        <Grid item style={{ marginTop: 10 }}>
          <Typography variant="h5" style={{ textTransform: 'capitalize' }}>
            {t('country_list')}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ paddingLeft: 16, paddingRight: 16 }}
        justify="center"
      >
        <Grid item style={{ marginTop: 10 }}>
          <CountryTable {...tableData} />
        </Grid>
      </Grid>
    </>
  );
};

EuropeContainer.defaultProps = {
  data: {},
  error: false,
};

export default EuropeContainer;
