import React, { useState } from 'react';
import ItalyContainer from './ItalyContainer';
import Header from './Header';
import Languages from './Languages';

export const SECTIONS = {
  WORLDWIDE: 'WORLDWIDE',
  ITALY: 'ITALY',
  COUNTRY_LIST: 'COUNTRY_LIST',
  EUROPE: 'EUROPE',
};

const App = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS.ITALY);
  return (
    <div>
      <Languages />
      <Header />
      {activeSection === SECTIONS.ITALY && <ItalyContainer />}
    </div>
  );
};

export default App;
