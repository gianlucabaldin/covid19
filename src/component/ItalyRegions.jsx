import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Hidden, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { useTranslation } from 'react-i18next';
import Error from './Error';
import { OPEN_PUGLIA_API } from '../utils/consts';
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
  td: { padding: 8 },
});

const TableCell = withStyles({
  root: {
    border: '1px solid grey',
    textTransform: 'uppercase',
  },
})(MuiTableCell);

const ItalyRegions = ({ data, loading = true }) => {
  const classes = useStyles();
  const { t } = useTranslation();

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

  if (!data || data.length === 0) return <Error />;

  // sort alphabetically by region
  const getdata = () => {
    if (data && data.length > 0) {
      return data.sort((a, b) => (a.regione > b.regione ? 1 : -1));
    }
    return [];
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          data-test-id="italy-container-regions"
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow key="header" className={classes.trHeader}>
              <TableCell align="center" className={classes.th}>
                {t('italyregions.region')}
              </TableCell>
              <Hidden lgDown>
                <TableCell align="center" className={classes.th}>
                  {t('italyregions.hospidalized-symptoms')}
                </TableCell>
              </Hidden>
              <TableCell align="center" className={classes.th}>
                {t('italyregions.intensive-care')}
              </TableCell>
              <Hidden lgDown>
                <TableCell align="center" className={classes.th}>
                  {t('italyregions.total-hospidalized')}
                </TableCell>
              </Hidden>
              <Hidden mdDown>
                <TableCell align="center" className={classes.th}>
                  {t('italyregions.home-isolation')}
                </TableCell>
              </Hidden>
              <TableCell align="center" className={classes.th}>
                {t('italyregions.total-positives')}
              </TableCell>
              <Hidden lgDown>
                <TableCell align="center" className={classes.th}>
                  {t('italyregions.positive-variations')}
                </TableCell>
              </Hidden>
              <Hidden lgDown>
                <TableCell align="center" className={classes.th}>
                  {t('italyregions.new-positive')}
                </TableCell>
              </Hidden>
              <Hidden lgDown>
                <TableCell align="center" className={classes.th}>
                  {t('italyregions.discarged-healed')}
                </TableCell>
              </Hidden>
              <TableCell align="center" className={classes.th}>
                {t('deaths')}
              </TableCell>
              <TableCell align="center" className={classes.th}>
                {t('total_cases')}
              </TableCell>
              <Hidden mdDown>
                <TableCell align="center" className={classes.th}>
                  {t('tamponi')}
                </TableCell>
              </Hidden>
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
            <TableBody>
              {getdata().map((row) => (
                <TableRow
                  key={row.regione}
                  hover
                  data-test-id={`row-${row.regione}`}
                >
                  <TableCell align="center">{row.regione}</TableCell>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {getLocalizedValue(row['ricoverati con sintomi'])}
                    </TableCell>
                  </Hidden>
                  <TableCell align="center">
                    {getLocalizedValue(row['terapia intensiva'])}
                  </TableCell>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {getLocalizedValue(row['totale ospedalizzati'])}
                    </TableCell>
                  </Hidden>
                  <Hidden mdDown>
                    <TableCell align="center">
                      {getLocalizedValue(row['isolamento domiciliare'])}
                    </TableCell>
                  </Hidden>
                  <TableCell align="center">
                    {getLocalizedValue(row['totale positivi'])}
                  </TableCell>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {getLocalizedValue(row['variazione totale positivi'])}
                    </TableCell>
                  </Hidden>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {getLocalizedValue(row['nuovi positivi'])}
                    </TableCell>
                  </Hidden>
                  <Hidden lgDown>
                    <TableCell align="center">
                      {getLocalizedValue(row['dimessi guariti'])}
                    </TableCell>
                  </Hidden>
                  <TableCell align="center">
                    {getLocalizedValue(row.deceduti)}
                  </TableCell>
                  <TableCell align="center">
                    {getLocalizedValue(row['totale casi'])}
                  </TableCell>
                  <Hidden mdDown>
                    <TableCell align="center">
                      {getLocalizedValue(row.tamponi)}
                    </TableCell>
                  </Hidden>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>

      {data && data.length > 0 && (
        <DataProvided date={data[0].data} href={OPEN_PUGLIA_API} />
      )}
    </>
  );
};
export default ItalyRegions;
