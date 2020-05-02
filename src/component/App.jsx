/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import dotenv from 'dotenv';
dotenv.config();
import ItalyContainer from './ItalyContainer';
import Header from './Header';
import WorldwideContainer from './WorldwideContainer';
import { SECTIONS } from '../utils/consts';
import EuropeContainer from './EuropeContainer';

// where is store MOCK_API for development purpose

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
      {activeSection === SECTIONS.EUROPE && <EuropeContainer />}
    </div>
  );
};

export default App;
