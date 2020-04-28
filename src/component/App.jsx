import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import ItalyContainer from './ItalyContainer';

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
      <div>
        <button onClick={() => i18n.changeLanguage('it')}>it</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </div>
      <Header />
      {activeSection === SECTIONS.ITALY && <ItalyContainer />}
    </div>
  );
};

export default App;
