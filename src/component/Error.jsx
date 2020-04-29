import React from 'react';
import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();
  return <div>{t('error.error')}.</div>;
};

export default Error;
