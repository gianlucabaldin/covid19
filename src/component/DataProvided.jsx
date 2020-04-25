import React from 'react';
import { Link, Typography } from '@material-ui/core';

const DataProvided = ({ href }) => (
  <Typography style={{ fontStyle: 'italic', marginRight: 50 }}>
    Data provided by <Link href={href}>{href}</Link>
  </Typography>
);

export default DataProvided;
