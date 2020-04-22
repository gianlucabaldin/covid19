import React, { useState, useEffect } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  Hint,
  DiscreteColorLegend,
} from 'react-vis';
import { Container } from '@material-ui/core';
import moment from 'moment';
import AccuracySlider from './AccuracySlider';
import Error from './Error';
import { prepareData } from '../utils/chartUtils';
import LastUpdate from './LastUpdate';
import { COVID_19_API, STATUS } from '../utils/consts';
import SwitchInterval from './SwitchInterval';

const initialHintValue = {
  data: {},
  over: false,
  status: '',
};

const ItalyChart = ({ data, width = 500 }) => {
  const [hint, setHint] = useState(initialHintValue);
  const [confirmedValues, setConfirmedValues] = useState([]);
  const [recoveredValues, setRecoveredValues] = useState([]);
  const [deathsValues, setDeathsValues] = useState([]);

  /**
   * Filter and manipulate the whole data set, filtering in case data lenght > accuracy
   * with accuracy default = 20
   * @param {accuracyChanged} accuracyChanged the new accuracy value (optional)
   */
  const manipulateData = (accuracyChanged) => {
    const { confirmedArray, recoveredArray, deathsArray } = prepareData(
      data,
      accuracyChanged,
    );
    setConfirmedValues(confirmedArray);
    setRecoveredValues(recoveredArray);
    setDeathsValues(deathsArray);
  };

  useEffect(() => {
    manipulateData();
  }, []);

  // method passed to child component Accuracy, called when Accuracy changes
  const changeAccuracy = (accuracyChanged) => {
    manipulateData(accuracyChanged);
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

  const mouseOver = (datapoint, status) => {
    setHint({ data: datapoint, over: true, status });
  };

  const mouseOut = (datapoint) => {
    setHint({ data: datapoint, over: false, status: '' });
  };

  return data && data.length > 0 ? (
    <>
      <Container
        marginTop={1}
        marginBottom={3}
        data-id="italy-chart-box"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {data && data.length > 0 && (
          <LastUpdate date={data[data.length - 1].Date} href={COVID_19_API} />
        )}

        <SwitchInterval />

        <AccuracySlider changeAccuracy={changeAccuracy} />
      </Container>

      <Container
        style={{
          position: 'relative',
        }}
      >
        <DiscreteColorLegend
          strokeWidth={2}
          orientation="horizontal"
          items={[
            { title: STATUS.CONFIRMED.toLowerCase() },
            { title: STATUS.RECOVERED.toLowerCase() },
            { title: STATUS.DEATHS.toLowerCase() },
          ]}
          style={{ position: 'absolute', left: '40%' }}
        />

        <XYPlot
          height={300}
          width={width || 800}
          margin={{ left: 60, right: 30 }}
          xType="ordinal"
        >
          <HorizontalGridLines />
          <VerticalGridLines />

          <LineMarkSeries
            curve="curveMonotoneX"
            data={confirmedValues}
            onValueMouseOver={(val) => mouseOver(val, STATUS.CONFIRMED)}
            onValueMouseOut={mouseOut}
          />
          <LineMarkSeries
            curve="curveMonotoneX"
            data={recoveredValues}
            onValueMouseOver={(val) => mouseOver(val, STATUS.RECOVERED)}
            onValueMouseOut={mouseOut}
          />
          <LineMarkSeries
            curve="curveMonotoneX"
            data={deathsValues}
            onValueMouseOver={(val) => mouseOver(val, STATUS.DEATHS)}
            onValueMouseOut={mouseOut}
          />
          <XAxis
            title="day"
            tickFormat={(value) => moment(value).format('DD/M')}
            tickTotal={20}
          />
          <YAxis title="number" position="end" tickTotal={10} />

          {/* the hint popup shown when user point a mark with the mouse */}
          {getHintSection(hint.over)}
        </XYPlot>
      </Container>
    </>
  ) : (
    <Error />
  );
};

export default ItalyChart;
