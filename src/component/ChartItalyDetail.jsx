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
// import * as moment from 'moment';
import { reduceData } from '../utils/chartUtils';

const ChartItalyDetail = ({ data, width }) => {
  const [hintValue, setHintValue] = useState(false);
  // const [hintValue, setHintValue] = useState(undefined);
  const confirmedArray = [];
  const recoveredArray = [];
  const deathsArray = [];

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
    <>
      <XYPlot
        height={300}
        width={width || 800}
        margin={{ left: 60 }}
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
    </>
  );
};

export default ChartItalyDetail;
