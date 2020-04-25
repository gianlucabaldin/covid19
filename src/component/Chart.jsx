import React, { useState } from 'react';
import moment from 'moment';
import {
  Hint,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  DiscreteColorLegend,
  XAxis,
  YAxis,
} from 'react-vis/dist';
import { FlexibleWidthXYPlot } from 'react-vis/dist/make-vis-flexible';

const Chart = ({ height, width, series, status }) => {
  const initialHintValue = {
    data: {},
    over: false,
    status: '',
  };
  const [hint, setHint] = useState(initialHintValue);

  const mouseOver = (datapoint, datapointStatus) => {
    setHint({ data: datapoint, over: true, status: datapointStatus });
  };

  const mouseOut = (datapoint) => {
    setHint({ data: datapoint, over: false, status: '' });
  };

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

  const getLegend = () => {
    const array = [];
    if (status && status.length > 0) {
      status.forEach((el) => {
        array.push(el.toString().toLowerCase());
      });
    }
    return array;
  };
  return (
    <div style={{ height: '300px' }}>
      <FlexibleWidthXYPlot height={300} xType="time">
        <DiscreteColorLegend
          strokeWidth={2}
          orientation="horizontal"
          items={getLegend()}
          style={{ position: 'absolute', left: '15%' }}
        />

        <HorizontalGridLines />
        <VerticalGridLines />

        {series &&
          series.length > 0 &&
          series.map((serie, i) => (
            <LineMarkSeries
              getNull={(d) => d.y !== undefined} // data hole / attribute changes
              // curve="curveMonotoneX"
              data={serie || []}
              onValueMouseOver={(val) => mouseOver(val, status[i])}
              onValueMouseOut={mouseOut}
              style={{
                strokeWidth: '3px',
              }}
              lineStyle={{ stroke: 'red' }}
              markStyle={{ stroke: 'blue' }}
              size={3} // mark size, default=5
              fill="red" // the color inside the mark
            />
          ))}
        <XAxis
          title="day"
          tickFormat={(value) => moment(value).format('DD/M')}
          tickTotal={10}
        />
        <YAxis title="number" position="end" />

        {/* the hint popup shown when user point a mark with the mouse */}
        {getHintSection(hint.over)}
      </FlexibleWidthXYPlot>
    </div>
  );
};

export default Chart;