import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { Button, ButtonGroup } from '@material-ui/core';
import ItalyContainer from './ItalyContainer';
import Header from './Header';

export const SECTIONS = {
  WORLDWIDE: 'WORLDWIDE',
  ITALY: 'ITALY',
  COUNTRY_LIST: 'COUNTRY_LIST',
  EUROPE: 'EUROPE',
};

const App = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => i18n.changeLanguage('it')}>
          <Flag code="IT" height={16} />
        </Button>
        <Button onClick={() => i18n.changeLanguage('en')}>
          <Flag code="GBR" height={16} />
        </Button>
      </ButtonGroup>
      <Header />
      {activeSection === SECTIONS.ITALY && <ItalyContainer />}
    </div>
  );
};

export default App;
