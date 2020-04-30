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

const useStyles = makeStyles({
  trHeader: {
    backgroundColor: grey[200],
  },
});

const TableCell = withStyles({
  root: {
    border: '1px solid lightgrey',
    textTransform: 'uppercase',
  },
})(MuiTableCell);

const Summary = ({ data, dataTestId, error = false }) => {
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
                  <TableCell align="center">
                    {t(el.key.replace('-', ' '))}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="td-status">
              {data &&
                data.length > 0 &&
                data.map((el) => (
                  <TableCell
                    align="center"
                    data-test-id={'summary-'.concat(el.key)}
                  >
                    {getLocalizedValue(el.value)}
                  </TableCell>
                ))}
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
