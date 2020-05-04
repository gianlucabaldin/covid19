import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { useTranslation } from 'react-i18next';
import Error from './Error';
import { getLocalizedValue } from '../utils/shared';
import Loading from './Loading';

const useStyles = makeStyles((theme) => ({
  trHeader: {
    backgroundColor: grey[200],
  },
  th: {
    [theme.breakpoints.down('sm')]: {
      padding: 4,
      '&:last-child': { paddingRight: 4 },
    },
  },
  td: {
    [theme.breakpoints.down('sm')]: {
      padding: 4,
      '&:last-child': { paddingRight: 4 },
    },
  },
}));

const TableCell = withStyles({
  root: {
    border: '1px solid lightgrey',
    textTransform: 'uppercase',
  },
})(MuiTableCell);

const Summary = ({ data, dataTestId, loading = true, error = false }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  if (error) return <Error />;

  return (
    <Grid item>
      <TableContainer component={Paper}>
        <Table
          data-test-id={`${dataTestId}-container-summary`}
          className={classes.table}
          size="small"
          aria-label="a dense table"
          style={{
            marginTop: '8',
            marginBottom: '8',
          }}
        >
          <TableHead>
            <TableRow key="tr-status" className={classes.trHeader}>
              {data &&
                data.length > 0 &&
                data.map((el) => (
                  <TableCell align="center" className={classes.th} key={el.key}>
                    {t('summary.'.concat(el.key))}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="td-value">
              {loading ? (
                <Loading />
              ) : (
                data &&
                data.length > 0 &&
                data.map((el) => (
                  <TableCell
                    align="center"
                    className={classes.td}
                    data-test-id={'summary-'.concat(el.key)}
                    key={el.key}
                  >
                    {getLocalizedValue(el.value)}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

// Summary.defaultProps = {
//   data: {
//     totalCases: 0,
//     deceased: 0,
//     tamponi: 0,
//     error: false,
//   },
// };

export default Summary;
