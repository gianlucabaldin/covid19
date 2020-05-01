export const API_ITALY_HYSTORICAL =
  'https://api.apify.com/v2/datasets/CUdKmb25Z3HjkoDiN/items?format=json&clean=1';

export const API_ITALY_HYSTORICAL_APIFY_SHORT_URL = 'api.apify.com';
export const API_WORLDWIDE_SHORT_URL = 'covidapi.info';

export const API_ITALY_REGION =
  'https://openpuglia.org/api/?q=getdatapccovid-19';

/* LASTEST WORLDWIDE COUNT
   { "2020-01-22": { "confirmed": 555, "deaths": 17, "recovered": 28 },
     "2020-01-23": { "confirmed": 654, "deaths": 18, "recovered": 30 },
   },....
*/
export const API_WORLDWIDE_HISTORICAL_TOTALS =
  'https://covidapi.info/api/v1/global/count';

/* LATEST COUNT BY COUNTRY
   { "SWE": { "confirmed": 20302, "deaths": 2462, "recovered": 1005}},
   { "TZA": { "confirmed": 480, "deaths": 16, "recovered": 167 } },
   .... 
*/
export const API_WORLDWIDE_COUNTRY_TOTALS =
  'https://covidapi.info/api/v1/global/latest';

export const OPEN_PUGLIA_API = 'openpuglia.org';
export const COVID_19_API = 'covid19api.com';

export const STATUS = {
  CONFIRMED: 'CONFIRMED',
  RECOVERED: 'RECOVERED',
  DEATHS: 'DEATHS',
  ACTIVES: 'ACTIVES',
  INTENSIVE_THERAPY: 'INTENSIVE_THERAPY',
  TOTAL_HOSPITALIZED: 'TOTAL_HOSPITALIZED',
  TOTAL_POSITIVE: 'TOTAL_POSITIVE',
  TAMPONI: 'TAMPONI',
  TOTAL_CASES: 'TOTAL_CASES',
  DECEASED: 'DECEASED',
  NEW_DAILY_POSITIVE: 'NEW_DAILY_POSITIVE',
  DAILY_DECEASED: 'DAILY_DECEASED',
  DAILY_SWABS: 'DAILY_SWABS',
};

export const SECTIONS = {
  WORLDWIDE: 'worldwide',
  ITALY: 'italy',
  EUROPE: 'europe',
};
