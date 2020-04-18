import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
} from 'react-vis';
import * as moment from 'moment';
import { reduceData } from '../utils/chartUtils';

const ChartItalyDetail = ({ data }) => {
  const confirmedArray = [];
  const recoveredArray = [];
  const deathsArray = [];

  reduceData(data).map((el) => {
    confirmedArray.push({
      x: new Date(el.Date).getTime(),
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
    <>
      <XYPlot height={300} width={800} margin={{ left: 60 }} xType="time">
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
        />
        <LineMarkSeries curve="curveMonotoneX" data={recoveredArray} />
        <LineMarkSeries curve="curveMonotoneX" data={deathsArray} />
        <XAxis
          title="day"
          // tickFormat={(value) => moment(value).format('DD/MM')}
          tickTotal={20}
        />
        <YAxis title="number" position="end" tickTotal={10} />
      </XYPlot>
    </>
  );
};

export default ChartItalyDetail;
