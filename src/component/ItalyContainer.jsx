/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import ItalyChart from './ItalyChart';
import ItalyRegions from './ItalyRegions';
import { fetchItalyHistoricalAll, fetchItalyRegion } from '../utils/fetch';
import Summary from './Summary';

const summaryInitialStatus = {
  confirmed: 0,
  recovered: 0,
  deaths: 0,
  error: false,
};

const chartInitialStatus = {
  data: {},
  error: false,
};

const ItalyContainer = (props) => {
  const { width } = props;

  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  const [chartData, setChartData] = useState({ ...chartInitialStatus });
  const [tableData, setTableData] = useState(undefined);

  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchItalyHistoricalAll()
      .then((res) => {
        // fill chart with fetched data
        setChartData(res);
        const { Confirmed, Recovered, Deaths } = res[res.length - 1];
        // fill summary with last day-data extracted from previous fetch
        setSummaryData({
          confirmed: Confirmed,
          recovered: Recovered,
          deaths: Deaths,
          error: false,
        });
      })
      .catch(() => {
        setSummaryData({ error: true });
        setChartData({ error: true });
      });

    // fill table with fetched data
    fetchItalyRegion()
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

        {chartData && chartData.length > 0 && (
          <ItalyChart data={chartData} width={width} />
        )}

        {<ItalyRegions tableData={tableData} width={width} />}
      </Box>
    </>
  );
};

ItalyContainer.defaultProps = {
  data: {},
  error: false,
};

export default ItalyContainer;
