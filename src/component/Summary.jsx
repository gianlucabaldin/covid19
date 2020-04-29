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

const Summary = ({
  totalCases,
  deceased,
  tamponi,
  lastUpdate,
  dataTestId,
  error = false,
}) => {
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
              <TableCell align="center">{t('summary.total-swabs')}</TableCell>
              <TableCell align="center">{t('summary.total-cases')}</TableCell>
              <TableCell align="center">
                {t('summary.total-deceased')}
              </TableCell>
              <TableCell align="center">{t('summary.last-update')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="td-status">
              <TableCell align="center" id="summary-swabs">
                {tamponi}
              </TableCell>
              <TableCell align="center" id="summary-totalCases">
                {totalCases}
              </TableCell>
              <TableCell align="center" id="summary-deceased">
                {deceased}
              </TableCell>
              <TableCell align="center" id="summary-lastupdate">
                {lastUpdate}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

Summary.defaultProps = {
  data: {
    totalCases: 0,
    deceased: 0,
    tamponi: 0,
    error: false,
  },
};

export default Summary;
