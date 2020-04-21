import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  Hint,
} from 'react-vis';
import { Box } from '@material-ui/core';
import Error from './Error';
import { reduceData } from '../utils/chartUtils';
import LastUpdate from './LastUpdate';
import { COVDID_19_API } from '../utils/consts';

const ItalyChart = ({ data, width = 500 }) => {
  const [hintValue, setHintValue] = useState(false);
  // const [hintValue, setHintValue] = useState(undefined);
  const confirmedArray = [];
  const recoveredArray = [];
  const deathsArray = [];

  if (!data) return <Error />;

  reduceData(data).map((el) => {
    confirmedArray.push({
      x: new Date(el.Date),
      y: el.Confirmed,
    });
    recoveredArray.push({
      x: new Date(el.Date),
      y: el.Recovered,
    });
    deathsArray.push({
      x: new Date(el.Date),
      y: el.Deaths,
    });
  });

  return (
    <Box marginTop={1} marginBottom={3}>
      {data && data.length > 0 && (
        <LastUpdate date={data[data.length - 1].Date} href={COVDID_19_API} />
      )}
      <XYPlot
        height={300}
        width={width || 800}
        margin={{ left: 60, right: 30 }}
        xType="time"
        onMouseLeave={() => setHintValue(false)}
        data-id="chart-italy"
      >
        <VerticalGridLines />
        <HorizontalGridLines />

        {/* <LineSeries
          data={confirmedArray}
          lineStyle={{ stroke: 'green' }}
          markStyle={{ stroke: 'purple' }}
          curve="curveMonotoneX"
        />
        <LineSeries
          data={recoveredArray}
          lineStyle={{ stroke: 'green' }}
          markStyle={{ stroke: 'purple' }}
          curve="curveMonotoneX"
        />
        <LineSeries
          data={deathsArray}
          lineStyle={{ stroke: 'green' }}
          markStyle={{ stroke: 'purple' }}
          curve="curveMonotoneX"
        /> */}
        <LineMarkSeries
          curve="curveMonotoneX"
          data={confirmedArray}
          // tickTotal={1}
          // lineStyle={{ stroke: 'red' }}
          // markStyle={{ stroke: 'blue' }}
          onNearestXY={(val) => setHintValue(val)}
        />
        <LineMarkSeries curve="curveMonotoneX" data={recoveredArray} />
        <LineMarkSeries curve="curveMonotoneX" data={deathsArray} />
        <XAxis
          title="day"
          // tickFormat={(value) => moment(value).format('DD/MM')}
          tickTotal={20}
        />
        <YAxis title="number" position="end" tickTotal={10} />
        {hintValue ? <Hint value={hintValue} /> : null}
      </XYPlot>
    </Box>
  );
};

export default ItalyChart;
