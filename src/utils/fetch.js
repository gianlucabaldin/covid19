import { mockItalyHistoricalResponse } from './mock/mockItalyHistoricalResponse';
import { mockItalyHistoricalResponseApify } from './mock/mockItalyHistoricalResponse_Apify';
import { mockItalyRegionsResponse } from './mock/mockItalyRegionsResponse';
import {
  API_ITALY_HYSTORICAL,
  API_ITALY_HYSTORICAL_APIFY,
  API_ITALY_REGION,
} from './consts';

export const fetchItalyHistoricalAll = async (mock = false) => {
  if (mock) {
    return mockItalyHistoricalResponse;
  }
  return fetch(API_ITALY_HYSTORICAL).then((res) => res.json());
};

export const fetchItalyHistoricalAllApify = async (mock = false) => {
  if (mock) {
    return mockItalyHistoricalResponseApify;
  }
  return fetch(API_ITALY_HYSTORICAL_APIFY).then((res) => res.json());
};

export const fetchItalyHistoricalLastDay = async (mock = false) => {
  if (mock) {
    return mockItalyHistoricalResponse[mockItalyHistoricalResponse.length - 1];
  }
  return fetch().then((res) => res[res.length - 1]);
};

export const fetchItalyRegion = async (mock = false) => {
  if (mock) {
    return mockItalyRegionsResponse;
  }
  return fetch(API_ITALY_REGION).then((res) => res.json());
};
