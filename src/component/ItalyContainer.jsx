/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import ItalyChart from './ItalyChart';
import ItalyRegions from './ItalyRegions';
import { fetchItalyRegion, fetchItalyHistoricalAllApify } from '../utils/fetch';
import Summary from './Summary';
import { processData } from '../utils/chartUtils';
import { DEFAUL_MAX_DATA_SIZE } from '../utils/consts';

const summaryInitialStatus = {
  // intensiveTherapy: 0,
  // totalHospitalized: 0,
  // totalPositive: 0,
  tamponi: 0,
  totalCases: 0,
  deceased: 0,
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
  loading: false,
  switchChecked: true,
  accuracy: DEFAUL_MAX_DATA_SIZE,
  checked: true,
};

const ItalyContainer = (props) => {
  const { width } = props;

  const [summaryData, setSummaryData] = useState({ ...summaryInitialStatus });
  const [chartData, setChartData] = useState({ ...chartInitialStatus });
  const [tableData, setTableData] = useState(undefined);
  const [fetchedDataAll, setFetchedDataAll] = useState();

  // fetch data from public api or mock (see implementation)
  const fetchData = () => {
    fetchItalyHistoricalAllApify(true)
      .then((res) => {
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
        });
        // fill summary with last day-data extracted from previous fetch
        setSummaryData({
          tamponi: res[res.length - 1].tamponi,
          totalCases: res[res.length - 1].totalCases,
          deceased: res[res.length - 1].deceased,
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
