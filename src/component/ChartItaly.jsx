import React from 'react';
import { Box } from '@material-ui/core';
import ChartItalyDetail from './ChartItalyDetail';

const ChartItaly = (props) => {
  const { data, error } = props;
  return (
    <>
      <Box
        data-id="data-summary"
        // display="flex"
        // justifyContent="center"
        // flexDirection={"column"}
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        {data &&
          data.length > 0 &&
          data.map((entry) => (
            <p id={entry.Data}>
              date: {entry.Date}, confirmed: {entry.Confirmed}, recovered:{' '}
              {entry.Recovered}, deaths: {entry.Deaths}
            </p>
          ))}

        {data && data.length > 0 && <ChartItalyDetail />}

        {error && <span>Data not available</span>}
      </Box>
    </>
  );
};

ChartItaly.defaultProps = {
  data: {},
  error: false,
};

export default ChartItaly;
