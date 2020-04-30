/* eslint-disable import/prefer-default-export */

/**
 * Check if the value is a number and more than a thousand, in that case
 * call the toLocalString() witch inserts (eventually) the separator, used
 * in Summary
 * I.E. for italian it inserts the "." ad thousand separator
 * @param {number || string} val the value to insert the separator to if > thousand
 */
export const getLocalizedValue = (val) => {
  if (typeof val === 'number') {
    return Number(val).toLocaleString();
  }
  return val;
};
