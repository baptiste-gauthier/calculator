import GreatOperationButton from './GreatOperationButton';
import React, { useState } from 'react';
import BeautifullScreen from './BeautifullScreen';


function AmazingNumberButton(props)
{
  return (
    <div className="touches">
      <div className="number">
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {props.function(props.value + 9)}}>9</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 8)}}>8</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 7)}}>7</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {props.function(props.value + 6)}}>6</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 5)}}>5</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 4)}}>4</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {props.function(props.value + 3)}}>3</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 2)}}>2</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 1)}}>1</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator_0" onClick={() => {props.function(props.value + 0)}}>0</button>
        </div>
      </div>
      <div className="operator">
        <GreatOperationButton />
      </div>
    </div>
  )
}

export default AmazingNumberButton;