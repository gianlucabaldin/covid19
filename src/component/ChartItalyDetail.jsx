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

const ChartItalyDetail = () => {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];
  return (
    <>
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <LineSeries
          data={[
            { x: 1, y: 11 },
            { x: 1.5, y: 29 },
            { x: 3, y: 7 },
          ]}
          lineStyle={{ stroke: 'green' }}
          markStyle={{ stroke: 'purple' }}
          curve="curveMonotoneX"
        />
        <LineMarkSeries curve="curveMonotoneX" data={data} />
        <XAxis title="asse X" />
        <YAxis title="asse y" position="end" />
      </XYPlot>
    </>
  );
};

export default ChartItalyDetail;
