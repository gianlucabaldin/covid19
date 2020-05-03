import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const DataProvided = ({ href }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography
        variant="subtitle2"
        display="inline"
        style={{ fontStyle: 'italic', marginRight: 4 }}
        data-test-id="data-provided"
      >
        {t('dataprovided.data-provided-by')}
      </Typography>
      <Typography
        variant="subtitle2"
        display="inline"
        style={{ fontStyle: 'italic' }}
        href={href}
      >
        {href}
      </Typography>
    </>
  );
};

export default DataProvided;
