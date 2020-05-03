import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import Error from './Error';
import { API_COVID_API_INFO_SHORT_URL } from '../utils/consts';
import DataProvided from './DataProvided';
import Loading from './Loading';
import { getLocalizedValue } from '../utils/shared';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  trHeader: {
    backgroundColor: grey[200],
  },
  th: { fontWeight: 700, padding: 8 },
});

const TableCell = withStyles({
  root: {
    border: '1px solid grey',
    textTransform: 'uppercase',
    '&:last-child': { paddingRight: '8px' },
  },
})(MuiTableCell);

const CountryTable = ({ data, loading = true, dataTestId }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { result } = data;

  if (!result || (result && result.length && result.length === 0))
    return <Error />;

  // sort alphabetically by country
  const getdata = () => {
    if (result && result.length > 0) {
      return result.sort((a, b) =>
        Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1,
      );
    }
    return [];
  };

  const getTableBody = () => {
    return getdata().map((row) => {
      const country = Object.keys(row)[0];
      const values = Object.values(row)[0];
      return (
        <TableRow key={row.regione} hover data-test-id={`row-${country}`}>
          <TableCell align="center" data-test-id={`td-flag-${country}`}>
            <Flag code={country} height={16} />
          </TableCell>
          <TableCell align="center" data-test-id={`td-${country}`}>
            {country}
          </TableCell>
          <TableCell align="center" data-test-id={`td-${country}-confirmed`}>
            {getLocalizedValue(values.confirmed)}
          </TableCell>
          <TableCell align="center" data-test-id={`td-${country}-recovered`}>
            {getLocalizedValue(values.recovered)}
          </TableCell>
          <TableCell align="center" data-test-id={`td-${country}-deaths`}>
            {getLocalizedValue(values.deaths)}
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <TableContainer>
        <Table
          data-test-id={`${dataTestId}-country-table`}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow key="header" className={classes.trHeader}>
              <TableCell align="center" className={classes.th}>
                {' '}
              </TableCell>
              <TableCell align="center" className={classes.th}>
                {t('worldwide.country')}
              </TableCell>
              <TableCell align="center" className={classes.th}>
                {t('confirmed')}
              </TableCell>
              <TableCell align="center" className={classes.th}>
                {t('recovered')}
              </TableCell>
              <TableCell align="center" className={classes.th}>
                {t('deaths')}
              </TableCell>
            </TableRow>
          </TableHead>
          {loading ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: 'center' }}>
                  <Loading loading={loading} />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>{getTableBody()}</TableBody>
          )}
        </Table>
      </TableContainer>
      {data && data.date && (
        <DataProvided date={data.date} href={API_COVID_API_INFO_SHORT_URL} />
      )}
    </>
  );
};
export default CountryTable;
