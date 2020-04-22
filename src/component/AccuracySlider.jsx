import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { DEFAUL_MAX_DATA_SIZE } from '../utils/consts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    marginRight: 25,
    textAlign: 'center',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

// the marks used as base
const marks = [
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function AccuracySlider({
  accuracyValue,
  disabled,
  changeAccuracy,
}) {
  const classes = useStyles();

  /**
   * Called when its value has been changed, calls the parent method
   * with the new value
   * @param {text} e the event object contains the new value
   */
  const onChangeAccuracy = (e) =>
    changeAccuracy(
      e && e.target && e.target.ariaValueNow
        ? parseInt(e.target.ariaValueNow, 10)
        : 0,
    );

  return (
    <div className={classes.root}>
      <Typography
        id="discrete-slider-custom"
        textAlign="center"
        style={disabled ? { color: 'grey.500' } : {}}
      >
        Accuracy
      </Typography>
      <Slider
        disabled={disabled}
        defaultValue={accuracyValue || DEFAUL_MAX_DATA_SIZE}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        marks={marks}
        min={10}
        max={50}
        onChangeCommitted={onChangeAccuracy}
      />
    </div>
  );
}
