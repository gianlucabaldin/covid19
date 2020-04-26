import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Hidden, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Error from './Error';
import { OPEN_PUGLIA_API } from '../utils/consts';
import DataProvided from './DataProvided';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  trHeader: {
    backgroundColor: grey[200],
  },
  th: { fontWeight: 700, padding: 0 },
});

const TableCell = withStyles({
  root: {
    border: '1px solid grey',
  },
})(MuiTableCell);

const ItalyRegions = ({ tableData, width }) => {
  const classes = useStyles();

  /** Legend: 
    1- 'ricoverati con sintomi'       hospitalized with symptoms
    2- 'terapia intensiva'            intensive care
    3- 'totale ospedalizzati'         total hospitalized          --> 1 + 2
    4- 'isolamento domiciliare'       home isolation
    5- 'totale positivi'              total positives             --> 3 + 4 
    6- 'variazione totale positivi'   positives variation
    7- 'nuovi positivi'               new positives
    8- 'dimessi guariti'              discharged healed
    9- deceduti                       deaths
    10- 'totale casi'                 discharged healed           --> 5 + 8 + 9
    11- tamponi                       swabs
  */

  if (!tableData || tableData.length === 0) return <Error />;

  // sort alphabetically by region
  tableData.sort((a, b) => (a.regione > b.regione ? 1 : -1));

  return (
    <>
      {/* <Box
       maxHeight={350}
       // width={width || 800}
       style={{ overflowY: 'scroll', paddingBottom: 10 }}
       data-id="italy-regions-box"
     > */}
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow key="header" className={classes.trHeader}>
              <TableCell align="center">Region</TableCell>
              <Hidden lgDown>
                <TableCell align="center">Hospitalized With Symptoms</TableCell>
              </Hidden>
              <TableCell align="center">Intensive Care</TableCell>
              <Hidden lgDown>
                <TableCell align="center">Total Hospitalized</TableCell>
              </Hidden>
              <Hidden mdDown>
                <TableCell align="center">Home Isolation</TableCell>
              </Hidden>
              <TableCell align="center">Total Positives</TableCell>
              <Hidden lgDown>
                <TableCell align="center">Positives Variation</TableCell>
              </Hidden>
              <Hidden lgDown>
                <TableCell align="center">New Positives</TableCell>
              </Hidden>
              <Hidden lgDown>
                <TableCell align="center">Discharged Healed</TableCell>
              </Hidden>
              <TableCell align="center">Deaths</TableCell>
              <TableCell align="center">Total Cases</TableCell>
              <Hidden mdDown>
                <TableCell align="center">Swabs</TableCell>
              </Hidden>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData &&
              tableData.length > 0 &&
              tableData.map((row) => (
                <TableRow key={row.regione} hover>
                  <TableCell align="center">{row.regione}</TableCell>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {row['ricoverati con sintomi']}
                    </TableCell>
                  </Hidden>
                  <TableCell align="center">
                    {row['terapia intensiva']}
                  </TableCell>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {row['totale ospedalizzati']}
                    </TableCell>
                  </Hidden>
                  <Hidden mdDown>
                    <TableCell align="center">
                      {row['isolamento domiciliare']}
                    </TableCell>
                  </Hidden>
                  <TableCell align="center">{row['totale positivi']}</TableCell>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {row['variazione totale positivi']}
                    </TableCell>
                  </Hidden>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {row['nuovi positivi']}
                    </TableCell>
                  </Hidden>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {row['dimessi guariti']}
                    </TableCell>
                  </Hidden>
                  <TableCell align="center">{row.deceduti}</TableCell>
                  <TableCell align="center">{row['totale casi']}</TableCell>
                  <Hidden mdDown>
                    <TableCell align="center">{row.tamponi}</TableCell>
                  </Hidden>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DataProvided date={tableData[0].data} href={OPEN_PUGLIA_API} />
      {/* </Box> */}
    </>
  );
};
export default ItalyRegions;
