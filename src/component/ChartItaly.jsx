import React from 'react';
import { Box } from '@material-ui/core';

const ChartItaly = ({ data }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      m={1}
      p={1}
      bgcolor="background.paper"
    >
      {data.confirmed}
      <br />
      {data.recovered}
      <br />
      {data.deaths}
    </Box>
  );
};

export default ChartItaly;
