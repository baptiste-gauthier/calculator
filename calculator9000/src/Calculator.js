// import logo from './logo.svg';
import './App.css';
import React from 'react';
import AmazingNumberButton from './Component/AmazingNumberButton';
import BeautifullScreen from './Component/BeautifullScreen';
import GreatOperationButton from './Component/GreatOperationButton';
import TheTitle from './Component/TheTitle';
import ItSOverNineThousand from './Component/ItSOverNineThousand';

function Calculator() {
  return(
  <React.StrictMode>
    <TheTitle />
    <BeautifullScreen />
    {/* <AmazingNumberButton /> */}
  </React.StrictMode> 
  )

}

export default Calculator

