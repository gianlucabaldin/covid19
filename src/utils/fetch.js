import { mockItalyHistoricalResponse } from './mock/mockItalyHistoricalResponse';
import { mockWorldwideSummary } from './mock/mockWorldwideSummary';
import { mockItalyRegionsResponse } from './mock/mockItalyRegionsResponse';
import {
  API_ITALY_HYSTORICAL,
  API_ITALY_REGION,
  API_WORLDWIDE_HISTORICAL_TOTALS,
  API_WORLDWIDE_COUNTRY_TOTALS,
} from './consts';
import { mockWorldwideCountryTotal } from './mock/mockWorldwideCountryTotal';

// read env var - used in development mode
const mockApi = process.env.REACT_APP_MOCK_API || false;

// Italy
export const fetchItalyHistoricalAll = async () => {
  if (mockApi) {
    console.log('fetchItalyHistoricalAll mock = true');
    return mockItalyHistoricalResponse;
  }
  return fetch(API_ITALY_HYSTORICAL).then((res) => res.json());
};

export const fetchItalyRegion = async () => {
  if (mockApi) {
    console.log('fetchItalyRegion mock = true');
    return mockItalyRegionsResponse;
  }
  return fetch(API_ITALY_REGION).then((res) => res.json());
};

export const fetchWorldwideHistorical = async () => {
  if (mockApi) {
    console.log('fetchWorldwideHistorical mock = true');
    return mockWorldwideSummary;
  }
  return fetch(API_WORLDWIDE_HISTORICAL_TOTALS).then((res) => res.json());
};

export const fetchWorldwideCountryTotals = async () => {
  if (mockApi) {
    console.log('fetchWorldwideCountryTotals mock = true');
    return mockWorldwideCountryTotal;
  }
  return fetch(API_WORLDWIDE_COUNTRY_TOTALS).then((res) => res.json());
};
