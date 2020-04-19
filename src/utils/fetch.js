import { mockResponseJson } from './mock/mockItalyHistoricalResponse';

export const API_ITALY_HYSTORICAL =
  'https://api.covid19api.com/total/dayone/country/italy';

export const fetch = async (url = API_ITALY_HYSTORICAL, mock = true) => {
  if (mock) {
    return mockResponseJson;
  }
  return fetch(url).then((res) => res.json());
};

export const fetchLastDay = async (mock = true) => {
  if (mock) {
    return mockResponseJson[mockResponseJson.length - 1];
  }
  return fetch().then((res) => res[res.length - 1]);
};
