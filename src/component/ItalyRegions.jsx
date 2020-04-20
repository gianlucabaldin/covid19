import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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

  if (!tableData || tableData.length === 0)
    return <div>Ops! An error occured.</div>;

  return (
    <Box ml={1} mr={1} height={500} width={width || 800}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow key="header">
              <TableCell align="center">Region</TableCell>
              <TableCell align="center">hospitalized with symptoms</TableCell>
              <TableCell align="center">intensive care</TableCell>
              <TableCell align="center">total hospitalized</TableCell>
              <TableCell align="center">home isolation</TableCell>
              <TableCell align="center">total positives</TableCell>
              <TableCell align="center">positives variation</TableCell>
              <TableCell align="center">new positives</TableCell>
              <TableCell align="center">discharged healed</TableCell>
              <TableCell align="center">deaths</TableCell>
              <TableCell align="center">discharged healed</TableCell>
              <TableCell align="center">swabs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData &&
              tableData.length > 0 &&
              tableData.map((row) => (
                <TableRow key={row.regione}>
                  <TableCell align="center">{row.regione}</TableCell>
                  <TableCell align="center">
                    {row['ricoverati con sintomi']}
                  </TableCell>
                  <TableCell align="center">
                    {row['terapia intensiva']}
                  </TableCell>
                  <TableCell align="center">
                    {row['totale ospedalizzati']}
                  </TableCell>
                  <TableCell align="center">
                    {row['isolamento domiciliare']}
                  </TableCell>
                  <TableCell align="center">{row['totale positivi']}</TableCell>
                  <TableCell align="center">
                    {row['variazione totale positivi']}
                  </TableCell>
                  <TableCell align="center">{row['nuovi positivi']}</TableCell>
                  <TableCell align="center">{row['dimessi guariti']}</TableCell>
                  <TableCell align="center">{row.deceduti}</TableCell>
                  <TableCell align="center">{row['totale casi']}</TableCell>
                  <TableCell align="center">{row.tamponi}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ItalyRegions;
