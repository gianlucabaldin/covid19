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

const ChartItalyDetail = ({ data }) => {
  const confirmedArray = [];
  const recoveredArray = [];
  const deathsArray = [];

  data.map((el) => {
    confirmedArray.push({
      x: new Date(el.Date).getTime(),
      // x: el.Date,
      // x: dateFormat(new Date(el.Date)),
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
      <XYPlot height={300} width={800} margin={{ left: 60 }}>
        <VerticalGridLines />
        <HorizontalGridLines />

        <LineSeries
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
        />
        {/* <LineMarkSeries curve="curveMonotoneX" data={confirmedArray} />
        <LineMarkSeries curve="curveMonotoneX" data={recoveredArray} />
        <LineMarkSeries curve="curveMonotoneX" data={deathsArray} /> */}
        <XAxis
          title="day"
          tickFormat={(value) => moment(value).format('DD/MM')}
        />
        <YAxis title="number" position="end" tickTotal={10} />
      </XYPlot>
    </>
  );
};

export default ChartItalyDetail;
