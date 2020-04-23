/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import ItalyChart from './ItalyChart';
import ItalyRegions from './ItalyRegions';
import { fetchItalyHistoricalAll, fetchItalyRegion } from '../utils/fetch';
import Summary from './Summary';
import { processData } from '../utils/chartUtils';
import { DEFAUL_MAX_DATA_SIZE } from '../utils/consts';

const summaryInitialStatus = {
  confirmed: 0,
  recovered: 0,
  deaths: 0,
  error: false,
};

const chartInitialStatus = {
  data: {
    confirmed: [],
    recovered: [],
    deaths: [],
  },
  error: false,
  loading: false,
  switchChecked: true,
  accuracy: DEFAUL_MAX_DATA_SIZE,
};

const ItalyContainer = (props) => {
  const { width } = props;

  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  const [chartData, setChartData] = useState({ ...chartInitialStatus });
  const [tableData, setTableData] = useState(undefined);
  const [fetchedDataAll, setFetchedDataAll] = useState();

  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchItalyHistoricalAll(true)
      .then((res) => {
        const { confirmed, recovered, deaths } = processData(res);
        setChartData({
          ...chartInitialStatus,
          data: {
            confirmed,
            recovered,
            deaths,
          },
        });
        const { Confirmed, Recovered, Deaths } = res[res.length - 1];
        // fill summary with last day-data extracted from previous fetch
        setSummaryData({
          confirmed: Confirmed,
          recovered: Recovered,
          deaths: Deaths,
          error: false,
        });
        return res;
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
        setTableData(res);
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
    const { confirmed, recovered, deaths } = processData(
      fetchedDataAll,
      checked ? undefined : 7,
    );
    setChartData({
      ...chartData,
      data: { confirmed, recovered, deaths },
    });
  };

  const onChangeAccuracy = (accuracy) => {
    const { confirmed, recovered, deaths } = processData(
      fetchedDataAll,
      accuracy,
    );
    setChartData({
      ...chartData,
      data: { confirmed, recovered, deaths },
      accuracy,
    });
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        m={1}
        p={1}
        bgcolor="background.paper"
        data-id="italy-container-box"
      >
        <Summary {...summaryData} />

        <ItalyChart
          {...chartData}
          width={width}
          onToggleSwitch={onToggleSwitch}
          onChangeAccuracy={onChangeAccuracy}
        />

        <ItalyRegions tableData={tableData} width={width} />
      </Box>
    </>
  );
};

ItalyContainer.defaultProps = {
  data: {},
  error: false,
};

export default ItalyContainer;
