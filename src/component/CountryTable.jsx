import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, Typography, Box } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import Error from './Error';
import DataProvided from './DataProvided';
import Loading from './Loading';
import { getLocalizedValue } from '../utils/shared';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
  trHeader: {
    backgroundColor: grey[200],
  },
  th: {
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      padding: 3,
    },
    padding: 8,
    textAlign: 'center',
  },
  td: {
    [theme.breakpoints.down('sm')]: {
      padding: 3,
    },
    textAlign: 'center',
    padding: 8,
  },
}));

const TableCell = withStyles({
  root: {
    border: '1px solid grey',
    textTransform: 'uppercase',
    '&:last-child': { paddingRight: '8px' },
  },
})(MuiTableCell);

const CountryTable = ({ data, loading = true, dataTestId, href }) => {
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
          <TableCell className={classes.td} data-test-id={`td-${country}`}>
            <Typography
              component="span"
              data-test-id={`td-flag-${country}`}
              style={{ marginRight: '5px' }}
            >
              <Flag code={country} height={16} />
            </Typography>
            {country}
          </TableCell>
          <TableCell
            className={classes.td}
            data-test-id={`td-${country}-confirmed`}
          >
            {getLocalizedValue(values.confirmed)}
          </TableCell>
          <TableCell
            className={classes.td}
            data-test-id={`td-${country}-recovered`}
          >
            {getLocalizedValue(values.recovered)}
          </TableCell>
          <TableCell
            className={classes.td}
            data-test-id={`td-${country}-deaths`}
          >
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
              <TableCell className={classes.th}>
                {t('worldwide.country')}
              </TableCell>
              <TableCell className={classes.th}>{t('confirmed')}</TableCell>
              <TableCell className={classes.th}>{t('recovered')}</TableCell>
              <TableCell className={classes.th}>{t('deaths')}</TableCell>
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
      {href && <DataProvided href={href} />}
    </>
  );
};
export default CountryTable;
