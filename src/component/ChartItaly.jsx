import React from 'react';
import { Box } from '@material-ui/core';

const ChartItaly = ({ confirmed, recovered, deaths }) => {
  return (
    <Box
      data-id="data-summary"
      display="flex"
      justifyContent="center"
      m={1}
      p={1}
      bgcolor="background.paper"
    >
      Confirmed: {confirmed}
      <br />
      Recovered: {recovered}
      <br />
      Deaths: {deaths}
    </Box>
  );
};

ChartItaly.defaultProps = {
  data: {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  },
};

export default ChartItaly;
