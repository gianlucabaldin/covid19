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
  DiscreteColorLegend,
} from 'react-vis';
import { Container } from '@material-ui/core';
import moment from 'moment';
import AccuracySlider from './AccuracySlider';
import Error from './Error';
import LastUpdate from './LastUpdate';
import { COVID_19_API, STATUS } from '../utils/consts';
import SwitchInterval from './SwitchInterval';

const initialHintValue = {
  data: {},
  over: false,
  status: '',
};

const ItalyChart = ({
  data,
  error,
  loading,
  checked,
  onToggleSwitch,
  accuracy,
  onChangeAccuracy,
  width = 500,
}) => {
  const [hint, setHint] = useState(initialHintValue);
  // const [confirmedValues, setConfirmedValues] = useState([]);
  // const [recoveredValues, setRecoveredValues] = useState([]);
  // const [deathsValues, setDeathsValues] = useState([]);
  // const [disableAccuracy, setDisableAccuracy] = useState(false);
  // const [accuracyValue, setAccuracyValue] = useState(DEFAUL_MAX_DATA_SIZE);

  let confirmed = [];
  let recovered = [];
  let deaths = [];
  if (data && data.confirmed && data.recovered && data.deaths) {
    confirmed = data.confirmed;
    recovered = data.recovered;
    deaths = data.deaths;
  }
  /**
   * Filter and manipulate the whole data set, filtering in case data lenght > accuracy
   * with accuracy default = 20
   * @param {accuracyChanged} accuracyChanged the new accuracy value (optional)
   */

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

  const getLastUpdate = () => {
    return confirmed &&
      confirmed.length &&
      confirmed.length > 0 &&
      confirmed[confirmed.length - 1].x // "x" represents the date property
      ? moment(confirmed[confirmed.length - 1].x).format('DD/MM/YYYY')
      : 'Not available';
  };

  return (
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
        <LastUpdate date={getLastUpdate()} href={COVID_19_API} />

        <SwitchInterval onToggleSwitch={onToggleSwitch} checked={checked} />

        <AccuracySlider
          accuracy={accuracy}
          onChangeAccuracy={onChangeAccuracy}
        />
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
          {confirmed && confirmed.length > 0 && (
            <LineMarkSeries
              curve="curveMonotoneX"
              data={confirmed || []}
              onValueMouseOver={(val) => mouseOver(val, STATUS.CONFIRMED)}
              onValueMouseOut={mouseOut}
            />
          )}
          {recovered && recovered.length > 0 && (
            <LineMarkSeries
              curve="curveMonotoneX"
              data={recovered || []}
              onValueMouseOver={(val) => mouseOver(val, STATUS.RECOVERED)}
              onValueMouseOut={mouseOut}
            />
          )}
          {deaths && deaths.length > 0 && (
            <LineMarkSeries
              curve="curveMonotoneX"
              data={deaths || []}
              onValueMouseOver={(val) => mouseOver(val, STATUS.DEATHS)}
              onValueMouseOut={mouseOut}
            />
          )}
          <XAxis
            title="day"
            tickFormat={(value) => moment(value).format('DD/M')}
            tickTotal={20}
          />
          <YAxis title="number" position="end" />

          {/* the hint popup shown when user point a mark with the mouse */}
          {getHintSection(hint.over)}
        </XYPlot>
      </Container>
    </>
  );
};

export default ItalyChart;
