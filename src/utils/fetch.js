import { mockItalyHistoricalResponseApify } from './mock/mockItalyHistoricalResponse_Apify';
import { mockWorldwideSummary } from './mock/mockWorldwideSummary';
import { mockItalyRegionsResponse } from './mock/mockItalyRegionsResponse';
import {
  API_ITALY_HYSTORICAL,
  API_ITALY_REGION,
  API_WORLDWIDE_HISTORICAL_TOTALS,
} from './consts';

// Italy
export const fetchItalyHistoricalAllApify = async (mock = false) => {
  if (mock) {
    console.log('fetchItalyHistoricalAllApify mock = true');
    return mockItalyHistoricalResponseApify;
  }
  return fetch(API_ITALY_HYSTORICAL).then((res) => res.json());
};

export const fetchItalyRegion = async (mock = false) => {
  if (mock) {
    console.log('fetchItalyRegion mock = true');
    return mockItalyRegionsResponse;
  }
  return fetch(API_ITALY_REGION).then((res) => res.json());
};

export const fetchWorldwideHistorical = async (mock = false) => {
  if (mock) {
    console.log('fetchWorldwideHistorical mock = true');
    return mockWorldwideSummary;
  }
  return fetch(API_WORLDWIDE_HISTORICAL_TOTALS).then((res) => res.json());
};
