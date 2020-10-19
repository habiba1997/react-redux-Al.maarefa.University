import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Tabs from './components/tabs';


function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
 
  return (
    <React.Fragment>
      <Navbar onTranslation={handleClick} t={t} />
      <Tabs t={t}/>
    </React.Fragment>
  );
}

export default App;
