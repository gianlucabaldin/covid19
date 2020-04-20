import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    maxWidth: 750,
  },
  trHeader: {
    backgroundColor: grey[200],
  },
});

const TableCell = withStyles({
  root: {
    border: '1px solid grey',
  },
})(MuiTableCell);

const Summary = ({ confirmed, recovered, deaths, error }) => {
  const classes = useStyles();

  return (
    <Box m={1} className="summary" margin="auto">
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow key="tr-status" className={classes.trHeader}>
              <TableCell align="center">Confirmed</TableCell>
              <TableCell align="center">Recovered</TableCell>
              <TableCell align="center">Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="td-status">
              <TableCell align="center" id="summary-confirmed">
                {error ? '' : confirmed}
              </TableCell>
              <TableCell align="center" id="summary-recovered">
                {error ? '' : recovered}
              </TableCell>
              <TableCell align="center" id="summary-deaths">
                {error ? '' : deaths}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

Summary.defaultProps = {
  data: {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    error: false,
  },
};

export default Summary;
