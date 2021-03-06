/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import { europeanCountries } from './consts';

/**
 * Prepare 3 arrays with reduced data
 * @param {array} data the fetched data
 * @param {boolean} lastTenDays if to extract data recent or historical
 */
export const processData = (data, lastTenDays = true) => {
  const intensiveTherapy = [];
  const totalHospitalized = [];
  let totalPositive = [];
  let newDailyPositive = [];
  let dailyDeceased = [];
  let dailySwabs = [];

  data.forEach((el, i, array) => {
    const date = new Date(el.lastUpdatedAtSource);
    // Author note: source data is broken at 12/5/2020 giving 3 items with same date but different counts
    // (the latter is the good) mismatching all charts, the provider won't fix it by its side and asked me
    // to fix it by my side with a workoround / It's ashaming coding by I have to
    if (
      i < array.length - 1 &&
      array[i].lastUpdatedAtSource === array[i + 1].lastUpdatedAtSource
    ) {
      return; // if same date, skip it and keep the latter
    }

    intensiveTherapy.push({
      x: date,
      y: el.intensiveTherapy,
    });
    totalHospitalized.push({
      x: date,
      y: el.totalHospitalized,
    });
    totalPositive.push({
      x: date,
      y: el.totalPositive || el.totalCurrentlyPositive || undefined, // data change within the response itself!
    });
    newDailyPositive.push({
      x: date,
      y: el.newPositive || el.newCurrentlyPositive || undefined, // data change within the response itself!
    });
    if (i > 0) {
      dailyDeceased.push({
        x: date,
        y: array[i].deceased - array[i - 1].deceased,
      });
      dailySwabs.push({
        x: date,
        y: array[i].tamponi - array[i - 1].tamponi,
      });
    }
  });

  // remove partial / error / inconsistent values mislead within the chart
  totalPositive = totalPositive.filter((el) => el.y !== undefined);
  newDailyPositive = newDailyPositive.filter(
    (el) => el.y !== undefined && el.y !== 0,
  );
  dailyDeceased = dailyDeceased.filter((el) => el.y !== 0);
  dailySwabs = dailySwabs.filter((el) => el.y !== 0);

  // in case of not historical (= last ten days), then filter result with the
  // array latest ones
  if (lastTenDays) {
    [
      intensiveTherapy,
      totalHospitalized,
      totalPositive,
      newDailyPositive,
      dailyDeceased,
      dailySwabs,
    ].forEach((array) => {
      array.splice(0, array.length - 10); // removes from i=0 to i=lenght-10
    });
  }

  return {
    intensiveTherapy,
    totalHospitalized,
    totalPositive,
    newDailyPositive,
    dailyDeceased,
    dailySwabs,
  };
};

// worldwide
/**
 * Prepare 3 arrays with reduced data
 * @param {array} data the fetched data
 * @param {boolean} lastTenDays if to extract data recent or historical
 */
export const processDataWorldwide = (data, lastTenDays = true) => {
  const confirmed = [];
  const deaths = [];
  const recovered = [];
  for (const property in data) {
    const date = new Date(property);
    confirmed.push({
      x: date,
      y: data[property].confirmed,
    });
    deaths.push({
      x: date,
      y: data[property].deaths,
    });
    recovered.push({
      x: date,
      y: data[property].recovered,
    });
  }

  // in case of not historical (= last ten days), then filter result with the
  // array latest ones
  if (lastTenDays) {
    [confirmed, deaths, recovered].forEach((array) => {
      array.splice(0, array.length - 10); // removes from i=0 to i=lenght-10
    });
  }

  return {
    confirmed,
    deaths,
    recovered,
  };
};

export const filterEuropeanCountries = (results) => {
  return results.filter((country) =>
    europeanCountries.includes(Object.keys(country)[0]),
  );
};

export const europeanSummatory = (results) => {
  let confirmed = 0;
  let recovered = 0;
  let deaths = 0;
  results.map((el) => {
    confirmed += Object.values(el)[0].confirmed;
    recovered += Object.values(el)[0].recovered;
    deaths += Object.values(el)[0].deaths;
  });
  return {
    confirmed,
    deaths,
    recovered,
  };
};
