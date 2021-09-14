import GreatOperationButton from './GreatOperationButton';
import React, { useState } from 'react';
import BeautifullScreen from './BeautifullScreen';


function AmazingNumberButton(props)
{
  return (
    <div className="touches">
      <div className="number">
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {alert("ya")}}>9</button>
          <button className="case_calculator" onClick={() => {alert("ya")}}>8</button>
          <button className="case_calculator" onClick={() => {alert("ya")}}>7</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {alert("ya")}}>6</button>
          <button className="case_calculator" onClick={() => {alert("ya")}}>5</button>
          <button className="case_calculator" onClick={() => {alert("ya")}}>4</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {alert("ya")}}>3</button>
          <button className="case_calculator" onClick={() => {alert("ya")}}>2</button>
          <button className="case_calculator" onClick={() => {alert("ya")}}>1</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator_0" onClick={() => {alert("ya")}}>0</button>
        </div>
      </div>
      <div className="operator">
        <GreatOperationButton />
      </div>
    </div>
  )
}

export default AmazingNumberButton;