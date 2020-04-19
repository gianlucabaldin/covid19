import React from 'react';
import { Box } from '@material-ui/core';
import ItalyChart from './ItalyChart';

const ItalyContainer = (props) => {
  const { data, error, width } = props;

  return (
    <>
      <Box
        // data-id="data-summary"
        // display="flex"
        // justifyContent="center"
        // flexDirection={"column"}
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        {data && data.length > 0 && <ItalyChart data={data} width={width} />}

        {error && <span>Data not available</span>}
      </Box>
    </>
  );
};

ItalyContainer.defaultProps = {
  data: {},
  error: false,
};

export default ItalyContainer;
