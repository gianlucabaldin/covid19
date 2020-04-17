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

const ChartItalyDetail = ({ data }) => {
  // console.log(`initial data = ${JSON.stringify(data)}`);
  const confirmedArray = [];
  const recoveredArray = [];
  const deathsArray = [];

  data.map((el) => {
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

  // console.log(`confirmedArray ${JSON.stringify(confirmedArray[0])}`);

  return (
    <>
      <XYPlot height={300} width={300} xType="time-utc">
        <VerticalGridLines />
        <HorizontalGridLines />

        <LineSeries
          // data={[
          //   { x: 1, y: 11 },
          //   { x: 1.5, y: 29 },
          //   { x: 3, y: 7 },
          // ]}
          data={confirmedArray}
          lineStyle={{ stroke: 'green' }}
          markStyle={{ stroke: 'purple' }}
          curve="curveMonotoneX"
          // xType="time-utc"
        />
        {/* <LineMarkSeries curve="curveMonotoneX" data={confirmedArray} /> */}
        <XAxis title="asse X" />
        <YAxis title="asse y" position="end" />
      </XYPlot>
    </>
  );
};

export default ChartItalyDetail;
