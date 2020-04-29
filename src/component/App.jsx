/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
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
  const handleClick = (location) => {
    if (location) setActiveSection(location);
  };
  return (
    <div>
      <Header onClick={handleClick} />
      {activeSection === SECTIONS.ITALY && <ItalyContainer />}
      {activeSection === SECTIONS.WORLDWIDE && <div>WORLDWIDE</div>}
      {activeSection === SECTIONS.COUNTRY_LIST && <div>COUNTRY_LIST</div>}
      {activeSection === SECTIONS.EUROPE && <div>EUROPE</div>}
    </div>
  );
};

export default App;
