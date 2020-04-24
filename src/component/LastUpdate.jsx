import React from 'react';
import { Link, Typography } from '@material-ui/core';

const LastUpdate = ({ date, href }) => (
  <Typography style={{ fontStyle: 'italic', marginRight: 50 }}>
    Data provided by <Link href={href}>{href}</Link>, last update available:{' '}
    {date}
  </Typography>
);

export default LastUpdate;
