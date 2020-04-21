// const DEFAUL_MAX_DATA_SIZE = 20;

import { DEFAUL_MAX_DATA_SIZE } from './consts';

// In order to have a "readable" chart, reduce if too much input values
export const reduceData = (data, maxSize = DEFAUL_MAX_DATA_SIZE) => {
  const { length } = data;
  if (length > maxSize) {
    const y = Math.round(length / maxSize);
    data = data.filter((el, i) => Math.round(i % y) === 0);
  }
  return data;
};
