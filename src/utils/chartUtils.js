/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { DEFAUL_MAX_DATA_SIZE } from './consts';

// In order to have a "readable" chart, reduce if too much values
const reduceData = (data, maxSize = DEFAUL_MAX_DATA_SIZE) => {
  maxSize -= 1; // the last array value is always added
  const { length } = data;
  const lastVal = data[data.length - 1];
  if (length > maxSize) {
    const y = Math.round(length / maxSize);
    data = data.filter((el, i) => Math.round(i % y) === 0);
  }
  return data.concat(lastVal);
};

/**
 * Prepare 3 arrays with reduced data
 * @param {array} data the fetched data
 * @param {number} accuracy the accuracy (20 as default)
 */
export const prepareData = (data, accuracy) => {
  const confirmedArray = [];
  const recoveredArray = [];
  const deathsArray = [];

  reduceData(data, accuracy).forEach((el) => {
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

  return { confirmedArray, recoveredArray, deathsArray };
};
