import React from 'react';
import moment from 'moment';
import { Link, Typography } from '@material-ui/core';

// const LastUpdate = ({ date, href }) => {
const LastUpdate = ({ date, href }) => (
  <Typography style={{ fontStyle: 'italic' }}>
    Data provided by <Link href={href}>{href}</Link>, last update available:{' '}
    {moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY')}
  </Typography>
);

export default LastUpdate;
