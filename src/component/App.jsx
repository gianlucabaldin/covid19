/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import ItalyContainer from './ItalyContainer';
import Header from './Header';
import WorldwideContainer from './WorldwideContainer';
import { SECTIONS } from '../utils/consts';

// where is store MOCK_API for development purpose
require('dotenv').config();

const App = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);
  const handleClick = (location) => {
    if (location) setActiveSection(location);
  };
  return (
    <div>
      <Header onClick={handleClick} />
      {activeSection === SECTIONS.ITALY && <ItalyContainer />}
      {activeSection === SECTIONS.WORLDWIDE && <WorldwideContainer />}
      {activeSection === SECTIONS.COUNTRY_LIST && <div>COUNTRY_LIST</div>}
      {activeSection === SECTIONS.EUROPE && <div>EUROPE</div>}
    </div>
  );
};

export default App;
