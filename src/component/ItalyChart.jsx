import React, { useState } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  Hint,
} from 'react-vis';
import { Box } from '@material-ui/core';
import moment from 'moment';
import Error from './Error';
import { reduceData } from '../utils/chartUtils';
import LastUpdate from './LastUpdate';
import { COVID_19_API, STATUS } from '../utils/consts';

const initialHintValue = {
  data: {},
  over: false,
  status: '',
};

const ItalyChart = ({ data, width = 500 }) => {
  const [hint, setHint] = useState(initialHintValue);
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

  const getHintSection = () => {
    return hint.over ? (
      <Hint value={hint.data}>
        <div style={{ background: 'black', padding: 5 }}>
          Day: {moment(hint.data.x).format('DD/MM')} <br />
          {hint.status}: {hint.data.y}
        </div>
      </Hint>
    ) : null;
  };

  const mouseOver = (datapoint, status) => {
    setHint({ data: datapoint, over: true, status });
  };

  const mouseOut = (datapoint) => {
    setHint({ data: datapoint, over: false, status: '' });
  };

  return (
    <Box marginTop={1} marginBottom={3} data-id="italy-chart-box">
      {data && data.length > 0 && (
        <LastUpdate date={data[data.length - 1].Date} href={COVID_19_API} />
      )}
      <XYPlot
        height={300}
        width={width || 800}
        margin={{ left: 60, right: 30 }}
        xType="time"
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
          onValueMouseOver={(val) => mouseOver(val, STATUS.CONFIRMED)}
          onValueMouseOut={mouseOut}
        />
        <LineMarkSeries
          curve="curveMonotoneX"
          data={recoveredArray}
          onValueMouseOver={(val) => mouseOver(val, STATUS.RECOVERED)}
          onValueMouseOut={mouseOut}
        />
        <LineMarkSeries
          curve="curveMonotoneX"
          data={deathsArray}
          onValueMouseOver={(val) => mouseOver(val, STATUS.DEATHS)}
          onValueMouseOut={mouseOut}
        />
        <XAxis
          title="day"
          // tickFormat={(value) => moment(value).format('DD/MM')}
          tickTotal={20}
        />
        <YAxis title="number" position="end" tickTotal={10} />
        {getHintSection(hint.over)}
      </XYPlot>
    </Box>
  );
};

export default ItalyChart;
