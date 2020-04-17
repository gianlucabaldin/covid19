import React from 'react';
import { Box } from '@material-ui/core';

const ChartItaly = (props) => {
  const { data, error } = props;
  return (
    <>
      <Box
        data-id="data-summary"
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        prova
      </Box>
      {data &&
        data.length > 0 &&
        data.map((entry) => (
          <p>
            date: {entry.Date}, confirmed: {entry.Confirmed}, recovered:{' '}
            {entry.Recovered}, deaths: {entry.deaths}
          </p>
        ))}
    </>
  );
};

ChartItaly.defaultProps = {
  data: {},
  error: false,
};

export default ChartItaly;
