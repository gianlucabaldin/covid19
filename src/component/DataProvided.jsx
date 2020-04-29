import React from 'react';
import { Link, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const DataProvided = ({ href }) => {
  const { t } = useTranslation();
  return (
    <Typography style={{ fontStyle: 'italic', marginRight: 50 }}>
      {t('dataprovided.data-provided-by')} <Link href={href}>{href}</Link>
    </Typography>
  );
};

export default DataProvided;
