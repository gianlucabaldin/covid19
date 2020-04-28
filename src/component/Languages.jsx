import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

const Languages = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1>{t('switch languages')}</h1>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => i18n.changeLanguage('it')}>
          <Flag
            code="IT"
            height={16}
            data-test-id="language-ita"
            onClick={() => i18n.changeLanguage('it')}
          />
        </Button>
        <Button
          onClick={() => i18n.changeLanguage('en')}
          data-test-id="language-eng"
        >
          <Flag code="GBR" height={16} />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Languages;
