import { mockItalyHistoricalResponseApify } from './mock/mockItalyHistoricalResponse_Apify';
import { mockItalyRegionsResponse } from './mock/mockItalyRegionsResponse';
import { API_ITALY_HYSTORICAL_APIFY, API_ITALY_REGION } from './consts';

export const fetchItalyHistoricalAllApify = async (mock = false) => {
  if (mock) {
    console.log('mock = true');
    return mockItalyHistoricalResponseApify;
  }
  console.log('mock = false');
  return fetch(API_ITALY_HYSTORICAL_APIFY).then((res) => res.json());
};

export const fetchItalyRegion = async (mock = false) => {
  if (mock) {
    return mockItalyRegionsResponse;
  }
  return fetch(API_ITALY_REGION).then((res) => res.json());
};
