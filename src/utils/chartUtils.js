/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

/**
 * Prepare 3 arrays with reduced data
 * @param {array} data the fetched data
 * @param {boolean} historical if to extract data
 */
export const processData = (data, historical = false) => {
  const intensiveTherapy = [];
  const totalHospitalized = [];
  let totalPositive = [];
  let newDailyPositive = [];
  let dailyDeceased = [];
  let dailySwabs = [];

  data.forEach((el, i, array) => {
    const date = new Date(el.lastUpdatedAtSource);

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
  if (!historical) {
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
