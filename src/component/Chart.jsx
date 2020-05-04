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
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import Loading from './Loading';

const useStyles = makeStyles((theme) => ({
  legend: {
    marginLeft: '40%',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'inherit',
      textAlign: 'center',
    },
  },
}));

const Chart = ({ series, status, loading = true }) => {
  const classes = useStyles();

  const initialHintValue = {
    data: {},
    over: false,
    status: '',
  };
  const [hint, setHint] = useState(initialHintValue);

  const { t } = useTranslation();

  const mouseOver = (datapoint, datapointStatus) => {
    setHint({ data: datapoint, over: true, status: datapointStatus });
  };

  const mouseOut = (datapoint) => {
    setHint({ data: datapoint, over: false, status: '' });
  };

  const getHintSection = () => {
    return hint.over ? (
      <Hint value={hint.data}>
        <div
          style={{
            background: 'white',
            padding: 5,
            border: '1px solid black',
            borderRadius: 10,
            color: '#303f9f',
          }}
        >
          <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
            {t('chart.day')}:{' '}
          </span>{' '}
          {moment(hint.data.x).format('DD/MM')} <br />
          <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
            {t(hint.status.toString().toLowerCase()).replace('_', ' ')}:
          </span>{' '}
          {hint.data.y.toLocaleString()}
        </div>
      </Hint>
    ) : null;
  };

  const getLegend = () => {
    const array = [];
    if (status && status.length > 0) {
      status.forEach((el) => {
        array.push(
          <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
            {t(el.toString().toLowerCase()).replace('_', ' ').toUpperCase()}
          </span>,
        );
      });
    }
    return array;
  };
  return loading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <div data-test-id="chart">
      <DiscreteColorLegend
        strokeWidth={2}
        orientation="vertical"
        items={getLegend()}
        // style={{ marginLeft: '40%', padding: 0 }}
        className={classes.legend}
      />
      <FlexibleWidthXYPlot height={250} xType="time">
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
