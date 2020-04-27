import React, { useState } from 'react';
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
  return (
    <div>
      <Header />
      {activeSection === SECTIONS.ITALY && <ItalyContainer />}
    </div>
  );
};

export default App;
